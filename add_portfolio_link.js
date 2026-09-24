import fs from 'fs';
import path from 'path';

const docsDir = path.join(process.cwd(), 'public/assets/docs');
const files = fs.readdirSync(docsDir).filter(f => f.endsWith('.html'));

const clRegex = /✉️ syabaabaminamanullah@gmail\.com<\/p>/g;
const clReplacement = `✉️ syabaabaminamanullah@gmail.com<br>\n      🌐 <a href="https://syababamin5-lab.github.io/portofolio/" style="color: #333; text-decoration: none;">syababamin5-lab.github.io/portofolio</a></p>`;

const cvHeaderRegex = /<p>📞 081214914641 &nbsp;\|&nbsp; ✉️ syabaabaminamanullah@gmail\.com<\/p>/g;
const cvHeaderReplacement = `<p>📞 081214914641 &nbsp;|&nbsp; ✉️ syabaabaminamanullah@gmail.com &nbsp;|&nbsp; 🌐 <a href="https://syababamin5-lab.github.io/portofolio/" style="color: #16A085; text-decoration: none;">syababamin5-lab.github.io/portofolio</a></p>`;

let updatedHtml = 0;
for (const file of files) {
  const filePath = path.join(docsDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  let changed = false;
  
  if (content.match(clRegex)) {
    content = content.replace(clRegex, clReplacement);
    changed = true;
  }
  if (content.match(cvHeaderRegex)) {
    content = content.replace(cvHeaderRegex, cvHeaderReplacement);
    changed = true;
  }
  
  if (changed) {
    fs.writeFileSync(filePath, content, 'utf-8');
    updatedHtml++;
  }
}
console.log('Updated HTML files:', updatedHtml);


const cvPath = path.join(process.cwd(), 'cv.md');
let cvContent = fs.readFileSync(cvPath, 'utf-8');

const clMdRegex = /✉️ syabaabaminamanullah@gmail\.com\s*\n/g;
const clMdReplacement = `✉️ syabaabaminamanullah@gmail.com  \n🌐 [syababamin5-lab.github.io/portofolio](https://syababamin5-lab.github.io/portofolio/)\n`;

const cvHeaderMdRegex = /📍 Kabupaten Bandung, Jawa Barat \| 📞 081214914641 \| ✉️ syabaabaminamanullah@gmail\.com/g;
const cvHeaderMdReplacement = `📍 Kabupaten Bandung, Jawa Barat | 📞 081214914641 | ✉️ syabaabaminamanullah@gmail.com | 🌐 [Portofolio Web](https://syababamin5-lab.github.io/portofolio/)`;

const dataPribadiRegex = /- \*\*Email\*\* : syabaabaminamanullah@gmail\.com/g;
const dataPribadiReplacement = `- **Email** : syabaabaminamanullah@gmail.com\n- **Portofolio** : [syababamin5-lab.github.io/portofolio](https://syababamin5-lab.github.io/portofolio/)`;

let cvChanged = false;

// Only replace the first match of clMdRegex to avoid replacing the ones in dataPribadi or header if they match
if (cvContent.includes('✉️ syabaabaminamanullah@gmail.com  \n\n---')) {
  cvContent = cvContent.replace('✉️ syabaabaminamanullah@gmail.com  \n\n---', '✉️ syabaabaminamanullah@gmail.com  \n🌐 [syababamin5-lab.github.io/portofolio](https://syababamin5-lab.github.io/portofolio/)\n\n---');
  cvChanged = true;
}

if (cvContent.match(cvHeaderMdRegex)) {
  cvContent = cvContent.replace(cvHeaderMdRegex, cvHeaderMdReplacement);
  cvChanged = true;
}

if (cvContent.match(dataPribadiRegex)) {
  cvContent = cvContent.replace(dataPribadiRegex, dataPribadiReplacement);
  cvChanged = true;
}

if (cvChanged) {
  fs.writeFileSync(cvPath, cvContent, 'utf-8');
  console.log('Updated cv.md');
}
