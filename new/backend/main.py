from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import json
import os
from dotenv import load_dotenv
from openai import OpenAI
import re

# Load environment variables
load_dotenv()

# Initialize OpenAI client
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

# FastAPI instance
app = FastAPI()

# Enable CORS for frontend interaction
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Set to ["http://localhost:3000"] in prod
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Track sessions for basic chat limits (resets on app restart)
user_chat_count = {}

# Load profile context
with open("data/profile.json") as f:
    profile_data = json.load(f)

class Query(BaseModel):
    message: str

@app.post("/api/chat")
async def chat(query: Query, request: Request):
    user_ip = request.client.host
    user_q = query.message.strip()

    # 1. Enforce message limit (5 per IP)
    user_chat_count[user_ip] = user_chat_count.get(user_ip, 0) + 1
    if user_chat_count[user_ip] > 5:
        raise HTTPException(status_code=429, detail="Chat limit reached for this session.")

    # 2. Guardrails for questions (check for off-topic)
    disallowed_keywords = [
        r"\bpython\b", r"\bjavascript\b", r"\bhow to\b", r"\bcode\b", r"\berror\b", r"\bdebug\b",
        r"\bfix\b", r"\bbug\b", r"\bprogram\b", r"\balgorithm\b", r"\bsort\b", r"\btime complexity\b"
    ]

    for pattern in disallowed_keywords:
        if re.search(pattern, user_q, re.IGNORECASE):
            return {
                "response": "❌ I'm here to answer questions about Sathvik’s skills, experience, and portfolio — not general coding or technical queries!"
            }

    # 3. Assemble RAG-style context
    context = profile_data.get("experience", "") + "\n"
    for proj in profile_data.get("projects", []):
        context += f"{proj['title']}: {proj['description']}\n"

    prompt = (
    "You are a professional assistant named **SathvikBot**, designed to represent Sathvik Vadavatha to potential recruiters, collaborators, and hiring managers.\n\n"
    "Your goal is to clearly, confidently, and concisely communicate Sathvik's strengths as a Data Analyst, Data Engineer, or AI Developer.\n\n"
    "Respond only to questions about Sathvik’s:\n"
    "- Technical skills, tools, and frameworks\n"
    "- Hands-on academic and personal projects\n"
    "- Work experiences and contributions\n"
    "- Domain knowledge (e.g., data engineering, ML, visualization)\n"
    "- Portfolio highlights (from the profile context below)\n\n"
    "Do **not** answer general programming or unrelated questions (e.g., 'How do I fix a Python error?'). If asked, politely decline and refocus the user on Sathvik’s portfolio.\n\n"
    "Always speak in third person — you are not Sathvik himself.\n\n"
    "Use a helpful, professional tone. When relevant, mention the technologies Sathvik used (e.g., Python, FastAPI, Airflow, Tableau, RAG, LLMs) and the business or educational impact.\n\n"
    "Here is the profile context for RAG:\n"
    f"{context}\n\n"
    f"User question: {user_q}"
)


    # 4. Call OpenAI
    try:
        response = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[{"role": "user", "content": prompt}],
            temperature=0.6,
        )
        return {"response": response.choices[0].message.content.strip()}

    except Exception as e:
        print("❌ OpenAI API call failed:", str(e))
        return {
            "response": "⚠️ Sorry! I couldn’t fetch a response right now. Please try again later — the API might be down or out of credits."
        }
