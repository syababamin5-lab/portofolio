import fs from 'fs';
import path from 'path';

function createCV(fileName, targetTitle, targetSubject, targetCompany, newBodyHTML) {
  const filePath = path.join(process.cwd(), 'public/assets/docs', fileName);
  const baseFilePath = path.join(process.cwd(), 'public/assets/docs', 'CV_Indokemas.html');
  let content = fs.readFileSync(baseFilePath, 'utf-8');

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
  const bodyRegex = /<p>Saya merupakan lulusan Sarjana Akuntansi.*?<\/p>\s*<p style="margin-top: 1rem; margin-bottom: 0;">Hormat saya,<\/p>/s;
  const newBodyFull = newBodyHTML + `\n\n      <p style="margin-top: 1rem; margin-bottom: 0;">Hormat saya,</p>`;
  content = content.replace(bodyRegex, newBodyFull);

  fs.writeFileSync(filePath, content, 'utf-8');
}

const charoenBody = `<p>Saya merupakan lulusan Sarjana Akuntansi (S.E.) dengan IPK 3,72. Saya memiliki pengalaman administrasi operasional serta pemahaman yang kuat terkait alur sistem informasi perusahaan yang saya yakini relevan dengan kualifikasi Admin Warehouse di PT. Charoen Pokphand Indonesia.</p>
      <p>Dalam riwayat pekerjaan saya (sebagai Admin di PT Minearth Geo Solution dan Bendahara di Desa Pananjung), saya sangat terbiasa mengelola dokumen secara teliti, merekapitulasi data harian menggunakan Microsoft Excel tingkat lanjut, serta melakukan pengecekan operasional untuk meminimalkan selisih data.</p>
      <p>Di samping pengalaman administrasi, saya juga memiliki pemahaman dasar pemrograman dan logika sistem (seperti yang disyaratkan pada lowongan ini) melalui keterlibatan saya dalam tim pengembangan perangkat lunak ERP Manufaktur (SEAM-Annsa). Pengalaman membedah alur modul <em>Inventory</em> dan rantai pasok dalam proyek tersebut membuat saya cepat memahami alur kerja gudang/logistik serta mudah beradaptasi dengan penggunaan <em>software enterprise</em> seperti SAP.</p>
      <p>Saya merupakan pribadi yang teliti, jujur, dan bertanggung jawab. Saya terbiasa bekerja di bawah tekanan untuk menyelesaikan laporan secara tepat waktu, baik secara individu maupun dalam tim.</p>
      <p>Sebagai bahan pertimbangan, saya melampirkan Curriculum Vitae dan dokumen kelengkapan lainnya. Saya sangat berharap Bapak/Ibu bersedia memberikan kesempatan wawancara agar saya dapat menjelaskan lebih detail kualifikasi saya. Atas waktu dan perhatiannya, saya ucapkan terima kasih.</p>`;

createCV('CV_Charoen.html', 'CV Syabaab Amin Amanullah - PT Charoen Pokphand', 'Admin Warehouse', 'PT. Charoen Pokphand Indonesia', charoenBody);

console.log('Successfully created CV_Charoen.html');
