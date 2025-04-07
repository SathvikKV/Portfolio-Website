"use client";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ArrowUpRight, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
}

export default function ProjectsSection() {
  const projects: Project[] = [
    {
      id: 8,
      title: "Travel Planner Chatbot",
      description:
        "Built a conversational AI assistant using LangChain, FastAPI, and Streamlit to help users plan personalized trips with recommendations and fallback handling.",
      image: "/img/projects/ai_travel_Planner.png",
      category: "information-systems",
      tags: ["LangChain", "FastAPI", "Streamlit", "LLM"],
      githubUrl: "https://github.com/SathvikKV/AI-Travel-Planner/tree/main",
    },
    {
      id: 9,
      title: "TED Talks Exploration Platform",
      description:
        "Developed an AI-powered platform using RAG, FastAPI, and CoPilotKit UI for exploring TED Talks, generating mind maps, and creating research playbooks.",
      image: "/img/projects/ted_proj.png",
      category: "information-systems",
      tags: ["RAG", "FastAPI", "LLM Agents", "CopilotKit", "S3"],
      githubUrl: "https://github.com/BigDataIA-Fall2024-TeamB8/Final_Project",
    },
    {
      id: 1,
      title: "Automated Data Ingestion & AI-Powered Summarization",
      description:
        "Developed an Airflow-based data pipeline integrating S3 and Snowflake with an interactive FastAPI & Streamlit UI for document exploration.",
      image: "/img/projects/summary.png",
      category: "information-systems",
      tags: ["Python", "Airflow", "FastAPI", "Snowflake"],
      githubUrl: "https://github.com/BigDataIA-Fall2024-TeamB8/Assignment-2",
    },
    {
      id: 2,
      title: "Ultra-Fast Grocery Delivery Platform",
      description:
        "Developed an order management system using Java, MySQL, and Google Maps API with real-time tracking and data-driven analytics.",
      image: "/img/projects/quickie.png",
      category: "information-systems",
      tags: ["Java", "MySQL", "Google Maps API"],
      githubUrl: "https://github.com/SathvikKV/INFO5100-FinalProject-Team11",
    },
    {
      id: 3,
      title: "Bitcoin Price Analysis & Trend Prediction",
      description:
        "Developed a Python-based system for historical Bitcoin data analysis with ARIMA models and K-means clustering for price forecasting.",
      image: "/placeholder.svg?height=600&width=800",
      category: "information-systems",
      tags: ["Python", "ARIMA", "K-means", "Data Analysis"],
    },
    {
      id: 4,
      title: "Fuse Element Design for Littelfuse Inc.",
      description:
        "Designed & optimized a new fuse element for electric vehicles with FEA and fatigue testing, improving durability by 83%.",
      image: "/img/projects/fuse.png",
      category: "mechanical",
      tags: ["FEA", "Design", "Testing"],
      demoUrl:
        "https://docs.google.com/presentation/d/1n_T33HZPz9eYb9_Qu4yyI0YgiJCRmbqX/edit?usp=sharing",
    },
    {
      id: 5,
      title: "3D Printed Manual Transmission System",
      description:
        "Designed a planetary gear system with three power modes, performed gear train calculations and 3D modeling.",
      image: "/img/projects/gear.jpg",
      category: "mechanical",
      tags: ["3D Modeling", "Gear Design", "Mechanical Systems"],
    },
    {
      id: 6,
      title: "Wall Sensing & Color Recognition Robot",
      description:
        "Developed a two-wheeled autonomous robot using TI C2000 with Raspberry Pi 4 and various sensors for automation.",
      image: "/img/projects/robot.png",
      category: "mechanical",
      tags: ["Robotics", "Raspberry Pi", "Sensors"],
      demoUrl:
        "https://www.hackster.io/sathvik-vadavatha/obstacle-detecting-and-color-following-robot-pair-2b60ba",
    },
    {
      id: 7,
      title: "Test Tube Dispensing Mechanism",
      description:
        "Designed a four-bar linkage system for automated test tube handling with a rack-and-pinion mechanism for precise adjustments.",
      image: "/img/projects/tray.png",
      category: "mechanical",
      tags: ["Automation", "Mechanical Design", "Linkage System"],
      demoUrl:
        "https://www.youtube.com/watch?v=j3S8Jn7C3iE&ab_channel=SathvikVadavatha",
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-black"></div>
        <div className="absolute top-0 left-0 w-[30%] h-[30%] rounded-full bg-gradient-to-br from-orange-500/5 to-red-600/5 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[30%] h-[30%] rounded-full bg-gradient-to-br from-red-600/5 to-orange-500/5 blur-3xl"></div>
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
            My Work
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-red-600 rounded-full mb-6"></div>
          <p className="text-gray-300 max-w-2xl">
            Explore my projects spanning Information Systems and Mechanical
            Engineering domains.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-gray-900">
                <TabsTrigger
                  value="all"
                  className="data-[state=active]:bg-orange-500 data-[state=active]:text-white"
                >
                  All Projects
                </TabsTrigger>
                <TabsTrigger
                  value="information-systems"
                  className="data-[state=active]:bg-orange-500 data-[state=active]:text-white"
                >
                  Information Systems
                </TabsTrigger>
                <TabsTrigger
                  value="mechanical"
                  className="data-[state=active]:bg-orange-500 data-[state=active]:text-white"
                >
                  Mechanical Engineering
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              <ProjectGrid projects={projects} />
            </TabsContent>

            <TabsContent value="information-systems" className="mt-0">
              <ProjectGrid
                projects={projects.filter(
                  (p) => p.category === "information-systems"
                )}
              />
            </TabsContent>

            <TabsContent value="mechanical" className="mt-0">
              <ProjectGrid
                projects={projects.filter((p) => p.category === "mechanical")}
              />
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectGrid({ projects }: { projects: any[] }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 * index }}
        >
          <Card className="bg-gray-900 border-0 overflow-hidden h-full hover:shadow-[0_0_25px_rgba(249,115,22,0.15)] transition-all duration-300 group">
            <div className="relative h-48 overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-2 group-hover:text-orange-500 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag: string) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="bg-gray-800 text-gray-300 border-gray-700"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="px-6 pb-6 pt-0 flex justify-between">
              {project.githubUrl && (
                <Button
                  variant="outline"
                  size="sm"
                  className="border-gray-700 text-gray-300 hover:text-orange-500 hover:border-orange-500"
                  asChild
                >
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Link>
                </Button>
              )}
              {project.demoUrl && (
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-orange-500 to-red-600 text-white border-none"
                  asChild
                >
                  <Link
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              )}
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
