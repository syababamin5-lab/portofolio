import fs from 'fs';
import path from 'path';

const docsDir = path.join(process.cwd(), 'public/assets/docs');
const files = fs.readdirSync(docsDir).filter(f => f.endsWith('.html'));

const htmlCoverRegex = /<p>Saya merupakan lulusan Sarjana Akuntansi \(S\.E\.\) dari STIE Pasundan Bandung dengan IPK 3,72\. Sejak tahun 2020, saya memiliki pengalaman luas di bidang administrasi, pengelolaan dokumen, penyusunan laporan, serta pengendalian operasional yang menuntut ketelitian, disiplin, dan tanggung jawab tinggi\.<\/p>\s*<p>Saat ini saya bekerja di PT\. Coreterra Geo Engineering secara remote sebagai Finance & Accounting\. Saya bertanggung jawab mengelola administrasi keuangan, memantau arus kas, memproses penagihan \(invoicing\), serta menyusun laporan keuangan berkala\. Melalui peran ini, saya terbiasa mengelola data finansial yang kompleks dan menuntut ketelitian tinggi, sekaligus terbukti mampu berkoordinasi dengan baik dalam lingkungan kerja jarak jauh \(remote\)\.<\/p>\s*<p>Selain itu, saya juga terlibat aktif dalam pengembangan sistem ERP untuk perusahaan manufaktur \(Raziq Garment\)\. Dalam proyek tersebut, saya bertugas menganalisis proses bisnis, pengelolaan persediaan \(inventory\), produksi, dan pembelian\. Pengalaman ini memberikan saya pemahaman yang kuat mengenai alur kerja PPIC \(Production Planning and Inventory Control\) dalam lingkungan manufaktur\.<\/p>/g;

const htmlCoverReplacement = `<p>Saya merupakan lulusan Sarjana Akuntansi (S.E.) dengan IPK 3,72. Sejak tahun 2020, saya telah membangun rekam jejak karir yang solid; diawali dengan mengelola anggaran publik skala besar (± Rp3 Miliar/tahun) sebagai Kaur Keuangan di Desa Pananjung (2020 &ndash; 2024), lalu memastikan ketertelusuran dan validasi data sebagai Koordinator Mutu Laboratorium di PT Minearth Geo Solution (2025 &ndash; Juni 2026). Rangkaian pengalaman ini membentuk saya menjadi profesional yang analitis, sangat teliti, dan disiplin dalam kepatuhan administratif.</p>
    <p>Saat ini, saya bekerja secara remote sebagai Finance & Accounting di PT. Coreterra Geo Engineering. Saya bertanggung jawab mengelola administrasi keuangan, memantau arus kas, memproses penagihan (invoicing), serta menyusun laporan keuangan berkala yang menuntut akurasi tingkat tinggi.</p>
    <p>Di samping operasional finansial, saya juga aktif sebagai Business Analyst & System Developer dalam merancang ekosistem digital berskala enterprise (seperti SEAM-Annsa ERP, TIMES LIMS, dan LODE). Pengalaman membedah alur produksi dan rantai pasok pada proyek-proyek tersebut memberikan saya pemahaman yang tajam mengenai efisiensi operasional, manajemen persediaan (inventory/PPIC), dan arsitektur bisnis.</p>`;

const htmlCvJobRegex = /<div class="job-meta">Admin & Koordinator Mutu Laboratorium \| 2025 – 2026<\/div>/g;
const htmlCvJobReplacement = `<div class="job-meta">Admin & Koordinator Mutu Laboratorium | 2025 &ndash; Juni 2026</div>`;

let updatedHtml = 0;
for (const file of files) {
  const filePath = path.join(docsDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  let changed = false;
  if (content.match(htmlCoverRegex)) {
    content = content.replace(htmlCoverRegex, htmlCoverReplacement);
    changed = true;
  }
  if (content.match(htmlCvJobRegex)) {
    content = content.replace(htmlCvJobRegex, htmlCvJobReplacement);
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

const mdCoverRegex = /Saya merupakan lulusan Sarjana Akuntansi \(S\.E\.\) dari STIE Pasundan Bandung dengan IPK 3,72\. Sejak tahun 2020, saya memiliki pengalaman luas di bidang administrasi, pengelolaan dokumen, penyusunan laporan, serta pengendalian operasional yang menuntut ketelitian, disiplin, dan tanggung jawab tinggi\.\n\nSaat ini saya bekerja di PT\. Coreterra Geo Engineering secara remote sebagai Finance & Accounting\. Saya bertanggung jawab mengelola administrasi keuangan, memantau arus kas, memproses penagihan \(invoicing\), serta menyusun laporan keuangan berkala\. Melalui peran ini, saya terbiasa mengelola data finansial yang kompleks dan menuntut ketelitian tinggi, sekaligus terbukti mampu berkoordinasi dengan baik dalam lingkungan kerja jarak jauh \(remote\)\.\n\nSelain itu, saya juga terlibat aktif dalam pengembangan sistem ERP untuk perusahaan manufaktur \(Raziq Garment\)\. Dalam proyek tersebut, saya bertugas menganalisis proses bisnis, pengelolaan persediaan \(inventory\), produksi, dan pembelian\. Pengalaman ini memberikan saya pemahaman yang kuat mengenai alur kerja PPIC \(Production Planning and Inventory Control\) dalam lingkungan manufaktur\./g;

const mdCoverReplacement = `Saya merupakan lulusan Sarjana Akuntansi (S.E.) dengan IPK 3,72. Sejak tahun 2020, saya telah membangun rekam jejak karir yang solid; diawali dengan mengelola anggaran publik skala besar (± Rp3 Miliar/tahun) sebagai Kaur Keuangan di Desa Pananjung (2020 – 2024), lalu memastikan ketertelusuran dan validasi data sebagai Koordinator Mutu Laboratorium di PT Minearth Geo Solution (2025 – Juni 2026). Rangkaian pengalaman ini membentuk saya menjadi profesional yang analitis, sangat teliti, dan disiplin dalam kepatuhan administratif.

Saat ini, saya bekerja secara remote sebagai Finance & Accounting di PT. Coreterra Geo Engineering. Saya bertanggung jawab mengelola administrasi keuangan, memantau arus kas, memproses penagihan (invoicing), serta menyusun laporan keuangan berkala yang menuntut akurasi tingkat tinggi.

Di samping operasional finansial, saya juga aktif sebagai Business Analyst & System Developer dalam merancang ekosistem digital berskala enterprise (seperti SEAM-Annsa ERP, TIMES LIMS, dan LODE). Pengalaman membedah alur produksi dan rantai pasok pada proyek-proyek tersebut memberikan saya pemahaman yang tajam mengenai efisiensi operasional, manajemen persediaan (inventory/PPIC), dan arsitektur bisnis.`;

const mdCvJobRegex = /\*Admin & Koordinator Mutu Laboratorium\* \| 2025 – 2026/g;
const mdCvJobReplacement = `*Admin & Koordinator Mutu Laboratorium* | 2025 – Juni 2026`;

let cvChanged = false;
if (cvContent.match(mdCoverRegex)) {
  cvContent = cvContent.replace(mdCoverRegex, mdCoverReplacement);
  cvChanged = true;
}
if (cvContent.match(mdCvJobRegex)) {
  cvContent = cvContent.replace(mdCvJobRegex, mdCvJobReplacement);
  cvChanged = true;
}

if (cvChanged) {
  fs.writeFileSync(cvPath, cvContent, 'utf-8');
  console.log('Updated cv.md');
}

// Update Timeline.jsx
const timelinePath = path.join(process.cwd(), 'src/components/Timeline.jsx');
let tlContent = fs.readFileSync(timelinePath, 'utf-8');
const tlRegex = /period: "2025 – 2026"/g;
if (tlContent.match(tlRegex)) {
  tlContent = tlContent.replace(tlRegex, 'period: "2025 – Juni 2026"');
  fs.writeFileSync(timelinePath, tlContent, 'utf-8');
  console.log('Updated Timeline.jsx');
}
