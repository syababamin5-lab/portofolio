import fs from 'fs';
import path from 'path';

const htmlContent = `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>CV Syabaab Amin Amanullah - PT TEMAS Tbk</title>
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
      color: #eab308;
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
    <h1 style="border-bottom: none; font-size: 16pt; margin-bottom: 2rem; color: #ca8a04; text-align: center;">SURAT LAMARAN PEKERJAAN</h1>
    
    <p><strong>Perihal</strong> : Lamaran Pekerjaan Account Payable Officer<br>
    <strong>Yth. HRD PT TEMAS Tbk (Temas Group)</strong><br>
    <strong>Di Tempat</strong></p>

    <p style="margin-top: 1.5rem;">Dengan hormat,</p>

    <p>Berdasarkan informasi rekrutmen yang saya terima, saya bermaksud mengajukan diri untuk mengisi posisi <strong>Account Payable Officer</strong> di <strong>PT TEMAS Tbk (Penempatan Surabaya)</strong>.</p>
    
    <p>Saya merupakan lulusan Sarjana Akuntansi (S.E.) dari STIE Pasundan Bandung dengan IPK 3,72. Sejak tahun 2020, saya memiliki rekam jejak yang berfokus pada administrasi keuangan, verifikasi dokumen penagihan, serta rekonsiliasi kas dan bank.</p>
    
    <p>Saat ini saya bekerja sebagai Finance & Accounting di PT Coreterra Geo Engineering, di mana tugas utama saya sangat relevan dengan siklus *Account Payable*. Saya terbiasa memverifikasi tagihan vendor, memastikan kelengkapan dokumen pengadaan, mencatat kewajiban hutang, hingga melakukan rekonsiliasi mutasi bank harian/bulanan agar sesuai dengan data di sistem.</p>
    
    <p>Sebelumnya, dalam kapasitas saya sebagai Bendahara di Pemerintah Desa, saya terbiasa melakukan kontrol anggaran (*budgeting analysis*) bernilai miliaran rupiah. Setiap biaya yang diajukan (melalui SPP/Surat Permintaan Pembayaran) selalu saya verifikasi secara ketat agar nominalnya sesuai dengan pagu *master cost*. Pengalaman ini juga melatih saya untuk merekap *monitoring* biaya dan mengontrol pengajuan uang muka (*Cash Advance*) secara teliti.</p>
    
    <p>Saya sangat mahir mengoperasikan sistem komputer, baik aplikasi Microsoft Excel (pengolahan data tingkat lanjut) maupun sistem perangkat lunak akuntansi/ERP. Dengan kemampuan analitis yang tajam dan komunikasi yang baik, saya yakin dapat berkoordinasi dengan seluruh departemen terkait untuk memastikan proses pencatatan biaya berjalan akurat dan mematuhi kebijakan PT TEMAS Tbk. <strong>Saya juga menyatakan kesiapan penuh untuk penempatan kerja di Surabaya.</strong></p>
    
    <p>Sebagai bahan pertimbangan, bersama surat ini saya melampirkan Curriculum Vitae (CV) dan dokumen pendukung lainnya. Saya sangat berharap dapat diberikan kesempatan wawancara agar saya dapat menjelaskan kualifikasi saya lebih lanjut.</p>
    
    <p>Atas waktu dan perhatian Bapak/Ibu, saya ucapkan terima kasih.</p>

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
        <p style="color:#ca8a04; font-weight:600; margin-bottom:0.5rem">ACCOUNT PAYABLE OFFICER | FINANCE & BUDGET CONTROL</p>
        <p>📍 Kabupaten Bandung, Jawa Barat (Siap Penempatan Surabaya) &nbsp;|&nbsp; 📞 081214914641 &nbsp;|&nbsp; ✉️ syabaabaminamanullah@gmail.com</p>
        <p>🌐 Portofolio: <a href="https://syababamin5-lab.github.io/portofolio/" style="color: #ca8a04; text-decoration: none;">syababamin5-lab.github.io/portofolio</a></p>
      </div>
      <img src="../img/foto_syabaab.png" alt="Pas Foto Syabaab" class="header-photo" />
    </div>

    <h2>PROFIL PROFESIONAL</h2>
    <p>Sarjana Akuntansi (IPK 3,72) dengan pengalaman solid di bidang <em>finance</em>, verifikasi tagihan, dan rekonsiliasi perbankan. Terbiasa mengelola siklus Account Payable (AP), mulai dari pengecekan tagihan pengadaan barang (PO), verifikasi kesesuaian biaya dengan anggaran pendasar (<em>master cost</em>), hingga pencatatan <em>Cash Advance</em>. Memiliki tingkat ketelitian analitis yang tinggi dalam melakukan rekonsiliasi mutasi bank dengan sistem pencatatan komputer. Berbekal pengalaman sebagai Bendahara publik dan staf akuntansi perusahaan swasta, saya terbiasa melakukan kontrol anggaran (<em>budgeting</em>) dan memastikan setiap transaksi diverifikasi secara ketat sebelum pembayaran disetujui. Memiliki kemampuan komunikasi yang baik dan kesiapan tinggi untuk berkontribusi di PT TEMAS Tbk wilayah Surabaya.</p>

    <div class="grid-2">
      <div>
        <h2>KOMPETENSI UTAMA</h2>
        <ul>
          <li>Siklus Tagihan Vendor & Account Payable</li>
          <li>Pengecekan Tagihan Pengadaan Barang (PO)</li>
          <li>Rekonsiliasi Mutasi Bank dengan Sistem</li>
          <li>Pencatatan & Kontrol <em>Cash Advance</em></li>
          <li>Verifikasi Biaya & Rekap Monitoring Biaya</li>
          <li>Kontroling Anggaran & Analisis Budget</li>
          <li>Microsoft Excel & Aplikasi Sistem Keuangan</li>
          <li>Ketelitian Analitis & Komunikasi Interpersonal</li>
        </ul>
      </div>
      <div>
        <h2>KETERAMPILAN & TOOLS</h2>
        <ul>
          <li>Microsoft Excel (Pengolahan Data Advanced)</li>
          <li>Sistem Informasi Akuntansi & ERP</li>
          <li>Verifikasi Kesesuaian Master Cost</li>
          <li>Google Workspace / Google Sheets</li>
          <li>Manajemen Waktu & Pemecahan Masalah</li>
        </ul>
      </div>
    </div>

    <h2>PENDIDIKAN</h2>
    <h3>STIE PASUNDAN BANDUNG</h3>
    <div class="job-meta">Sarjana Akuntansi (S.E.) | 2018 - 2021 | IPK: 3,72</div>

    <h2>PENGALAMAN KERJA</h2>

    <h3>PT CORETERRA GEO ENGINEERING</h3>
    <div class="job-meta">Finance & Accounting (Remote - Tangerang Selatan) | 2026 - Sekarang</div>
    <ul>
      <li>Mengelola dan memverifikasi siklus hutang usaha (Account Payable) serta kelengkapan dokumen tagihan dari vendor.</li>
      <li>Melakukan rekonsiliasi mutasi bank secara rutin dan membandingkannya dengan pencatatan di dalam sistem akuntansi.</li>
      <li>Menyusun rekapitulasi <em>monitoring</em> biaya operasional harian/bulanan untuk memastikan laporan keuangan tersaji secara akurat.</li>
    </ul>

    <h3>PEMERINTAH DESA PANANJUNG</h3>
    <div class="job-meta">Kepala Urusan Keuangan (Bendahara) | 2020 - 2024</div>
    <ul>
      <li>Bertanggung jawab melakukan kontroling dan analisis <em>budget</em> anggaran publik senilai miliaran rupiah setiap tahunnya.</li>
      <li>Memverifikasi setiap pengajuan Surat Permintaan Pembayaran (SPP) untuk memastikan nominal tagihan/pengadaan barang sesuai dengan batas anggaran (<em>master cost</em>) yang telah ditetapkan.</li>
      <li>Mencatat pengajuan dan pertanggungjawaban uang muka kerja (mirip dengan fungsi <em>Cash Advance</em>) dari pelaksana kegiatan.</li>
    </ul>

    <h3>PT MINEARTH GEO SOLUTION</h3>
    <div class="job-meta">Admin & Koordinator Mutu Laboratorium | 2025 - Juni 2026</div>
    <ul>
      <li>Melakukan pengecekan atas jenis tagihan dan dokumen penawaran layanan sebelum disahkan.</li>
      <li>Berkoordinasi aktif dengan departemen internal maupun eksternal untuk mengklarifikasi selisih biaya dan melengkapi data penagihan.</li>
    </ul>

  </div>

  <a href="../../index.html" class="no-print" style="position: fixed; bottom: 20px; left: 20px; background: #0f172a; color: white; padding: 10px 20px; border-radius: 50px; text-decoration: none; font-weight: bold; box-shadow: 0 4px 6px rgba(0,0,0,0.1); z-index: 1000; font-family: 'Inter', sans-serif;">
    &larr; Kembali ke Home
  </a>
</body>
</html>`;

const filePath = path.join(process.cwd(), 'public/assets/docs/CV_Temas.html');
fs.writeFileSync(filePath, htmlContent, 'utf-8');
console.log('Successfully generated CV_Temas.html based on HR principles.');
