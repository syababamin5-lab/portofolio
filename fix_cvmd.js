import fs from 'fs';
import path from 'path';

const cvPath = path.join(process.cwd(), 'cv.md');
let cvContent = fs.readFileSync(cvPath, 'utf-8');

// We will split the file by \n and rebuild it
const lines = cvContent.split('\n');
let newLines = [];
let skip = false;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  
  if (line.startsWith('Saya merupakan lulusan Sarjana Akuntansi (S.E.) dari STIE Pasundan Bandung')) {
    skip = true;
    newLines.push('Saya merupakan lulusan Sarjana Akuntansi (S.E.) dengan IPK 3,72. Sejak tahun 2020, saya telah membangun rekam jejak karir yang solid di bidang administrasi, keuangan, dan operasional. Rangkaian pengalaman ini membentuk saya menjadi profesional yang analitis, sangat teliti, dan disiplin dalam kepatuhan administratif.');
    newLines.push('');
    newLines.push('Perjalanan karir saya diawali dengan mengemban amanah sebagai Kaur Keuangan di Desa Pananjung (2020 – 2024). Pada posisi ini, saya bertanggung jawab penuh dalam mengelola dan menatausahakan anggaran publik skala besar yang mencapai ± Rp3 Miliar per tahun.');
    newLines.push('');
    newLines.push('Selanjutnya, saya bergabung dengan PT Minearth Geo Solution sebagai Koordinator Mutu Laboratorium (2025 – Juni 2026). Peran ini menuntut tingkat akurasi yang ketat, di mana saya bertugas memastikan ketertelusuran (traceability) dan validasi data operasional sebelum dokumen diterbitkan.');
    newLines.push('');
    newLines.push('Saat ini, saya bekerja secara remote sebagai Finance & Accounting di PT. Coreterra Geo Engineering. Saya bertanggung jawab mengelola administrasi keuangan, memantau arus kas, memproses penagihan (invoicing), serta menyusun laporan keuangan berkala yang menuntut akurasi tingkat tinggi.');
    newLines.push('');
    newLines.push('Di samping operasional finansial, saya juga aktif sebagai Business Analyst & System Developer dalam merancang ekosistem digital berskala enterprise (seperti SEAM-Annsa ERP, TIMES LIMS, dan LODE). Pengalaman membedah alur produksi dan rantai pasok pada proyek-proyek tersebut memberikan saya pemahaman yang tajam mengenai efisiensi operasional, manajemen persediaan (inventory/PPIC), dan arsitektur bisnis.');
    continue;
  }
  
  if (skip && line.startsWith('Saya memiliki penguasaan Microsoft Office')) {
    skip = false;
  }
  
  if (!skip) {
    newLines.push(line);
  }
}

fs.writeFileSync(cvPath, newLines.join('\n'), 'utf-8');
console.log('Fixed cv.md');
