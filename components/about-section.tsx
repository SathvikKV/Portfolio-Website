"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Rocket,
  Lightbulb,
  Wrench,
  Code,
  BarChart,
  Cpu,
  Database,
} from "lucide-react";

/* Tiny dependency-free typewriter */
function Typewriter({
  words,
  typingSpeed = 80,
  deletingSpeed = 45,
  pauseTime = 1100,
  loop = true,
  className = "",
}: {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
  loop?: boolean;
  className?: string;
}) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const t = setInterval(() => setBlink((v) => !v), 500);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const current = words[index] ?? "";
    if (!deleting && subIndex === current.length) {
      const t = setTimeout(() => setDeleting(true), pauseTime);
      return () => clearTimeout(t);
    }
    if (deleting && subIndex === 0) {
      const next = index + 1;
      if (next === words.length && !loop) return;
      setIndex((i) => (i + 1) % words.length);
      setDeleting(false);
      return;
    }
    const t = setTimeout(
      () => setSubIndex((v) => v + (deleting ? -1 : 1)),
      deleting ? deletingSpeed : typingSpeed
    );
    return () => clearTimeout(t);
  }, [subIndex, deleting, index, words, typingSpeed, deletingSpeed, pauseTime, loop]);

  const current = words[index] ?? "";
  return (
    <span className={className} aria-label={`Role: ${current}`}>
      {current.substring(0, subIndex)}
      <span className={`ml-0.5 ${blink ? "opacity-100" : "opacity-0"}`}>|</span>
    </span>
  );
}

export default function AboutSection() {
  const skills = [
    { name: "Python & SQL", icon: <Code className="h-5 w-5" /> },
    { name: "Data Engineering", icon: <Database className="h-5 w-5" /> },
    { name: "Agentic AI Systems", icon: <Rocket className="h-5 w-5" /> },
    { name: "Machine Learning", icon: <Cpu className="h-5 w-5" /> },
    { name: "Generative AI & LLMs", icon: <Rocket className="h-5 w-5" /> },
    { name: "Cloud Infrastructure", icon: <Wrench className="h-5 w-5" /> },
    { name: "Full-Stack Development", icon: <Code className="h-5 w-5" /> },
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
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-10"
        >
          <Badge
            variant="outline"
            className="mb-4 border-orange-500 text-orange-500"
          >
            About Me
          </Badge>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-2">Who I Am</h2>
          <p className="text-2xl md:text-3xl text-gray-300">
            a{" "}
            <Typewriter
              words={["Software Engineer", "AI Engineer", "Data Engineer", "Founder"]}
              className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-500"
            />
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-600 rounded-full mt-6" />
        </motion.div>

        {/* Full-width Background Card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative max-w-6xl mx-auto mb-14"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl blur-sm" />
          <Card className="bg-gray-900/90 border border-gray-700 rounded-2xl relative z-10 backdrop-blur">
            <CardContent className="p-8 md:p-10 lg:p-12">
              {/* Intro */}
              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-orange-500 mb-3">
                  My Background
                </h3>
                <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                  I'm a software and AI engineer designing and deploying end to end AI systems across fintech and healthcare, spanning full stack application development, agentic workflows, cloud infrastructure, and ML model integration. I take systems from the data layer through model deployment to production facing applications, with hands on work across AWS, Azure, and GCP in regulated and enterprise environments.
                </p>
              </div>

              {/* Highlights: two columns on large screens */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Item
                  icon={<Database className="text-orange-500 w-5 h-5 mt-1" />}
                  title="Data Engineering"
                  text="Built production data pipelines on Databricks, Snowflake, and Kafka processing real time and batch data at scale, from legacy PLM systems to travel and fintech platforms."
                />
                <Item
                  icon={<Rocket className="text-orange-500 w-5 h-5 mt-1" />}
                  title="AI and Cloud Engineering"
                  text="Built agentic AI systems and AI-driven browser agents for real time equipment data extraction and underwriting automation, deployed on AWS and Azure in regulated environments."
                />
                <Item
                  icon={<Wrench className="text-orange-500 w-5 h-5 mt-1" />}
                  title="Infrastructure as Code"
                  text="Architected Terraform and Step Functions based ML platforms provisioning compliant, repeatable environments across AWS and Azure for training, deployment, and inference."
                />
                <Item
                  icon={<BarChart className="text-orange-500 w-5 h-5 mt-1" />}
                  title="Data Analytics"
                  text="Turned raw data into clear insights using Python and Pandas, with a focus on feature engineering and metric selection for downstream ML and recommendation systems."
                />
                <Item
                  icon={<Cpu className="text-orange-500 w-5 h-5 mt-1" />}
                  title="Applied Machine Learning"
                  text="Delivered SageMaker training and inference pipelines with MLflow tracking, and built fraud detection and recommendation models used in production."
                />
                <Item
                  icon={<Code className="text-orange-500 w-5 h-5 mt-1" />}
                  title="Product and Execution"
                  text="Founded and built Sanq.ai, a multi tenant restaurant inventory platform, owning everything from backend architecture to the mobile app used by a live pilot customer."
                />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Skills below */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-6xl mx-auto"
        >
          <h3 className="text-xl font-bold mb-6 text-orange-500 text-center md:text-left">
            My Skills
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.05 * index }}
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
    </section>
  );
}

/* Helper for highlight rows */
function Item({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="flex gap-3 items-start">
      {icon}
      <div>
        <h4 className="text-orange-400 font-semibold mb-1 text-sm md:text-base">
          {title}
        </h4>
        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
          {text}
        </p>
      </div>
    </div>
  );
}
