import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'public/assets/docs/CV_MartabakMM.html');
let content = fs.readFileSync(filePath, 'utf-8');

// Replace "Mister Group (Martabak MM)" with "CV MM Satu Tujuan"
// It appears in "Yth. HRD Mister Group (Martabak MM)" and "di Mister Group (Martabak MM)." and "outlet Martabak MM."
content = content.replace(/Mister Group \(Martabak MM\)/g, 'CV MM Satu Tujuan (Mister Group)');

// In case I just used "Mister Group" somewhere else
content = content.replace(/di Mister Group\./g, 'di CV MM Satu Tujuan.');
content = content.replace(/outlet Martabak MM\./g, 'seluruh outlet di bawah naungan CV MM Satu Tujuan.');

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Updated CV_MartabakMM.html with CV MM Satu Tujuan');
