import fs from 'fs';
import path from 'path';

function updateCV(fileName, targetTitle, targetSubject, targetCompany, newBodyHTML) {
  const filePath = path.join(process.cwd(), 'public/assets/docs', fileName);
  let content = fs.readFileSync(filePath, 'utf-8');

  // Title
  content = content.replace(/<title>.*?<\/title>/, `<title>${targetTitle}</title>`);

  // Perihal
  const perihalRegex = /<strong>Perihal<\/strong> : Lamaran Pekerjaan.*?<\/p>/s;
  const newPerihal = `<strong>Perihal</strong> : Lamaran Pekerjaan ${targetSubject}<br>
      <strong>Yth. HRD ${targetCompany}</strong><br>
      <strong>Kota Bandung</strong></p>`;
  content = content.replace(perihalRegex, newPerihal);

  // Cover Letter First Paragraph
  const coverLetterRegex = /<p[^>]*>Dengan hormat,<\/p>\s*<p>Berdasarkan informasi lowongan pekerjaan yang saya peroleh, melalui surat ini saya bermaksud mengajukan lamaran untuk posisi.*?<\/p>/s;
  const newCoverLetterStart = `<p style="margin-top: 1.5rem;">Dengan hormat,</p>
      <p>Berdasarkan informasi lowongan pekerjaan yang saya peroleh, melalui surat ini saya bermaksud mengajukan lamaran untuk posisi <strong>${targetSubject}</strong> di <strong>${targetCompany}</strong>.</p>`;
  content = content.replace(coverLetterRegex, newCoverLetterStart);

  // Replace Body
  const bodyRegex = /<p>Saya merupakan lulusan Sarjana Akuntansi.*?<\/p>\s*<div class="signature">/s;
  const newBodyFull = newBodyHTML + `\n\n      <div class="signature">`;
  content = content.replace(bodyRegex, newBodyFull);

  fs.writeFileSync(filePath, content, 'utf-8');
}

// DISTRIBUSINDO
const distBody = `<p>Saya merupakan lulusan Sarjana Akuntansi (S.E.) dengan IPK 3,72. Sejak tahun 2020, saya telah membangun rekam jejak karir yang solid di bidang akuntansi, keuangan, dan operasional. Saya memiliki pengalaman yang relevan dengan kebutuhan distribusi dan akuntansi, mulai dari rekonsiliasi bank, kontrol piutang/hutang (AP/AR), hingga pelaporan pajak perusahaan.</p>
      <p>Saat ini, saya bekerja secara remote sebagai <strong>Finance & Accounting di PT. Coreterra Geo Engineering</strong>. Pada posisi ini, saya bertanggung jawab penuh dalam memantau arus kas, memproses penagihan (invoicing), melakukan rekonsiliasi, serta menyusun laporan keuangan berkala. Sebelumnya, sebagai <strong>Kaur Keuangan (Bendahara) di Desa Pananjung (2020 &ndash; 2024)</strong>, saya terbiasa mengelola administrasi anggaran publik bernilai &plusmn; Rp3 Miliar per tahun yang menuntut kepatuhan administratif dan audit perpajakan yang ketat.</p>
      <p>Selain keahlian keuangan, saya memiliki pemahaman mendalam mengenai <strong>sistem inventory dan stock control</strong> berkat pengalaman saya sebagai <em>System Developer</em> dalam merancang ekosistem bisnis digital (seperti ERP Manufaktur SEAM-Annsa). Hal ini membuat saya sangat familiar dengan penggunaan <em>software accounting/ERP</em> serta integrasi alur pembelian, persediaan, dan penjualan.</p>
      <p>Berbekal penguasaan Microsoft Excel tingkat mahir, pemahaman administrasi perpajakan (PPN/PPh), serta sikap jujur, teliti, dan disiplin, saya sangat yakin dapat memberikan kontribusi nyata dalam memastikan kelancaran administrasi keuangan dan perpajakan di CV Distribusindo Makmur Abadi.</p>
      <p>Sebagai bahan pertimbangan Bapak/Ibu, bersama surat ini turut saya lampirkan dokumen pendukung. Saya sangat berharap dapat diberikan kesempatan wawancara untuk mendiskusikan kualifikasi saya lebih lanjut. Atas perhatian dan waktu Bapak/Ibu, saya ucapkan terima kasih.</p>`;

updateCV('CV_Distribusindo.html', 'CV Syabaab Amin Amanullah - CV Distribusindo', 'Accounting & Tax Staff', 'CV Distribusindo Makmur Abadi', distBody);

// MARTABAK MM
const mmBody = `<p>Saya merupakan lulusan Sarjana Akuntansi (S.E.) dengan IPK 3,72. Sejak tahun 2020, saya telah membangun rekam jejak karir yang solid di bidang akuntansi dan administrasi keuangan. Saya memiliki keahlian kuat dalam mengelola pencatatan transaksi harian, merekapitulasi data penjualan/pembelian, hingga melakukan rekonsiliasi data keuangan secara teliti dan akurat.</p>
      <p>Saat ini, saya bekerja secara remote sebagai <strong>Finance & Accounting di PT. Coreterra Geo Engineering</strong>, di mana saya bertanggung jawab mengelola arus kas, memproses invoice, serta menyusun laporan keuangan perusahaan. Sebelumnya, sebagai <strong>Kaur Keuangan (Bendahara) di Desa Pananjung (2020 &ndash; 2024)</strong>, saya terbiasa melakukan pengecekan transaksi, rekonsiliasi kas, dan administrasi laporan keuangan bernilai miliaran rupiah dengan tingkat akurasi yang tinggi.</p>
      <p>Selain keahlian keuangan, pengalaman saya di PT Minearth Geo Solution juga melatih ketelitian saya dalam melakukan pengecekan data operasional (seperti proses <em>opname</em> dan validasi selisih). Saya sangat terbiasa mengolah dan merekap data dalam volume besar menggunakan <strong>Google Sheets</strong> maupun Microsoft Excel tingkat lanjut, serta memiliki fondasi yang kuat dalam penggunaan <em>software accounting</em> berkat keterlibatan saya merancang ekosistem digital ERP Manufaktur (SEAM-Annsa).</p>
      <p>Saya meyakini bahwa kemampuan analisis data, disiplin, dan kemampuan bekerja sama dalam tim yang saya miliki dapat mendukung kelancaran administrasi keuangan seluruh outlet Martabak MM. Saya siap beradaptasi dengan cepat terhadap sistem (termasuk Accurate) maupun standar kerja di Mister Group.</p>
      <p>Sebagai bahan pertimbangan Bapak/Ibu, bersama surat ini turut saya lampirkan dokumen pendukung. Saya sangat berharap dapat diberikan kesempatan wawancara untuk mendiskusikan kualifikasi saya lebih lanjut. Atas perhatian dan waktu Bapak/Ibu, saya ucapkan terima kasih.</p>`;

updateCV('CV_MartabakMM.html', 'CV Syabaab Amin Amanullah - Martabak MM', 'Admin Accounting', 'Mister Group (Martabak MM)', mmBody);

console.log('Successfully regenerated CV_Distribusindo and CV_MartabakMM');
