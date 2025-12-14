"use client";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ArrowRight, ArrowUpRight, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { projects, Project } from "@/lib/data";

export default function ProjectsSection() {
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

function ProjectGrid({ projects }: { projects: Project[] }) {
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
          <Card className="bg-gray-900 border-0 overflow-hidden h-full hover:shadow-[0_0_25px_rgba(249,115,22,0.15)] transition-all duration-300 group flex flex-col">
            <Link href={`/projects/${project.slug}`} className="relative h-48 overflow-hidden block">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-medium flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  View Case Study <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
            <CardContent className="p-6 flex-grow">
              <Link href={`/projects/${project.slug}`}>
                <h3 className="text-lg font-bold mb-2 group-hover:text-orange-500 transition-colors">
                  {project.title}
                </h3>
              </Link>
              <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.slice(0, 4).map((tag: string) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="bg-gray-800 text-gray-300 border-gray-700"
                  >
                    {tag}
                  </Badge>
                ))}
                {project.tags.length > 4 && (
                  <Badge variant="outline" className="bg-gray-800 text-gray-300 border-gray-700">
                    +{project.tags.length - 4}
                  </Badge>
                )}
              </div>
            </CardContent>
            <CardFooter className="px-6 pb-6 pt-0 flex justify-between mt-auto">
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
              {project.demoUrl ? (
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
              ) : (
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-orange-500 hover:text-orange-400 hover:bg-orange-500/10"
                  asChild
                >
                  <Link href={`/projects/${project.slug}`}>
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
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
