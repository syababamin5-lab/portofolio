import fs from 'fs';
import path from 'path';

const docsDir = path.join(process.cwd(), 'public/assets/docs');
const files = fs.readdirSync(docsDir).filter(f => f.endsWith('.html'));

// HTML regex matching
const htmlSearch = /Saat ini, saya bekerja secara remote sebagai Finance & Accounting di PT\. Coreterra Geo Engineering\. Saya bertanggung jawab mengelola administrasi keuangan, memantau arus kas, memproses penagihan \(invoicing\), serta menyusun laporan keuangan berkala yang menuntut akurasi tingkat tinggi\./g;

const htmlReplacement = `Saat ini, saya bekerja secara remote sebagai Finance & Accounting di PT. Coreterra Geo Engineering. Saya bertanggung jawab mengelola administrasi keuangan, memantau arus kas, memproses penagihan (invoicing), serta menyusun laporan keuangan berkala. Peran ini membuktikan kemampuan saya dalam menjaga stabilitas keuangan perusahaan dan berkoordinasi secara efektif dalam lingkungan kerja jarak jauh.`;

let updatedHtml = 0;
for (const file of files) {
  const filePath = path.join(docsDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  if (content.match(htmlSearch)) {
    content = content.replace(htmlSearch, htmlReplacement);
    fs.writeFileSync(filePath, content, 'utf-8');
    updatedHtml++;
  }
}
console.log('Updated HTML files:', updatedHtml);

// MD regex matching
const cvPath = path.join(process.cwd(), 'cv.md');
let cvContent = fs.readFileSync(cvPath, 'utf-8');

const mdSearch = /Saat ini, saya bekerja secara remote sebagai Finance & Accounting di PT\. Coreterra Geo Engineering\. Saya bertanggung jawab mengelola administrasi keuangan, memantau arus kas, memproses penagihan \(invoicing\), serta menyusun laporan keuangan berkala yang menuntut akurasi tingkat tinggi\./g;

const mdReplacement = `Saat ini, saya bekerja secara remote sebagai Finance & Accounting di PT. Coreterra Geo Engineering. Saya bertanggung jawab mengelola administrasi keuangan, memantau arus kas, memproses penagihan (invoicing), serta menyusun laporan keuangan berkala. Peran ini membuktikan kemampuan saya dalam menjaga stabilitas keuangan perusahaan dan berkoordinasi secara efektif dalam lingkungan kerja jarak jauh.`;

if (cvContent.match(mdSearch)) {
  cvContent = cvContent.replace(mdSearch, mdReplacement);
  fs.writeFileSync(cvPath, cvContent, 'utf-8');
  console.log('Updated cv.md');
}
