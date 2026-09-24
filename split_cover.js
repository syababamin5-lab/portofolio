import fs from 'fs';
import path from 'path';

const docsDir = path.join(process.cwd(), 'public/assets/docs');
const files = fs.readdirSync(docsDir).filter(f => f.endsWith('.html'));

const htmlCoverRegex = /<p>Saya merupakan lulusan Sarjana Akuntansi \(S\.E\.\) dengan IPK 3,72\. Sejak tahun 2020, saya telah membangun rekam jejak karir yang solid; diawali dengan mengelola anggaran publik skala besar \(± Rp3 Miliar\/tahun\) sebagai Kaur Keuangan di Desa Pananjung \(2020 &ndash; 2024\), lalu memastikan ketertelusuran dan validasi data sebagai Koordinator Mutu Laboratorium di PT Minearth Geo Solution \(2025 &ndash; Juni 2026\)\. Rangkaian pengalaman ini membentuk saya menjadi profesional yang analitis, sangat teliti, dan disiplin dalam kepatuhan administratif\.<\/p>/g;

const htmlCoverReplacement = `<p>Saya merupakan lulusan Sarjana Akuntansi (S.E.) dengan IPK 3,72. Sejak tahun 2020, saya telah membangun rekam jejak karir yang solid di bidang administrasi, keuangan, dan operasional. Rangkaian pengalaman ini membentuk saya menjadi profesional yang analitis, sangat teliti, dan disiplin dalam kepatuhan administratif.</p>
    <p>Perjalanan karir saya diawali dengan mengemban amanah sebagai Kaur Keuangan di Desa Pananjung (2020 &ndash; 2024). Pada posisi ini, saya bertanggung jawab penuh dalam mengelola dan menatausahakan anggaran publik skala besar yang mencapai &plusmn; Rp3 Miliar per tahun.</p>
    <p>Selanjutnya, saya bergabung dengan PT Minearth Geo Solution sebagai Koordinator Mutu Laboratorium (2025 &ndash; Juni 2026). Peran ini menuntut tingkat akurasi yang ketat, di mana saya bertugas memastikan ketertelusuran (traceability) dan validasi data operasional sebelum dokumen diterbitkan.</p>`;

let updatedHtml = 0;
for (const file of files) {
  const filePath = path.join(docsDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  let changed = false;
  if (content.match(htmlCoverRegex)) {
    content = content.replace(htmlCoverRegex, htmlCoverReplacement);
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

const mdCoverRegex = /Saya merupakan lulusan Sarjana Akuntansi \(S\.E\.\) dengan IPK 3,72\. Sejak tahun 2020, saya telah membangun rekam jejak karir yang solid; diawali dengan mengelola anggaran publik skala besar \(± Rp3 Miliar\/tahun\) sebagai Kaur Keuangan di Desa Pananjung \(2020 – 2024\), lalu memastikan ketertelusuran dan validasi data sebagai Koordinator Mutu Laboratorium di PT Minearth Geo Solution \(2025 – Juni 2026\)\. Rangkaian pengalaman ini membentuk saya menjadi profesional yang analitis, sangat teliti, dan disiplin dalam kepatuhan administratif\./g;

const mdCoverReplacement = `Saya merupakan lulusan Sarjana Akuntansi (S.E.) dengan IPK 3,72. Sejak tahun 2020, saya telah membangun rekam jejak karir yang solid di bidang administrasi, keuangan, dan operasional. Rangkaian pengalaman ini membentuk saya menjadi profesional yang analitis, sangat teliti, dan disiplin dalam kepatuhan administratif.

Perjalanan karir saya diawali dengan mengemban amanah sebagai Kaur Keuangan di Desa Pananjung (2020 – 2024). Pada posisi ini, saya bertanggung jawab penuh dalam mengelola dan menatausahakan anggaran publik skala besar yang mencapai ± Rp3 Miliar per tahun.

Selanjutnya, saya bergabung dengan PT Minearth Geo Solution sebagai Koordinator Mutu Laboratorium (2025 – Juni 2026). Peran ini menuntut tingkat akurasi yang ketat, di mana saya bertugas memastikan ketertelusuran (traceability) dan validasi data operasional sebelum dokumen diterbitkan.`;

let cvChanged = false;
if (cvContent.match(mdCoverRegex)) {
  cvContent = cvContent.replace(mdCoverRegex, mdCoverReplacement);
  cvChanged = true;
}

if (cvChanged) {
  fs.writeFileSync(cvPath, cvContent, 'utf-8');
  console.log('Updated cv.md');
}
