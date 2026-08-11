"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
      company: "Stratafi",
      logo: "/gradient-placeholder.svg",
      position: "Software and AI Engineer",
      location: "Boston, MA",
      period: "May 2026 - Present",
      responsibilities: [
        "Built agentic AI systems supporting Stratafi's equipment financing underwriting platform, automating equipment identification and data enrichment to speed up credit decisioning, cutting manual equipment review time by ~35% for loan officers evaluating equipment backed loans.",
        "Developed an AI driven agent browser that autonomously navigates auction and marketplace sites to extract structured equipment data (make, model, specs, images, price) from a listing URL or lot number, reducing per listing data entry time from ~10 minutes to under 30 seconds.",
        "Integrated Plaid for real time bank account and cash flow verification and Enigma for business bankruptcy and risk checks into Stratafi's credit engine, cutting borrower risk assessment turnaround time by ~40% within the underwriting pipeline.",
        "Extended Postgres schemas mapping independently sourced equipment market data onto Stratafi's existing classification taxonomy across 80+ categories and 100K+ models, enabling scalable comparison against third party valuation benchmarks."
      ],
    },
    {
      company: "Arrivia Inc",
      logo: "/gradient-placeholder.svg",
      position: "Data & AI Engineer (Contract)",
      location: "Boston, MA",
      period: "Jan 2026 - May 2026",
      responsibilities: [
        "Consolidated 5+ third party travel platforms across booking, rewards, and behavioral data into a unified Azure Data Lake supporting an agentic travel recommendation platform for 2M+ loyalty members, eliminating data silos and enabling real time agent reasoning.",
        "Engineered real time data ingestion and feature services on Azure Databricks feeding the recommendation platform, improving recommendation relevance for product and marketing teams.",
        "Designed event driven workflows transforming loyalty and transaction patterns into structured ML feature sets, cutting feature preparation time by ~40% for downstream recommendation and targeting models.",
        "Optimized distributed Python services through parallelism tuning and memory configuration, reducing pipeline execution time by ~30% and improving feature freshness for 10K+ daily active users.",
        "Automated CI/CD pipelines on Azure DevOps for deployment of data services and notebooks across dev and production, cutting manual deployment time by ~50%."
      ],
    },
    {
      company: "Triple Ring Technologies",
      logo: "/img/projects/triple-ring.jpeg",
      position: "ML Engineer Intern",
      location: "Boston, MA (On-site)",
      period: "Jun 2025 - Sep 2025",
      responsibilities: [
        "Established a new ML platform from the ground up on AWS using Terraform and Step Functions for FDA regulated medical device software, provisioning compliant dev/staging/prod environments from scratch and reducing setup time from days to under an hour.",
        "Delivered end to end SageMaker training and inference pipelines for Random Forest and U-Net CNN models with MLflow tracking across 3 model versions, cutting deployment time by ~60% versus manual processes.",
        "Orchestrated model workflows on AWS Step Functions across 6 pipeline stages, eliminating manual handoffs and ensuring full traceability for FDA audit submissions.",
        "Constructed a scalable data registry on AWS Glue and S3 organizing medical data across raw, curated, and feature layers, cutting ML engineer discovery time by ~50% and ensuring versioned inputs across all runs.",
        "Configured SageMaker model monitoring to track inference performance and data drift across deployed models, catching degradation before it reached clinical workflows."
      ],
    },
    {
      company: "ITC Infotech USA",
      logo: "/img/projects/itcinfotech.png",
      position: "Data Engineer",
      location: "Frederick, MD",
      period: "Apr 2022 - Dec 2023",
      responsibilities: [
        "Refactored Python and PySpark services extracting product and engineering change data from Baker Hughes' legacy PLM system (Windchill) across 6 product domains, increasing daily throughput from ~1,500 unreliable records to 3,000-5,000 stable records in Snowflake.",
        "Re-architected batch processing onto Databricks with Delta Lake, introducing incremental ingestion and audit ready versioning and reducing pipeline failure rate by ~70%.",
        "Streamlined event driven Kafka and PySpark Structured Streaming services capturing real time product change events from Windchill, reducing data latency from 8+ hours to under 5 minutes for engineering and operations teams.",
        "Standardized Snowflake schemas across raw, curated, and reporting tiers covering 10+ analytical tables, unifying KPIs for product lifecycle and revision history consumed by engineering and supply chain teams.",
        "Enforced schema contracts via Airflow based validation logic before warehouse loads, diagnosing and resolving 40+ production failures and cutting recurring incidents by ~65% over 6 months."
      ],
    },
  ];

  const earlierExperiences: WorkExperience[] = [
    {
      company: "ITC Ltd (Paperboards and Specialty Papers Division)",
      logo: "/img/projects/itcpspd.png",
      position: "Engineering Intern",
      location: "Hyderabad, India",
      period: "June 2021 - Aug 2021",
      responsibilities: [
        "Conducted process analysis using lean methodologies and statistical tools (Pareto charts, regression analysis) to identify inefficiencies and reduce waste.",
        "Built a Tableau dashboard to track machine downtime and production rates, enabling real-time insights and process adjustments that reduced downtime by 12% through proactive maintenance.",
        "Calibrated IoT proximity sensors on forklifts, improving safety by enhancing real-time detection and feedback systems.",
      ],
    },
    {
      company: "Dassault Systèmes",
      logo: "/img/projects/dsystems.jpeg",
      position: "Industry Process Consultant Intern",
      location: "India",
      period: "June 2020 - August 2020",
      responsibilities: [
        "Performed digital twin analysis of a sheet metal line using DELMIA to evaluate robotic cell efficiency and process throughput KPIs prior to implementation.",
        "Modeled a 6-DOF industrial robot arm in CATIA and integrated it into virtual manufacturing simulations.",
        "Executed prismatic machining simulations on an engine cover and generated NC output code for real-world production.",
        "Created client-ready visualizations and identified digital twin use cases to streamline product lifecycle management and factory automation planning.",
      ],
    },
    {
      company: "Universal Robots A/S",
      logo: "/img/projects/ur.png",
      position: "Engineering Intern",
      location: "India",
      period: "June 2019 - July 2019",
      responsibilities: [
        "Programmed the UR10 collaborative robot to automate three production line stations, achieving an 80% automation rate and reducing human effort by 10 FTEs.",
        "Led the on-site installation and calibration of a UR robot for a client-specific palletizing application.",
        "Evaluated ROI and implementation impact of cobots across multiple industrial use cases, supporting business cases for adoption.",
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Accordion type="single" collapsible className="w-full bg-gray-900 border border-orange-500/20 rounded-xl overflow-hidden mt-12 hover:shadow-[0_0_15px_rgba(249,115,22,0.1)] transition-all">
              <AccordionItem value="earlier-internships" className="border-none">
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-800/50 transition-colors group">
                  <div className="flex items-center gap-3">
                    <span className="text-lg font-semibold group-hover:text-orange-500 transition-colors">
                      Earlier Internships (2019-2021)
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-2">
                  <div className="space-y-8 mt-4">
                    {earlierExperiences.map((experience, index) => (
                      <Card key={index} className="bg-gray-800/50 border-0 overflow-hidden relative group">
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
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
