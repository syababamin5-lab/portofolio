import fs from 'fs';
import path from 'path';

function updateCV(fileName, newBodyHTML) {
  const filePath = path.join(process.cwd(), 'public/assets/docs', fileName);
  let content = fs.readFileSync(filePath, 'utf-8');

  // Replace Body
  // We want to replace everything from <p>Saya merupakan lulusan Sarjana Akuntansi
  // up to <p style="margin-top: 1rem; margin-bottom: 0;">Hormat saya,</p>
  const bodyRegex = /<p>Saya merupakan lulusan Sarjana Akuntansi.*?<\/p>\s*<p style="margin-top: 1rem; margin-bottom: 0;">Hormat saya,<\/p>/s;
  const newBodyFull = newBodyHTML + `\n\n      <p style="margin-top: 1rem; margin-bottom: 0;">Hormat saya,</p>`;
  content = content.replace(bodyRegex, newBodyFull);

  fs.writeFileSync(filePath, content, 'utf-8');
}

// DISTRIBUSINDO
const distBody = `<p>Saya merupakan lulusan Sarjana Akuntansi (S.E.) dengan IPK 3,72. Saya memiliki pengalaman kerja di bidang administrasi dan keuangan yang relevan dengan kualifikasi yang dibutuhkan oleh CV Distribusindo Makmur Abadi.</p>
      <p>Saat ini, saya bekerja sebagai Finance & Accounting di PT. Coreterra Geo Engineering secara remote, di mana saya terbiasa menangani proses pencatatan, memantau arus kas, dan membantu penyusunan laporan keuangan. Sebelumnya, saya bertugas sebagai Kaur Keuangan (Bendahara) di Desa Pananjung (2020&ndash;2024), yang menuntut ketelitian tinggi dalam mengelola transaksi kas, memverifikasi dokumen pencairan, dan menyusun Laporan Pertanggungjawaban (LPJ).</p>
      <p>Selain itu, saya juga memiliki pemahaman dasar mengenai alur persediaan barang (inventory) berkat pengalaman saya terlibat dalam tim pengembangan sistem ERP. Hal ini membuat saya cukup terbiasa dengan alur sistem informasi perusahaan sehingga dapat dengan cepat beradaptasi menggunakan software akuntansi maupun pengolahan data menggunakan Microsoft Excel.</p>
      <p>Saya merupakan pribadi yang jujur, teliti, dan disiplin. Saya siap belajar hal baru dan mengikuti prosedur administrasi perusahaan (termasuk perpajakan), untuk memastikan kelancaran operasional keuangan di CV Distribusindo Makmur Abadi.</p>
      <p>Sebagai bahan pertimbangan Bapak/Ibu, bersama surat ini turut saya lampirkan dokumen pendukung. Saya berharap dapat diberikan kesempatan wawancara untuk mendiskusikan kualifikasi saya lebih lanjut. Atas perhatian Bapak/Ibu, saya ucapkan terima kasih.</p>`;

updateCV('CV_Distribusindo.html', distBody);

// MARTABAK MM
const mmBody = `<p>Saya merupakan lulusan Sarjana Akuntansi (S.E.) dengan IPK 3,72. Saya memiliki pengalaman yang relevan di bidang pencatatan keuangan dan administrasi operasional yang dapat menunjang pekerjaan sebagai Admin Accounting di Mister Group (Martabak MM).</p>
      <p>Saat ini, saya bekerja sebagai Finance & Accounting di PT. Coreterra Geo Engineering secara remote, di mana saya terbiasa menangani tagihan (invoice), memantau arus kas, dan membantu penyusunan laporan keuangan harian/bulanan. Sebelumnya, selama menjabat sebagai Kaur Keuangan (Bendahara) di Desa Pananjung (2020&ndash;2024), saya bertanggung jawab dalam pengelolaan transaksi kas harian, verifikasi kelengkapan dokumen, serta penyusunan laporan secara rutin dan teliti.</p>
      <p>Pengalaman saya di PT Minearth Geo Solution (sebagai Admin) juga melatih ketelitian saya dalam merapikan dokumen dan melakukan pengecekan data operasional. Saya sangat terbiasa mengolah dan merekap data harian menggunakan Google Sheets dan Microsoft Excel. Selain itu, keterlibatan saya dalam proyek pembuatan aplikasi bisnis (seperti sistem ERP) membuat saya tidak asing dengan cara kerja sistem komputer, sehingga saya siap dan mudah diajari untuk menggunakan software akuntansi seperti Accurate.</p>
      <p>Saya yakin sikap teliti, disiplin, dan kebiasaan saya dalam merapikan administrasi keuangan dapat membantu kelancaran pencatatan transaksi di outlet Martabak MM.</p>
      <p>Sebagai bahan pertimbangan, saya melampirkan beberapa dokumen pendukung. Saya sangat berharap dapat diberikan kesempatan wawancara. Atas perhatian dan waktu Bapak/Ibu, saya ucapkan terima kasih.</p>`;

updateCV('CV_MartabakMM.html', mmBody);

console.log('Successfully downgraded hyperbole to honest facts.');
