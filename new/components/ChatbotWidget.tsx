"use client";

import { useState, useRef, useEffect } from "react";
import { Send, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hey there! Ask me about Sathvik’s skills, projects, or experience!",
    },
  ]);
  const [input, setInput] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  const handleSend = async () => {
    if (!input.trim()) return;
  
    const userMessage = { sender: "user", text: input };
    const currentInput = input;
    setInput("");
  
    // Show user's message + loading bubble
    setMessages((prev) => [
      ...prev,
      userMessage,
      { sender: "bot", text: "Generating ..." }, //  Loading indicator
    ]);
  
    try {
      const res = await fetch("http://127.0.0.1:8000/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: currentInput }),
      });
  
      if (!res.ok) throw new Error("API error");
      const data = await res.json();
  
      // Replace "..." with real response
      setMessages((prev) => [
        ...prev.slice(0, -1), // Remove the last "..."
        { sender: "bot", text: data.response },
      ]);
    } catch (error) {
      console.error("Chatbot error:", error);
      setMessages((prev) => [
        ...prev.slice(0, -1), // Remove the last "..."
        { sender: "bot", text: "Oops! Something went wrong. Please try again later." },
      ]);
    }
  };
  

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Toggle Button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="bg-orange-500 text-white p-3 rounded-full shadow-lg hover:bg-orange-600 transition"
        >
          <MessageCircle className="w-5 h-5" />
        </button>
      )}

      {/* Chat Window */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-80 h-[420px] bg-gray-900 border border-gray-800 rounded-xl shadow-xl flex flex-col overflow-hidden"
        >
          {/* Header */}
          <div className="bg-orange-500 text-white px-4 py-2 font-semibold flex justify-between items-center">
            <span>Chat Bot</span>
            <button
              onClick={() => setOpen(false)}
              className="text-white hover:opacity-80"
            >
              ✕
            </button>
          </div>

          {/* Chat Scroll Area */}
          <div
            className="flex-1 overflow-y-auto p-4 space-y-2 text-sm text-gray-200"
            ref={containerRef}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`max-w-xs px-3 py-2 rounded-lg ${
                  msg.sender === "bot"
                    ? "bg-gray-700 self-start"
                    : "bg-orange-500 self-end text-white"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="flex border-t border-gray-700 p-2 bg-gray-800">
            <input
              type="text"
              placeholder="Ask me something..."
              className="flex-1 bg-transparent text-sm text-white outline-none placeholder-gray-400"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              onClick={handleSend}
              className="text-orange-500 px-2 hover:text-orange-600"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
