"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BarChart3,
  Code,
  Database,
  LineChart,
  BrainCircuit,
  MessageSquare,
  Users,
  Sparkles,
} from "lucide-react";

interface Skill {
  name: string;
  level: number;
  icon?: React.ReactNode;
  color?: string;
}

export default function SkillsSection() {
  const skills: Skill[] = [
    {
      name: "Data Analysis",
      level: 90,
      icon: <BarChart3 className="h-5 w-5" />,
      color: "from-blue-500 to-cyan-400",
    },
    {
      name: "Data Engineering",
      level: 85,
      icon: <Database className="h-5 w-5" />,
      color: "from-green-500 to-emerald-400",
    },
    {
      name: "Machine Learning",
      level: 88,
      icon: <BrainCircuit className="h-5 w-5" />,
      color: "from-purple-500 to-indigo-400",
    },
    {
      name: "GenAI",
      level: 82,
      icon: <Sparkles className="h-5 w-5" />,
      color: "from-pink-500 to-rose-400",
    },
    {
      name: "Communication",
      level: 95,
      icon: <MessageSquare className="h-5 w-5" />,
      color: "from-yellow-500 to-amber-400",
    },
    {
      name: "Collaboration",
      level: 92,
      icon: <Users className="h-5 w-5" />,
      color: "from-teal-500 to-green-400",
    },
    {
      name: "Software Development",
      level: 80,
      icon: <Code className="h-5 w-5" />,
      color: "from-orange-500 to-amber-400",
    },
    {
      name: "Data Visualization",
      level: 90,
      icon: <LineChart className="h-5 w-5" />,
      color: "from-red-500 to-orange-400",
    },
  ];

  const allSkills = [
    "Python",
    "Java",
    "R",
    "Pandas",
    "NumPy",
    "TensorFlow",
    "Keras",
    "Seaborn",
    "Tableau",
    "Excel",
    "Power BI",
    "Streamlit",
    "React",
    "Vue.js",
    "HTML",
    "CSS",
    "AWS",
    "GCP",
    "Azure",
    "Docker",
    "Airflow",
    "Git",
    "SQL",
    "PostgreSQL",
    "Snowflake",
    "MongoDB",
    "Hadoop",
    "PTC Windchill",
    "LangChain",
    "LangGraph",
    "Jira",
    "Probability",
    "Statistics",
    "Time Series",
    "SolidWorks",
    "AutoCAD",
    "MATLAB",
    "LabVIEW",
  ];

  return (
    <section id="skills" className="py-20 relative">
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
            Skills & Expertise
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical Proficiency
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-red-600 rounded-full mb-6" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h3 className="text-xl font-bold mb-8 text-center text-orange-500">
            Skills Proficiency
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
              >
                <Card className="bg-gray-900 border-0 overflow-hidden relative group hover:shadow-[0_0_15px_rgba(249,115,22,0.15)] transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="text-orange-500">{skill.icon}</div>
                      <h4 className="font-medium">{skill.name}</h4>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2.5 mb-1">
                      <div
                        className={`bg-gradient-to-r ${
                          skill.color || "from-orange-500 to-red-600"
                        } h-2.5 rounded-full`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                    <div className="text-right text-xs text-gray-400">
                      {skill.level}%
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-xl font-bold mb-8 text-center text-orange-500">
            Tech Stack
          </h3>
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8 overflow-x-auto">
              <TabsList className="bg-gray-900">
                {[
                  "all",
                  "programming",
                  "data-ml",
                  "web-cloud",
                  "databases",
                  "other",
                  "mech",
                ].map((value) => (
                  <TabsTrigger
                    key={value}
                    value={value}
                    className="data-[state=active]:bg-orange-500 data-[state=active]:text-white"
                  >
                    {value
                      .replace("-", " ")
                      .replace(/\b\w/g, (c) => c.toUpperCase())}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <TabsContent value="all">
              <TechGrid skills={allSkills} />
            </TabsContent>
            <TabsContent value="programming">
              <TechGrid skills={["Python", "Java", "R"]} />
            </TabsContent>
            <TabsContent value="data-ml">
              <TechGrid
                skills={[
                  "Pandas",
                  "NumPy",
                  "TensorFlow",
                  "Keras",
                  "Seaborn",
                  "Tableau",
                  "Excel",
                  "Power BI",
                ]}
              />
            </TabsContent>
            <TabsContent value="web-cloud">
              <TechGrid
                skills={[
                  "Streamlit",
                  "React",
                  "Vue.js",
                  "HTML",
                  "CSS",
                  "AWS",
                  "GCP",
                  "Azure",
                  "Docker",
                  "Airflow",
                  "Git",
                ]}
              />
            </TabsContent>
            <TabsContent value="databases">
              <TechGrid
                skills={["SQL", "PostgreSQL", "Snowflake", "MongoDB", "Hadoop"]}
              />
            </TabsContent>
            <TabsContent value="other">
              <TechGrid
                skills={[
                  "PTC Windchill",
                  "LangChain",
                  "LangGraph",
                  "Jira",
                  "Probability",
                  "Statistics",
                  "Time Series",
                ]}
              />
            </TabsContent>
            <TabsContent value="mech">
              <TechGrid
                skills={["SolidWorks", "AutoCAD", "MATLAB", "LabVIEW"]}
              />
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}

function TechGrid({ skills }: { skills: string[] }) {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-items-center">
      {skills.map((skill) => (
        <TechIcon key={skill} name={skill} icon={<LogoImage name={skill} />} />
      ))}
    </div>
  );
}

function TechIcon({ name, icon }: { name: string; icon: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className="flex flex-col items-center"
    >
      <div className="w-16 h-16 bg-gray-800 rounded-lg p-2 flex items-center justify-center mb-2 hover:bg-gray-700 transition-colors">
        {icon}
      </div>
      <span className="text-xs text-center text-gray-300">{name}</span>
    </motion.div>
  );
}

function LogoImage({ name }: { name: string }) {
  const filename =
    name.toLowerCase().replace(/\s+/g, "").replace(/[+\.]/g, "") + ".png";
  return (
    <Image
      src={`/img/icons/${filename}`}
      alt={name}
      width={32}
      height={32}
      className="object-contain"
    />
  );
}
