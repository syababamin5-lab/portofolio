import fs from 'fs';
import path from 'path';

const docsDir = path.join(process.cwd(), 'public/assets/docs');
const files = fs.readdirSync(docsDir).filter(f => f.endsWith('.html'));

const titleRegex = /<title>CV Syabaab Amin Amanullah<\/title>/g;
const titleReplacement = `<title>Surat Lamaran & CV - Syabaab Amin Amanullah</title>`;

let updatedHtml = 0;
for (const file of files) {
  const filePath = path.join(docsDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  if (content.match(titleRegex)) {
    content = content.replace(titleRegex, titleReplacement);
    fs.writeFileSync(filePath, content, 'utf-8');
    updatedHtml++;
  }
}
console.log('Updated HTML files:', updatedHtml);
