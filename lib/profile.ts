// Single source of truth for everything on the home page that isn't a project.

export const profile = {
  name: "Sathvik Vadavatha",
  firstName: "Sathvik",
  role: "Software & AI Engineer",
  current: { title: "Software & AI Engineer", company: "Stratafi" },
  location: "Boston, MA",
  email: "vadavatha.s@northeastern.edu",
  phone: "+1 (217) 305-5622",
  phoneHref: "tel:+12173055622",
  github: "https://github.com/SathvikKV",
  linkedin: "https://www.linkedin.com/in/sathvik-vadavatha/",
  resume: "/resume/resume.pdf",
  photo: "/img/profile/profile.jpg",
  roles: ["agentic AI systems", "real-time data platforms", "ML pipelines", "production software"],
  tagline:
    "I engineer AI systems and the data platforms underneath them, from streaming pipelines and feature stores to agentic workflows running in production.",
  bio: "I'm a software and AI engineer designing and deploying end to end AI systems across fintech and healthcare, spanning full stack application development, agentic workflows, cloud infrastructure, and ML model integration. I take systems from the data layer through model deployment to production facing applications, with hands on work across AWS, Azure, and GCP in regulated and enterprise environments.",
};

export const heroStats = [
  { value: 2, suffix: "M+", label: "loyalty members served by pipelines I built" },
  { value: 10, suffix: "M+", label: "transactions processed by TxSentry" },
  { value: 70, suffix: "%", label: "fewer pipeline failures after re-architecture", prefix: "~" },
  { value: 20, suffix: "+", label: "AI, data & engineering projects shipped" },
];

export type Capability = { title: string; text: string; icon: "database" | "rocket" | "infra" | "chart" | "cpu" | "spark" };

export const capabilities: Capability[] = [
  {
    icon: "rocket",
    title: "AI & Cloud Engineering",
    text: "Built agentic AI systems and AI driven browser agents for real time equipment data extraction and underwriting automation, deployed on AWS and Azure in regulated environments.",
  },
  {
    icon: "database",
    title: "Data Engineering",
    text: "Built production data pipelines on Databricks, Snowflake, and Kafka processing real time and batch data at scale, from legacy PLM systems to travel and fintech platforms.",
  },
  {
    icon: "cpu",
    title: "Applied Machine Learning",
    text: "Delivered SageMaker training and inference pipelines with MLflow tracking, and built fraud detection and recommendation models used in production.",
  },
  {
    icon: "infra",
    title: "Infrastructure as Code",
    text: "Architected Terraform and Step Functions based ML platforms provisioning compliant, repeatable environments across AWS and Azure for training, deployment, and inference.",
  },
  {
    icon: "chart",
    title: "Data Analytics",
    text: "Turned raw data into clear insights using Python and Pandas, with a focus on feature engineering and metric selection for downstream ML and recommendation systems.",
  },
  {
    icon: "spark",
    title: "Product & Execution",
    text: "Founded and built Sanq.ai, a multi tenant restaurant inventory platform, owning everything from backend architecture to the mobile app used by a live pilot customer.",
  },
];

export interface Experience {
  company: string;
  logo?: string;
  position: string;
  location: string;
  period: string;
  /** One line on what the role was, shown before the row is opened. */
  summary: string;
  stack: string[];
  responsibilities: string[];
  earlier?: boolean;
}

export const experiences: Experience[] = [
  {
    company: "Stratafi",
    position: "Software and AI Engineer",
    location: "Boston, MA",
    period: "May 2026 – Present",
    summary: "Agentic AI for equipment-finance underwriting: browser agents that read auction listings and a credit engine wired to Plaid and Enigma.",
    stack: ["Agentic AI", "Browser Agents", "Postgres", "Plaid", "Enigma"],
    responsibilities: [
      "Built agentic AI systems supporting Stratafi's equipment financing underwriting platform, automating equipment identification and data enrichment to speed up credit decisioning, cutting manual equipment review time by ~35% for loan officers evaluating equipment backed loans.",
      "Developed an AI driven agent browser that autonomously navigates auction and marketplace sites to extract structured equipment data (make, model, specs, images, price) from a listing URL or lot number, reducing per listing data entry time from ~10 minutes to under 30 seconds.",
      "Integrated Plaid for real time bank account and cash flow verification and Enigma for business bankruptcy and risk checks into Stratafi's credit engine, cutting borrower risk assessment turnaround time by ~40% within the underwriting pipeline.",
      "Extended Postgres schemas mapping independently sourced equipment market data onto Stratafi's existing classification taxonomy across 80+ categories and 100K+ models, enabling scalable comparison against third party valuation benchmarks.",
    ],
  },
  {
    company: "Arrivia Inc",
    position: "Data & AI Engineer (Contract)",
    location: "Boston, MA",
    period: "Jan 2026 – May 2026",
    summary: "Unified 5+ travel data sources on Azure Databricks to power an agentic recommendation platform for 2M+ loyalty members.",
    stack: ["Azure Databricks", "Azure Data Lake", "Python", "Azure DevOps"],
    responsibilities: [
      "Consolidated 5+ third party travel platforms across booking, rewards, and behavioral data into a unified Azure Data Lake supporting an agentic travel recommendation platform for 2M+ loyalty members, eliminating data silos and enabling real time agent reasoning.",
      "Engineered real time data ingestion and feature services on Azure Databricks feeding the recommendation platform, improving recommendation relevance for product and marketing teams.",
      "Designed event driven workflows transforming loyalty and transaction patterns into structured ML feature sets, cutting feature preparation time by ~40% for downstream recommendation and targeting models.",
      "Optimized distributed Python services through parallelism tuning and memory configuration, reducing pipeline execution time by ~30% and improving feature freshness for 10K+ daily active users.",
      "Automated CI/CD pipelines on Azure DevOps for deployment of data services and notebooks across dev and production, cutting manual deployment time by ~50%.",
    ],
  },
  {
    company: "Triple Ring Technologies",
    logo: "/img/projects/triple-ring.jpeg",
    position: "ML Engineer Intern",
    location: "Boston, MA",
    period: "Jun 2025 – Sep 2025",
    summary: "Built an AWS ML platform from scratch for FDA-regulated medical devices: Terraform, SageMaker, Step Functions, MLflow.",
    stack: ["AWS SageMaker", "Terraform", "Step Functions", "MLflow", "Glue"],
    responsibilities: [
      "Established a new ML platform from the ground up on AWS using Terraform and Step Functions for FDA regulated medical device software, provisioning compliant dev/staging/prod environments from scratch and reducing setup time from days to under an hour.",
      "Delivered end to end SageMaker training and inference pipelines for Random Forest and U-Net CNN models with MLflow tracking across 3 model versions, cutting deployment time by ~60% versus manual processes.",
      "Orchestrated model workflows on AWS Step Functions across 6 pipeline stages, eliminating manual handoffs and ensuring full traceability for FDA audit submissions.",
      "Constructed a scalable data registry on AWS Glue and S3 organizing medical data across raw, curated, and feature layers, cutting ML engineer discovery time by ~50% and ensuring versioned inputs across all runs.",
      "Configured SageMaker model monitoring to track inference performance and data drift across deployed models, catching degradation before it reached clinical workflows.",
    ],
  },
  {
    company: "ITC Infotech USA",
    logo: "/img/projects/itcinfotech.png",
    position: "Data Engineer",
    location: "Frederick, MD",
    period: "Apr 2022 – Dec 2023",
    summary: "Real-time and batch pipelines moving Baker Hughes product data from Windchill into Snowflake, with ~70% fewer failures.",
    stack: ["PySpark", "Databricks", "Delta Lake", "Kafka", "Snowflake", "Airflow"],
    responsibilities: [
      "Refactored Python and PySpark services extracting product and engineering change data from Baker Hughes' legacy PLM system (Windchill) across 6 product domains, increasing daily throughput from ~1,500 unreliable records to 3,000-5,000 stable records in Snowflake.",
      "Re-architected batch processing onto Databricks with Delta Lake, introducing incremental ingestion and audit ready versioning and reducing pipeline failure rate by ~70%.",
      "Streamlined event driven Kafka and PySpark Structured Streaming services capturing real time product change events from Windchill, reducing data latency from 8+ hours to under 5 minutes for engineering and operations teams.",
      "Standardized Snowflake schemas across raw, curated, and reporting tiers covering 10+ analytical tables, unifying KPIs for product lifecycle and revision history consumed by engineering and supply chain teams.",
      "Enforced schema contracts via Airflow based validation logic before warehouse loads, diagnosing and resolving 40+ production failures and cutting recurring incidents by ~65% over 6 months.",
    ],
  },
  {
    company: "ITC Ltd · PSPD",
    logo: "/img/projects/itcpspd.png",
    position: "Engineering Intern",
    location: "Hyderabad, India",
    period: "Jun 2021 – Aug 2021",
    summary: "Lean process analysis and a Tableau downtime dashboard for a paper and packaging plant.",
    stack: ["Tableau", "Lean", "IoT"],
    earlier: true,
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
    period: "Jun 2020 – Aug 2020",
    summary: "Digital twin simulation of a robotic sheet-metal line in DELMIA and CATIA.",
    stack: ["DELMIA", "CATIA", "Digital Twin"],
    earlier: true,
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
    period: "Jun 2019 – Jul 2019",
    summary: "Programmed UR10 cobots to automate three production stations.",
    stack: ["UR10 Cobot", "Automation"],
    earlier: true,
    responsibilities: [
      "Programmed the UR10 collaborative robot to automate three production line stations, achieving an 80% automation rate and reducing human effort by 10 FTEs.",
      "Led the on-site installation and calibration of a UR robot for a client-specific palletizing application.",
      "Evaluated ROI and implementation impact of cobots across multiple industrial use cases, supporting business cases for adoption.",
    ],
  },
];

export const education = [
  {
    degree: "M.S. Information Systems",
    focus: "Data Analytics & Engineering",
    institution: "Northeastern University",
    logo: "/img/projects/neu.png",
    location: "Boston, MA",
    period: "2024 – 2025",
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
    degree: "B.S. Mechanical Engineering",
    focus: "Product Design & Robotics",
    institution: "University of Illinois Urbana-Champaign",
    logo: "/img/projects/uiuc.png",
    location: "Champaign, IL",
    period: "2018 – 2022",
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

export type SkillGroup = { title: string; blurb: string; skills: string[] };

export const skillGroups: SkillGroup[] = [
  {
    title: "Generative & Agentic AI",
    blurb: "LLM apps, multi-agent orchestration, retrieval and tool use.",
    skills: [
      "LangChain",
      "LangGraph",
      "OpenAI/Anthropic APIs",
      "RAG",
      "Agentic AI Systems",
      "Prompt Engineering",
      "MCP",
      "Claude Code",
      "HuggingFace",
    ],
  },
  {
    title: "Data Engineering",
    blurb: "Batch and streaming pipelines, lakehouses and warehouses.",
    skills: ["Apache Spark", "PySpark", "Databricks", "Delta Lake", "Snowflake", "dbt", "Kafka", "Airflow", "Hadoop"],
  },
  {
    title: "Machine Learning",
    blurb: "Modelling, explainability and the MLOps to ship it.",
    skills: [
      "PyTorch",
      "TensorFlow",
      "Keras",
      "Scikit-learn",
      "MLflow",
      "SHAP",
      "NetworkX",
      "Time Series",
      "Statistics",
      "Probability",
    ],
  },
  {
    title: "Cloud & DevOps",
    blurb: "Reproducible infrastructure across all three major clouds.",
    skills: ["AWS", "Azure", "GCP", "Terraform", "Docker", "Git", "GitHub Actions", "Azure DevOps", "CI/CD"],
  },
  {
    title: "Databases & Vector Stores",
    blurb: "Relational, document and vector storage.",
    skills: ["SQL", "PostgreSQL", "MySQL", "MongoDB", "DynamoDB", "Supabase", "Pinecone", "Weaviate"],
  },
  {
    title: "Languages & Web",
    blurb: "Typed backends and fast product frontends.",
    skills: [
      "Python",
      "TypeScript",
      "Java",
      "R",
      "FastAPI",
      "Next.js",
      "React",
      "Vue.js",
      "Tailwind CSS",
      "Streamlit",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "Analytics & BI",
    blurb: "Exploration and storytelling with data.",
    skills: ["Pandas", "NumPy", "Seaborn", "Tableau", "Power BI", "Excel", "Jira", "PTC Windchill"],
  },
  {
    title: "Mechanical Engineering",
    blurb: "Where it started: design, simulation and robotics.",
    skills: ["SolidWorks", "AutoCAD", "MATLAB", "LabVIEW"],
  },
];

// Brand logos available under /public/img/icons, keyed by the skill name.
const iconFiles: Record<string, string> = {
  Airflow: "airflow",
  AutoCAD: "autocad",
  AWS: "aws",
  Azure: "azure",
  CSS: "css",
  Docker: "docker",
  Excel: "excel",
  GCP: "gcp",
  Git: "git",
  Hadoop: "hadoop",
  HTML: "html",
  Java: "java",
  Jira: "jira",
  Keras: "keras",
  LabVIEW: "labview",
  LangChain: "langchain",
  LangGraph: "langgraph",
  MATLAB: "matlab",
  MongoDB: "mongodb",
  NumPy: "numpy",
  Pandas: "pandas",
  PostgreSQL: "postgresql",
  "Power BI": "powerbi",
  Probability: "probability",
  "PTC Windchill": "ptcwindchill",
  Python: "python",
  R: "r",
  React: "react",
  Seaborn: "seaborn",
  Snowflake: "snowflake",
  SolidWorks: "solidworks",
  SQL: "sql",
  Statistics: "statistics",
  Streamlit: "streamlit",
  Tableau: "tableau",
  TensorFlow: "tensorflow",
  Terraform: "terraform",
  "Time Series": "timeseries",
  "Vue.js": "vuejs",
};

export function skillIcon(name: string): string | undefined {
  const file = iconFiles[name];
  return file ? `/img/icons/${file}.png` : undefined;
}

// Logos for the marquee, roughly ordered by how much they matter to the story.
export const marqueeLogos = [
  "Python",
  "AWS",
  "Azure",
  "GCP",
  "Snowflake",
  "Airflow",
  "LangChain",
  "LangGraph",
  "Terraform",
  "Docker",
  "PostgreSQL",
  "TensorFlow",
  "React",
  "Pandas",
  "NumPy",
  "MongoDB",
  "Hadoop",
  "Tableau",
  "Power BI",
  "Git",
  "Keras",
  "Streamlit",
  "SQL",
  "Java",
];

export interface LabItem {
  title: string;
  kind: "Notebook" | "Dashboard" | "Take-home";
  description: string;
  image?: string;
  link?: string;
  demo?: string;
}

export const labItems: LabItem[] = [
  {
    title: "GANs for Data Augmentation",
    kind: "Notebook",
    description:
      "Implemented DCGAN and Conditional GAN (TensorFlow) to generate MNIST/Fashion-MNIST for augmentation and class balancing.",
    image: "/img/data/gan.PNG",
    link: "https://github.com/SathvikKV/Generative-Adversarial-Networks-GANs-/blob/main/notebooks/002443505_GAN_Notebook.ipynb",
    demo: "https://sathvikkv.github.io/Generative-Adversarial-Networks-GANs-/",
  },
  {
    title: "Stock Price Direction (AMZN)",
    kind: "Notebook",
    description:
      "Time-series classification predicting next-day AMZN price direction from OHLCV data (1997–2020) with train/val/test splits and AUC as the key metric.",
  },
  {
    title: "Keyword Detection on Medical Websites",
    kind: "Notebook",
    description:
      "NLP pipeline detecting cancer tumor board information in HTML pages using BeautifulSoup extraction, feature engineering and multi-class classification.",
  },
  {
    title: "Neural Network Type Classifier",
    kind: "Notebook",
    description: "Built a classifier to predict the likely NN architecture class for a dataset using discriminative features.",
    image: "/img/data/cnn.png",
    link: "https://github.com/SathvikKV/Neural_Network_Type_Classifier/blob/main/Neural_Network_Type_Classifier.ipynb",
  },
  {
    title: "Churn Modelling for an Energy Company",
    kind: "Take-home",
    description:
      "BCG Gamma take-home: churn model for SME energy clients, variable importance, channel effects, and a simulated 20% retention-offer policy.",
  },
  {
    title: "Causality: F1 & Rain",
    kind: "Notebook",
    description: "Causal inference to test whether rain increases DNFs in Formula 1 races.",
    image: "/img/data/f1.jpg",
    link: "https://github.com/SathvikKV/F1_Causal_Analysis/blob/main/002443505_Causality_Crash_Course_Written_Section.ipynb",
  },
  {
    title: "Video Game Sales & Causality",
    kind: "Notebook",
    description: "Analyzed video game sales and explored causal relationships using Python.",
    image: "/img/data/vd.jpg",
    link: "https://github.com/SathvikKV/Video_Games_Sales_Causality/blob/main/002443505_Causality_Crash_Course_Worked_Example.ipynb",
  },
  {
    title: "Model Building on a Synthetic Dataset",
    kind: "Take-home",
    description:
      "Capital One take-home: 5,000×254 features, 1,000 targets, MSE-optimized predictions with a reproducible methodology.",
  },
  {
    title: "YouTube Virality: Data Understanding",
    kind: "Notebook",
    description: "Feature exploration and data understanding for a virality prediction task.",
    image: "/img/data/yt.jpg",
    link: "https://github.com/SathvikKV/ML_YoutubeVirality/blob/main/Sathvik_Vadavatha_MachineLearningConcepts_UnderstandingData.ipynb",
  },
  {
    title: "Ocean Acidification Analysis",
    kind: "Notebook",
    description: "Explored CO₂ emissions and their effect on ocean acidification using environmental datasets.",
    image: "/img/data/ocean.png",
    link: "https://github.com/SathvikKV/Ocean_Acidification/blob/main/Ocean_Acidification.ipynb",
  },
  {
    title: "Ocean CO₂ Impact",
    kind: "Dashboard",
    description: "Tableau visualization of Pacific Ocean acidification trends relative to CO₂ emissions.",
  },
  {
    title: "Quarterly Sales Dashboard",
    kind: "Dashboard",
    description: "Interactive Power BI dashboard analyzing quarterly sales by region and product line.",
  },
];
