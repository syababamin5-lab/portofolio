import fs from 'fs';
import path from 'path';

const file = path.join(process.cwd(), 'public/assets/docs/CV_AAJaya.html');
let content = fs.readFileSync(file, 'utf-8');

const htmlSearchRegex = /<h3>ERP MANUFACTURING SYSTEM DEVELOPMENT – RAZIQ GARMENT<\/h3>[\s\S]*?<\/ul>/g;
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

if (content.match(htmlSearchRegex)) {
  content = content.replace(htmlSearchRegex, htmlReplacement);
  fs.writeFileSync(file, content, 'utf-8');
  console.log('Fixed CV_AAJaya.html');
}
