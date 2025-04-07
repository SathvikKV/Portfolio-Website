"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Cpu, Database, Lightbulb, Rocket, Wrench } from "lucide-react";

export default function AboutSection() {
  const skills = [
    { name: "Python & Pandas", icon: <Code className="h-5 w-5" /> },
    { name: "Data Analysis", icon: <Database className="h-5 w-5" /> },
    { name: "Data Visualization", icon: <Lightbulb className="h-5 w-5" /> },
    { name: "Machine Learning", icon: <Cpu className="h-5 w-5" /> },
    { name: "Generative AI & LLMs", icon: <Rocket className="h-5 w-5" /> },
    { name: "Business Use Case Mapping", icon: <Wrench className="h-5 w-5" /> },
    { name: "Communication", icon: <Code className="h-5 w-5" /> },
    { name: "Problem Solving", icon: <Lightbulb className="h-5 w-5" /> },
  ];

  return (
    <section id="about" className="py-20 relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-black"></div>
        <div className="absolute top-0 right-0 w-[30%] h-[30%] rounded-full bg-gradient-to-br from-orange-500/5 to-red-600/5 blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-12"
        >
          <Badge
            variant="outline"
            className="mb-4 border-orange-500 text-orange-500"
          >
            About Me
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Who I Am</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-red-600 rounded-full mb-6"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg blur-sm"></div>
            <Card className="bg-gray-900 border-0 overflow-hidden relative z-10">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-orange-500">
                  My Background
                </h3>
                <p className="text-gray-300 mb-4">
                  I’m a data-driven problem solver with a hybrid background in
                  Information Systems and Mechanical Engineering. With hands-on
                  experience in Data Science, Generative AI, and end-to-end ML
                  pipelines, I build solutions that merge analytical thinking
                  with scalable systems.
                </p>
                <p className="text-gray-300 mb-4">
                  I've worked on real-world AI projects ranging from AI-powered
                  travel assistants to Retrieval-Augmented Generation (RAG)
                  systems for intelligent PDF search. My recent work includes
                  deploying cloud-native applications using FastAPI, Streamlit,
                  Docker, and AWS, integrating OpenAI, LangChain, and vector
                  databases.
                </p>
                <p className="text-gray-300">
                  Whether it's exploring large datasets, building LLM agents, or
                  optimizing pipelines with Airflow and Snowflake, I enjoy
                  transforming abstract ideas into impactful, user-friendly
                  solutions.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-6 text-orange-500">
              My Skills
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <Card className="bg-gray-900 border-0 hover:border-orange-500 transition-all hover:shadow-[0_0_15px_rgba(249,115,22,0.15)]">
                    <CardContent className="p-4 flex items-center gap-3">
                      <div className="text-orange-500">{skill.icon}</div>
                      <span className="font-medium">{skill.name}</span>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
