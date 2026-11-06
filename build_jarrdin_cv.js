import fs from 'fs';
import path from 'path';

const htmlContent = `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>CV Syabaab Amin Amanullah - Coordinator Accounting & Tax - The Jarrdin Cihampelas</title>
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
      color: #1e3a8a;
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
    <h1 style="border-bottom: none; font-size: 16pt; margin-bottom: 2rem; color: #0f172a; text-align: center;">SURAT LAMARAN PEKERJAAN</h1>
    
    <p><strong>Perihal</strong> : Lamaran Pekerjaan &ndash; Coordinator Accounting &amp; Tax<br>
    <strong>Yth. Tim Rekrutmen &amp; Manajemen</strong><br>
    <strong>PPPSRS Badan Pengelola The Jarrdin Cihampelas</strong><br>
    Jl. Cihampelas No. 10, Bandung</p>

    <p style="margin-top: 1.5rem;">Dengan hormat,</p>

    <p>Berdasarkan informasi lowongan pekerjaan yang dipublikasikan oleh Badan Pengelola The Jarrdin Cihampelas, saya bermaksud mengajukan lamaran kerja untuk posisi <strong>Coordinator Accounting &amp; Tax</strong>.</p>
    
    <p>Saya merupakan Sarjana Akuntansi (S.E.) dari STIE Pasundan Bandung dengan IPK 3,72 dan memiliki pengalaman kerja lebih dari 4 tahun di bidang akuntansi, penatausahaan keuangan, perpajakan, serta pengelolaan anggaran (budgeting) sejak tahun 2020.</p>
    
    <p>Dalam rekam jejak profesional saya, saya berpengalaman mengoordinasikan dan menyusun laporan keuangan periodik (bulanan, triwulanan, dan tahunan), melakukan rekonsiliasi rekening koran bank, mengontrol arus kas, serta mengelola Account Payable/Receivable di PT Coreterra Geo Engineering. Sebagai Kepala Urusan Keuangan (Bendahara) di Pemerintah Desa Pananjung, saya memimpin pengelolaan anggaran (budgeting) tahunan rata-rata ±Rp3 miliar, memastikan ketertiban pemotongan/penyetoran pajak belanja (PPh dan PPN), serta mengawal kesiapan dokumen pemeriksaan audit inspektorat. Selain itu, peran saya sebagai Koordinator Mutu di PT Minearth Geo Solution mengasah kapabilitas kepemimpinan dan verifikasi dokumen operasional secara terpadu.</p>
    
    <p>Saya menguasai Microsoft Excel (rumus lanjutan &amp; pivot table), memiliki pemahaman software akuntansi (dasar Accurate &amp; Siskeudes), memahami kepatuhan perpajakan, serta memiliki jiwa kepemimpinan yang teliti, tegas, dan berintegritas tinggi dalam memimpin koordinasi tim.</p>
    
    <p>Sebagai bahan pertimbangan, bersama ini saya lampirkan CV dan dokumen pendukung. Besar harapan saya untuk diberikan kesempatan wawancara agar dapat menjelaskan kualifikasi dan dedikasi saya secara langsung.</p>
    
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
        <p style="color:#1e3a8a; font-weight:600; margin-bottom:0.5rem">COORDINATOR ACCOUNTING &amp; TAX | FINANCE &amp; ACCOUNTING</p>
        <p>📍 Kabupaten Bandung, Jawa Barat &nbsp;|&nbsp; 📞 081214914641 &nbsp;|&nbsp; ✉️ syabaabaminamanullah@gmail.com</p>
        <p>🌐 <a href="https://syababamin5-lab.github.io/portofolio/" style="color: #1e3a8a; text-decoration: none;">syababamin5-lab.github.io/portofolio</a></p>
      </div>
      <img src="../img/foto_syabaab.png" alt="Pas Foto Syabaab" class="header-photo" />
    </div>

    <h2>PROFIL PROFESIONAL</h2>
    <p>Sarjana Akuntansi (IPK 3,72) dengan pengalaman kerja lebih dari 4 tahun di bidang akuntansi, penatausahaan keuangan, perpajakan, dan budgeting. Berpengalaman mengoordinasikan pencatatan keuangan, penyusunan laporan keuangan periodik (bulanan, triwulan, tahunan), rekonsiliasi kas dan rekening koran bank, pemantauan AP/AR, serta administrasi perpajakan (PPh &amp; PPN). Memiliki kepemimpinan yang solid dan terbiasa mengawal kesiapan audit. Mahir mengoperasikan Microsoft Excel (Advanced &amp; Pivot Table) dan memiliki dasar software akuntansi (Accurate). Berintegritas, teliti, disiplin, dan komunikatif.</p>

    <div class="grid-2">
      <div>
        <h2>KOMPETENSI UTAMA</h2>
        <ul>
          <li>Penyusunan Laporan Keuangan Periodik</li>
          <li>Budgeting &amp; Pengendalian Anggaran</li>
          <li>Perpajakan (Dasar PPh 21, 23, Final, PPN)</li>
          <li>Rekonsiliasi Bank &amp; Rekening Koran</li>
          <li>Pengawasan Account Payable &amp; Receivable</li>
          <li>Audit Readiness (Internal &amp; Eksternal)</li>
          <li>Kepemimpinan &amp; Koordinasi Tim (Leadership)</li>
          <li>Microsoft Excel (Rumus Lanjutan &amp; Pivot)</li>
        </ul>
      </div>
      <div>
        <h2>KETERAMPILAN &amp; TOOLS</h2>
        <ul>
          <li>Microsoft Excel (Advanced, Data Analysis)</li>
          <li>Microsoft Word &amp; PowerPoint</li>
          <li>Google Workspace / Google Sheets</li>
          <li>Software Akuntansi (Accurate dasar, Siskeudes)</li>
          <li>Rekonsiliasi Kas, Bank &amp; Mutasi Rekening</li>
          <li>Manajemen Administrasi &amp; Arsip Keuangan</li>
          <li>Verifikasi Dokumen Belanja &amp; Kontrak</li>
          <li>Komunikasi Lintas Tim &amp; Pengambilan Keputusan</li>
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
      <li>Mengelola dan mengoordinasikan pencatatan akuntansi serta pembukuan perusahaan secara menyeluruh.</li>
      <li>Menyusun laporan keuangan periodik (laba rugi, neraca, arus kas) untuk evaluasi manajemen.</li>
      <li>Melakukan rekonsiliasi rekening koran bank secara rutin dan memantau stabilitas cash flow.</li>
      <li>Mengawasi penerbitan invoice, monitoring penagihan piutang (AR), dan verifikasi pembayaran hutang vendor (AP).</li>
      <li>Menyiapkan rekapitulasi data transaksi pendukung administrasi perpajakan dan audit.</li>
    </ul>

    <h3>PT MINEARTH GEO SOLUTION</h3>
    <div class="job-meta">Admin &amp; Koordinator Mutu Laboratorium | 2025 - Juni 2026</div>
    <ul>
      <li>Mengoordinasikan administrasi operasional laboratorium dan pengendalian mutu dokumentasi.</li>
      <li>Melakukan verifikasi, validasi, dan rekonsiliasi data transaksi penagihan sebelum penyerahan ke klien.</li>
      <li>Mengelola administrasi penagihan invoice, perjanjian kerja sama, dan rekapitulasi keuangan operasional.</li>
      <li>Memimpin koordinasi antar-divisi internal demi memastikan kelancaran administrasi pekerjaan.</li>
    </ul>

    <h3>PEMERINTAH DESA PANANJUNG</h3>
    <div class="job-meta">Kepala Urusan Keuangan (Kaur Keuangan / Bendahara) | 2020 - 2024</div>
    <ul>
      <li>Memimpin pengelolaan penatausahaan keuangan dan anggaran (budgeting) rata-rata ±Rp3 miliar per tahun.</li>
      <li>Menyusun rancangan APBDes, Perubahan APBDes, SPP, dan Laporan Pertanggungjawaban Keuangan (LPJ).</li>
      <li>Memastikan kepatuhan pemotongan dan penyetoran kewajiban pajak atas transaksi belanja (PPh dan PPN).</li>
      <li>Melakukan verifikasi ketat terhadap bukti belanja, kuitansi, dan dokumen pertanggungjawaban anggaran.</li>
      <li>Mengoperasikan aplikasi Siskeudes serta memimpin penyusunan dokumen untuk pemeriksaan audit inspektorat.</li>
    </ul>
  </div>
</body>
</html>`;

const filePath = path.join(process.cwd(), 'public/assets/docs/CV_Jarrdin.html');
fs.writeFileSync(filePath, htmlContent, 'utf-8');
console.log('✅ CV_Jarrdin.html berhasil dibuat di public/assets/docs/CV_Jarrdin.html');
