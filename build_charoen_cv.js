import fs from 'fs';
import path from 'path';

const htmlContent = `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>CV Syabaab Amin Amanullah - PT Charoen Pokphand</title>
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
      color: #3b82f6;
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
    <h1 style="border-bottom: none; font-size: 16pt; margin-bottom: 2rem; color: #0F4C3A; text-align: center;">SURAT LAMARAN PEKERJAAN</h1>
    
    <p><strong>Perihal</strong> : Lamaran Pekerjaan Admin Warehouse<br>
    <strong>Yth. HRD PT. Charoen Pokphand Indonesia (Food Division)</strong><br>
    <strong>Bandung</strong></p>

    <p style="margin-top: 1.5rem;">Dengan hormat,</p>

    <p>Berdasarkan informasi lowongan pekerjaan yang saya peroleh, melalui surat ini saya bermaksud mengajukan lamaran untuk posisi <strong>Admin Warehouse</strong> di <strong>PT. Charoen Pokphand Indonesia</strong>.</p>
    
    <p>Saya merupakan lulusan Sarjana Akuntansi (S.E.) dengan IPK 3,72. Sejak tahun 2020, saya memiliki rekam jejak yang solid di bidang administrasi operasional, pengolahan data, dan pemantauan sistem yang menuntut tingkat ketelitian dan tanggung jawab tinggi.</p>
    
    <p>Dalam pengalaman saya sebelumnya (sebagai Admin Operasional di PT Minearth Geo Solution dan Bendahara di Desa Pananjung), saya terbiasa mengelola volume dokumen yang besar, melakukan input data harian secara detail, dan memvalidasi laporan operasional. Pekerjaan tersebut membiasakan saya untuk bekerja dengan cekatan dan teliti dalam meminimalkan selisih data, yang mana sangat krusial dalam aktivitas pengelolaan gudang (stock opname).</p>
    
    <p>Di samping kemampuan operasional dan penguasaan <em>Microsoft Excel</em> (Advanced), saya memiliki nilai tambah berupa <strong>pemahaman dasar pemrograman dan logika sistem bisnis</strong>. Hal ini saya peroleh melalui keterlibatan langsung dalam tim perancangan aplikasi perangkat lunak (ERP Manufaktur). Keterlibatan dalam membedah alur sistem persediaan barang (inventory) tersebut membuat saya memahami tata kelola logistik berbasis komputer, sehingga saya dapat dengan cepat beradaptasi menggunakan <em>software enterprise</em> berskala besar seperti SAP.</p>
    
    <p>Saya merupakan pribadi yang teliti, berintegritas, dan terbiasa bekerja di bawah tekanan dengan target waktu penyelesaian (deadline) yang ketat. Saya bersedia untuk ditempatkan di wilayah Bandung, Jawa Barat.</p>
    
    <p>Sebagai bahan pertimbangan, bersama surat ini saya melampirkan CV dan dokumen pendukung lainnya. Saya sangat berharap Bapak/Ibu berkenan memberikan kesempatan wawancara agar saya dapat menjelaskan lebih lanjut kontribusi yang bisa saya berikan.</p>
    
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
        <p style="color:#e11d48; font-weight:600; margin-bottom:0.5rem">ADMIN WAREHOUSE | INVENTORY & DATA ADMINISTRATION</p>
        <p>📍 Kabupaten Bandung, Jawa Barat &nbsp;|&nbsp; 📞 081214914641 &nbsp;|&nbsp; ✉️ syabaabaminamanullah@gmail.com</p>
        <p>🌐 Portofolio: <a href="https://syababamin5-lab.github.io/portofolio/" style="color: #e11d48; text-decoration: none;">syababamin5-lab.github.io/portofolio</a></p>
      </div>
      <img src="../img/foto_syabaab.png" alt="Pas Foto Syabaab" class="header-photo" />
    </div>

    <h2>PROFIL PROFESIONAL</h2>
    <p>Sarjana Akuntansi (IPK 3,72) dengan pengalaman di bidang administrasi operasional dan tata kelola data. Terbiasa mengelola dokumen, merekapitulasi data harian menggunakan Microsoft Excel tingkat lanjut, serta melakukan pengecekan fisik untuk meminimalkan selisih data. Memiliki pemahaman kuat mengenai alur rantai pasok (supply chain) dan manajemen persediaan (inventory) dari keterlibatan dalam proyek perancangan ekosistem bisnis (ERP Manufaktur). Berbekal pemahaman dasar pemrograman dan logika sistem, siap beradaptasi dengan cepat menggunakan <em>software</em> terintegrasi seperti SAP di lingkungan pergudangan dan logistik.</p>

    <div class="grid-2">
      <div>
        <h2>KOMPETENSI UTAMA</h2>
        <ul>
          <li>Administrasi Operasional & Data Entry</li>
          <li>Manajemen Persediaan (Inventory Control)</li>
          <li>Verifikasi Data & Stock Opname</li>
          <li>Pemahaman Logika Sistem & Pemrograman Dasar</li>
          <li>Familiaritas dengan Software Enterprise / SAP</li>
          <li>Pembuatan Laporan & Rekapitulasi Data Harian</li>
          <li>Bekerja di Bawah Tekanan & Target Ketat</li>
          <li>Ketelitian, Integritas, & Kerja Sama Tim</li>
        </ul>
      </div>
      <div>
        <h2>KETERAMPILAN & TOOLS</h2>
        <ul>
          <li>Microsoft Excel (Pengolahan & Analisis Data)</li>
          <li>Sistem Informasi Enterprise & ERP</li>
          <li>Google Workspace / Google Sheets</li>
          <li>Microsoft Word & PowerPoint</li>
          <li>Administrasi & Pengendalian Dokumen</li>
          <li>Analisis Proses Bisnis Inventory</li>
        </ul>
      </div>
    </div>

    <h2>PENDIDIKAN</h2>
    <h3>STIE PASUNDAN BANDUNG</h3>
    <div class="job-meta">Sarjana Akuntansi (S.E.) | 2018 - 2021 | IPK: 3,72</div>

    <h2>PENGALAMAN KERJA</h2>

    <h3>PT MINEARTH GEO SOLUTION</h3>
    <div class="job-meta">Admin & Koordinator Mutu Laboratorium | 2025 - Juni 2026</div>
    <ul>
      <li>Mengelola administrasi operasional, surat jalan, invoice, dan rekapitulasi data layanan harian.</li>
      <li>Melakukan pengecekan dan verifikasi kesesuaian fisik dokumen dengan laporan akhir sebelum disahkan.</li>
      <li>Memastikan kelengkapan administrasi dan ketertelusuran (traceability) data agar meminimalkan tingkat kesalahan kerja.</li>
    </ul>

    <h3>PT CORETERRA GEO ENGINEERING</h3>
    <div class="job-meta">Finance & Administration (Remote) | 2026 - Sekarang</div>
    <ul>
      <li>Mengerjakan fungsi administrasi secara mandiri yang menuntut tingkat disiplin dan tanggung jawab waktu (deadline) yang tinggi.</li>
      <li>Melakukan pencatatan transaksi, pemrosesan dokumen pembayaran, dan penyusunan laporan operasional harian/bulanan.</li>
    </ul>

    <h3>PEMERINTAH DESA PANANJUNG</h3>
    <div class="job-meta">Kepala Urusan Keuangan (Bendahara) | 2020 - 2024</div>
    <ul>
      <li>Bertanggung jawab memvalidasi dokumen dan pencatatan transaksi dengan nilai miliaran rupiah secara teliti.</li>
      <li>Melakukan pembukuan harian dan input data ke dalam sistem komputer (Siskeudes) secara tertib dan disiplin.</li>
    </ul>

    <h2>PENGALAMAN PROYEK SISTEM (NILAI TAMBAH PEMROGRAMAN)</h2>
    
    <h3>SEAM-ANSSA - SISTEM ERP MANUFAKTUR GARMEN</h3>
    <div class="job-meta">Business Analyst & System Developer | 2024 - Sekarang</div>
    <ul>
      <li>Menganalisis dan membangun arsitektur perangkat lunak (ERP) khusus untuk mendigitalisasi rantai pasok (supply chain) dan pergudangan.</li>
      <li>Mempelajari logika pemrograman dasar dan alur sistem informasi komputer yang mengelola manajemen stok masuk, stok keluar, dan kontrol logistik secara otomatis.</li>
    </ul>
  </div>

  <a href="../../index.html" class="no-print" style="position: fixed; bottom: 20px; left: 20px; background: #0f172a; color: white; padding: 10px 20px; border-radius: 50px; text-decoration: none; font-weight: bold; box-shadow: 0 4px 6px rgba(0,0,0,0.1); z-index: 1000; font-family: 'Inter', sans-serif;">
    &larr; Kembali ke Home
  </a>
</body>
</html>`;

const filePath = path.join(process.cwd(), 'public/assets/docs/CV_Charoen.html');
fs.writeFileSync(filePath, htmlContent, 'utf-8');
console.log('Successfully rewrote Charoen Pokphand CV to 2 pages according to GEMINI.md HR principles.');
