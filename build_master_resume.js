import fs from 'fs';
import path from 'path';

const resumeHtml = `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Master Resume - Syabaab Amin Amanullah, S.E.</title>
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
      margin: 0 auto 1.5cm auto;
      max-width: 21cm;
      min-height: 29.7cm;
      border-radius: 6px;
      page-break-after: always;
    }

    .page:last-child {
      margin-bottom: 0;
      page-break-after: auto;
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
        page-break-after: always;
      }
      .page:last-child {
        page-break-after: auto;
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

    .project-card {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 6px;
      padding: 8pt 10pt;
      margin-bottom: 8pt;
    }

    .badge {
      display: inline-block;
      background: #e0e7ff;
      color: #1e3a8a;
      font-size: 7.5pt;
      font-weight: 600;
      padding: 1.5pt 5pt;
      border-radius: 3px;
      margin-right: 4pt;
    }
  </style>
</head>
<body>

  <!-- ==================== HALAMAN 1: PROFIL, PENDIDIKAN, KEAHLIAN & PENGALAMAN KERJA ==================== -->
  <div class="page">
    <!-- HEADER -->
    <div class="header-container">
      <div class="header-text">
        <h1>SYABAAB AMIN AMANULLAH, S.E.</h1>
        <div class="tagline">Finance &amp; Accounting Professional | Accounting Systems &amp; Automation</div>
        <p>📍 Kabupaten Bandung, Jawa Barat &nbsp;|&nbsp; 📞 081214914641 &nbsp;|&nbsp; ✉️ syabaabaminamanullah@gmail.com</p>
        <p>🌐 Portofolio Online: <a href="https://syababamin5-lab.github.io/portofolio/" style="color: #1e3a8a; text-decoration: none;">syababamin5-lab.github.io/portofolio</a></p>
      </div>
      <img src="../img/foto_syabaab.png" alt="Pas Foto Syabaab" class="header-photo" />
    </div>

    <!-- PROFIL PROFESIONAL -->
    <h2>Ringkasan Profesional</h2>
    <p>Sarjana Akuntansi (IPK 3,72) dengan pengalaman lebih dari 4 tahun di bidang akuntansi, penatausahaan keuangan, kepatuhan perpajakan, dan administrasi operasional. Terbiasa menangani pembukuan umum, rekonsiliasi kas dan rekening koran bank, pengelolaan siklus <em>Account Payable</em> &amp; <em>Receivable</em> (AP/AR), penyusunan laporan keuangan periodik, serta perencanaan anggaran (<em>budgeting</em>). Memiliki nilai tambah unik dalam perancangan dan otomatisasi sistem informasi bisnis (ERP, LIMS, Project Finance), sehingga mampu mentransformasi proses kerja manual menjadi alur operasional digital yang terukur, akurat, dan efisien.</p>

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

    <!-- KOMPETENSI & KEAHLIAN -->
    <div class="grid-2">
      <div>
        <h2>Kompetensi Akuntansi &amp; Finance</h2>
        <ul>
          <li>Penyusunan Laporan Keuangan (Laba Rugi, Neraca, Arus Kas)</li>
          <li>Pencatatan Jurnal, Buku Besar &amp; Rekonsiliasi Bank</li>
          <li>Pengelolaan Account Payable (AP) &amp; Receivable (AR)</li>
          <li>Perencanaan Anggaran (Budgeting) &amp; Pertanggungjawaban (LPJ)</li>
          <li>Kepatuhan Perpajakan Dasar (PPh 21, 23, Final, PPN)</li>
          <li>Verifikasi Dokumen Transaksi, Kontrak &amp; Kesiapan Audit</li>
        </ul>
      </div>
      <div>
        <h2>Keahlian Sistem, Data &amp; Tools</h2>
        <ul>
          <li>Microsoft Excel (Advanced: VLOOKUP, XLOOKUP, Pivot, Solver)</li>
          <li>Google Workspace (Google Sheets, Docs, Drive)</li>
          <li>Software Akuntansi: Accurate (Dasar), Siskeudes, MYOB</li>
          <li>Analisis Proses Bisnis (Business Process Modeling)</li>
          <li>Perancangan Arsitektur Sistem ERP &amp; Otomasi Kerja</li>
          <li>Ketelitian Administratif, Integritas &amp; Kolaborasi Tim</li>
        </ul>
      </div>
    </div>

    <!-- PENGALAMAN KERJA -->
    <h2>Pengalaman Kerja Profesional</h2>

    <div style="display: flex; justify-content: space-between; align-items: baseline;">
      <h3 style="margin: 0;">PT CORETERRA GEO ENGINEERING</h3>
      <span class="job-meta">Juni 2026 &ndash; September 2026</span>
    </div>
    <div class="job-meta">Finance &amp; Accounting (Remote / WFH)</div>
    <ul>
      <li>Mengelola administrasi akuntansi dan pembukuan keuangan perusahaan secara menyeluruh.</li>
      <li>Melakukan rekonsiliasi bank harian dan bulanan guna memastikan kecocokan mutasi kas dan rekening koran.</li>
      <li>Menyusun laporan keuangan periodik sebagai dasar evaluasi profitabilitas dan likuiditas bagi manajemen.</li>
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
      <li>Melakukan verifikasi dan validasi data transaksi penagihan dan hasil uji sebelum diterbitkan ke klien.</li>
      <li>Menyusun rekapitulasi data operasional, mengelola penerbitan invoice, dan memantau status pembayaran.</li>
      <li>Berkoordinasi aktif lintas divisi dan dengan klien eksternal terkait administrasi pelayanan pekerjaan.</li>
    </ul>

    <div style="display: flex; justify-content: space-between; align-items: baseline; margin-top: 4pt;">
      <h3 style="margin: 0;">PEMERINTAH DESA PANANJUNG</h3>
      <span class="job-meta">2020 &ndash; 2024</span>
    </div>
    <div class="job-meta">Kepala Urusan Keuangan (Kaur Keuangan / Bendahara)</div>
    <ul>
      <li>Memimpin pengelolaan penatausahaan keuangan dan anggaran tahunan rata-rata ±Rp3 miliar secara transparan.</li>
      <li>Menyusun rancangan APBDes, SPP, buku kas umum/pembantu, serta Laporan Pertanggungjawaban (LPJ).</li>
      <li>Melakukan verifikasi kelayakan bukti transaksi belanja serta kepatuhan pemotongan pajak (PPh/PPN).</li>
      <li>Mengoperasikan aplikasi Siskeudes untuk pembukuan dan memimpin penyusunan berkas untuk audit inspektorat.</li>
    </ul>
  </div>

  <!-- ==================== HALAMAN 2: PORTOFOLIO INOVASI SISTEM & OTOMASI ==================== -->
  <div class="page">
    <div style="border-bottom: 2px solid #0f172a; padding-bottom: 4pt; margin-bottom: 10pt; display: flex; justify-content: space-between; align-items: center;">
      <h1 style="font-size: 13pt; margin: 0; color: #0f172a;">PORTOFOLIO PENGEMBANGAN SISTEM &amp; OTOMASI BISNIS</h1>
      <span style="font-size: 8pt; color: #64748b;">Syabaab Amin Amanullah, S.E.</span>
    </div>

    <p style="margin-bottom: 10pt; color: #475569;">
      Sebagai bentuk dedikasi terhadap efisiensi kerja dan pemecahan masalah riil perusahaan, saya secara mandiri merancang dan mengembangkan beberapa sistem aplikasi terintegrasi yang menyatukan alur keuangan, akuntansi, dan operasional:
    </p>

    <!-- PROYEK 1: SEAM-ANNSA -->
    <div class="project-card">
      <div style="display: flex; justify-content: space-between; align-items: baseline;">
        <h3 style="margin: 0; color: #1e3a8a; font-size: 10pt;">1. SEAM-Annsa: Enterprise Resource Planning (ERP) Garmen &amp; Akuntansi</h3>
        <span class="job-meta">Sistem Terintegrasi Manufaktur</span>
      </div>
      <div style="margin: 3pt 0 5pt 0;">
        <span class="badge">Akuntansi Biaya (HPP)</span>
        <span class="badge">Manajemen Stok Kain</span>
        <span class="badge">Payroll &amp; SPK</span>
        <span class="badge">Buku Besar Otomatis</span>
      </div>
      <ul>
        <li><strong>Latar Belakang &amp; Solusi:</strong> Merancang sistem ERP komprehensif untuk mendigitalkan seluruh rantai pasok dan pencatatan akuntansi pada industri manufaktur garmen dari pencatatan manual menjadi serba otomatis.</li>
        <li><strong>Fitur Akuntansi &amp; Finansial:</strong> Kalkulasi otomatis Harga Pokok Produksi (HPP) berdasarkan pemakaian bahan baku kain, upah borongan per proses (Cutting, Jahit, Finishing), serta pencatatan otomatis ke jurnal dan buku besar.</li>
        <li><strong>Dampak Efisiensi:</strong> Menghilangkan selisih stok kain antara gudang dan laporan, mempercepat penghitungan payroll karyawan, serta menyajikan laporan laba rugi produksi secara <em>real-time</em>.</li>
      </ul>
    </div>

    <!-- PROYEK 2: TIMES LIMS -->
    <div class="project-card">
      <div style="display: flex; justify-content: space-between; align-items: baseline;">
        <h3 style="margin: 0; color: #1e3a8a; font-size: 10pt;">2. TIMES LIMS: Laboratory Information Management System</h3>
        <span class="job-meta">Validasi Data &amp; Kontrol Mutu Geoteknik</span>
      </div>
      <div style="margin: 3pt 0 5pt 0;">
        <span class="badge">ISO/IEC 17025 Standard</span>
        <span class="badge">Validasi Data Otomatis</span>
        <span class="badge">Billing &amp; Invoice</span>
        <span class="badge">Audit Trail</span>
      </div>
      <ul>
        <li><strong>Latar Belakang &amp; Solusi:</strong> Membangun platform manajemen data laboratorium pengujian mekanika tanah yang terstandarisasi untuk memenuhi kriteria kepatuhan ISO/IEC 17025, SNI, dan ASTM.</li>
        <li><strong>Fitur Validasi &amp; Penagihan:</strong> Menerapkan mesin validasi otomatis pada perhitungan parameter uji laboratorium, memantau riwayat audit (audit trail), serta mengintegrasikan tarif pengujian langsung ke modul penagihan faktur (invoicing).</li>
        <li><strong>Dampak Efisiensi:</strong> Memangkas waktu verifikasi hasil uji teknis hingga 60% dan mencegah risiko kesalahan input tarif atau data pelaporan ke klien.</li>
      </ul>
    </div>

    <!-- PROYEK 3: LODE GEOFINANCE -->
    <div class="project-card">
      <div style="display: flex; justify-content: space-between; align-items: baseline;">
        <h3 style="margin: 0; color: #1e3a8a; font-size: 10pt;">3. LODE: Sistem Tata Kelola Keuangan Proyek &amp; Arus Kas Korporat</h3>
        <span class="job-meta">Project Financial Control</span>
      </div>
      <div style="margin: 3pt 0 5pt 0;">
        <span class="badge">Budgeting vs Realisasi</span>
        <span class="badge">Monitoring Cash Flow</span>
        <span class="badge">Aging Invoice &amp; Termin</span>
        <span class="badge">Executive Dashboard</span>
      </div>
      <ul>
        <li><strong>Latar Belakang &amp; Solusi:</strong> Mengembangkan arsitektur kontrol keuangan proyek untuk perusahaan jasa eksplorasi dan geoteknik guna menghubungkan Rencana Anggaran Biaya (RAB) dengan pengeluaran riil lapangan.</li>
        <li><strong>Fitur Keuangan:</strong> Pelacakan arus kas proyek secara detail, kontrol deviasi anggaran, monitoring termin penagihan klien (aging AR), serta dashboard interaktif proyeksi margin keuntungan proyek.</li>
        <li><strong>Dampak Efisiensi:</strong> Membantu manajemen mendeteksi pembengkakan biaya operasional sejak dini dan memastikan likuiditas proyek tetap sehat.</li>
      </ul>
    </div>

    <!-- KESIMPULAN NILAI TAMBAH BAGI PERUSAHAAN -->
    <h2>Nilai Tambah untuk Perusahaan Anda</h2>
    <div style="background: #eff6ff; border-left: 3px solid #1e3a8a; padding: 6pt 10pt; border-radius: 0 4px 4px 0;">
      <p style="margin: 0; font-size: 8.5pt; color: #1e293b;">
        Dengan kombinasi <strong>disiplin akuntansi yang kuat</strong> dan <strong>kemampuan inovasi teknologi</strong>, saya siap memberikan kontribusi ganda: memastikan pembukuan, kepatuhan pajak, dan pelaporan keuangan perusahaan berjalan rapi dan taat aturan, sekaligus menjadi motor penggerak digitalisasi dan otomatisasi alur kerja guna meningkatkan produktivitas tim secara berkelanjutan.
      </p>
    </div>
  </div>

  <a href="../../index.html" class="no-print" style="position: fixed; bottom: 20px; left: 20px; background: #0f172a; color: white; padding: 10px 20px; border-radius: 50px; text-decoration: none; font-weight: bold; box-shadow: 0 4px 6px rgba(0,0,0,0.1); z-index: 1000; font-family: 'Inter', sans-serif;">
    &larr; Kembali ke Dashboard
  </a>
</body>
</html>`;

const filePathResume = path.join(process.cwd(), 'public/assets/docs/Resume_Syabaab.html');
fs.writeFileSync(filePathResume, resumeHtml, 'utf-8');
console.log('✅ Resume_Syabaab.html (Master Resume 2 Halaman A4 Lengkap) berhasil dibuat!');

const filePathUmum = path.join(process.cwd(), 'public/assets/docs/CV_Umum.html');
fs.writeFileSync(filePathUmum, resumeHtml, 'utf-8');
console.log('✅ CV_Umum.html berhasil diperbarui dengan Master Resume 2 Halaman A4 Lengkap!');
