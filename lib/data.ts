export type ProjectDomain = "ai" | "data" | "ml" | "fullstack" | "mechanical";

export const domainLabels: Record<ProjectDomain, string> = {
    ai: "AI & Agents",
    data: "Data Engineering",
    ml: "Machine Learning",
    fullstack: "Full-Stack",
    mechanical: "Mechanical",
};

export interface Project {
    id: number;
    title: string;
    slug: string;
    description: string;
    longDescription?: string;
    challenges?: string[];
    solutions?: string[];
    techStackDetailed?: {
        category: string;
        technologies: string[];
    }[];
    image: string;
    category: "information-systems" | "mechanical";
    /** Primary discipline, used for filtering and accent colour. */
    domain: ProjectDomain;
    /** Short headline result shown on cards. */
    metric?: string;
    gallery?: string[];
    tags: string[];
    demoUrl?: string;
    githubUrl?: string;
    featured?: boolean;
}

export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    content: string;
    tags: string[];
}

export const projects: Project[] = [
    {
        id: 21,
        title: "Sanq.ai",
        slug: "sanq-ai",
        domain: "ai",
        metric: "Founder · live pilot",
        description: "Founded and built a multi tenant restaurant inventory management platform used by a live pilot restaurant; the platform uses AI to read photos of invoices and menus, automatically match items to inventory, and flag anything it is not confident about instead of guessing.",
        longDescription: "Sanq.ai is a multi tenant restaurant inventory management SaaS platform designed to eliminate manual data entry. Built as the sole technical founder, the platform integrates directly with WhatsApp and Telegram, allowing restaurant staff to simply send a photo of an invoice or kitchen indent slip. The system uses AI to extract items, quantities, and units, and then intelligently reconciles them against existing inventory. To maintain data integrity, the AI flags low confidence matches for human review rather than silently guessing. The platform is currently actively used by a live pilot customer.",
        challenges: [
            "Ensuring high data integrity when extracting unstructured data from varied invoice formats, without letting uncertain matches corrupt inventory records.",
            "Designing a frictionless user experience for restaurant staff without requiring them to learn a new app.",
            "Building a secure, multi tenant architecture that isolates data across different restaurant clients."
        ],
        solutions: [
            "Implemented a confidence threshold system that flags ambiguous items for review instead of forcing incorrect matches.",
            "Integrated with WhatsApp and Telegram for seamless photo uploads directly from the kitchen.",
            "Leveraged Supabase and PostgreSQL to enforce schema per tenant isolation, ensuring scalable and secure data management."
        ],
        techStackDetailed: [
            { category: "Frontend", technologies: ["Expo React Native"] },
            { category: "Backend", technologies: ["FastAPI", "Supabase", "PostgreSQL"] },
            { category: "AI & Storage", technologies: ["Google Gemini", "AWS S3"] }
        ],
        image: "/gradient-placeholder.svg",
        category: "information-systems",
        tags: ["FastAPI", "Supabase", "PostgreSQL", "Expo React Native"],
        featured: true,
    },
    {
        id: 22,
        title: "CitadelTwin",
        slug: "citadel-twin",
        domain: "ml",
        metric: "0.89 F1 wall detection",
        description: "Built a platform that converts 2D architectural blueprints into interactive 3D building models in seconds instead of hours; the underlying pipeline detects floors and rooms, labels them correctly, and validates that the layout makes physical sense, reaching 89% accuracy on wall detection.",
        longDescription: "CitadelTwin is a full stack platform that automates the conversion of 2D architectural blueprints into navigable, interactive 3D building models. I contributed specifically to the computer vision pipeline, focusing on dimension annotation accuracy, room labeling, and wall detection, where we achieved an F1 score of 0.89. The overall pipeline processes the image through floor detection, spatial assignment, and topology validation before exporting a final GLB file. This automation reduces 3D model generation time from hours of manual architect work down to seconds.",
        challenges: [
            "Accurately identifying walls and boundaries in noisy, non standard architectural blueprints.",
            "Ensuring spatial constraints and topological validity when projecting 2D lines into 3D geometry.",
            "Maintaining low latency processing to keep the generation time under a few seconds."
        ],
        solutions: [
            "Trained and fine tuned YOLO models for precise room and wall detection, achieving 89% accuracy.",
            "Integrated EasyOCR for robust dimension and label extraction from the blueprints.",
            "Utilized trimesh to construct and validate the final 3D geometry before GLB export."
        ],
        techStackDetailed: [
            { category: "Frontend", technologies: ["React", "TypeScript"] },
            { category: "Backend", technologies: ["FastAPI", "HuggingFace Spaces"] },
            { category: "Computer Vision", technologies: ["YOLO", "EasyOCR", "trimesh"] }
        ],
        image: "/gradient-placeholder.svg",
        category: "information-systems",
        tags: ["React", "TypeScript", "FastAPI", "YOLO", "EasyOCR", "trimesh"],
        featured: true,
    },
    {
        id: 1,
        title: "NutriGuard AI",
        slug: "nutriguard-ai",
        domain: "ai",
        metric: "OCR → GPT-4 → RAG",
        description:
            "Built an AI-powered nutrition assistant using Azure OCR and GPT-4 to extract ingredients, flag harmful additives, and summarize health risks.",
        longDescription:
            "NutriGuard AI is a comprehensive nutrition assistant designed to help users make informed food choices. By leveraging Azure OCR for instant ingredient list scanning and GPT-4 for intelligent analysis, it provides detailed breakdowns of potential health risks, macro estimations, and personalized dietary advice. The system also features a RAG-based Q&A system for exploring nutritional science.",
        challenges: [
            "Extracting accurate text from curved or poor-quality packaging images.",
            "Mapping unstructured ingredient names to a standardized database for risk analysis.",
            "Providing real-time responses while handling heavy ML workloads.",
        ],
        solutions: [
            "Utilized Azure AI Vision for robust OCR capabilities.",
            "Implemented a vector database (Pinecone) to semantically match ingredients to known health risks.",
            "Optimized the FastAPI backend for asynchronous processing to handle concurrent requests efficiently.",
        ],
        techStackDetailed: [
            { category: "Frontend", technologies: ["React Native", "Expo"] },
            { category: "Backend", technologies: ["FastAPI", "Python", "AWS EC2"] },
            { category: "AI & Data", technologies: ["Azure OCR", "GPT-4", "Pinecone"] },
        ],
        image: "/img/projects/nutriguard_ai.PNG",
        category: "information-systems",
        tags: ["OCR", "FastAPI", "RAG", "GPT-4", "Azure", "Pinecone", "AWS"],
        githubUrl: "https://github.com/SathvikKV/NutriGuardAI",
        featured: true,
    },
    {
        id: 19,
        title: "TxSentry",
        slug: "txsentry",
        domain: "ml",
        metric: "0.994 PR-AUC · 10M+ txns",
        description: "Real-Time Fraud Detection & Autonomous Investigation System. Built a large-scale fraud detection platform processing 10M+ financial transactions using a hybrid ML and agentic architecture.",
        longDescription: "Engineered a multi-model detection pipeline combining LightGBM (0.994 PR-AUC), Isolation Forest, and graph-based anomaly detection (NetworkX), enhanced with SHAP explainability for transparent decision-making. Designed an autonomous investigation system using LangGraph, where agents dynamically plan and execute tool calls (via MCP) to analyze transaction patterns, graph relationships, and behavioral signals, producing structured case memos. Implemented a modular system supporting real-time alert triage, graph analysis, and autonomous reasoning, reducing manual investigation effort and enabling scalable fraud operations.",
        challenges: [
            "Processing over 10M financial transactions in a high-scale environment with strict latency.",
            "Handling fraud drift and detecting behavioral anomalies without prior labels.",
            "Bridging the gap between an LLM reasoning agent and massive data lake resources."
        ],
        solutions: [
            "Utilized a multi-model approach with LightGBM and Isolation Forest for robust detection.",
            "Deployed a stateful LangGraph agent for autonomous investigation, replacing manual triage.",
            "Built an MCP Tool Server exposing 11 specialized tools for transaction, relationship, and risk analysis."
        ],
        techStackDetailed: [
            { category: "Machine Learning", technologies: ["LightGBM", "Isolation Forest", "SHAP"] },
            { category: "Agentic AI", technologies: ["LangGraph", "FastAPI"] },
            { category: "Data Engineering", technologies: ["PySpark", "Graph Analytics"] }
        ],
        image: "/img/projects/tx_1.PNG",
        gallery: ["/img/projects/tx_1.PNG", "/img/projects/tx_2.PNG", "/img/projects/tx_3.PNG", "/img/projects/tx_4.PNG", "/img/projects/tx_5.PNG", "/img/projects/tx_6.PNG"],
        category: "information-systems",
        tags: ["Machine Learning", "LangGraph", "PySpark", "Graph Analytics", "SHAP", "FastAPI"],
        githubUrl: "https://github.com/SathvikKV/TxSentry",
        featured: true,
    },
    {
        id: 16,
        title: "NimbusBill",
        slug: "nimbusbill",
        domain: "data",
        metric: "Idempotent SCD2 billing",
        description:
            "A warehouse-native, usage-based billing engine built on a Snowflake Medallion architecture orchestrated by Airflow.",
        longDescription:
            "NimbusBill treats the Data Warehouse as the core billing engine. Raw usage telemetry events flow through a Medallion Architecture where metered pricing is applied via SQL entirely inside Snowflake. The system features idempotency via MERGE functions, SCD Type 2 dimension tracking for pricing changes, and automated late generation reconciliation for events arriving after an invoice is issued.",
        challenges: [
            "Guaranteeing idempotent data ingestion without creating duplicate billing events.",
            "Handling historical changes to customers and pricing rates safely.",
            "Reconciling late-arriving telemetry events after invoices have already been generated.",
        ],
        solutions: [
            "Utilized Snowflake MERGE commands and SCD Type 2 dimensions (EFFECTIVE_START/END).",
            "Orchestrated daily, monthly-close, and late-arrival cron DAGs via Apache Airflow.",
            "Built a Next.js billing dashboard connected securely to Snowflake via a FastAPI Rest API.",
        ],
        techStackDetailed: [
            { category: "Frontend", technologies: ["Next.js", "Tailwind CSS"] },
            { category: "Orchestration", technologies: ["Apache Airflow 2.7", "Docker Compose"] },
            { category: "Data & Backend", technologies: ["Snowflake", "FastAPI", "Pydantic"] },
        ],
        image: "/img/projects/nimbus1.png",
        gallery: ["/img/projects/nimbus1.png", "/img/projects/nimbus2.png", "/img/projects/nimbus3.png"],
        category: "information-systems",
        tags: ["Snowflake", "Airflow", "FastAPI", "Next.js", "Data Engineering"],
        githubUrl: "https://github.com/SathvikKV/NimbusBill",
        featured: true,
    },
    {
        id: 20,
        title: "PitWall Live",
        slug: "pitwall-live",
        domain: "ai",
        metric: "Real-time voice agent",
        description: "AI-Powered F1 Race Strategy Assistant. Developed a real-time AI-powered race engineer dashboard that enables multimodal interaction with live Formula 1 telemetry data.",
        longDescription: "Built a multimodal agent using Gemini Live API that processes live telemetry streams and executes strategic tools (e.g., pit projections, undercut estimation, strategy recommendations) through a FastAPI backend. Designed a low-latency architecture with Next.js frontend, Redis caching for high-frequency telemetry, and WebRTC-based audio interaction, enabling real-time conversational analysis of race scenarios. Integrated external data sources (FastF1/OpenF1, Wikipedia) and deployed the system on Google Cloud using Terraform and Cloud Run for scalable, serverless operation.",
        challenges: [
            "Synchronizing live voice requests with real-time NDJSON telemetry simulations.",
            "Normalizing GPS data across multiple years (2024 vs 2025) for pixel-perfect track mapping.",
            "Preventing the LLM from 'reading out' raw tool JSON coordinates conversationally."
        ],
        solutions: [
            "Built a custom interruptible sleep system in FastAPI to synchronize simulations with voice.",
            "Leveraged Gemini 2.5 Live API and Redis for high-speed state management and instant lap seeking.",
            "Designed aggressive prompting strategies to enforce natural language tool execution."
        ],
        techStackDetailed: [
            { category: "Frontend", technologies: ["Next.js", "WebRTC"] },
            { category: "Backend", technologies: ["FastAPI", "Redis", "Terraform", "Google Cloud"] },
            { category: "AI", technologies: ["Gemini Live API"] }
        ],
        image: "/img/projects/pitwall.png",
        category: "information-systems",
        tags: ["Gemini Live API", "Next.js", "FastAPI", "Redis", "WebRTC", "Google Cloud", "Terraform"],
        githubUrl: "https://github.com/SathvikKV/PitWall-F1Engine",
        featured: true,
    },
    {
        id: 15,
        title: "MovieMeter",
        slug: "moviemeter",
        domain: "data",
        metric: "Medallion + LightGBM",
        description:
            "An AI-powered movie analytics platform that predicts Oscar potential and measures audience trust gaps using Snowflake.",
        longDescription:
            "MovieMeter tracks and analyzes cinematic data ingested from TMDB, Rotten Tomatoes, and Letterboxd via an Airflow-orchestrated Snowflake data pipeline. It features an 'Oscar Bait Predictor' powered by LightGBM and NLP, quantifies creative risk scores based on budget/genre patterns, and tracks social hype decay post-release. The platform identifies 'Trust Gaps' between critic scores and audience reception.",
        challenges: [
            "Ingesting and normalizing unstructured review data from multiple disparate sources.",
            "Building a predictive Machine Learning model accurately estimating awards potential from metadata.",
            "Orchestrating a reliable weekly data pipeline into a Snowflake data warehouse.",
        ],
        solutions: [
            "Implemented a Medallion architecture (Raw -> Clean -> Serve) in Snowflake using Apache Airflow.",
            "Trained a LightGBM classifier alongside TextBlob sentiment analysis for the ML features.",
            "Served the insights via a high-performance Next.js 14 and FastAPI web dashboard.",
        ],
        techStackDetailed: [
            { category: "Frontend", technologies: ["Next.js 14", "Tailwind CSS", "Shadcn UI"] },
            { category: "Backend & Data", technologies: ["FastAPI", "Snowflake", "Apache Airflow"] },
            { category: "Machine Learning", technologies: ["Scikit-Learn", "LightGBM", "TextBlob"] },
        ],
        image: "/img/projects/moviemeter.png",
        category: "information-systems",
        tags: ["Snowflake", "Airflow", "Machine Learning", "FastAPI", "Next.js"],
        githubUrl: "https://github.com/SathvikKV/moviemeter",
        featured: true,
    },
    {
        id: 12,
        title: "Realtime Copilot",
        slug: "realtime-copilot",
        domain: "ai",
        metric: "Live screen + audio context",
        description:
            "A local, privacy-first AI assistant that observes your live screen, understands visual & audio context, and allows real-time querying.",
        longDescription:
            "Realtime Copilot is an intelligent desktop companion that 'watches' and 'listens' to your activity to provide context-aware assistance. Unlike cloud-heavy alternatives, it emphasizes local processing and privacy. It joins a LiveKit room to stream screen and audio data, processing it through a modular node-based worker that performs OCR, vision analysis, and contextual reasoning.",
        challenges: [
            "Streaming low-latency video and audio from the client to the AI worker.",
            "Processing continuous visual frames without overwhelming the LLM or network bandwidth.",
            "Synchronizing audio transcripts with visual context for accurate reasoning.",
        ],
        solutions: [
            "Integrated LiveKit for robust, real-time WebRTC streaming.",
            "Implemented adaptive snapshotting to capture frames only when significant changes are detected.",
            "Created a rolling context window that intelligently merges OCR, vision, and audio transcripts.",
        ],
        techStackDetailed: [
            { category: "Frontend", technologies: ["Next.js 14", "TypeScript", "Tailwind CSS"] },
            { category: "Backend", technologies: ["Node.js", "Express", "LiveKit"] },
            { category: "AI & ML", technologies: ["OpenAI GPT-4", "Whisper", "ElevenLabs"] },
        ],
        image: "/img/projects/realtime.PNG",
        category: "information-systems",
        tags: [
            "Next.js 14",
            "LiveKit",
            "OpenAI",
            "Express",
            "Node.js",
            "TypeScript",
        ],
        githubUrl: "https://github.com/SathvikKV/realtime-copilot",
        featured: true,
    },
    {
        id: 13,
        title: "Resin Manufacturing LIMS",
        slug: "resin-lims",
        domain: "fullstack",
        metric: "Multi-unit lab platform",
        description:
            "A comprehensive Laboratory Information Management System (LIMS) for resin manufacturing operations, managing lab units and R&D tracking.",
        longDescription:
            "This system manages the complete lifecycle of resin batch production, quality testing, and R&D experimentation. It features multi-unit operations support, a financial year-based sequential batch numbering system, quality control validation, and an extensive R&D module for tracking projects, experiments, and tasks. A dynamic KPI dashboard provides real-time metrics for production and team performance.",
        challenges: [
            "Managing complex organizational hierarchies and multi-unit production facilities.",
            "Implementing an automated Financial Year-based sequential batch numbering system.",
            "Building a robust audit trail for all batch operations and draft-to-approval workflows.",
        ],
        solutions: [
            "Developed a structured Next.js 16 frontend and FastAPI backend with PostgreSQL for complex relational data.",
            "Used Celery for background tasks and MinIO for file storage of reports and testing collateral.",
            "Created an extensive R&D module mapping high-level projects down to specific executable tasks.",
        ],
        techStackDetailed: [
            { category: "Frontend", technologies: ["Next.js 16", "TypeScript", "Tailwind CSS"] },
            { category: "Backend", technologies: ["FastAPI", "PostgreSQL", "SQLAlchemy"] },
            { category: "Infrastructure", technologies: ["Docker", "Celery", "MinIO"] },
        ],
        image: "/gradient-placeholder.svg",
        category: "information-systems",
        tags: ["FastAPI", "Next.js", "PostgreSQL", "Docker", "Celery"],
        featured: true,
    },
    {
        id: 14,
        title: "CAD AI",
        slug: "cad-ai",
        domain: "ai",
        metric: "Text → 3D CAD",
        description:
            "An AI-powered tool leveraging GPT-4o and FreeCAD to generate and modify 3D models using natural language prompts.",
        longDescription:
            "CAD AI bridges the gap between natural language descriptions and precise 3D geometry. By utilizing OpenAI's GPT-4o for spatial reasoning and planning, and FreeCAD for deterministic geometry generation, users can create STLs and STEP files conversationally. The platform features an interactive Three.js viewer for real-time model inspection and an iterative editing workflow.",
        challenges: [
            "Translating ambiguous natural language into deterministic geometric constraints.",
            "Integrating a headless FreeCAD environment with a web-based FastAPI backend.",
            "Rendering complex generated 3D models interactively in the browser.",
        ],
        solutions: [
            "Designed a robust prompt engineering pipeline for GPT-4o to output structured FreeCAD Python scripts.",
            "Built a seamless Next.js frontend with React Three Fiber/Three.js to visualize the generated outputs instantly.",
            "Implemented a conversational editing loop allowing users to refine the model step-by-step.",
        ],
        techStackDetailed: [
            { category: "Frontend", technologies: ["Next.js", "React", "Three.js"] },
            { category: "Backend", technologies: ["FastAPI", "Python", "FreeCAD"] },
            { category: "AI", technologies: ["OpenAI GPT-4o"] },
        ],
        image: "/img/projects/cadai.png",
        category: "information-systems",
        tags: ["GPT-4o", "FreeCAD", "FastAPI", "Next.js", "Three.js"],
        githubUrl: "https://github.com/SathvikKV/cadai",
        featured: true,
    },
    {
        id: 17,
        title: "Shakespearean Sonnet Generator",
        slug: "sonnet-generator",
        domain: "ml",
        metric: "Diffusion vs. Transformer",
        description:
            "A comparative deep learning analysis generating Shakespearean sonnets using both Diffusion Models and Autoregressive Transformers.",
        longDescription:
            "This NLP research project explores two fundamentally different deep learning architectures for creative text generation. It contrasts an emerging Text Diffusion Model—diffusing BERT embeddings in a continuous latent space processed via a 1D U-Net—against a classic, from-scratch Autoregressive Encoder-Decoder Transformer. The study deeply analyzes the structural coherence, vocabulary quality, and decoding challenges of continuous latent vectors versus discrete autoregressive token sampling.",
        challenges: [
            "Decoding continuous latent vectors back into discrete text tokens for the diffusion model.",
            "Capturing long-range poetic dependencies and structural rhymes within the sonnet format.",
            "Implementing complex Transformer and U-Net architectures entirely from scratch.",
        ],
        solutions: [
            "Utilized Parts-of-Sentence (POS) conditioning to guide the diffusion process.",
            "Implemented a custom Multi-Head Attention mechanism to track long-range context.",
            "Compared PyTorch (Diffusion) and TensorFlow (Transformer) frameworks side-by-side to evaluate architectural trade-offs.",
        ],
        techStackDetailed: [
            { category: "Diffusion", technologies: ["PyTorch", "1D U-Net", "BERT Embeddings"] },
            { category: "Transformer", technologies: ["TensorFlow", "Multi-Head Attention"] },
            { category: "Domain", technologies: ["Natural Language Processing", "Generative AI"] },
        ],
        image: "/img/projects/shakespeare.png",
        category: "information-systems",
        tags: ["PyTorch", "TensorFlow", "Transformers", "Diffusion Models", "NLP"],
        githubUrl: "https://github.com/SathvikKV/Transformer_vs_Diffusion_Shakespeare_Sonnet_Generator/blob/main/FinalProject_Team4.ipynb",
        featured: true,
    },
    {
        id: 18,
        title: "Multi-Modal Terrain Classification",
        slug: "terrain-classification",
        domain: "ml",
        metric: "6.7× faster · 28 GB fused",
        description:
            "A highly parallelized pipeline classifying off-road terrain roughness using synchronized multi-modal sensor and RGB image data.",
        longDescription:
            "Developed for autonomous vehicle navigation, this high-performance system categorizes terrain roughness by fusing high-frequency IMU/GPS data with visual scenery. The pipeline processes ~28GB of data efficiently through mass parallelization. Sensor data is processed via Dask and multiprocessing (CPU), while 7,068 image embeddings are extracted using a ResNet18 model distributed across GPUs via PyTorch DDP. The final classification utilizes a Deep MLP fusion network.",
        challenges: [
            "Handling massive, highly synchronous multi-modal datasets effectively.",
            "Overcoming CPU shared memory contention and maximizing GPU utilization.",
            "Balancing the recall of 'Rough' terrain to prioritize autonomous vehicle safety.",
        ],
        solutions: [
            "Achieved a 6.7x speedup in data alignment using 16-worker multiprocessing.",
            "Implemented DistributedDataParallel (DDP) for image extraction, reducing time from 771s to 195s.",
            "Demonstrated that a deep class-weighted MLP fusion model outperformed Random Forest baselines by significantly increasing critical terrain recall.",
        ],
        techStackDetailed: [
            { category: "Parallel Computing", technologies: ["PyTorch DDP", "Dask", "Joblib"] },
            { category: "Deep Learning", technologies: ["Torchvision (ResNet18)", "MLP Fusion"] },
            { category: "Data Science", technologies: ["Pandas", "Scikit-Learn"] },
        ],
        image: "/img/projects/terrain.PNG",
        category: "information-systems",
        featured: true,
        tags: ["PyTorch DDP", "Dask", "Computer Vision", "Parallel Computing", "Sensor Fusion"],
        githubUrl: "https://github.com/SathvikKV/Parallel-Multi-Modal-Terrain-Roughness-Classification/blob/main/Final_Project_Team11_Notebook.ipynb",
    },
    {
        id: 11,
        title: "Music Sampler & Discovery App",
        slug: "music-sampler",
        domain: "fullstack",
        metric: "GPT-4o vibe analysis",
        description:
            "A modern AI-powered music discovery app blending a TikTok-style feed with deep LLM analysis and Spotify integration.",
        longDescription:
            "Music Sampler reimagines music discovery by combining the addictive vertical scrolling of social media with deep musical analysis. It doesn't just play music; it explains *why* you might like it, offering sonic breakdowns, lyrical context, and vibe analysis driven by GPT-4o. Users can instantly add tracks to their Spotify playlists, bridging the gap between discovery and collection.",
        challenges: [
            "Creating a smooth, lag-free vertical feed with heavy media assets.",
            "Integrating seamlessly with Spotify's API for playback and playlist management.",
            "Generating meaningful AI insights for thousands of tracks in real-time.",
        ],
        solutions: [
            "Implemented aggressive pre-fetching and caching strategies using TanStack Query.",
            "Built a robust microservices-lite backend with FastAPI to handle heavy lifting.",
            "Designed a custom specialized prompt for GPT-4o to consistently extract musical 'vibes'.",
        ],
        techStackDetailed: [
            { category: "Frontend", technologies: ["Next.js 15", "Radix UI", "Framer Motion"] },
            { category: "Backend", technologies: ["FastAPI", "PostgreSQL", "Redis"] },
            { category: "AI", technologies: ["GPT-4o", "Tavily Search"] },
        ],
        image: "/img/projects/music.PNG",
        category: "information-systems",
        tags: [
            "Next.js 15",
            "FastAPI",
            "OpenAI GPT-4o",
            "PostgreSQL",
            "Docker",
            "Redis",
        ],
        githubUrl: "https://github.com/SathvikKV/Music-Sampler",
        featured: true,
    },
    {
        id: 3,
        title: "FinSight",
        slug: "finsight",
        domain: "ai",
        metric: "Cited answers on SEC filings",
        description:
            "Developed FinSightAI, a full-stack AI platform that analyzes SEC filings using Retrieval-Augmented Generation (RAG).",
        longDescription:
            "FinSightAI is a specialized tool for financial analysts that democratizes access to complex SEC filings. It allows users to ask natural language questions about 10-K and 10-Q reports. The system indexes filings into a vector database, enabling it to retrieve exact paragraphs to ground its answers, significantly reducing hallucinations. We explored Agentic RAG workflows to accurately compare fiscal years.",
        challenges: [
            "Handling massive 10-K/10-Q documents which exceed standard token windows.",
            "Ensuring factual accuracy in financial data analysis.",
            "Comparing financial metrics across different years and companies reliably.",
        ],
        solutions: [
            "Implemented RAG with advanced chunking strategies to retrieve relevant context.",
            "Experimented with GraphRAG and Agentic workflows to trace relationships between financial entities.",
            "Built a citation system so users can verify every claim against the original source document.",
        ],
        techStackDetailed: [
            { category: "Frontend", technologies: ["Next.js", "Tailwind CSS"] },
            { category: "Backend", technologies: ["FastAPI", "Python", "LangChain"] },
            { category: "Data", technologies: ["Pinecone", "PostgreSQL", "AWS EC2"] },
        ],
        image: "/img/projects/finsight_ai.PNG",
        category: "information-systems",
        tags: ["RAG", "FastAPI", "Next.js", "GPT-4", "Pinecone", "AWS"],
        githubUrl: "https://github.com/SathvikKV/FinSightAI",
        featured: true,
    },
    {
        id: 4,
        title: "Travel Planner Chatbot",
        slug: "travel-planner",
        domain: "ai",
        metric: "Multi-turn planning agent",
        description:
            "Built a conversational AI assistant using LangChain, FastAPI, and Streamlit to help users plan personalized trips.",
        longDescription:
            "The Travel Planner Chatbot isn't just a simple Q&A bot; it's a multi-turn agent capable of understanding user preferences for budget, climate, and activities. It constructs complete daily itineraries and handles fallback scenarios gracefully when information is missing.",
        challenges: [
            "Maintaining context over a long conversation about complex itineraries.",
            "Handling vague user requests like 'somewhere warm but not too crowded'.",
            "Integrating real-time weather or flight data.",
        ],
        solutions: [
            "Utilized LangChain agents to dynamically decide when to ask clarifying questions vs. providing recommendations.",
            "Implemented a memory buffer to store user preferences throughout the session.",
            "Designed a structured prompt system to enforce output consistency for itinerary generation.",
        ],
        techStackDetailed: [
            { category: "Frontend", technologies: ["Streamlit"] },
            { category: "Backend", technologies: ["FastAPI", "LangChain", "Python"] },
            { category: "AI", technologies: ["OpenAI API", "Agents"] },
        ],
        image: "/img/projects/ai_travel_planner.png",
        category: "information-systems",
        tags: ["LangChain", "FastAPI", "Streamlit", "LLM"],
        githubUrl: "https://github.com/SathvikKV/AI-Travel-Planner/tree/main",
        featured: true,
    },
    {
        id: 5,
        title: "TED Talks Exploration Platform",
        slug: "ted-talks",
        domain: "ai",
        metric: "7 agents · 6,000+ talks",
        description:
            "Developed an Agentic AI platform using RAG, LangGraph, and Cytoscape.js for personalized TED Talk discovery and research.",
        longDescription:
            "This project transforms passive video consumption into an active research experience. We built an innovative Agentic Architecture comprising 7 specialized agents (including Search, RAG Q&A, Talk Comparison, and Mind Map generators) to help users navigate over 6,000 TED Talks. Users can generate interactive knowledge graphs (DAGs) to visualize connections between ideas, create personalized research playbooks, and even compare contrasting viewpoints across different speakers. The system features a robust ETL pipeline orchestrated by Airflow to ingest and process transcripts into a Pinecone vector store.",
        challenges: [
            "Overcoming the limitations of keyword-based search to find semantically relevant talks.",
            "Visualizing abstract concepts and their relationships from spoken text (Mind Maps).",
            "Orchestrating multiple AI agents to collaborate on complex tasks like 'Compare Speaker A and B'.",
        ],
        solutions: [
            "Implemented a multi-agent system using LangGraph to handle specialized tasks autonomously.",
            "Integrated Cytoscape.js with LLM logic to generate interactive Directed Acyclic Graphs (DAGs) of ideas.",
            "Built a scalable backend with FastAPI and Pinecone to handle RAG queries with low latency.",
        ],
        techStackDetailed: [
            { category: "Frontend", technologies: ["React", "Streamlit", "Cytoscape.js", "CoAgents"] },
            { category: "Backend", technologies: ["FastAPI", "LangGraph", "Python", "Pinecone"] },
            { category: "Data & DevOps", technologies: ["Apache Airflow", "AWS EC2", "Docker", "S3"] },
        ],
        image: "/img/projects/ted_proj.png",
        category: "information-systems",
        tags: ["Agentic AI", "LangGraph", "RAG", "Clean Architecture", "Airflow"],
        githubUrl: "https://github.com/BigDataIA-Fall2024-TeamB8/Final_Project",
        featured: true,
    },
    {
        id: 2,
        title: "Automated Data Ingestion & Summarization",
        slug: "data-ingestion",
        domain: "data",
        metric: "S3 → Airflow → Snowflake",
        description:
            "Developed an Airflow-based data pipeline integrating S3 and Snowflake with an interactive FastAPI & Streamlit UI.",
        longDescription:
            "This project focused on building a robust ETL pipeline for document processing. It automates the ingestion of raw files from S3, processes them using Airflow DAGs, and loads structured metadata into Snowflake. Users can then verify and explore this data via a Streamlit dashboard.",
        challenges: [
            "Orchestrating dependent tasks reliably and handling failures gracefully.",
            "Managing secure credentials across multiple services (AWS, Snowflake).",
            "Providing immediate feedback to users when ingestion jobs complete.",
        ],
        solutions: [
            "Leveraged Apache Airflow to define and monitor complex processing workflows.",
            "Used Snowflake as a scalable data warehouse for structured metadata execution.",
            "Built a FastAPI middle layer to bridge the storage and the Streamlit frontend.",
        ],
        techStackDetailed: [
            { category: "Orchestration", technologies: ["Apache Airflow"] },
            { category: "Database", technologies: ["Snowflake", "S3"] },
            { category: "App", technologies: ["FastAPI", "Streamlit"] },
        ],
        image: "/gradient-placeholder.svg",
        category: "information-systems",
        tags: ["Python", "Airflow", "FastAPI", "Snowflake"],
        githubUrl: "https://github.com/BigDataIA-Fall2024-TeamB8/Assignment-2",
        featured: true,
    },
    {
        id: 6,
        title: "Ultra-Fast Grocery Delivery Platform",
        slug: "grocery-delivery",
        domain: "fullstack",
        metric: "15-min delivery routing",
        description:
            "Developed an order management system using Java, MySQL, and Google Maps API with real-time tracking.",
        longDescription:
            "A comprehensive logistics platform designed for speed. It handles inventory management, order processing, and delivery routing. The system calculates optimal paths using Google Maps API to ensure 15-minute delivery promises.",
        challenges: [
            "Managing complex many-to-many relationships in the database (Orders, Products, Drivers).",
            "Ensuring data consistency during concurrent order placements.",
            "Calculating delivery estimates in real-time.",
        ],
        solutions: [
            "Designed a normalized MySQL schema to handle transactional data integrity.",
            "Implemented Java logic to interface with Google Maps API for dynamic routing.",
            "Built a role-based access control system for Admins, Customers, and Delivery Partners.",
        ],
        techStackDetailed: [
            { category: "Language", technologies: ["Java"] },
            { category: "Database", technologies: ["MySQL"] },
            { category: "API", technologies: ["Google Maps API"] },
        ],
        image: "/img/projects/quickie.PNG",
        category: "information-systems",
        tags: ["Java", "MySQL", "Google Maps API"],
        githubUrl: "https://github.com/SathvikKV/INFO5100-FinalProject-Team11",
        featured: true,
    },
    {
        id: 7,
        title: "Fuse Element Design",
        slug: "fuse-design",
        domain: "mechanical",
        metric: "83% durability gain",
        description:
            "Designed & optimized a new fuse element for electric vehicles with FEA and fatigue testing.",
        longDescription:
            "An intricate mechanical engineering project focusing on EV safety. We designed a fuse capable of breaking currents rapidly during short circuits while withstanding thermal cycling. Utilizing Finite Element Analysis (FEA), we simulated stress hotspots and thermal loads.",
        challenges: [
            "Balancing conductivity with rapid melting properties for safety.",
            "Simulating complex thermal fatigue cycles accurately.",
            "Reducing material usage without compromising structural integrity.",
        ],
        solutions: [
            "Performed iterative FEA simulations to identify and remove low-stress material.",
            "Optimized the geometry to create specific stress concentration points for predictable failure.",
            "Achieved an 83% improvement in estimated durability through design refinements.",
        ],
        image: "/img/projects/fuse.PNG",
        category: "mechanical",
        tags: ["FEA", "Design", "Testing"],
        demoUrl:
            "https://docs.google.com/presentation/d/1n_T33HZPz9eYb9_Qu4yyI0YgiJCRmbqX/edit?usp=sharing",
        featured: true,
    },
    {
        id: 8,
        title: "3D Printed Manual Transmission",
        slug: "transmission-system",
        domain: "mechanical",
        metric: "3 power modes",
        description:
            "Designed a planetary gear system with three power modes, performed gear train calculations and 3D modeling.",
        longDescription:
            "A completely functional 3D-printed transmission system demonstrating complex gear ratios. The planetary gear set allows for multiple output speeds and torque settings from a single input, showcasing mechanical power transmission principles.",
        challenges: [
            "Calculating precise gear tooth profiles for 3D printing tolerances.",
            "Designing a shifting mechanism that engages smoothly under load.",
            "Managing friction and wear in printed plastic parts.",
        ],
        solutions: [
            "Modeled custom involute gear profiles to ensure smooth meshing.",
            "Designed a locking ring mechanism to switch between sun and ring gear engagement.",
            "Created a modular assembly for easy part replacement and maintenance.",
        ],
        image: "/img/projects/gear.jpg",
        category: "mechanical",
        tags: ["3D Modeling", "Gear Design", "Mechanical Systems"],
        featured: true,
    },
    {
        id: 9,
        title: "Wall Sensing Robot",
        slug: "wall-sensing-robot",
        domain: "mechanical",
        metric: "PID + onboard vision",
        description:
            "Developed a two-wheeled autonomous robot using TI C2000 with Raspberry Pi 4 and various sensors.",
        longDescription:
            "An autonomous robot designed to navigate mazes and track lines. It uses IR sensors for wall detection and a camera for color recognition, controlled by a hybrid architecture of a C2000 microcontroller for real-time motor control and a Raspberry Pi for high-level vision processing.",
        challenges: [
            "Interfacing different logic voltage levels between the C2000 and Raspberry Pi.",
            "Implementing stable PID control for straight-line navigation.",
            "Processing image data in real-time on limited hardware.",
        ],
        solutions: [
            "Designed a custom PCB for signal conditioning and power distribution.",
            "Tuned PID control loops to minimize oscillation and drift.",
            "Offloaded computer vision tasks to the Pi while keeping the C2000 dedicated to motion.",
        ],
        image: "/img/projects/robot.PNG",
        category: "mechanical",
        tags: ["Robotics", "Raspberry Pi", "Sensors"],
        demoUrl:
            "https://www.hackster.io/sathvik-vadavatha/obstacle-detecting-and-color-following-robot-pair-2b60ba",
        featured: true,
    },
    {
        id: 10,
        title: "Test Tube Dispensing Mechanism",
        slug: "test-tube-dispenser",
        domain: "mechanical",
        metric: "Four-bar linkage",
        description:
            "Designed a four-bar linkage system for automated test tube handling with a rack-and-pinion mechanism.",
        longDescription:
            "Automated lab equipment design featuring a precise pick-and-place mechanism. The system uses a four-bar linkage to create a specific motion path for lifting test tubes, paired with a stepper-driven rack and pinion for positioning.",
        challenges: [
            "Synthesizing a linkage that creates a near-vertical lift motion.",
            "Ensuring gentle handling of fragile glass test tubes.",
            "Synchronizing multiple degrees of freedom.",
        ],
        solutions: [
            "Used SolidWorks motion analysis to optimize link lengths for the desired coupler curve.",
            "Designed custom grippers with compliant materials.",
            "Implemented hard stops and limit switches for repeatable positioning.",
        ],
        image: "/img/projects/tray.PNG",
        category: "mechanical",
        tags: ["Automation", "Mechanical Design", "Linkage System"],
        demoUrl:
            "https://www.youtube.com/watch?v=j3S8Jn7C3iE&ab_channel=SathvikVadavatha",
        featured: true,
    }
];

export const blogPosts: BlogPost[] = [
    {
        slug: "building-realtime-copilot",
        title: "Building a Local, Privacy-First AI Copilot",
        excerpt: "How I used LiveKit, Node.js, and OpenAI to build a desktop assistant that can see what you see.",
        date: "December 10, 2024",
        readTime: "5 min read",
        tags: ["AI", "LiveKit", "Local-First"],
        content: `
## The Motivation
Most AI assistants are cloud-tethered and lack context about what's actually happening on your screen. I wanted to build something that felt like a true pair programmer—sitting next to you, watching your workflow, and offering help without sending your entire life to a centralized server unnecessarily.

## The Stack
I chose **Next.js** for the frontend because of its React Server Components, which made handling the initial page load and SEO easy.

For the real-time communication, I used **LiveKit**. WebRTC is notoriously difficult to get right, but LiveKit extracts away the pain of signaling servers and connection management.

## Challenges
The biggest challenge was **latency**. Piping video frames to OpenAI's vision model takes time.
`,
    },
    {
        slug: "music-discovery-with-ai",
        title: "Reimagining Music Discovery",
        excerpt: "Why algorithms aren't enough: Adding context and 'vibe' analysis to music exploration.",
        date: "November 28, 2024",
        readTime: "4 min read",
        tags: ["Music Tech", "GPT-4", "UX Design"],
        content: `
## The Problem with Playlists
Spotify's algorithm is great, but it's a black box. You get a song, but you don't know *why*.

## The Solution
My Sampler app tries to fix this by treating songs like content. You scroll through them, and for every track, an LLM agent has already analyzed it to tell you: "This features a syncopated bassline similar to Thundercat" or "The lyrics explore themes of urban isolation."
`,
    },
];
