import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'public/assets/docs/CV_MartabakMM.html');
let content = fs.readFileSync(filePath, 'utf-8');

// Update Title
content = content.replace(/<title>.*?<\/title>/g, '<title>CV Syabaab Amin Amanullah - Martabak MM</title>');

// Update Header (Perihal & Yth)
content = content.replace(/<strong>Perihal<\/strong> : Lamaran Pekerjaan.*?<\/p>/s, `<strong>Perihal</strong> : Lamaran Pekerjaan Admin Accounting<br>
      <strong>Yth. HRD Mister Group (Martabak MM)</strong><br>
      <strong>Kota Bandung</strong></p>`);

// Update the first paragraph of the cover letter
const coverLetterStartRegex = /Dengan hormat,\s*<\/p>\s*<p>Berdasarkan informasi lowongan pekerjaan yang saya peroleh, melalui surat ini saya bermaksud mengajukan lamaran untuk posisi.*?<\/p>/s;
const newCoverLetterStart = `Dengan hormat,</p>
      <p>Berdasarkan informasi lowongan pekerjaan yang saya peroleh, melalui surat ini saya bermaksud mengajukan lamaran untuk posisi <strong>Admin Accounting</strong> di <strong>Mister Group (Martabak MM)</strong>.</p>`;
content = content.replace(coverLetterStartRegex, newCoverLetterStart);

// Let's rewrite the body paragraphs to match the job requirements (Admin Accounting, outlet cash, reconciliation, stock opname)
const bodyRegex = /<p>Sarjana Akuntansi \(IPK 3,72\) dengan rekam jejak karir yang solid.*?<\/p>.*?(?=<div class="signature">)/s;

const newBody = `<p>Saya merupakan lulusan Sarjana Akuntansi (S.E.) dengan IPK 3,72. Sejak tahun 2020, saya telah membangun rekam jejak karir yang solid di bidang akuntansi dan administrasi keuangan. Saya memiliki keahlian kuat dalam mengelola pencatatan transaksi harian, merekapitulasi data penjualan/pembelian, hingga melakukan rekonsiliasi data keuangan secara teliti dan akurat.</p>
      <p>Saat ini, saya bekerja secara remote sebagai <strong>Finance & Accounting di PT. Coreterra Geo Engineering</strong>, di mana saya bertanggung jawab mengelola arus kas, memproses invoice, serta menyusun laporan keuangan perusahaan. Sebelumnya, sebagai <strong>Kaur Keuangan (Bendahara) di Desa Pananjung (2020 &ndash; 2024)</strong>, saya terbiasa melakukan pengecekan transaksi, rekonsiliasi kas, dan administrasi laporan keuangan bernilai miliaran rupiah dengan tingkat akurasi yang tinggi.</p>
      <p>Selain keahlian keuangan, pengalaman saya di PT Minearth Geo Solution juga melatih ketelitian saya dalam melakukan pengecekan data operasional (seperti proses <em>opname</em> dan validasi selisih). Saya sangat terbiasa mengolah dan merekap data dalam volume besar menggunakan <strong>Google Sheets</strong> maupun Microsoft Excel tingkat lanjut, serta memiliki fondasi yang kuat dalam penggunaan <em>software accounting</em> berkat keterlibatan saya merancang ekosistem digital ERP Manufaktur (SEAM-Annsa).</p>
      <p>Saya meyakini bahwa kemampuan analisis data, disiplin, dan kemampuan bekerja sama dalam tim yang saya miliki dapat mendukung kelancaran administrasi keuangan seluruh outlet Martabak MM. Saya siap beradaptasi dengan cepat terhadap sistem (termasuk Accurate) maupun standar kerja di Mister Group.</p>
      <p>Sebagai bahan pertimbangan Bapak/Ibu, bersama surat ini turut saya lampirkan dokumen pendukung. Saya sangat berharap dapat diberikan kesempatan wawancara untuk mendiskusikan kualifikasi saya lebih lanjut. Atas perhatian dan waktu Bapak/Ibu, saya ucapkan terima kasih.</p>
      `;

content = content.replace(bodyRegex, newBody);

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Updated CV_MartabakMM.html');
