"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";
import Image from "next/image";

interface WorkExperience {
  company: string;
  logo: string;
  position: string;
  location: string;
  period: string;
  responsibilities: string[];
}

export default function WorkSection() {
  const experiences: WorkExperience[] = [
    {
      company: "ITC Infotech USA",
      logo: "/img/projects/itcinfotech.png",
      position: "PLM Intern",
      location: "Frederick, MD",
      period: "Sept 2022 – Oct 2023",
      responsibilities: [
        "Developed & executed test cases for PTC Windchill to ensure seamless CAD data integration.",
        "Managed CAD data version control & change management for optimized workflows.",
        "Configured Windchill to align with business needs, improving productivity.",
      ],
    },
    {
      company: "ITC Ltd (Paperboards and Specialty Papers Division)",
      logo: "/img/projects/itcpspd.png",
      position: "Data Analyst Intern",
      location: "Hyderabad, India",
      period: "June 2021 – Aug 2021",
      responsibilities: [
        "Applied lean methodologies to analyze production processes and identify inefficiencies.",
        "Calibrated IoT proximity sensors on forklifts, improving safety & real-time detection.",
        "Designed a real-time KPI dashboard in Tableau for operational insights.",
      ],
    },
    {
      company: "Dassault Systems",
      logo: "/img/projects/dsystems.jpeg",
      position: "Process Consultant Intern",
      location: "Bangalore, India",
      period: "May 2020 – July 2020",
      responsibilities: [
        "Optimized client workflows in manufacturing & engineering through process consulting.",
        "Worked with Dassault's 3D design software to support data-driven decision-making.",
        "Developed client reports to showcase process improvements & recommendations.",
      ],
    },
    {
      company: "Universal Robots A/S",
      logo: "/img/projects/ur.png",
      position: "Engineering Intern",
      location: "India",
      period: "June 2019 – July 2019",
      responsibilities: [
        "Developed automation solutions using UR10 collaborative robots.",
        "Automated 80% of tasks across 3 industrial stations, reducing manual labor.",
        "Led the installation of a collaborative robot for a palletizing application.",
      ],
    },
  ];

  return (
    <section id="work" className="py-20 relative bg-gray-950">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
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
            Experience
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-red-600 rounded-full mb-6"></div>
        </motion.div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-gray-900 border-0 overflow-hidden relative group">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 to-red-600 group-hover:w-2 transition-all duration-300"></div>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0 flex items-start justify-center">
                      <div className="w-16 h-16 md:w-20 md:h-20 relative bg-gray-800 rounded-md overflow-hidden flex items-center justify-center">
                        <Image
                          src={experience.logo || "/placeholder.svg"}
                          alt={`${experience.company} logo`}
                          fill
                          className="object-contain p-2"
                        />
                      </div>
                    </div>

                    <div className="flex-grow">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                        <h3 className="text-xl font-bold text-orange-500">
                          {experience.position}
                        </h3>
                        <div className="flex items-center gap-1 text-sm text-gray-400">
                          <Calendar className="h-4 w-4" />
                          <span>{experience.period}</span>
                        </div>
                      </div>

                      <h4 className="text-lg font-medium mb-2">
                        {experience.company}
                      </h4>

                      <div className="flex items-center gap-1 text-sm text-gray-400 mb-4">
                        <MapPin className="h-4 w-4" />
                        <span>{experience.location}</span>
                      </div>

                      <ul className="space-y-2">
                        {experience.responsibilities.map(
                          (responsibility, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 text-gray-300"
                            >
                              <span className="text-orange-500 mt-1.5">•</span>
                              <span>{responsibility}</span>
                            </li>
                          )
                        )}
                      </ul>
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
