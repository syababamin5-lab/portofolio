import fs from 'fs';
import path from 'path';

const docsDir = path.join(process.cwd(), 'public/assets/docs');
const files = fs.readdirSync(docsDir).filter(f => f.endsWith('.html'));

// HTML regex matching: (2025 &ndash; Juni 2026)
const htmlSearch = /Selanjutnya, saya bergabung dengan PT Minearth Geo Solution sebagai Koordinator Mutu Laboratorium \(2025 &ndash; Juni 2026\)\. Peran ini menuntut tingkat akurasi yang ketat, di mana saya bertugas memastikan ketertelusuran \(traceability\) dan validasi data operasional sebelum dokumen diterbitkan\./g;

const htmlReplacement = `Selanjutnya, saya bergabung dengan PT Minearth Geo Solution sebagai Admin & Koordinator Mutu Laboratorium (2025 &ndash; Juni 2026). Peran ini menuntut akurasi operasional yang ketat; selain mengawal ketertelusuran (traceability) dan validasi data pengujian, saya juga bertanggung jawab mengelola tata kelola administrasi perusahaan secara menyeluruh—mulai dari pengendalian dokumen, penerbitan invoice, hingga korespondensi klien—guna menjamin kelancaran siklus bisnis.`;

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

// MD regex matching: (2025 – Juni 2026)
const cvPath = path.join(process.cwd(), 'cv.md');
let cvContent = fs.readFileSync(cvPath, 'utf-8');

const mdSearch = /Selanjutnya, saya bergabung dengan PT Minearth Geo Solution sebagai Koordinator Mutu Laboratorium \(2025 – Juni 2026\)\. Peran ini menuntut tingkat akurasi yang ketat, di mana saya bertugas memastikan ketertelusuran \(traceability\) dan validasi data operasional sebelum dokumen diterbitkan\./g;

const mdReplacement = `Selanjutnya, saya bergabung dengan PT Minearth Geo Solution sebagai Admin & Koordinator Mutu Laboratorium (2025 – Juni 2026). Peran ini menuntut akurasi operasional yang ketat; selain mengawal ketertelusuran (traceability) dan validasi data pengujian, saya juga bertanggung jawab mengelola tata kelola administrasi perusahaan secara menyeluruh—mulai dari pengendalian dokumen, penerbitan invoice, hingga korespondensi klien—guna menjamin kelancaran siklus bisnis.`;

if (cvContent.match(mdSearch)) {
  cvContent = cvContent.replace(mdSearch, mdReplacement);
  fs.writeFileSync(cvPath, cvContent, 'utf-8');
  console.log('Updated cv.md');
}
