import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'public/assets/docs/CV_Distribusindo.html');
let content = fs.readFileSync(filePath, 'utf-8');

// Update Title
content = content.replace(/<title>.*?<\/title>/g, '<title>CV Syabaab Amin Amanullah - CV Distribusindo</title>');

// Update Header (Perihal & Yth)
content = content.replace(/<strong>Perihal<\/strong> : Lamaran Pekerjaan.*?<\/p>/s, `<strong>Perihal</strong> : Lamaran Pekerjaan Accounting & Tax Staff<br>
      <strong>Yth. HRD CV Distribusindo Makmur Abadi</strong><br>
      <strong>Kota Bandung</strong></p>`);

// Update the first paragraph of the cover letter
const coverLetterStartRegex = /Dengan hormat,\s*<\/p>\s*<p>Berdasarkan informasi lowongan pekerjaan yang saya peroleh, melalui surat ini saya bermaksud mengajukan lamaran untuk posisi.*?<\/p>/s;
const newCoverLetterStart = `Dengan hormat,</p>
      <p>Berdasarkan informasi lowongan pekerjaan yang saya peroleh, melalui surat ini saya bermaksud mengajukan lamaran untuk posisi <strong>Accounting & Tax Staff</strong> di <strong>CV Distribusindo Makmur Abadi</strong>.</p>`;
content = content.replace(coverLetterStartRegex, newCoverLetterStart);

// Let's rewrite the body paragraphs to match the job requirements
// We will replace everything from `<p>Sarjana Akuntansi` up to the end of the Cover Letter text.
const bodyRegex = /<p>Sarjana Akuntansi \(IPK 3,72\) dengan rekam jejak karir yang solid.*?<\/p>.*?(?=<div class="signature">)/s;

const newBody = `<p>Saya merupakan lulusan Sarjana Akuntansi (S.E.) dengan IPK 3,72. Sejak tahun 2020, saya telah membangun rekam jejak karir yang solid di bidang akuntansi, keuangan, dan operasional. Saya memiliki pengalaman yang relevan dengan kebutuhan distribusi dan akuntansi, mulai dari rekonsiliasi bank, kontrol piutang/hutang (AP/AR), hingga pelaporan pajak perusahaan.</p>
      <p>Saat ini, saya bekerja secara remote sebagai <strong>Finance & Accounting di PT. Coreterra Geo Engineering</strong>. Pada posisi ini, saya bertanggung jawab penuh dalam memantau arus kas, memproses penagihan (invoicing), melakukan rekonsiliasi, serta menyusun laporan keuangan berkala. Sebelumnya, sebagai <strong>Kaur Keuangan (Bendahara) di Desa Pananjung (2020 &ndash; 2024)</strong>, saya terbiasa mengelola administrasi anggaran publik bernilai &plusmn; Rp3 Miliar per tahun yang menuntut kepatuhan administratif dan audit perpajakan yang ketat.</p>
      <p>Selain keahlian keuangan, saya memiliki pemahaman mendalam mengenai <strong>sistem inventory dan stock control</strong> berkat pengalaman saya sebagai <em>System Developer</em> dalam merancang ekosistem bisnis digital (seperti ERP Manufaktur SEAM-Annsa). Hal ini membuat saya sangat familiar dengan penggunaan <em>software accounting/ERP</em> serta integrasi alur pembelian, persediaan, dan penjualan.</p>
      <p>Berbekal penguasaan Microsoft Excel tingkat mahir, pemahaman administrasi perpajakan (PPN/PPh), serta sikap jujur, teliti, dan disiplin, saya sangat yakin dapat memberikan kontribusi nyata dalam memastikan kelancaran administrasi keuangan dan perpajakan di CV Distribusindo Makmur Abadi.</p>
      <p>Sebagai bahan pertimbangan Bapak/Ibu, bersama surat ini turut saya lampirkan dokumen pendukung. Saya sangat berharap dapat diberikan kesempatan wawancara untuk mendiskusikan kualifikasi saya lebih lanjut. Atas perhatian dan waktu Bapak/Ibu, saya ucapkan terima kasih.</p>
      `;

content = content.replace(bodyRegex, newBody);

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Updated CV_Distribusindo.html');
