export interface Project {
    id: number;
    title: string;
    slug: string;
    description: string;
    longDescription?: string;
    challenges?: string[];
    solutions?: string[];
    techStackDetailed?: {
        category: string;
        technologies: string[];
    }[];
    image: string;
    category: "information-systems" | "mechanical";
    tags: string[];
    demoUrl?: string;
    githubUrl?: string;
    featured?: boolean;
}

export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    content: string;
    tags: string[];
}

export const projects: Project[] = [
    {
        id: 1,
        title: "NutriGuard AI",
        slug: "nutriguard-ai",
        description:
            "Built an AI-powered nutrition assistant using Azure OCR and GPT-4 to extract ingredients, flag harmful additives, and summarize health risks.",
        longDescription:
            "NutriGuard AI is a comprehensive nutrition assistant designed to help users make informed food choices. By leveraging Azure OCR for instant ingredient list scanning and GPT-4 for intelligent analysis, it provides detailed breakdowns of potential health risks, macro estimations, and personalized dietary advice. The system also features a RAG-based Q&A system for exploring nutritional science.",
        challenges: [
            "Extracting accurate text from curved or poor-quality packaging images.",
            "Mapping unstructured ingredient names to a standardized database for risk analysis.",
            "Providing real-time responses while handling heavy ML workloads.",
        ],
        solutions: [
            "Utilized Azure AI Vision for robust OCR capabilities.",
            "Implemented a vector database (Pinecone) to semantically match ingredients to known health risks.",
            "Optimized the FastAPI backend for asynchronous processing to handle concurrent requests efficiently.",
        ],
        techStackDetailed: [
            { category: "Frontend", technologies: ["React Native", "Expo"] },
            { category: "Backend", technologies: ["FastAPI", "Python", "AWS EC2"] },
            { category: "AI & Data", technologies: ["Azure OCR", "GPT-4", "Pinecone"] },
        ],
        image: "/img/projects/nutriguard_ai.PNG",
        category: "information-systems",
        tags: ["OCR", "FastAPI", "RAG", "GPT-4", "Azure", "Pinecone", "AWS"],
        githubUrl: "https://github.com/SathvikKV/NutriGuardAI",
        featured: true,
    },
    {
        id: 12,
        title: "Realtime Copilot",
        slug: "realtime-copilot",
        description:
            "A local, privacy-first AI assistant that observes your live screen, understands visual & audio context, and allows real-time querying.",
        longDescription:
            "Realtime Copilot is an intelligent desktop companion that 'watches' and 'listens' to your activity to provide context-aware assistance. Unlike cloud-heavy alternatives, it emphasizes local processing and privacy. It joins a LiveKit room to stream screen and audio data, processing it through a modular node-based worker that performs OCR, vision analysis, and contextual reasoning.",
        challenges: [
            "Streaming low-latency video and audio from the client to the AI worker.",
            "Processing continuous visual frames without overwhelming the LLM or network bandwidth.",
            "Synchronizing audio transcripts with visual context for accurate reasoning.",
        ],
        solutions: [
            "Integrated LiveKit for robust, real-time WebRTC streaming.",
            "Implemented adaptive snapshotting to capture frames only when significant changes are detected.",
            "Created a rolling context window that intelligently merges OCR, vision, and audio transcripts.",
        ],
        techStackDetailed: [
            { category: "Frontend", technologies: ["Next.js 14", "TypeScript", "Tailwind CSS"] },
            { category: "Backend", technologies: ["Node.js", "Express", "LiveKit"] },
            { category: "AI & ML", technologies: ["OpenAI GPT-4", "Whisper", "ElevenLabs"] },
        ],
        image: "/img/projects/realtime.PNG",
        category: "information-systems",
        tags: [
            "Next.js 14",
            "LiveKit",
            "OpenAI",
            "Express",
            "Node.js",
            "TypeScript",
        ],
        githubUrl: "https://github.com/SathvikKV/realtime-copilot",
        featured: true,
    },
    {
        id: 11,
        title: "Music Sampler & Discovery App",
        slug: "music-sampler",
        description:
            "A modern AI-powered music discovery app blending a TikTok-style feed with deep LLM analysis and Spotify integration.",
        longDescription:
            "Music Sampler reimagines music discovery by combining the addictive vertical scrolling of social media with deep musical analysis. It doesn't just play music; it explains *why* you might like it, offering sonic breakdowns, lyrical context, and vibe analysis driven by GPT-4o. Users can instantly add tracks to their Spotify playlists, bridging the gap between discovery and collection.",
        challenges: [
            "Creating a smooth, lag-free vertical feed with heavy media assets.",
            "Integrating seamlessly with Spotify's API for playback and playlist management.",
            "Generating meaningful AI insights for thousands of tracks in real-time.",
        ],
        solutions: [
            "Implemented aggressive pre-fetching and caching strategies using TanStack Query.",
            "Built a robust microservices-lite backend with FastAPI to handle heavy lifting.",
            "Designed a custom specialized prompt for GPT-4o to consistently extract musical 'vibes'.",
        ],
        techStackDetailed: [
            { category: "Frontend", technologies: ["Next.js 15", "Radix UI", "Framer Motion"] },
            { category: "Backend", technologies: ["FastAPI", "PostgreSQL", "Redis"] },
            { category: "AI", technologies: ["GPT-4o", "Tavily Search"] },
        ],
        image: "/img/projects/music.PNG",
        category: "information-systems",
        tags: [
            "Next.js 15",
            "FastAPI",
            "OpenAI GPT-4o",
            "PostgreSQL",
            "Docker",
            "Redis",
        ],
        githubUrl: "https://github.com/SathvikKV/Music-Sampler",
        featured: true,
    },
    {
        id: 3,
        title: "FinSight",
        slug: "finsight",
        description:
            "Developed FinSightAI, a full-stack AI platform that analyzes SEC filings using Retrieval-Augmented Generation (RAG).",
        longDescription:
            "FinSightAI is a specialized tool for financial analysts that democratizes access to complex SEC filings. It allows users to ask natural language questions about 10-K and 10-Q reports. The system indexes filings into a vector database, enabling it to retrieve exact paragraphs to ground its answers, significantly reducing hallucinations. We explored Agentic RAG workflows to accurately compare fiscal years.",
        challenges: [
            "Handling massive 10-K/10-Q documents which exceed standard token windows.",
            "Ensuring factual accuracy in financial data analysis.",
            "Comparing financial metrics across different years and companies reliably.",
        ],
        solutions: [
            "Implemented RAG with advanced chunking strategies to retrieve relevant context.",
            "Experimented with GraphRAG and Agentic workflows to trace relationships between financial entities.",
            "Built a citation system so users can verify every claim against the original source document.",
        ],
        techStackDetailed: [
            { category: "Frontend", technologies: ["Next.js", "Tailwind CSS"] },
            { category: "Backend", technologies: ["FastAPI", "Python", "LangChain"] },
            { category: "Data", technologies: ["Pinecone", "PostgreSQL", "AWS EC2"] },
        ],
        image: "/img/projects/finsight_ai.PNG",
        category: "information-systems",
        tags: ["RAG", "FastAPI", "Next.js", "GPT-4", "Pinecone", "AWS"],
        githubUrl: "https://github.com/SathvikKV/FinSightAI",
        featured: true,
    },
    {
        id: 4,
        title: "Travel Planner Chatbot",
        slug: "travel-planner",
        description:
            "Built a conversational AI assistant using LangChain, FastAPI, and Streamlit to help users plan personalized trips.",
        longDescription:
            "The Travel Planner Chatbot isn't just a simple Q&A bot; it's a multi-turn agent capable of understanding user preferences for budget, climate, and activities. It constructs complete daily itineraries and handles fallback scenarios gracefully when information is missing.",
        challenges: [
            "Maintaining context over a long conversation about complex itineraries.",
            "Handling vague user requests like 'somewhere warm but not too crowded'.",
            " integrating real-time weather or flight data.",
        ],
        solutions: [
            "Utilized LangChain agents to dynamically decide when to ask clarifying questions vs. providing recommendations.",
            "Implemented a memory buffer to store user preferences throughout the session.",
            "Designed a structured prompt system to enforce output consistency for itinerary generation.",
        ],
        techStackDetailed: [
            { category: "Frontend", technologies: ["Streamlit"] },
            { category: "Backend", technologies: ["FastAPI", "LangChain", "Python"] },
            { category: "AI", technologies: ["OpenAI API", "Agents"] },
        ],
        image: "/img/projects/ai_travel_planner.png",
        category: "information-systems",
        tags: ["LangChain", "FastAPI", "Streamlit", "LLM"],
        githubUrl: "https://github.com/SathvikKV/AI-Travel-Planner/tree/main",
        featured: true,
    },
    {
        id: 5,
        title: "TED Talks Exploration Platform",
        slug: "ted-talks",
        description:
            "Developed an Agentic AI platform using RAG, LangGraph, and Cytoscape.js for personalized TED Talk discovery and research.",
        longDescription:
            "This project transforms passive video consumption into an active research experience. We built an innovative Agentic Architecture comprising 7 specialized agents (including Search, RAG Q&A, Talk Comparison, and Mind Map generators) to help users navigate over 6,000 TED Talks. Users can generate interactive knowledge graphs (DAGs) to visualize connections between ideas, create personalized research playbooks, and even compare contrasting viewpoints across different speakers. The system features a robust ETL pipeline orchestrated by Airflow to ingest and process transcripts into a Pinecone vector store.",
        challenges: [
            "Overcoming the limitations of keyword-based search to find semantically relevant talks.",
            "Visualizing abstract concepts and their relationships from spoken text (Mind Maps).",
            "Orchestrating multiple AI agents to collaborate on complex tasks like 'Compare Speaker A and B'.",
        ],
        solutions: [
            "Implemented a multi-agent system using LangGraph to handle specialized tasks autonomously.",
            "Integrated Cytoscape.js with LLM logic to generate interactive Directed Acyclic Graphs (DAGs) of ideas.",
            "Built a scalable backend with FastAPI and Pinecone to handle RAG queries with low latency.",
        ],
        techStackDetailed: [
            { category: "Frontend", technologies: ["React", "Streamlit", "Cytoscape.js", "CoAgents"] },
            { category: "Backend", technologies: ["FastAPI", "LangGraph", "Python", "Pinecone"] },
            { category: "Data & DevOps", technologies: ["Apache Airflow", "AWS EC2", "Docker", "S3"] },
        ],
        image: "/img/projects/ted_proj.png",
        category: "information-systems",
        tags: ["Agentic AI", "LangGraph", "RAG", "Clean Architecture", "Airflow"],
        githubUrl: "https://github.com/BigDataIA-Fall2024-TeamB8/Final_Project",
        featured: true,
    },
    {
        id: 2,
        title: "Automated Data Ingestion & Summarization",
        slug: "data-ingestion",
        description:
            "Developed an Airflow-based data pipeline integrating S3 and Snowflake with an interactive FastAPI & Streamlit UI.",
        longDescription:
            "This project focused on building a robust ETL pipeline for document processing. It automates the ingestion of raw files from S3, processes them using Airflow DAGs, and loads structured metadata into Snowflake. User can then verify and explore this data via a Streamlit dashboard.",
        challenges: [
            "Orchestrating dependent tasks reliably and handling failures gracefully.",
            "Managing secure credentials across multiple services (AWS, Snowflake).",
            "providing immediate feedback to users when ingestion jobs complete.",
        ],
        solutions: [
            "Leveraged Apache Airflow to define and monitor complex processing workflows.",
            "Used Snowflake as a scalable data warehouse for structured metadata execution.",
            "Built a FastAPI middle layer to bridge the storage and the Streamlit frontend.",
        ],
        techStackDetailed: [
            { category: "Orchestration", technologies: ["Apache Airflow"] },
            { category: "Database", technologies: ["Snowflake", "S3"] },
            { category: "App", technologies: ["FastAPI", "Streamlit"] },
        ],
        image: "/img/projects/summary.png",
        category: "information-systems",
        tags: ["Python", "Airflow", "FastAPI", "Snowflake"],
        githubUrl: "https://github.com/BigDataIA-Fall2024-TeamB8/Assignment-2",
        featured: true,
    },
    {
        id: 6,
        title: "Ultra-Fast Grocery Delivery Platform",
        slug: "grocery-delivery",
        description:
            "Developed an order management system using Java, MySQL, and Google Maps API with real-time tracking.",
        longDescription:
            "A comprehensive logistics platform designed for speed. It handles inventory management, order processing, and delivery routing. The system calculates optimal paths using Google Maps API to ensure 15-minute delivery promises.",
        challenges: [
            "Managing complex many-to-many relationships in the database (Orders, Products, Drivers).",
            "Ensuring data consistency during concurrent order placements.",
            "Calculating delivery estimates in real-time.",
        ],
        solutions: [
            "Designed a normalized MySQL schema to handle transactional data integrity.",
            "Implemented Java logic to interface with Google Maps API for dynamic routing.",
            "Built a role-based access control system for Admins, Customers, and Delivery Partners.",
        ],
        techStackDetailed: [
            { category: "Language", technologies: ["Java"] },
            { category: "Database", technologies: ["MySQL"] },
            { category: "API", technologies: ["Google Maps API"] },
        ],
        image: "/img/projects/quickie.PNG",
        category: "information-systems",
        tags: ["Java", "MySQL", "Google Maps API"],
        githubUrl: "https://github.com/SathvikKV/INFO5100-FinalProject-Team11",
        featured: true,
    },
    {
        id: 7,
        title: "Fuse Element Design",
        slug: "fuse-design",
        description:
            "Designed & optimized a new fuse element for electric vehicles with FEA and fatigue testing.",
        longDescription:
            "An intricate mechanical engineering project focusing on EV safety. We designed a fuse capable of breaking currents rapidly during short circuits while withstanding thermal cycling. Utilizing Finite Element Analysis (FEA), we simulated stress hotspots and thermal loads.",
        challenges: [
            "Balancing conductivity with rapid melting properties for safety.",
            "Simulating complex thermal fatigue cycles accurately.",
            "Reducing material usage without compromising structural integrity.",
        ],
        solutions: [
            "Performed iterative FEA simulations to identify and remove low-stress material.",
            "Optimized the geometry to create specific stress concentration points for predictable failure.",
            "Achieved an 83% improvement in estimated durability through design refinements.",
        ],
        image: "/img/projects/fuse.PNG",
        category: "mechanical",
        tags: ["FEA", "Design", "Testing"],
        demoUrl:
            "https://docs.google.com/presentation/d/1n_T33HZPz9eYb9_Qu4yyI0YgiJCRmbqX/edit?usp=sharing",
        featured: true,
    },
    {
        id: 8,
        title: "3D Printed Manual Transmission",
        slug: "transmission-system",
        description:
            "Designed a planetary gear system with three power modes, performed gear train calculations and 3D modeling.",
        longDescription:
            "A completely functional 3D-printed transmission system demonstrating complex gear ratios. The planetary gear set allows for multiple output speeds and torque settings from a single input, showcasing mechanical power transmission principles.",
        challenges: [
            "Calculating precise gear tooth profiles for 3D printing tolerances.",
            "Designing a shifting mechanism that engages smoothly under load.",
            "Managing friction and wear in printed plastic parts.",
        ],
        solutions: [
            "Modeled custom involute gear profiles to ensure smooth meshing.",
            "Designed a locking ring mechanism to switch between sun and ring gear engagement.",
            "Created a modular assembly for easy part replacement and maintenance.",
        ],
        image: "/img/projects/gear.jpg",
        category: "mechanical",
        tags: ["3D Modeling", "Gear Design", "Mechanical Systems"],
        featured: true,
    },
    {
        id: 9,
        title: "Wall Sensing Robot",
        slug: "wall-sensing-robot",
        description:
            "Developed a two-wheeled autonomous robot using TI C2000 with Raspberry Pi 4 and various sensors.",
        longDescription:
            "An autonomous robot designed to navigate mazes and track lines. It uses IR sensors for wall detection and a camera for color recognition, controlled by a hybrid architecture of a C2000 microcontroller for real-time motor control and a Raspberry Pi for high-level vision processing.",
        challenges: [
            "Interfacing different logic voltage levels between the C2000 and Raspberry Pi.",
            "Implementing stable PID control for straight-line navigation.",
            "Processing image data in real-time on limited hardware.",
        ],
        solutions: [
            "Designed a custom PCB for signal conditioning and power distribution.",
            "Tuned PID control loops to minimize oscillation and drift.",
            "Offloaded computer vision tasks to the Pi while keeping the C2000 dedicated to motion.",
        ],
        image: "/img/projects/robot.PNG",
        category: "mechanical",
        tags: ["Robotics", "Raspberry Pi", "Sensors"],
        demoUrl:
            "https://www.hackster.io/sathvik-vadavatha/obstacle-detecting-and-color-following-robot-pair-2b60ba",
        featured: true,
    },
    {
        id: 10,
        title: "Test Tube Dispensing Mechanism",
        slug: "test-tube-dispenser",
        description:
            "Designed a four-bar linkage system for automated test tube handling with a rack-and-pinion mechanism.",
        longDescription:
            "Automated lab equipment design featuring a precise pick-and-place mechanism. The system uses a four-bar linkage to create a specific motion path for lifting test tubes, paired with a stepper-driven rack and pinion for positioning.",
        challenges: [
            "Synthesizing a linkage that creates a near-vertical lift motion.",
            "Ensuring gentle handling of fragile glass test tubes.",
            "Synchronizing multiple degrees of freedom.",
        ],
        solutions: [
            "Used SolidWorks motion analysis to optimize link lengths for the desired coupler curve.",
            "Designed custom grippers with compliant materials.",
            "Implemented hard stops and limit switches for repeatable positioning.",
        ],
        image: "/img/projects/tray.PNG",
        category: "mechanical",
        tags: ["Automation", "Mechanical Design", "Linkage System"],
        demoUrl:
            "https://www.youtube.com/watch?v=j3S8Jn7C3iE&ab_channel=SathvikVadavatha",
        featured: true,
    },
];

export const blogPosts: BlogPost[] = [
    {
        slug: "building-realtime-copilot",
        title: "Building a Local, Privacy-First AI Copilot",
        excerpt: "How I used LiveKit, Node.js, and OpenAI to build a desktop assistant that can see what you see.",
        date: "December 10, 2024",
        readTime: "5 min read",
        tags: ["AI", "LiveKit", "Local-First"],
        content: `
## The Motivation
Most AI assistants are cloud-tethered and lack context about what's actually happening on your screen. I wanted to build something that felt like a true pair programmer—sitting next to you, watching your workflow, and offering help without sending your entire life to a centralized server unnecessarily.

## The Stack
I chose **Next.js** for the frontend because of its React Server Components, which made handling the initial page load and SEO easy.

For the real-time communication, I used **LiveKit**. WebRTC is notoriously difficult to get right, but LiveKit extracts away the pain of signaling servers and connection management.

## Challenges
The biggest challenge was **latency**. Piping video frames to OpenAI's vision model takes time.
`,
    },
    {
        slug: "music-discovery-with-ai",
        title: "Reimagining Music Discovery",
        excerpt: "Why algorithms aren't enough: Adding context and 'vibe' analysis to music exploration.",
        date: "November 28, 2024",
        readTime: "4 min read",
        tags: ["Music Tech", "GPT-4", "UX Design"],
        content: `
## The Problem with Playlists
Spotify's algorithm is great, but it's a black box. You get a song, but you don't know *why*.

## The Solution
My Sampler app tries to fix this by treating songs like content. You scroll through them, and for every track, an LLM agent has already analyzed it to tell you: "This features a syncopated bassline similar to Thundercat" or "The lyrics explore themes of urban isolation."
`,
    },
];
