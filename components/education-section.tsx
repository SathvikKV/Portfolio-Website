"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import Image from "next/image";

export default function EducationSection() {
  const education = [
    {
      degree: "Master of Science in Information Systems",
      institution: "Northeastern University",
      imagePath: "/img/projects/neu.png",
      location: "Boston, MA",
      period: "2024 - 2025",
      description:
        "Concentration in Data Analytics and Engineering, with coursework focused on big data systems, AI-powered applications, and full-stack development.",
      courses: [
        "Data Science Engineering Methods",
        "Prompt Engineering and AI",
        "Advances in Data Science and Architecture",
        "Database Management Systems",
        "Big Data Systems and Intelligence Analytics",
        "Object-Oriented Programming",
        "Data Structures and Algorithms",
      ],
    },
    {
      degree: "Bachelor of Science in Mechanical Engineering",
      institution: "University of Illinois at Urbana-Champaign (UIUC)",
      logo: "UIUC",
      imagePath: "/img/projects/uiuc.png",
      location: "Champaign, IL",
      period: "2018 - 2022",
      description:
        "Specialized in product design, manufacturing systems, and robotics with hands-on experience in CAD modeling and automation.",
      courses: [
        "Product Design and CAD",
        "Design for Manufacturability",
        "Control Systems and Robotics Programming",
        "Solid Mechanics",
        "Fluid Mechanics",
        "Thermodynamics",
        "Linear Algebra",
      ],
    },
  ];

  return (
    <section id="education" className="py-20 relative bg-gray-950">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[30%] h-[30%] rounded-full bg-gradient-to-br from-orange-500/5 to-red-600/5 blur-3xl"></div>
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
            Education
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Academic Background
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-red-600 rounded-full mb-6"></div>
        </motion.div>

        <div className="space-y-8 max-w-3xl mx-auto">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="bg-gray-900 border-0 overflow-hidden relative group">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 to-red-600 group-hover:w-2 transition-all duration-300"></div>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    {/* University Logo */}
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center">
                      <Image
                        src={item.imagePath}
                        alt={`${item.institution} logo`}
                        width={64}
                        height={64}
                        className="object-contain"
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-2 text-orange-500 mb-2">
                        <GraduationCap className="h-5 w-5" />
                        <span className="font-semibold">{item.degree}</span>
                      </div>

                      <h3 className="text-xl font-bold mb-2">
                        {item.institution}
                      </h3>

                      <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-400">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{item.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{item.location}</span>
                        </div>
                      </div>

                      <p className="text-gray-300 mb-4">{item.description}</p>

                      <div className="mt-4">
                        <h4 className="text-sm font-semibold mb-2 text-gray-300">
                          Key Courses:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {item.courses.map((course, idx) => (
                            <Badge
                              key={idx}
                              variant="secondary"
                              className="bg-gray-800 hover:bg-gray-700"
                            >
                              {course}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
