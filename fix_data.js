const fs = require('fs');
const dataPath = 'C:/Users/Sathvik/Documents/GitHub/Portfolio-Website/lib/data.ts';
let code = fs.readFileSync(dataPath, 'utf-8');
code = code.replace(/\\n/g, '\n');
fs.writeFileSync(dataPath, code);
console.log('Fixed data.ts newlines');
