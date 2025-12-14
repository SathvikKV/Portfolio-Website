"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type DashItem = {
  id: number;
  title: string;
  category: "analysis" | "visualization";
  description: string;
  image?: string;
  link?: string;
  demo?: string;
  draft?: boolean; // <--- set to false to make visible
};

export default function DataDashboardPreview() {
  const dashboards: DashItem[] = [
    // NEW LATEST NOTEBOOK 1
    {
      id: 102,
      title: "Stock Price Direction Prediction (AMZN)",
      category: "analysis",
      description:
        "Time-series classification project predicting next-day AMZN price direction (close vs. open) using OHLCV data from 1997–2020 with train/val/test splits and AUC as the key metric.",
      image: "/img/data/amzn-stock-placeholder.png",
      link: "#", // replace with your notebook / repo link
    },
    // NEW LATEST NOTEBOOK 2
    {
      id: 103,
      title: "Keyword Detection on Medical Websites",
      category: "analysis",
      description:
        "Built an NLP pipeline to detect cancer tumor board information in HTML pages using BeautifulSoup text extraction, feature engineering, and multi-class classification for tumor board relevance.",
      image: "/img/data/tumorboard-placeholder.png",
      link: "#", // replace with your notebook / repo link
    },

    // -- PLACEHOLDER 1 ---------------------------------------------
    {
      id: 100,
      draft: false, // flip to false when ready
      title: "Modelling Churn in Energy Company",
      category: "analysis",
      description:
        "BCG Gamma take-home: build and evaluate a churn model for SME energy clients. Explore variable importance, power vs. consumption correlation, and channel effects; simulate a 20% retention offer policy.",
      image: "/img/data/churn-placeholder.png",
      link: "#", // add your repo / notebook link
      demo: "#", // optional
    },
    // -- PLACEHOLDER 2 ---------------------------------------------
    {
      id: 101,
      draft: false, // flip to false when ready
      title: "Model Building on a Synthetic Dataset",
      category: "analysis",
      description:
        "Capital One take-home: train on 5,000×254 features, predict 1,000 targets. Deliver MSE-optimized predictions, brief methodology, and (optional) reproducible model artifact.",
      image: "/img/data/synth-placeholder.png",
      link: "#",
      demo: "#",
    },

    // VISIBLE CARDS (ordered)
    {
      id: 1,
      title: "GANs for Data Augmentation",
      category: "analysis",
      description:
        "Implemented DCGAN and Conditional GAN (TensorFlow) to generate MNIST/Fashion-MNIST for augmentation and class balancing.",
      image: "/img/data/gan.PNG",
      link: "https://github.com/SathvikKV/Generative-Adversarial-Networks-GANs-/blob/main/notebooks/002443505_GAN_Notebook.ipynb",
      demo: "https://sathvikkv.github.io/Generative-Adversarial-Networks-GANs-/",
    },
    {
      id: 2,
      title: "Neural Network Type Classifier",
      category: "analysis",
      description:
        "Built a classifier to predict the likely NN architecture class for a dataset using discriminative features.",
      image: "/img/data/cnn.png",
      link: "https://github.com/SathvikKV/Neural_Network_Type_Classifier/blob/main/Neural_Network_Type_Classifier.ipynb",
    },
    {
      id: 3,
      title: "Video Game Sales & Causality",
      category: "analysis",
      description:
        "Analyzed video game sales and explored causal relationships using Python.",
      image: "/img/data/vd.jpg",
      link: "https://github.com/SathvikKV/Video_Games_Sales_Causality/blob/main/002443505_Causality_Crash_Course_Worked_Example.ipynb",
    },
    {
      id: 4,
      title: "Causality: F1 & Rain",
      category: "analysis",
      description:
        "Causal inference to test whether rain increases DNFs in Formula 1 races.",
      image: "/img/data/f1.jpg",
      link: "https://github.com/SathvikKV/F1_Causal_Analysis/blob/main/002443505_Causality_Crash_Course_Written_Section.ipynb",
    },
    {
      id: 5,
      title: "YouTube Virality — Data Understanding",
      category: "analysis",
      description:
        "Feature exploration and data understanding for a virality prediction task.",
      image: "/img/data/yt.jpg",
      link: "https://github.com/SathvikKV/ML_YoutubeVirality/blob/main/Sathvik_Vadavatha_MachineLearningConcepts_UnderstandingData.ipynb",
    },
    {
      id: 6,
      title: "Ocean Acidification Analysis",
      category: "analysis",
      description:
        "Explored CO₂ emissions and their effect on ocean acidification using environmental datasets.",
      image: "/img/data/ocean.png",
      link: "https://github.com/SathvikKV/Ocean_Acidification/blob/main/Ocean_Acidification.ipynb",
    },
    {
      id: 7,
      title: "Sales Dashboard (Power BI)",
      category: "visualization",
      description:
        "Interactive dashboard analyzing quarterly sales by region and product line.",
      image: "/img/data/sales-dashboard.png",
      link: "#",
    },
    {
      id: 8,
      title: "Ocean CO₂ Impact (Tableau)",
      category: "visualization",
      description:
        "Visualized Pacific Ocean acidification trends relative to CO₂ emissions.",
      image: "/img/data/co2-viz.png",
      link: "#",
    },
  ];

  const visible = dashboards.filter((d) => !d.draft);

  return (
    <section id="data-portfolio" className="py-20 relative bg-gray-950">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[30%] h-[30%] rounded-full bg-gradient-to-br from-orange-500/5 to-red-600/5 blur-3xl" />
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
            Data Portfolio
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Notebooks & Dashboards
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-red-600 rounded-full mb-6" />
          <p className="text-gray-300 max-w-2xl">
            Explore notebooks and dashboards showcasing my data storytelling and
            visualization skills.
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
                  All
                </TabsTrigger>
                <TabsTrigger
                  value="analysis"
                  className="data-[state=active]:bg-orange-500 data-[state=active]:text-white"
                >
                  Data Analysis
                </TabsTrigger>
                <TabsTrigger
                  value="visualization"
                  className="data-[state=active]:bg-orange-500 data-[state=active]:text-white"
                >
                  Data Visualization
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              <DashboardGrid items={visible} />
            </TabsContent>

            <TabsContent value="analysis" className="mt-0">
              <DashboardGrid
                items={visible.filter((d) => d.category === "analysis")}
              />
            </TabsContent>

            <TabsContent value="visualization" className="mt-0">
              <DashboardGrid
                items={visible.filter(
                  (d) => d.category === "visualization"
                )}
              />
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}

function DashboardGrid({ items }: { items: DashItem[] }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 * index }}
        >
          <a
            href={item.link || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="block h-full"
          >
            <Card className="bg-gray-900 border-0 overflow-hidden h-full hover:shadow-[0_0_25px_rgba(249,115,22,0.15)] transition-all duration-300 group">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2 group-hover:text-orange-500 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </CardContent>
            </Card>
          </a>
        </motion.div>
      ))}
    </div>
  );
}
