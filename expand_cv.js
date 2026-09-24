import fs from 'fs';
import path from 'path';

const docsDir = path.join(process.cwd(), 'public/assets/docs');
const files = fs.readdirSync(docsDir).filter(f => f.endsWith('.html'));

const htmlRegex = /<h3>SEAM-Annsa: Sistem ERP Manufaktur Garmen<\/h3>[\s\S]*?<li>Menciptakan dashboard pemantauan profitabilitas RAB proyek pertambangan dan geoteknik secara real-time\.<\/li>\s*<\/ul>/g;

const htmlReplacement = `<h3>SEAM-Annsa: Sistem ERP Manufaktur Garmen</h3>
    <div class="job-meta">Business Analyst & System Developer | 2024 &ndash; Sekarang</div>
    <ul>
      <li>Merancang dan membangun aplikasi Enterprise Resource Planning (ERP) komprehensif untuk mendigitalkan seluruh rantai pasok dan akuntansi pada industri manufaktur garmen.</li>
      <li>Mentransformasi pencatatan manual menjadi alur kerja otomatis dan terintegrasi, mencakup manajemen stok kain, log produksi harian per divisi (Cutting, Jahit, Finishing), hingga buku besar dan penggajian.</li>
      <li>Menciptakan ekosistem sistem yang memastikan akurasi perhitungan Harga Pokok Produksi (HPP) dan efisiensi operasional secara real-time.</li>
    </ul>

    <h3>TIMES LIMS: Sistem Manajemen Data Laboratorium Geoteknik</h3>
    <div class="job-meta">Business Analyst & System Developer | 2025 &ndash; Sekarang</div>
    <ul>
      <li>Mengembangkan Laboratory Information Management System (LIMS) yang didesain khusus untuk memenuhi standar akreditasi ISO/IEC 17025, SNI, dan ASTM pada laboratorium pengujian geoteknik.</li>
      <li>Membangun mesin validasi cerdas untuk mengawal ketertelusuran (Traceability) dan integritas data uji sejak sampel diterima hingga penerbitan sertifikat (Certificate of Analysis).</li>
      <li>Mengintegrasikan manajemen tarif pengujian, perhitungan parameter otomatis, serta kontrol mutu hasil laboratorium secara sistematis.</li>
    </ul>

    <h3>LODE: Sistem Manajemen Keuangan Proyek & Korporat</h3>
    <div class="job-meta">Business Analyst & System Developer | 2025 &ndash; Sekarang</div>
    <ul>
      <li>Merancang sistem tata kelola keuangan proyek (Project Finance) yang terintegrasi untuk perusahaan konsultan pertambangan dan geoteknik.</li>
      <li>Membangun arsitektur penelusuran alur modal yang memetakan Rencana Anggaran Biaya (RAB) operasional lapangan terhadap realisasi pengeluaran dan termin penagihan.</li>
      <li>Menciptakan executive dashboard yang mampu memberikan proyeksi profitabilitas proyek secara presisi dan mendukung manajemen dalam pengambilan keputusan strategis.</li>
    </ul>`;

let updatedHtml = 0;
for (const file of files) {
  const filePath = path.join(docsDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  if (content.match(htmlRegex)) {
    content = content.replace(htmlRegex, htmlReplacement);
    fs.writeFileSync(filePath, content, 'utf-8');
    updatedHtml++;
  }
}
console.log('Updated HTML files:', updatedHtml);

const cvPath = path.join(process.cwd(), 'cv.md');
let cvContent = fs.readFileSync(cvPath, 'utf-8');

const mdRegex = /\*\*SEAM-Annsa: Sistem ERP Manufaktur Garmen\*\*[\s\S]*?- Menciptakan dashboard pemantauan profitabilitas RAB proyek pertambangan dan geoteknik secara real-time\./g;

const mdReplacement = `**SEAM-Annsa: Sistem ERP Manufaktur Garmen**  
*Business Analyst & System Developer* | 2024 – Sekarang
- Merancang dan membangun aplikasi Enterprise Resource Planning (ERP) komprehensif untuk mendigitalkan seluruh rantai pasok dan akuntansi pada industri manufaktur garmen.
- Mentransformasi pencatatan manual menjadi alur kerja otomatis dan terintegrasi, mencakup manajemen stok kain, log produksi harian per divisi (Cutting, Jahit, Finishing), hingga buku besar dan penggajian.
- Menciptakan ekosistem sistem yang memastikan akurasi perhitungan Harga Pokok Produksi (HPP) dan efisiensi operasional secara real-time.

**TIMES LIMS: Sistem Manajemen Data Laboratorium Geoteknik**  
*Business Analyst & System Developer* | 2025 – Sekarang
- Mengembangkan Laboratory Information Management System (LIMS) yang didesain khusus untuk memenuhi standar akreditasi ISO/IEC 17025, SNI, dan ASTM pada laboratorium pengujian geoteknik.
- Membangun mesin validasi cerdas untuk mengawal ketertelusuran (Traceability) dan integritas data uji sejak sampel diterima hingga penerbitan sertifikat (Certificate of Analysis).
- Mengintegrasikan manajemen tarif pengujian, perhitungan parameter otomatis, serta kontrol mutu hasil laboratorium secara sistematis.

**LODE: Sistem Manajemen Keuangan Proyek & Korporat**  
*Business Analyst & System Developer* | 2025 – Sekarang
- Merancang sistem tata kelola keuangan proyek (Project Finance) yang terintegrasi untuk perusahaan konsultan pertambangan dan geoteknik.
- Membangun arsitektur penelusuran alur modal yang memetakan Rencana Anggaran Biaya (RAB) operasional lapangan terhadap realisasi pengeluaran dan termin penagihan.
- Menciptakan executive dashboard yang mampu memberikan proyeksi profitabilitas proyek secara presisi dan mendukung manajemen dalam pengambilan keputusan strategis.`;

if (cvContent.match(mdRegex)) {
  cvContent = cvContent.replace(mdRegex, mdReplacement);
  fs.writeFileSync(cvPath, cvContent, 'utf-8');
  console.log('Updated cv.md');
}
