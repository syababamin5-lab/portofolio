import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'public/assets/docs/CV_Cetta.html');
let content = fs.readFileSync(filePath, 'utf-8');

// Fix broken emoji encoding caused by PowerShell
content = content
  .replace(/ðŸ"\s/g, '📍 ')
  .replace(/ðŸ"ž/g, '📞')
  .replace(/âœ‰ï¸/g, '✉️')
  .replace(/ðŸŒ/g, '🌐')
  .replace(/ðŸ"$/gm, '📍')
  // Also fix em-dash rendering issue
  .replace(/â€"/g, '–')
  .replace(/â€œ/g, '"')
  .replace(/â€/g, '"');

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Fixed emoji encoding in CV_Cetta.html');
