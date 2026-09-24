import fs from 'fs';
import path from 'path';

const docsDir = path.join(process.cwd(), 'public/assets/docs');
const files = fs.readdirSync(docsDir).filter(f => f.endsWith('.html'));

// HTML regex matching
const htmlSearch = /Perjalanan karir saya diawali dengan mengemban amanah sebagai Kaur Keuangan di Desa Pananjung \(2020 &ndash; 2024\)\. Pada posisi ini, saya bertanggung jawab penuh dalam mengelola dan menatausahakan anggaran publik skala besar yang mencapai &plusmn; Rp3 Miliar per tahun\./g;

const htmlReplacement = `Perjalanan karir saya diawali dengan mengemban amanah sebagai Kaur Keuangan (Bendahara) di Desa Pananjung (2020 &ndash; 2024). Pada posisi ini, saya bertanggung jawab mengelola tata usaha anggaran publik skala besar yang mencapai &plusmn; Rp3 Miliar per tahun. Pekerjaan ini menuntut keahlian administrasi yang kuat, khususnya dalam memverifikasi kelengkapan dokumen pencairan, memproses transaksi kas, hingga menyusun laporan pertanggungjawaban (LPJ) yang transparan dan akuntabel.`;

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

const mdSearch = /Perjalanan karir saya diawali dengan mengemban amanah sebagai Kaur Keuangan di Desa Pananjung \(2020 – 2024\)\. Pada posisi ini, saya bertanggung jawab penuh dalam mengelola dan menatausahakan anggaran publik skala besar yang mencapai ± Rp3 Miliar per tahun\./g;

const mdReplacement = `Perjalanan karir saya diawali dengan mengemban amanah sebagai Kaur Keuangan (Bendahara) di Desa Pananjung (2020 – 2024). Pada posisi ini, saya bertanggung jawab mengelola tata usaha anggaran publik skala besar yang mencapai ± Rp3 Miliar per tahun. Pekerjaan ini menuntut keahlian administrasi yang kuat, khususnya dalam memverifikasi kelengkapan dokumen pencairan, memproses transaksi kas, hingga menyusun laporan pertanggungjawaban (LPJ) yang transparan dan akuntabel.`;

if (cvContent.match(mdSearch)) {
  cvContent = cvContent.replace(mdSearch, mdReplacement);
  fs.writeFileSync(cvPath, cvContent, 'utf-8');
  console.log('Updated cv.md');
}
