import fs from 'fs';
import path from 'path';

const htmlContent = `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>CV Syabaab Amin Amanullah - Staff Accounting - Honda Abadi Cibiru</title>
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
      color: #cc0000;
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
    <h1 style="border-bottom: none; font-size: 16pt; margin-bottom: 2rem; color: #cc0000; text-align: center;">SURAT LAMARAN PEKERJAAN</h1>
    
    <p><strong>Perihal</strong> : Lamaran Pekerjaan &ndash; Staff Accounting<br>
    <strong>Yth. HRD Honda Abadi Cibiru</strong><br>
    <strong>PT Topik Tjandra Abadi</strong><br>
    Jl. Soekarno Hatta No. 756 (KM 14,9), Cibiru, Bandung 40614</p>

    <p style="margin-top: 1.5rem;">Dengan hormat,</p>

    <p>Berdasarkan informasi lowongan pekerjaan yang saya peroleh, saya bermaksud mengajukan lamaran untuk posisi <strong>Staff Accounting</strong> di Honda Abadi Cibiru (PT Topik Tjandra Abadi).</p>
    
    <p>Saya merupakan lulusan Sarjana Akuntansi (S.E.) dari STIE Pasundan Bandung dengan IPK 3,72 dan telah memiliki pengalaman kerja lebih dari 4 tahun di bidang akuntansi, keuangan, serta administrasi operasional sejak tahun 2020.</p>
    
    <p>Pengalaman profesional saya meliputi penyusunan laporan keuangan periodik, pencatatan jurnal transaksi, rekonsiliasi bank dan kas, penataan Account Payable/Receivable, serta administrasi perpajakan di PT Coreterra Geo Engineering. Sebelumnya, saya juga berpengalaman dalam verifikasi kelengkapan dokumen administrasi operasional di PT Minearth Geo Solution serta pengelolaan dan pelaporan pertanggungjawaban anggaran di Pemerintah Desa Pananjung.</p>
    
    <p>Saya memahami penerapan Standar Akuntansi Keuangan (SAK), dasar perhitungan perpajakan, serta mahir mengoperasikan Microsoft Excel (rumus, VLOOKUP, pivot table) dan aplikasi perkantoran lainnya. Saya terbiasa bekerja teliti, disiplin, berintegritas, mampu bekerja mandiri maupun dalam tim, serta siap untuk segera bergabung (join secepatnya).</p>
    
    <p>Sebagai bahan pertimbangan, bersama ini saya lampirkan CV dan berkas pendukung lainnya. Besar harapan saya untuk dapat diberikan kesempatan wawancara agar dapat menjelaskan kualifikasi dan dedikasi saya secara langsung.</p>
    
    <p>Atas perhatian dan kesempatan yang Bapak/Ibu berikan, saya ucapkan terima kasih.</p>

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
        <p style="color:#cc0000; font-weight:600; margin-bottom:0.5rem">STAFF ACCOUNTING | FINANCE &amp; ACCOUNTING</p>
        <p>📍 Kabupaten Bandung, Jawa Barat &nbsp;|&nbsp; 📞 081214914641 &nbsp;|&nbsp; ✉️ syabaabaminamanullah@gmail.com</p>
        <p>🌐 <a href="https://syababamin5-lab.github.io/portofolio/" style="color: #cc0000; text-decoration: none;">syababamin5-lab.github.io/portofolio</a></p>
      </div>
      <img src="../img/foto_syabaab.png" alt="Pas Foto Syabaab" class="header-photo" />
    </div>

    <h2>PROFIL PROFESIONAL</h2>
    <p>Sarjana Akuntansi (IPK 3,72) dengan pengalaman kerja lebih dari 4 tahun di bidang akuntansi, finance, dan administrasi operasional. Berpengalaman dalam penyusunan laporan keuangan periodik sesuai standar akuntansi, pencatatan transaksi jurnal, rekonsiliasi kas dan bank, pemantauan AP/AR, serta kepatuhan administrasi perpajakan. Menguasai Microsoft Excel (rumus lanjutan &amp; pivot table) serta Microsoft Office. Pribadi yang teliti, berintegritas tinggi, terbiasa dengan tenggat waktu, dan siap bergabung secepatnya.</p>

    <div class="grid-2">
      <div>
        <h2>KOMPETENSI UTAMA</h2>
        <ul>
          <li>Penyusunan Laporan Keuangan (SAK)</li>
          <li>Pencatatan Jurnal &amp; Buku Besar</li>
          <li>Rekonsiliasi Bank &amp; Arus Kas (Cash Flow)</li>
          <li>Pengelolaan Account Payable &amp; Receivable</li>
          <li>Dasar Perhitungan &amp; Administrasi Pajak</li>
          <li>Verifikasi Dokumen &amp; Validasi Data Transaksi</li>
          <li>Microsoft Excel (Rumus &amp; Pivot Table)</li>
          <li>Kepatuhan Prosedur Keuangan &amp; Audit</li>
        </ul>
      </div>
      <div>
        <h2>KETERAMPILAN &amp; TOOLS</h2>
        <ul>
          <li>Microsoft Excel (Advanced Functions &amp; Pivot)</li>
          <li>Microsoft Word &amp; PowerPoint</li>
          <li>Google Workspace / Google Sheets</li>
          <li>Software Akuntansi (Accurate dasar &amp; Siskeudes)</li>
          <li>Rekonsiliasi Bank &amp; Kas</li>
          <li>Manajemen Dokumen &amp; Arsip Keuangan</li>
          <li>Analisis Laporan &amp; Data Validasi</li>
          <li>Kerja Tim &amp; Komunikasi Profesional</li>
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
      <li>Menyusun laporan keuangan periodik perusahaan sesuai prinsip akuntansi yang berlaku.</li>
      <li>Melakukan pencatatan jurnal transaksi harian, buku besar, dan rekonsiliasi rekening koran/bank.</li>
      <li>Mengelola penagihan piutang (AR), monitoring pembayaran hutang usaha (AP), dan verifikasi invoice vendor.</li>
      <li>Memantau arus kas keluar-masuk (cash flow) serta menyiapkan rekapitulasi data pendukung pajak.</li>
      <li>Memastikan kelengkapan bukti transaksi dan kepatuhan terhadap kebijakan keuangan internal.</li>
    </ul>

    <h3>PT MINEARTH GEO SOLUTION</h3>
    <div class="job-meta">Admin &amp; Koordinator Mutu Laboratorium | 2025 - Juni 2026</div>
    <ul>
      <li>Mengelola administrasi operasional laboratorium dan korespondensi dokumen perusahaan.</li>
      <li>Melakukan verifikasi dan validasi data hasil pengujian sebelum penerbitan laporan resmi ke klien.</li>
      <li>Mengelola penagihan invoice, surat penawaran, serta rekapitulasi data operasional berkala.</li>
      <li>Berkoordinasi aktif dengan klien dan divisi internal demi kelancaran administrasi pekerjaan.</li>
    </ul>

    <h3>PEMERINTAH DESA PANANJUNG</h3>
    <div class="job-meta">Kepala Urusan Keuangan (Kaur Keuangan / Bendahara) | 2020 - 2024</div>
    <ul>
      <li>Mengelola penatausahaan keuangan dan anggaran desa rata-rata ±Rp3 miliar per tahun.</li>
      <li>Menyusun rancangan APBDes, Perubahan APBDes, SPP, dan Laporan Pertanggungjawaban (LPJ).</li>
      <li>Melakukan verifikasi faktur, kuitansi, dan bukti belanja sebelum proses pencairan anggaran.</li>
      <li>Mengoperasikan sistem Siskeudes serta menyiapkan dokumen untuk pemeriksaan inspektorat / audit.</li>
      <li>Memastikan tata kelola keuangan transparan, akuntabel, dan sesuai regulasi perundang-undangan.</li>
    </ul>
  </div>
</body>
</html>`;

const filePath = path.join(process.cwd(), 'public/assets/docs/CV_HondaCibiru.html');
fs.writeFileSync(filePath, htmlContent, 'utf-8');
console.log('✅ CV_HondaCibiru.html berhasil dibuat di public/assets/docs/CV_HondaCibiru.html');
