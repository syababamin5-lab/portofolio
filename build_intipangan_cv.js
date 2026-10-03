import fs from 'fs';
import path from 'path';

const htmlContent = `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>CV Syabaab Amin Amanullah - CV Inti Pangan Distribusi</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
    
    body {
      font-family: 'Inter', sans-serif;
      color: #333;
      line-height: 1.3;
      margin: 0;
      padding: 1cm 0;
      background: #f4f4f9;
      font-size: 0.85rem;
    }
    
    .page {
      background: #fff;
      padding: 1.5cm 1.5cm;
      box-shadow: 0 4px 10px rgba(0,0,0,0.1);
      margin: 0 auto;
      max-width: 21cm;
      border-radius: 8px;
    }
    
    @page {
      margin: 5mm 10mm;
    }

    @media print {
      body {
        background: transparent;
        padding: 0;
        font-size: 11pt;
        line-height: 1.35;
      }
      .page {
        box-shadow: none;
        margin: 0;
        border-radius: 0;
        padding: 0;
        max-width: none;
        page-break-after: always;
      }
      .page:last-child {
        page-break-after: auto;
      }
      @page {
        margin: 1.2cm 1.5cm;
      }
      h2, h3, p, ul, li {
        page-break-inside: auto;
      }
      .no-print {
        display: none !important;
      }
    }

    h1 {
      font-size: 16pt;
      border-bottom: 2px solid #0f172a;
      padding-bottom: 4pt;
      color: #0f172a;
      margin-top: 0;
    }

    h2 {
      font-size: 12pt;
      border-bottom: 1px solid #ddd;
      padding-bottom: 3pt;
      color: #14532d;
      margin-top: 12pt;
      margin-bottom: 4pt;
    }

    h3 {
      font-size: 11pt;
      margin-bottom: 2pt;
      color: #1e293b;
    }

    p {
      margin-top: 0;
      margin-bottom: 0.4rem;
      text-align: justify;
    }

    .header-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 0.75rem;
      border-bottom: 2px solid #0f172a;
      padding-bottom: 0.5rem;
    }

    .header-text {
      flex: 1;
    }

    .header-text h1 {
      border: none;
      font-size: 16pt;
      margin-bottom: 2pt;
      padding-bottom: 0;
      text-align: left;
    }

    .header-text p {
      text-align: left;
      color: #555;
      font-size: 10pt;
      margin: 2pt 0;
    }

    .header-photo {
      width: 75px;
      height: 100px;
      margin-left: 1.5rem;
      border-radius: 6px;
      object-fit: cover;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      border: 2px solid #fff;
    }

    ul {
      margin-top: 0.15rem;
      margin-bottom: 0.4rem;
      padding-left: 1.25rem;
    }

    li {
      margin-bottom: 0.1rem;
      text-align: left;
    }

    .job-meta {
      font-size: 0.8rem;
      color: #555;
      font-style: italic;
      margin-bottom: 0.2rem;
    }

    .grid-2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }
    
    .signature {
      margin-top: 1rem;
    }
  </style>
</head>
<body>

  <!-- PAGE 1: SURAT LAMARAN -->
  <div class="page">
    <h1 style="border-bottom: none; font-size: 16pt; margin-bottom: 2rem; color: #166534; text-align: center;">SURAT LAMARAN PEKERJAAN</h1>
    
    <p><strong>Perihal</strong> : Lamaran Pekerjaan Freelance Finance<br>
    <strong>Yth. Pimpinan / HRD CV Inti Pangan Distribusi</strong><br>
    <strong>Bandung</strong></p>

    <p style="margin-top: 1.5rem;">Dengan hormat,</p>

    <p>Berdasarkan informasi lowongan yang saya peroleh, melalui surat ini saya bermaksud mengajukan diri untuk mengisi posisi <strong>Freelance Finance</strong> di <strong>CV Inti Pangan Distribusi</strong>.</p>
    
    <p>Saya merupakan lulusan Sarjana Akuntansi (S.E.) dari STIE Pasundan Bandung dengan IPK 3,72. Sesuai dengan kriteria yang dibutuhkan, <strong>saya berdomisili di wilayah Kabupaten Bandung</strong> dan sangat bersedia untuk bekerja paruh waktu (<em>freelance</em>) secara konsisten pada pukul <strong>15.00 - 18.00 WIB</strong>.</p>
    
    <p>Saya memiliki pengalaman praktis lebih dari 4 tahun dalam mengelola administrasi keuangan. Dalam pekerjaan saya, saya terbiasa mencatat dan merekap arus kas (pemasukan maupun pengeluaran) secara rutin, melakukan pengecekan bukti transaksi agar selaras dengan catatan, serta menyusun laporan keuangan berkala untuk evaluasi manajemen. Selain itu, saya juga aktif melakukan <em>monitoring</em> terhadap piutang pelanggan dan kewajiban/hutang perusahaan agar likuiditas tetap terjaga.</p>
    
    <p>Untuk menunjang kecepatan dan ketepatan pencatatan data, saya sangat mahir menggunakan <strong>Microsoft Excel dan Google Sheets</strong>, termasuk penggunaan formula lanjutan (seperti <em>PivotTable, VLOOKUP, SUMIFS</em>) yang sangat berguna untuk merapikan data transaksi harian di perusahaan distribusi.</p>
    
    <p>Saya adalah individu yang teliti, jujur, dan bertanggung jawab terhadap kerapian dokumen. Saya yakin pengalaman saya di bidang pencatatan keuangan dapat membantu kelancaran administrasi CV Inti Pangan Distribusi. Sebagai bahan pertimbangan, bersama surat ini saya melampirkan <em>Curriculum Vitae</em> (CV) dan dokumen pendukung lainnya.</p>
    
    <p>Besar harapan saya untuk dapat diberikan kesempatan wawancara agar dapat menjelaskan kualifikasi ini secara lebih rinci. Atas waktu dan perhatian Bapak/Ibu, saya ucapkan terima kasih.</p>

    <div class="signature">
      <p style="margin-bottom: 0;">Hormat saya,</p>
      <img src="../img/ttd%20syabaab.jpg" alt="Tanda Tangan" style="width: 55px; display: block; margin: 0; mix-blend-mode: multiply;" />
      <p style="margin-top: 0;"><strong>Syabaab Amin Amanullah, S.E.</strong><br>
      📞 081214914641<br>
      ✉️ syabaabaminamanullah@gmail.com<br>
      🌐 <a href="https://syababamin5-lab.github.io/portofolio/" style="color: #333; text-decoration: none;">syababamin5-lab.github.io/portofolio</a></p>
    </div>
  </div>

  <!-- PAGE 2: CV -->
  <div class="page">
    <div class="header-container">
      <div class="header-text">
        <h1>SYABAAB AMIN AMANULLAH, S.E.</h1>
        <p style="color:#166534; font-weight:600; margin-bottom:0.5rem">FREELANCE FINANCE | CASH FLOW & FINANCIAL REPORTING</p>
        <p>📍 Kabupaten Bandung &nbsp;|&nbsp; 📞 081214914641 &nbsp;|&nbsp; ✉️ syabaabaminamanullah@gmail.com</p>
        <p>🌐 Portofolio: <a href="https://syababamin5-lab.github.io/portofolio/" style="color: #166534; text-decoration: none;">syababamin5-lab.github.io/portofolio</a></p>
      </div>
      <img src="../img/foto_syabaab.png" alt="Pas Foto Syabaab" class="header-photo" />
    </div>

    <h2>PROFIL PROFESIONAL</h2>
    <p>Sarjana Akuntansi (IPK 3,72) yang berdomisili di Bandung, dengan pengalaman solid di bidang pencatatan keuangan dan administrasi operasional. Terbiasa mengelola siklus transaksi harian, mencatat arus kas (pemasukan dan pengeluaran), memonitor piutang pelanggan dan kewajiban usaha, serta menyusun laporan keuangan secara berkala. Sangat mahir mengoperasikan Microsoft Excel dan Google Sheets untuk merekap data secara cepat dan terstruktur. Memiliki ketelitian tinggi dalam mengecek bukti transaksi keuangan dan memastikan kerapian dokumen. Memiliki fleksibilitas waktu dan komitmen penuh untuk bekerja paruh waktu (<em>freelance</em>) pada jadwal 15.00 - 18.00 WIB guna mendukung operasional distribusi.</p>

    <div class="grid-2">
      <div>
        <h2>KOMPETENSI UTAMA</h2>
        <ul>
          <li>Pencatatan Pemasukan & Pengeluaran Kas</li>
          <li>Pembuatan Laporan Keuangan Rutin</li>
          <li><em>Monitoring</em> Piutang & Kewajiban Perusahaan</li>
          <li>Pengecekan Transaksi & Bukti Keuangan</li>
          <li>Administrasi Keuangan Usaha Distribusi</li>
          <li>Ketelitian Analisis & Kerapian Dokumen</li>
          <li>Disiplin Kerja & Manajemen Waktu (<em>Freelance</em>)</li>
        </ul>
      </div>
      <div>
        <h2>KETERAMPILAN & TOOLS</h2>
        <ul>
          <li>Microsoft Excel (Pengolahan Data Advanced)</li>
          <li>Google Workspace / Google Sheets</li>
          <li>Dasar Akuntansi & Administrasi</li>
          <li>Manajemen Data & Arsip Dokumen</li>
          <li>Komunikasi Efektif & Pelaporan</li>
        </ul>
      </div>
    </div>

    <h2>PENDIDIKAN</h2>
    <h3>STIE PASUNDAN BANDUNG</h3>
    <div class="job-meta">Sarjana Akuntansi (S.E.) | 2018 - 2021 | IPK: 3,72</div>

    <h2>PENGALAMAN KERJA RELEVAN</h2>

    <h3>PT CORETERRA GEO ENGINEERING</h3>
    <div class="job-meta">Finance & Accounting (Remote) | 2026 - Sekarang</div>
    <ul>
      <li>Mencatat seluruh transaksi keuangan harian dan menyusun laporan pemasukan serta pengeluaran secara akurat.</li>
      <li>Membantu proses <em>monitoring</em> penagihan piutang pelanggan dan menjadwalkan pembayaran kewajiban kepada <em>supplier</em>.</li>
      <li>Melakukan pengecekan silang (rekonsiliasi) antara mutasi bank dengan dokumen transaksi fisik untuk menjaga ketepatan data.</li>
    </ul>

    <h3>PEMERINTAH DESA PANANJUNG</h3>
    <div class="job-meta">Kepala Urusan Keuangan (Bendahara) | 2020 - 2024</div>
    <ul>
      <li>Mencatat dan merekap transaksi keuangan publik bernilai miliaran rupiah setiap tahunnya ke dalam sistem pembukuan.</li>
      <li>Mengecek kelengkapan setiap dokumen penagihan dan bukti pengeluaran untuk memastikan tidak ada kesalahan nominal.</li>
      <li>Menyusun laporan realisasi keuangan secara rutin dan menjaga kerapian arsip dokumen secara sistematis.</li>
    </ul>

    <h3>PT MINEARTH GEO SOLUTION</h3>
    <div class="job-meta">Admin & Koordinator Mutu Laboratorium | 2025 - Juni 2026</div>
    <ul>
      <li>Mengelola rekapitulasi data layanan operasional menggunakan Microsoft Excel secara cepat dan teliti.</li>
      <li>Mengecek kesesuaian dokumen administrasi dengan standar operasional prosedur (SOP) perusahaan.</li>
    </ul>

  </div>

  <a href="../../index.html" class="no-print" style="position: fixed; bottom: 20px; left: 20px; background: #0f172a; color: white; padding: 10px 20px; border-radius: 50px; text-decoration: none; font-weight: bold; box-shadow: 0 4px 6px rgba(0,0,0,0.1); z-index: 1000; font-family: 'Inter', sans-serif;">
    &larr; Kembali ke Home
  </a>
</body>
</html>`;

const filePath = path.join(process.cwd(), 'public/assets/docs/CV_IntiPangan.html');
fs.writeFileSync(filePath, htmlContent, 'utf-8');
console.log('Successfully generated CV_IntiPangan.html based on HR principles.');
