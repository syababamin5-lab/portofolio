import fs from 'fs';
import path from 'path';

const htmlContent = `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>CV Syabaab Amin Amanullah - Finance Officer - Kintakun</title>
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
      size: A4;
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
        size: A4;
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
      color: #1a3a5c;
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
    <h1 style="border-bottom: none; font-size: 16pt; margin-bottom: 2rem; color: #1a3a5c; text-align: center;">SURAT LAMARAN PEKERJAAN</h1>
    
    <p><strong>Perihal</strong> : Lamaran Pekerjaan &ndash; Finance Officer<br>
    <strong>Yth. Tim Rekrutmen &amp; HRD</strong><br>
    <strong>Kintakun</strong><br>
    Di Tempat</p>

    <p style="margin-top: 1.5rem;">Dengan hormat,</p>

    <p>Berdasarkan informasi lowongan pekerjaan yang saya peroleh, saya bermaksud mengajukan lamaran untuk posisi <strong>Finance Officer</strong> di Kintakun.</p>
    
    <p>Saya merupakan lulusan Sarjana Akuntansi (S.E.) dari STIE Pasundan Bandung dengan IPK 3,72 dan memiliki pengalaman kerja sejak 2020 di bidang finance, accounting, administrasi operasional, serta pengolahan data keuangan.</p>
    
    <p>Pengalaman kerja saya meliputi pengelolaan administrasi keuangan dan pembukuan di PT Coreterra Geo Engineering (rekonsiliasi bank, monitoring arus kas, pengelolaan invoicing, Account Payable dan Receivable, serta pelaporan keuangan periodik), pengelolaan invoice dan dokumen administrasi operasional di PT Minearth Geo Solution, serta pengelolaan anggaran dan pelaporan pertanggungjawaban keuangan di Pemerintah Desa Pananjung.</p>
    
    <p>Saya memahami proses rekonsiliasi transaksi, pengelolaan piutang dan hutang usaha, monitoring aging AR/AP, serta pengelolaan proses pembayaran vendor sesuai termin. Saya juga terbiasa menggunakan Microsoft Excel (rumus dan pivot) dan Google Sheets untuk pengolahan dan verifikasi data dalam volume besar, serta memiliki dasar penggunaan software akuntansi (Accurate &amp; Siskeudes).</p>
    
    <p>Sebagai bahan pertimbangan, bersama ini saya lampirkan CV dan dokumen pendukung lainnya. Saya berharap dapat diberikan kesempatan untuk mengikuti proses wawancara guna menjelaskan kualifikasi saya lebih lanjut.</p>
    
    <p>Atas perhatian dan kesempatan yang diberikan, saya ucapkan terima kasih.</p>

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
        <p style="color:#1a3a5c; font-weight:600; margin-bottom:0.5rem">FINANCE OFFICER | ACCOUNTING &amp; FINANCE</p>
        <p>📍 Kabupaten Bandung, Jawa Barat &nbsp;|&nbsp; 📞 081214914641 &nbsp;|&nbsp; ✉️ syabaabaminamanullah@gmail.com</p>
        <p>🌐 <a href="https://syababamin5-lab.github.io/portofolio/" style="color: #1a3a5c; text-decoration: none;">syababamin5-lab.github.io/portofolio</a></p>
      </div>
      <img src="../img/foto_syabaab.png" alt="Pas Foto Syabaab" class="header-photo" />
    </div>

    <h2>PROFIL PROFESIONAL</h2>
    <p>Sarjana Akuntansi (IPK 3,72) dengan pengalaman kerja sejak 2020 di bidang finance, accounting, dan administrasi keuangan. Terbiasa menangani rekonsiliasi transaksi, pengelolaan invoice, monitoring piutang dan hutang usaha (aging AR/AP), serta proses pembayaran vendor sesuai termin. Mahir menggunakan Microsoft Excel (rumus dan pivot) dan Google Sheets untuk pengolahan data dalam volume besar. Teliti, rapi, berintegritas tinggi, dan mampu bekerja secara individu maupun tim.</p>

    <div class="grid-2">
      <div>
        <h2>KOMPETENSI UTAMA</h2>
        <ul>
          <li>Rekonsiliasi transaksi &amp; penjualan</li>
          <li>Monitoring piutang usaha &amp; Aging AR</li>
          <li>Pengelolaan hutang usaha &amp; Aging AP</li>
          <li>Invoice Vendor &amp; Termin Pembayaran</li>
          <li>Rekonsiliasi invoice, PO &amp; bukti terima barang</li>
          <li>Pelaporan keuangan &amp; audit support</li>
          <li>Microsoft Excel (Rumus &amp; Pivot Table)</li>
          <li>Google Sheets &amp; Google Workspace</li>
        </ul>
      </div>
      <div>
        <h2>KETERAMPILAN &amp; TOOLS</h2>
        <ul>
          <li>Microsoft Excel (pengolahan &amp; analisis data)</li>
          <li>Microsoft Word &amp; PowerPoint</li>
          <li>Google Workspace / Google Sheets</li>
          <li>Accurate (Dasar)</li>
          <li>Siskeudes</li>
          <li>Rekonsiliasi &amp; verifikasi transaksi</li>
          <li>Administrasi keuangan &amp; operasional</li>
          <li>Pencatatan &amp; monitoring cash flow</li>
        </ul>
      </div>
    </div>

    <h2>PENDIDIKAN</h2>
    <h3>STIE PASUNDAN BANDUNG</h3>
    <div class="job-meta">Sarjana Akuntansi (S.E.) | 2017 - 2021 | IPK: 3,72</div>

    <h2>PENGALAMAN KERJA</h2>
    
    <h3>PT CORETERRA GEO ENGINEERING</h3>
    <div class="job-meta">Finance &amp; Accounting (Remote / WFH) | Juni 2026 - September 2026</div>
    <ul>
      <li>Mengelola administrasi keuangan dan pembukuan perusahaan secara menyeluruh.</li>
      <li>Melakukan rekonsiliasi bank dan memantau arus kas (cash flow) secara periodik.</li>
      <li>Menyusun laporan keuangan bulanan dan periodik untuk evaluasi manajemen.</li>
      <li>Mengelola proses penagihan (invoicing), Account Receivable, dan pembayaran vendor (Account Payable) sesuai termin.</li>
      <li>Memastikan kelengkapan dan kesesuaian dokumen pendukung setiap transaksi keuangan.</li>
    </ul>

    <h3>PT MINEARTH GEO SOLUTION</h3>
    <div class="job-meta">Admin &amp; Koordinator Mutu Laboratorium | 2025 - Juni 2026</div>
    <ul>
      <li>Mengelola administrasi operasional laboratorium dan dokumen perusahaan.</li>
      <li>Melakukan verifikasi dan validasi data sebelum diterbitkan kepada klien.</li>
      <li>Menyusun laporan rekapitulasi dan mengelola invoice serta dokumen penawaran.</li>
      <li>Berkoordinasi dengan klien dan tim internal terkait administrasi pekerjaan.</li>
    </ul>

    <h3>PEMERINTAH DESA PANANJUNG</h3>
    <div class="job-meta">Kepala Urusan Keuangan (Kaur Keuangan / Bendahara) | 2020 - 2024</div>
    <ul>
      <li>Mengelola anggaran desa rata-rata ±Rp3 miliar per tahun.</li>
      <li>Menyusun APBDes, Realisasi APBDes, SPP, dan Laporan Pertanggungjawaban Keuangan.</li>
      <li>Melakukan verifikasi dokumen administrasi dan dokumen pendukung sebelum proses pencairan.</li>
      <li>Memastikan pelaksanaan administrasi dan pelaporan keuangan sesuai ketentuan yang berlaku.</li>
      <li>Mengoperasikan aplikasi Siskeudes untuk pengelolaan dan pelaporan keuangan desa.</li>
      <li>Menyiapkan dokumen yang diperlukan dalam proses evaluasi dan pemeriksaan oleh instansi terkait.</li>
    </ul>
  </div>
</body>
</html>`;

const filePath = path.join(process.cwd(), 'public/assets/docs/CV_Kintakun.html');
fs.writeFileSync(filePath, htmlContent, 'utf-8');
console.log('✅ CV_Kintakun.html berhasil dibuat di public/assets/docs/CV_Kintakun.html');
