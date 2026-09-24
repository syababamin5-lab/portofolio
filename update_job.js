import fs from 'fs';
import path from 'path';

const docsDir = path.join(process.cwd(), 'public/assets/docs');
const files = fs.readdirSync(docsDir).filter(f => f.endsWith('.html'));

const coverLetterSearch = /Saat ini saya bekerja di PT Minearth Geo Solution sebagai Admin dan Koordinator Mutu Laboratorium Mekanika Tanah\. Saya bertanggung jawab mengelola administrasi operasional, melakukan input dan verifikasi data hasil pengujian, menyusun laporan, mengelola surat menyurat, serta berkoordinasi secara aktif dengan klien dan tim internal\. Melalui peran ini, saya terbiasa bekerja dengan data dalam jumlah besar yang membutuhkan ketelitian dan tingkat akurasi yang tinggi\./g;

const coverLetterReplace = `Saat ini saya bekerja di PT. Coreterra Geo Engineering secara remote sebagai Finance & Accounting. Saya bertanggung jawab mengelola administrasi keuangan, memantau arus kas, memproses penagihan (invoicing), serta menyusun laporan keuangan berkala. Melalui peran ini, saya terbiasa mengelola data finansial yang kompleks dan menuntut ketelitian tinggi, sekaligus terbukti mampu berkoordinasi dengan baik dalam lingkungan kerja jarak jauh (remote).`;

const cvJobSearch = /<h2>PENGALAMAN KERJA<\/h2>\s*<h3>PT MINEARTH GEO SOLUTION<\/h3>\s*<div class="job-meta">Admin & Koordinator Mutu Laboratorium \| 2025 – (Juni )?2026<\/div>/g;

const cvJobReplace = `<h2>PENGALAMAN KERJA</h2>
    
    <h3>PT. CORETERRA GEO ENGINEERING</h3>
    <div class="job-meta">Finance & Accounting (Remote - Tangerang Selatan) | 2026 – Sekarang</div>
    <ul>
      <li>Mengelola administrasi keuangan dan pembukuan perusahaan secara menyeluruh.</li>
      <li>Melakukan rekonsiliasi bank dan memantau arus kas (cash flow) proyek.</li>
      <li>Menyusun laporan keuangan periodik untuk evaluasi manajemen.</li>
      <li>Mengelola proses penagihan (invoicing) dan pembayaran kepada vendor (Account Payable/Receivable).</li>
    </ul>

    <h3>PT MINEARTH GEO SOLUTION</h3>
    <div class="job-meta">Admin & Koordinator Mutu Laboratorium | 2025 – 2026</div>`;

let updatedHtml = 0;
for (const file of files) {
  const filePath = path.join(docsDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  let changed = false;
  
  if (content.match(coverLetterSearch)) {
    content = content.replace(coverLetterSearch, coverLetterReplace);
    changed = true;
  }
  
  if (content.match(cvJobSearch)) {
    content = content.replace(cvJobSearch, cvJobReplace);
    changed = true;
  }
  
  if (changed) {
    fs.writeFileSync(filePath, content, 'utf-8');
    updatedHtml++;
  }
}
console.log('Updated HTML files:', updatedHtml);

// update cv.md
const cvPath = path.join(process.cwd(), 'cv.md');
let cvContent = fs.readFileSync(cvPath, 'utf-8');

cvContent = cvContent.replace(coverLetterSearch, coverLetterReplace);

const mdJobSearch = /### PENGALAMAN KERJA\s*\*\*PT MINEARTH GEO SOLUTION\*\*\s*\*Admin & Koordinator Mutu Laboratorium\* \| 2025 – (Juni )?2026/g;

const mdJobReplace = `### PENGALAMAN KERJA

**PT. CORETERRA GEO ENGINEERING**  
*Finance & Accounting (Remote - Tangerang Selatan)* | 2026 – Sekarang
- Mengelola administrasi keuangan dan pembukuan perusahaan secara menyeluruh.
- Melakukan rekonsiliasi bank dan memantau arus kas (cash flow) proyek.
- Menyusun laporan keuangan periodik untuk evaluasi manajemen.
- Mengelola proses penagihan (invoicing) dan pembayaran kepada vendor (Account Payable/Receivable).

**PT MINEARTH GEO SOLUTION**  
*Admin & Koordinator Mutu Laboratorium* | 2025 – 2026`;

cvContent = cvContent.replace(mdJobSearch, mdJobReplace);
fs.writeFileSync(cvPath, cvContent, 'utf-8');
console.log('Updated cv.md');
