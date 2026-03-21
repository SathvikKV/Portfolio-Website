const fs = require('fs');

const dataPath = 'C:/Users/Sathvik/Documents/GitHub/Portfolio-Website/lib/data.ts';
let code = fs.readFileSync(dataPath, 'utf-8');

// The new projects
const txSentry = `    {
        id: 19,
        title: "TxSentry",
        slug: "txsentry",
        description: "Real-Time Fraud Detection & Autonomous Investigation System.\\nBuilt a large-scale fraud detection platform processing 10M+ financial transactions using a hybrid ML and agentic architecture.",
        longDescription: "Engineered a multi-model detection pipeline combining LightGBM (0.994 PR-AUC), Isolation Forest, and graph-based anomaly detection (NetworkX), enhanced with SHAP explainability for transparent decision-making. Designed an autonomous investigation system using LangGraph, where agents dynamically plan and execute tool calls (via MCP) to analyze transaction patterns, graph relationships, and behavioral signals, producing structured case memos. Implemented a modular system supporting real-time alert triage, graph analysis, and autonomous reasoning, reducing manual investigation effort and enabling scalable fraud operations.",
        challenges: [],
        solutions: [],
        techStackDetailed: [
            { category: "Machine Learning", technologies: ["LightGBM", "Isolation Forest", "SHAP"] },
            { category: "Agentic AI", technologies: ["LangGraph", "FastAPI"] },
            { category: "Data Engineering", technologies: ["PySpark", "Graph Analytics"] }
        ],
        image: "/img/projects/tx_1.PNG",
        category: "information-systems",
        tags: ["Machine Learning", "LangGraph", "PySpark", "Graph Analytics", "SHAP", "FastAPI"],
        githubUrl: "https://github.com/SathvikKV/TxSentry",
        featured: true,
    },`;

const pitwallLive = `    {
        id: 20,
        title: "PitWall Live",
        slug: "pitwall-live",
        description: "AI-Powered F1 Race Strategy Assistant. Developed a real-time AI-powered race engineer dashboard that enables multimodal interaction with live Formula 1 telemetry data.",
        longDescription: "Built a multimodal agent using Gemini Live API that processes live telemetry streams and executes strategic tools (e.g., pit projections, undercut estimation, strategy recommendations) through a FastAPI backend. Designed a low-latency architecture with Next.js frontend, Redis caching for high-frequency telemetry, and WebRTC-based audio interaction, enabling real-time conversational analysis of race scenarios. Integrated external data sources (FastF1/OpenF1, Wikipedia) and deployed the system on Google Cloud using Terraform and Cloud Run for scalable, serverless operation.",
        challenges: [],
        solutions: [],
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
    },`;

// Extract projects array body
const projectsStart = code.indexOf('export const projects: Project[] = [');
const projectsEndMatch = code.substring(projectsStart).match(/];/);
const projectsEnd = projectsStart + projectsEndMatch.index;

let projectsContent = code.substring(projectsStart + 'export const projects: Project[] = ['.length, projectsEnd);

function extractObjects(str) {
    let objs = [];
    let depth = 0;
    let start = -1;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '{') {
            if (depth === 0) start = i;
            depth++;
        } else if (str[i] === '}') {
            depth--;
            if (depth === 0 && start !== -1) {
                objs.push(str.substring(start, i + 1));
            }
        }
    }
    return objs;
}

let projectObjs = extractObjects(projectsContent);

// Function to find project by title match
function findProjectIdx(objs, keyword) {
    return objs.findIndex(o => o.includes(keyword));
}

// Map the string representations to their IDs/Titles for reordering
// NutriGuard AI, NimbusBill, Realtime Copilot, MovieMeter, Resin Manufacturing LIMS, Multi-Modal, etc.

let reordered = [];
let usedIndices = new Set();

const addProject = (idx) => {
    if (idx !== -1 && !usedIndices.has(idx)) {
        reordered.push(projectObjs[idx]);
        usedIndices.add(idx);
    }
}

// 1. NutriGuard
addProject(findProjectIdx(projectObjs, '"NutriGuard AI"'));
// 2. TxSentry (new)
reordered.push(txSentry.trim());
// 3. NimbusBill
addProject(findProjectIdx(projectObjs, '"NimbusBill"'));
// 4. PitWall Live (new)
reordered.push(pitwallLive.trim());
// 5. Resin LIMS or Movie Meter - let's add MovieMeter as 5th
addProject(findProjectIdx(projectObjs, '"MovieMeter"'));
// 6. Realtime Copilot
addProject(findProjectIdx(projectObjs, '"Realtime Copilot"'));

// Add the rest
for (let i = 0; i < projectObjs.length; i++) {
    if (!usedIndices.has(i)) {
        reordered.push(projectObjs[i]);
    }
}

// Now replace placeholders in the resulting objects
let finalStrings = reordered.map(str => {
    // placeholders for: Resin LIMS, Sonnet Generator, Multi-Modal Terrain, Automated Data Ingestion
    if (str.includes('"Resin Manufacturing LIMS"')) {
        return str.replace(/image:\s*".*?"/, 'image: "/placeholder.svg"');
    }
    if (str.includes('"Shakespearean Sonnet Generator"')) {
        return str.replace(/image:\s*".*?"/, 'image: "/placeholder.svg"');
    }
    if (str.includes('"Multi-Modal Terrain Classification"')) {
        return str.replace(/image:\s*".*?"/, 'image: "/placeholder.svg"');
    }
    if (str.includes('"Automated Data Ingestion & Summarization"')) {
        return str.replace(/image:\s*".*?"/, 'image: "/placeholder.svg"');
    }
    return str;
});

let newProjectsStr = '\\n    ' + finalStrings.join(',\\n    ') + '\\n';

let newCode = code.substring(0, projectsStart + 'export const projects: Project[] = ['.length) + 
              newProjectsStr + 
              code.substring(projectsEnd);

fs.writeFileSync(dataPath, newCode);
console.log('Successfully updated data.ts');
