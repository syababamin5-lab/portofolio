import fs from 'fs';
import path from 'path';

const resumeHtml = `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Resume - Syabaab Amin Amanullah, S.E. (Finance & Accounting)</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
    
    * {
      box-sizing: border-box;
    }

    body {
      font-family: 'Inter', sans-serif;
      color: #333;
      line-height: 1.35;
      margin: 0;
      padding: 1cm 0;
      background: #f4f4f9;
      font-size: 8.8pt;
    }
    
    .page {
      background: #fff;
      padding: 1.2cm 1.4cm;
      box-shadow: 0 4px 10px rgba(0,0,0,0.1);
      margin: 0 auto;
      max-width: 21cm;
      min-height: 29.7cm;
      border-radius: 6px;
    }
    
    @page {
      size: A4;
      margin: 1cm 1.2cm;
    }

    @media print {
      body {
        background: transparent;
        padding: 0;
        font-size: 8.8pt;
        line-height: 1.35;
      }
      .page {
        box-shadow: none;
        margin: 0;
        border-radius: 0;
        padding: 0;
        max-width: none;
        min-height: auto;
      }
      .no-print {
        display: none !important;
      }
    }

    .header-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 0.6rem;
      border-bottom: 2px solid #0f172a;
      padding-bottom: 0.5rem;
    }

    .header-text {
      flex: 1;
    }

    .header-text h1 {
      font-size: 16pt;
      margin: 0 0 2pt 0;
      color: #0f172a;
      font-weight: 700;
      letter-spacing: -0.5px;
    }

    .header-text .tagline {
      color: #1e3a8a;
      font-weight: 600;
      font-size: 10pt;
      margin-bottom: 0.35rem;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .header-text p {
      color: #475569;
      font-size: 8.5pt;
      margin: 1.5pt 0;
    }

    .header-photo {
      width: 72px;
      height: 96px;
      margin-left: 1.2rem;
      border-radius: 4px;
      object-fit: cover;
      box-shadow: 0 2px 5px rgba(0,0,0,0.15);
      border: 1px solid #cbd5e1;
    }

    h2 {
      font-size: 10.5pt;
      border-bottom: 1.5px solid #cbd5e1;
      padding-bottom: 2.5pt;
      color: #1e3a8a;
      margin-top: 8pt;
      margin-bottom: 4pt;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      font-weight: 700;
    }

    h3 {
      font-size: 9.5pt;
      margin: 3pt 0 1pt 0;
      color: #0f172a;
      font-weight: 600;
    }

    p {
      margin: 0 0 0.35rem 0;
      text-align: justify;
    }

    .job-meta {
      font-size: 8pt;
      color: #64748b;
      font-style: italic;
      margin-bottom: 2pt;
    }

    ul {
      margin-top: 1pt;
      margin-bottom: 4pt;
      padding-left: 1.15rem;
    }

    li {
      margin-bottom: 1.5pt;
      text-align: justify;
    }

    .grid-2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.2rem;
    }
  </style>
</head>
<body>

  <div class="page">
    <!-- HEADER -->
    <div class="header-container">
      <div class="header-text">
        <h1>SYABAAB AMIN AMANULLAH, S.E.</h1>
        <div class="tagline">Finance &amp; Accounting Professional</div>
        <p>📍 Kabupaten Bandung, Jawa Barat &nbsp;|&nbsp; 📞 081214914641 &nbsp;|&nbsp; ✉️ syabaabaminamanullah@gmail.com</p>
        <p>🌐 Portofolio: <a href="https://syababamin5-lab.github.io/portofolio/" style="color: #1e3a8a; text-decoration: none;">syababamin5-lab.github.io/portofolio</a></p>
      </div>
      <img src="../img/foto_syabaab.png" alt="Pas Foto Syabaab" class="header-photo" />
    </div>

    <!-- PROFIL PROFESIONAL -->
    <h2>Ringkasan Profesional</h2>
    <p>Sarjana Akuntansi (IPK 3,72) dengan pengalaman kerja lebih dari 4 tahun di bidang akuntansi, penatausahaan keuangan, administrasi operasional, dan kepatuhan perpajakan. Berpengalaman menangani pembukuan umum, rekonsiliasi kas dan rekening koran bank, pengelolaan siklus <em>Account Payable</em> &amp; <em>Receivable</em> (AP/AR), penyusunan laporan keuangan periodik, hingga perencanaan anggaran (<em>budgeting</em>). Mahir mengoperasikan Microsoft Excel tingkat lanjut untuk validasi data dalam jumlah besar dan memiliki dasar software akuntansi (Accurate &amp; Siskeudes). Pribadi yang teliti, tertib administrasi, berintegritas tinggi, dan mampu bekerja mandiri maupun kolaborasi tim.</p>

    <!-- KOMPETENSI & KEAHLIAN -->
    <div class="grid-2">
      <div>
        <h2>Kompetensi Utama</h2>
        <ul>
          <li>Penyusunan Laporan Keuangan Periodik</li>
          <li>Pencatatan Jurnal &amp; Rekonsiliasi Bank/Kas</li>
          <li>Pengelolaan Account Payable &amp; Receivable</li>
          <li>Invoicing, Verifikasi Faktur &amp; Dokumen</li>
          <li>Perencanaan Anggaran (Budgeting) &amp; LPJ</li>
          <li>Dasar Kepatuhan Pajak (PPh 21, 23, PPN)</li>
          <li>Audit Readiness &amp; Pengendalian Internal</li>
        </ul>
      </div>
      <div>
        <h2>Keahlian Teknis &amp; Tools</h2>
        <ul>
          <li>Microsoft Excel (Advanced: VLOOKUP, Pivot, Analisis)</li>
          <li>Microsoft Office (Word, PowerPoint)</li>
          <li>Google Workspace (Google Sheets, Docs, Drive)</li>
          <li>Software Akuntansi: Accurate (Dasar), Siskeudes</li>
          <li>Administrasi Keuangan &amp; Arsip Dokumen</li>
          <li>Analisis Arus Kas (Cash Flow Management)</li>
          <li>Ketelitian, Integritas &amp; Komunikasi Tim</li>
        </ul>
      </div>
    </div>

    <!-- PENDIDIKAN -->
    <h2>Pendidikan</h2>
    <div style="display: flex; justify-content: space-between; align-items: baseline;">
      <div>
        <h3 style="margin: 0;">STIE PASUNDAN BANDUNG</h3>
        <div style="font-size: 8.5pt; color: #334155;">Sarjana Akuntansi (S.E.) &ndash; Konsentrasi Keuangan &amp; Akuntansi</div>
      </div>
      <div style="text-align: right;">
        <span class="job-meta">2017 &ndash; 2021</span><br>
        <strong style="color: #1e3a8a; font-size: 8.5pt;">IPK: 3,72 / 4,00</strong>
      </div>
    </div>

    <!-- PENGALAMAN KERJA -->
    <h2>Pengalaman Kerja</h2>

    <div style="display: flex; justify-content: space-between; align-items: baseline;">
      <h3 style="margin: 0;">PT CORETERRA GEO ENGINEERING</h3>
      <span class="job-meta">Juni 2026 &ndash; September 2026</span>
    </div>
    <div class="job-meta">Finance &amp; Accounting (Remote / WFH)</div>
    <ul>
      <li>Mengelola administrasi akuntansi dan pembukuan keuangan perusahaan secara menyeluruh.</li>
      <li>Melakukan rekonsiliasi bank harian dan bulanan guna memastikan kecocokan mutasi kas dan rekening koran.</li>
      <li>Menyusun laporan keuangan periodik (laba rugi, neraca) sebagai dasar pengambilan keputusan manajemen.</li>
      <li>Mengelola faktur penagihan (invoicing), memantau piutang (AR), dan memverifikasi pembayaran vendor (AP).</li>
      <li>Memastikan kelengkapan bukti transaksi dan kepatuhan terhadap kebijakan keuangan internal.</li>
    </ul>

    <div style="display: flex; justify-content: space-between; align-items: baseline; margin-top: 4pt;">
      <h3 style="margin: 0;">PT MINEARTH GEO SOLUTION</h3>
      <span class="job-meta">2025 &ndash; Juni 2026</span>
    </div>
    <div class="job-meta">Admin &amp; Koordinator Mutu Laboratorium</div>
    <ul>
      <li>Mengelola administrasi operasional laboratorium mekanika tanah dan arsip dokumen kerja sama.</li>
      <li>Melakukan verifikasi dan validasi data transaksi serta penagihan sebelum diterbitkan ke klien.</li>
      <li>Menyusun rekapitulasi data operasional, mengelola penerbitan invoice, dan memantau status pembayaran.</li>
      <li>Berkoordinasi lintas divisi dan dengan klien terkait kelancaran administrasi pekerjaan.</li>
    </ul>

    <div style="display: flex; justify-content: space-between; align-items: baseline; margin-top: 4pt;">
      <h3 style="margin: 0;">PEMERINTAH DESA PANANJUNG</h3>
      <span class="job-meta">2020 &ndash; 2024</span>
    </div>
    <div class="job-meta">Kepala Urusan Keuangan (Kaur Keuangan / Bendahara)</div>
    <ul>
      <li>Memimpin pengelolaan penatausahaan keuangan dan anggaran tahunan rata-rata ±Rp3 miliar.</li>
      <li>Menyusun rancangan APBDes, SPP, buku kas umum/pembantu, serta Laporan Pertanggungjawaban (LPJ).</li>
      <li>Melakukan verifikasi kelayakan bukti transaksi, kuitansi belanja, dan kepatuhan pemotongan pajak (PPh/PPN).</li>
      <li>Mengoperasikan aplikasi Siskeudes untuk pembukuan dan menyiapkan berkas untuk pemeriksaan audit inspektorat.</li>
    </ul>
  </div>

  <a href="../../index.html" class="no-print" style="position: fixed; bottom: 20px; left: 20px; background: #0f172a; color: white; padding: 10px 20px; border-radius: 50px; text-decoration: none; font-weight: bold; box-shadow: 0 4px 6px rgba(0,0,0,0.1); z-index: 1000; font-family: 'Inter', sans-serif;">
    &larr; Kembali ke Dashboard
  </a>
</body>
</html>`;

const filePathResume = path.join(process.cwd(), 'public/assets/docs/Resume_Syabaab.html');
fs.writeFileSync(filePathResume, resumeHtml, 'utf-8');
console.log('✅ Resume_Syabaab.html (A4 1 Halaman Standar Terbaik) berhasil dibuat!');

const filePathUmum = path.join(process.cwd(), 'public/assets/docs/CV_Umum.html');
fs.writeFileSync(filePathUmum, resumeHtml, 'utf-8');
console.log('✅ CV_Umum.html berhasil diperbarui dengan template standar A4 terbaik!');
