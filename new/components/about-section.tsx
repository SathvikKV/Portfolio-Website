"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Rocket,
  Lightbulb,
  Wrench,
  Code,
  Cpu,
  Database,
} from "lucide-react";

export default function AboutSection() {
  const skills = [
    { name: "Python & SQL", icon: <Code className="h-5 w-5" /> },
    { name: "Data Analysis", icon: <Database className="h-5 w-5" /> },
    { name: "Data Visualization", icon: <Lightbulb className="h-5 w-5" /> },
    { name: "Machine Learning", icon: <Cpu className="h-5 w-5" /> },
    { name: "Generative AI & LLMs", icon: <Rocket className="h-5 w-5" /> },
    { name: "Business Analyst", icon: <Wrench className="h-5 w-5" /> },
    { name: "Communication", icon: <Code className="h-5 w-5" /> },
    { name: "Problem Solving", icon: <Lightbulb className="h-5 w-5" /> },
  ];

  return (
    <section id="about" className="py-20 relative">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-black" />
        <div className="absolute top-0 right-0 w-[30%] h-[30%] rounded-full bg-gradient-to-br from-orange-500/5 to-red-600/5 blur-3xl" />
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
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-red-600 rounded-full mb-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left - Bio & Highlights */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg blur-sm" />
            <Card className="bg-gray-900/90 border border-gray-700 rounded-xl relative z-10 backdrop-blur">
              <CardContent className="p-8 space-y-6 text-left">
                <div>
                  <h3 className="text-2xl font-bold text-orange-500 mb-2">
                    My Background
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    I’m a hybrid problem-solver with a background in{" "}
                    <strong>Information Systems</strong> and{" "}
                    <strong>Mechanical Engineering</strong>, passionate about
                    building AI-powered tools that deliver real-world value.
                  </p>
                </div>

                <div className="space-y-5">
                  {/* Card 1 */}
                  <div className="flex gap-3 items-start">
                    <Rocket className="text-orange-500 w-5 h-5 mt-1" />
                    <div>
                      <h4 className="text-orange-400 font-medium mb-1 text-sm">
                        🚀 AI & Cloud Engineering
                      </h4>
                      <p className="text-gray-400 text-sm">
                        Built and deployed <strong>LLM-powered</strong> apps with
                        FastAPI, Streamlit, Docker, and AWS. Integrated OpenAI,
                        LangChain, and Pinecone to create smart, scalable
                        systems.
                      </p>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="flex gap-3 items-start">
                    <Lightbulb className="text-orange-500 w-5 h-5 mt-1" />
                    <div>
                      <h4 className="text-orange-400 font-medium mb-1 text-sm">
                        🧠 Data-Driven Thinking
                      </h4>
                      <p className="text-gray-400 text-sm">
                        From real-time dashboards to deep analytics, I turn messy
                        data into decisions using Python, Pandas, Power BI, and
                        Tableau.
                      </p>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="flex gap-3 items-start">
                    <Wrench className="text-orange-500 w-5 h-5 mt-1" />
                    <div>
                      <h4 className="text-orange-400 font-medium mb-1 text-sm">
                        🛠️ End-to-End Execution
                      </h4>
                      <p className="text-gray-400 text-sm">
                        I love shipping. From idea → pipeline → UI → deployment,
                        I’ve built full-stack systems powered by Airflow, S3,
                        Snowflake, and RAG pipelines.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right - Skills Grid */}
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
