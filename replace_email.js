import fs from 'fs';
import path from 'path';

const oldEmail = 'syababamin5@gmail.com';
const newEmail = 'syabaabaminamanullah@gmail.com';

function replaceInFile(filePath) {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf-8');
    if (content.includes(oldEmail)) {
      content = content.replaceAll(oldEmail, newEmail);
      fs.writeFileSync(filePath, content, 'utf-8');
      console.log('Updated:', filePath);
    }
  }
}

// 1. cv.md
replaceInFile(path.join(process.cwd(), 'cv.md'));

// 2. src/components/SkillsFooter.jsx
replaceInFile(path.join(process.cwd(), 'src/components/SkillsFooter.jsx'));

// 3. public/assets/docs/*.html
const docsDir = path.join(process.cwd(), 'public/assets/docs');
if (fs.existsSync(docsDir)) {
  const files = fs.readdirSync(docsDir).filter(f => f.endsWith('.html'));
  for (const file of files) {
    replaceInFile(path.join(docsDir, file));
  }
}

console.log('Email replacement complete.');
