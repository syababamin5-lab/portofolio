import fs from 'fs';
import path from 'path';

const docsDir = path.join(process.cwd(), 'public/assets/docs');
const files = fs.readdirSync(docsDir).filter(f => f.endsWith('.html'));

const htmlSearchRegex = /<h3>ERP DEVELOPMENT PROJECT – RAZIQ GARMENT<\/h3>[\s\S]*?<\/ul>/g;

const htmlReplacement = `<h3>SEAM-Annsa: Sistem ERP Manufaktur Garmen</h3>
    <div class="job-meta">Business Analyst & System Developer | 2024 &ndash; Sekarang</div>
    <ul>
      <li>Mendigitalkan seluruh rantai pasok dan operasional perusahaan manufaktur garmen ke dalam satu sistem terintegrasi.</li>
      <li>Menyusun alur proses bisnis persediaan, log produksi, hingga pembukuan akuntansi.</li>
    </ul>

    <h3>TIMES LIMS: Sistem Manajemen Data Laboratorium Geoteknik</h3>
    <div class="job-meta">Business Analyst & System Developer | 2025 &ndash; Sekarang</div>
    <ul>
      <li>Membangun sistem LIMS sesuai standar ISO/IEC 17025 untuk validasi dan manajemen sampel uji mekanika tanah.</li>
    </ul>

    <h3>LODE: Sistem Manajemen Keuangan Proyek & Korporat</h3>
    <div class="job-meta">Business Analyst & System Developer | 2025 &ndash; Sekarang</div>
    <ul>
      <li>Menciptakan dashboard pemantauan profitabilitas RAB proyek pertambangan dan geoteknik secara real-time.</li>
    </ul>`;

let updatedCount = 0;
for (const file of files) {
  const filePath = path.join(docsDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  if (content.match(htmlSearchRegex)) {
    content = content.replace(htmlSearchRegex, htmlReplacement);
    fs.writeFileSync(filePath, content, 'utf-8');
    updatedCount++;
    console.log('Updated', file);
  }
}
console.log('Total HTML files updated:', updatedCount);

// Also update cv.md
const cvPath = path.join(process.cwd(), 'cv.md');
let cvContent = fs.readFileSync(cvPath, 'utf-8');
const mdSearchRegex = /\*\*ERP DEVELOPMENT PROJECT – RAZIQ GARMENT\*\*[\s\S]*?- Memberikan masukan terhadap pengembangan fitur dan alur kerja berdasarkan kebutuhan operasional perusahaan./g;

const mdReplacement = `**SEAM-Annsa: Sistem ERP Manufaktur Garmen**  
*Business Analyst & System Developer* | 2024 – Sekarang
- Mendigitalkan seluruh rantai pasok dan operasional perusahaan manufaktur garmen ke dalam satu sistem terintegrasi.
- Menyusun alur proses bisnis persediaan, log produksi, hingga pembukuan akuntansi.

**TIMES LIMS: Sistem Manajemen Data Laboratorium Geoteknik**  
*Business Analyst & System Developer* | 2025 – Sekarang
- Membangun sistem LIMS sesuai standar ISO/IEC 17025 untuk validasi dan manajemen sampel uji mekanika tanah.

**LODE: Sistem Manajemen Keuangan Proyek & Korporat**  
*Business Analyst & System Developer* | 2025 – Sekarang
- Menciptakan dashboard pemantauan profitabilitas RAB proyek pertambangan dan geoteknik secara real-time.`;

if (cvContent.match(mdSearchRegex)) {
  cvContent = cvContent.replace(mdSearchRegex, mdReplacement);
  fs.writeFileSync(cvPath, cvContent, 'utf-8');
  console.log('Updated cv.md');
}
