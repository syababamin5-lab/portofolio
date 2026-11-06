import fs from 'fs';
import path from 'path';

const htmlContent = `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>CV Syabaab Amin Amanullah - Accounting - CV Sukses Jaya Bersama (SJM)</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

    body {
      font-family: 'Inter', sans-serif;
      color: #1e293b;
      line-height: 1.35;
      margin: 0;
      padding: 1cm 0;
      background: #f1f5f9;
      font-size: 0.85rem;
    }

    .page {
      background: #fff;
      padding: 1.5cm 1.5cm;
      box-shadow: 0 4px 10px rgba(0,0,0,0.08);
      margin: 0 auto 1cm;
      max-width: 21cm;
      border-radius: 8px;
    }

    @page { margin: 5mm 10mm; }

    @media print {
      body { background: transparent; padding: 0; font-size: 11pt; line-height: 1.35; }
      .page { box-shadow: none; margin: 0; border-radius: 0; padding: 0; max-width: none; page-break-after: always; }
      .page:last-child { page-break-after: auto; }
      @page { margin: 1.2cm 1.5cm; }
      .no-print { display: none !important; }
    }

    /* ===== COVER LETTER ===== */
    .cover-title {
      font-size: 15pt;
      font-weight: 700;
      text-align: center;
      color: #1d4ed8;
      border-bottom: 2.5px solid #1d4ed8;
      padding-bottom: 8pt;
      margin-bottom: 1.2rem;
      letter-spacing: 0.5px;
    }

    .cover-body p {
      margin-top: 0;
      margin-bottom: 0.65rem;
      text-align: justify;
    }

    .signature { margin-top: 1.2rem; }

    /* ===== CV ===== */
    .header-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 0.75rem;
      border-bottom: 2.5px solid #1d4ed8;
      padding-bottom: 0.5rem;
    }

    .header-text h1 {
      font-size: 16pt;
      font-weight: 700;
      color: #0f172a;
      margin: 0 0 2pt 0;
    }

    .tagline {
      font-size: 10pt;
      font-weight: 600;
      color: #1d4ed8;
      margin: 0 0 4pt 0;
    }

    .contact {
      font-size: 9pt;
      color: #475569;
      margin: 2pt 0;
    }

    .header-photo {
      width: 75px;
      height: 100px;
      margin-left: 1.5rem;
      border-radius: 6px;
      object-fit: cover;
      box-shadow: 0 4px 6px rgba(0,0,0,0.12);
      border: 2px solid #1d4ed8;
    }

    h2 {
      font-size: 10.5pt;
      border-bottom: 1.5px solid #1d4ed8;
      padding-bottom: 2pt;
      color: #1d4ed8;
      margin-top: 10pt;
      margin-bottom: 5pt;
      text-transform: uppercase;
      letter-spacing: 0.4px;
    }

    h3 {
      font-size: 10.5pt;
      margin-bottom: 1pt;
      margin-top: 0;
      color: #0f172a;
      font-weight: 600;
    }

    .job-meta {
      font-size: 8.5pt;
      color: #64748b;
      font-style: italic;
      margin-bottom: 3pt;
    }

    p { margin-top: 0; margin-bottom: 0.35rem; text-align: justify; }

    ul { margin-top: 0.1rem; margin-bottom: 0.4rem; padding-left: 1.2rem; }

    li { margin-bottom: 0.1rem; text-align: left; }

    .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }

    .profil-box {
      background: #eff6ff;
      border-left: 3px solid #1d4ed8;
      padding: 8pt 10pt;
      border-radius: 0 4px 4px 0;
      margin-bottom: 6pt;
    }

    .profil-box p { margin: 0; font-size: 9.5pt; color: #1e293b; }
  </style>
</head>
<body>

  <!-- PAGE 1: SURAT LAMARAN -->
  <div class="page">
    <div class="cover-title">SURAT LAMARAN PEKERJAAN</div>

    <div class="cover-body">
      <p><strong>Kepada Yth.</strong><br>
      Pimpinan / HRD CV Sukses Jaya Bersama (SJM)<br>
      Margaasih, Nanjung, Bandung</p>

      <p style="margin-top: 1.2rem;">Dengan hormat,</p>

      <p>Berdasarkan informasi lowongan pekerjaan yang saya peroleh, saya bermaksud mengajukan lamaran untuk posisi <strong>Accounting</strong> di CV Sukses Jaya Bersama (SJM).</p>

      <p>Saya merupakan lulusan <strong>Sarjana Akuntansi (S.E.) dari STIE Pasundan Bandung</strong> dengan IPK 3,72 dan memiliki pengalaman kerja sejak 2020 di bidang finance, accounting, serta administrasi operasional.</p>

      <p>Pengalaman kerja saya meliputi pengelolaan pembukuan dan administrasi keuangan di PT Coreterra Geo Engineering (rekonsiliasi bank, monitoring arus kas, invoicing, dan laporan keuangan periodik), administrasi operasional dan verifikasi dokumen di PT Minearth Geo Solution, serta penatausahaan anggaran dan pelaporan pertanggungjawaban keuangan sebagai Kaur Keuangan di Pemerintah Desa Pananjung.</p>

      <p>Saya menguasai Microsoft Excel dan Google Sheets untuk pengolahan data, serta memiliki dasar penggunaan software akuntansi (Accurate &amp; Siskeudes). Saya terbiasa bekerja secara teliti, tertib administrasi, disiplin, dan mampu bekerja sama dengan tim maupun mandiri.</p>

      <p>Sebagai bahan pertimbangan, bersama ini saya lampirkan CV dan dokumen pendukung lainnya. Saya berharap dapat diberikan kesempatan untuk mengikuti proses wawancara guna menjelaskan kualifikasi saya lebih lanjut.</p>

      <p>Atas perhatian dan kesempatan yang diberikan, saya ucapkan terima kasih.</p>
    </div>

    <div class="signature">
      <p style="margin-bottom: 0;">Hormat saya,</p>
      <img src="../img/ttd%20syabaab.jpg" alt="Tanda Tangan" style="width: 55px; display: block; margin: 4pt 0; mix-blend-mode: multiply;" />
      <p style="margin-top: 0;"><strong>Syabaab Amin Amanullah, S.E.</strong><br>
      📞 081214914641<br>
      ✉️ syabaabaminamanullah@gmail.com<br>
      🌐 <a href="https://syababamin5-lab.github.io/portofolio/" style="color: #1d4ed8; text-decoration: none;">syababamin5-lab.github.io/portofolio</a></p>
    </div>
  </div>

  <!-- PAGE 2: CV -->
  <div class="page">
    <div class="header-container">
      <div class="header-text">
        <h1>SYABAAB AMIN AMANULLAH, S.E.</h1>
        <p class="tagline">ACCOUNTING &amp; FINANCE</p>
        <p class="contact">📍 Kabupaten Bandung, Jawa Barat &nbsp;|&nbsp; 📞 081214914641 &nbsp;|&nbsp; ✉️ syabaabaminamanullah@gmail.com</p>
        <p class="contact">🌐 Portofolio: <a href="https://syababamin5-lab.github.io/portofolio/" style="color: #1d4ed8; text-decoration: none;">syababamin5-lab.github.io/portofolio</a></p>
      </div>
      <img src="../img/foto_syabaab.png" alt="Pas Foto Syabaab" class="header-photo" />
    </div>

    <h2>Profil Profesional</h2>
    <div class="profil-box">
      <p>Sarjana Akuntansi (IPK 3,72) dengan pengalaman kerja sejak 2020 di bidang finance, accounting, administrasi operasional, dan pengolahan data. Terbiasa menangani pencatatan dan verifikasi transaksi, rekonsiliasi, invoice, monitoring kas, penyusunan laporan, serta pengelolaan dokumen administrasi. Menguasai Microsoft Excel dan Google Sheets untuk pengolahan data, dan memiliki dasar penggunaan Accurate serta Siskeudes. Teliti, disiplin, bertanggung jawab, dan mampu bekerja sama dengan tim maupun secara mandiri.</p>
    </div>

    <div class="grid-2">
      <div>
        <h2>Kompetensi Utama</h2>
        <ul>
          <li>Administrasi &amp; pencatatan transaksi keuangan</li>
          <li>Rekonsiliasi bank, kas &amp; monitoring cash flow</li>
          <li>Invoice / Account Payable &amp; Receivable</li>
          <li>Verifikasi dokumen &amp; validasi data</li>
          <li>Penyusunan laporan keuangan / operasional</li>
          <li>Microsoft Excel &amp; Google Sheets</li>
          <li>Accurate (Dasar) &amp; Siskeudes</li>
          <li>Ketelitian, disiplin &amp; koordinasi tim</li>
        </ul>
      </div>
      <div>
        <h2>Keterampilan &amp; Tools</h2>
        <ul>
          <li>Microsoft Excel (pengolahan &amp; analisis data)</li>
          <li>Microsoft Word &amp; PowerPoint</li>
          <li>Google Workspace / Google Sheets</li>
          <li>Accurate (Dasar)</li>
          <li>Administrasi keuangan &amp; operasional</li>
          <li>Pencatatan &amp; verifikasi transaksi</li>
          <li>Rekonsiliasi &amp; monitoring cash flow</li>
          <li>Invoice / AP / AR</li>
        </ul>
      </div>
    </div>

    <h2>Pendidikan</h2>
    <h3>STIE PASUNDAN BANDUNG</h3>
    <div class="job-meta">Sarjana Akuntansi (S.E.) &nbsp;|&nbsp; 2017 – 2021 &nbsp;|&nbsp; IPK: 3,72</div>

    <h2>Pengalaman Kerja</h2>

    <h3>PT CORETERRA GEO ENGINEERING</h3>
    <div class="job-meta">Finance &amp; Accounting (Remote / WFH) &nbsp;|&nbsp; Juni 2026 – September 2026</div>
    <ul>
      <li>Mengelola administrasi keuangan dan pembukuan perusahaan secara menyeluruh.</li>
      <li>Melakukan rekonsiliasi bank dan memantau arus kas (cash flow) proyek.</li>
      <li>Menyusun laporan keuangan periodik untuk evaluasi manajemen.</li>
      <li>Mengelola proses penagihan (invoicing) dan pembayaran kepada vendor (Account Payable/Receivable).</li>
      <li>Memastikan kepatuhan terhadap standar akuntansi dan kebijakan keuangan perusahaan.</li>
    </ul>

    <h3>PT MINEARTH GEO SOLUTION</h3>
    <div class="job-meta">Admin &amp; Koordinator Mutu Laboratorium &nbsp;|&nbsp; 2025 – Juni 2026</div>
    <ul>
      <li>Mengelola administrasi operasional laboratorium mekanika tanah.</li>
      <li>Melakukan verifikasi dan validasi data hasil pengujian sebelum diterbitkan kepada klien.</li>
      <li>Menyusun laporan hasil pengujian dan rekapitulasi data operasional.</li>
      <li>Mengelola invoice, surat, penawaran, dan dokumen administrasi perusahaan.</li>
      <li>Berkoordinasi dengan klien dan tim internal terkait administrasi pekerjaan.</li>
    </ul>

    <h3>PEMERINTAH DESA PANANJUNG</h3>
    <div class="job-meta">Kepala Urusan Keuangan (Kaur Keuangan / Bendahara) &nbsp;|&nbsp; 2020 – 2024</div>
    <ul>
      <li>Mengelola anggaran desa rata-rata ±Rp3 miliar per tahun.</li>
      <li>Menyusun APBDes, Perubahan APBDes, Realisasi APBDes, SPP, dan LPJ.</li>
      <li>Melakukan verifikasi dokumen administrasi dan dokumen pendukung sebelum proses pencairan anggaran.</li>
      <li>Memastikan pelaksanaan administrasi dan pelaporan keuangan sesuai ketentuan yang berlaku.</li>
      <li>Mengoperasikan aplikasi Siskeudes untuk pengelolaan dan pelaporan keuangan desa.</li>
      <li>Menyiapkan dokumen yang diperlukan dalam proses evaluasi dan pemeriksaan oleh instansi terkait.</li>
      <li>Berkoordinasi dengan pemerintah kecamatan, kabupaten, dan instansi terkait dalam proses pelaporan dan evaluasi keuangan.</li>
    </ul>
  </div>

</body>
</html>`;

const filePath = path.join(process.cwd(), 'public/assets/docs/CV_SJM.html');
fs.writeFileSync(filePath, htmlContent, 'utf-8');
console.log('✅ CV_SJM.html berhasil dibuat di public/assets/docs/CV_SJM.html');
