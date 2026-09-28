import fs from 'fs';
import path from 'path';

const docsDir = path.join(process.cwd(), 'public/assets/docs');
const files = fs.readdirSync(docsDir).filter(f => f.endsWith('.html'));

const backButtonHTML = `
  <a href="../../index.html" class="no-print" style="position: fixed; bottom: 20px; left: 20px; background: #0f172a; color: white; padding: 10px 20px; border-radius: 50px; text-decoration: none; font-weight: bold; box-shadow: 0 4px 6px rgba(0,0,0,0.1); z-index: 1000; font-family: 'Inter', sans-serif;">
    &larr; Kembali ke Home
  </a>
</body>`;

let count = 0;

for (const file of files) {
  const filePath = path.join(docsDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  
  if (!content.includes('Kembali ke Home')) {
    content = content.replace(/<\/body>/i, backButtonHTML);
    fs.writeFileSync(filePath, content, 'utf-8');
    count++;
  }
}

console.log(`Successfully added back button to ${count} files.`);
