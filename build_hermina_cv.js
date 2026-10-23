import fs from 'fs';
import path from 'path';

const htmlContent = `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>CV & Surat Lamaran - Syabaab Amin Amanullah (RS Hermina Arcamanik)</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
    body { font-family: 'Inter', sans-serif; color: #1e293b; line-height: 1.28; margin: 0; padding: 1cm 0; background: #f4f4f9; font-size: 0.82rem; }
    .page { background: #fff; padding: 1.3cm 1.4cm; box-shadow: 0 4px 10px rgba(0,0,0,0.1); margin: 0 auto 1.5cm auto; max-width: 21cm; border-radius: 8px; box-sizing: border-box; }
    @page { margin: 5mm 10mm; }
    @media print {
      body { background: transparent; padding: 0; font-size: 10pt; line-height: 1.3; }
      .page { box-shadow: none; margin: 0; border-radius: 0; padding: 0; max-width: none; page-break-after: always; }
      .page:last-child { page-break-after: auto; }
      @page { margin: 1cm 1.3cm; }
      h2, h3, p, ul, li { page-break-inside: avoid; }
      .no-print { display: none !important; }
    }
    h1 { font-size: 15pt; border-bottom: 2px solid #065f46; padding-bottom: 3pt; color: #065f46; margin-top: 0; margin-bottom: 4pt; }
    h2 { font-size: 11pt; border-bottom: 1px solid #cbd5e1; padding-bottom: 2pt; color: #047857; margin-top: 8pt; margin-bottom: 3pt; }
    h3 { font-size: 9.8pt; margin-top: 5pt; margin-bottom: 1pt; color: #0f172a; font-weight: 700; }
    p { margin-top: 0; margin-bottom: 0.35rem; text-align: justify; }
    .header-container { display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.5rem; border-bottom: 2px solid #065f46; padding-bottom: 0.4rem; }
    .header-text { flex: 1; }
    .header-text h1 { border: none; font-size: 15pt; margin-bottom: 2pt; padding-bottom: 0; text-align: left; }
    .header-text p { text-align: left; color: #475569; font-size: 9pt; margin: 1.5pt 0; }
    .header-photo { width: 72px; height: 96px; margin-left: 1.2rem; border-radius: 6px; object-fit: cover; box-shadow: 0 4px 6px rgba(0,0,0,0.1); border: 2px solid #fff; }
    ul { margin-top: 0.1rem; margin-bottom: 0.3rem; padding-left: 1.15rem; }
    li { margin-bottom: 0.08rem; text-align: left; }
    .job-meta { font-size: 0.78rem; color: #64748b; font-style: italic; margin-bottom: 0.15rem; }
    .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 0.8rem; }
    .signature { margin-top: 0.8rem; }
  </style>
</head>
<body>

  <!-- PAGE 1: SURAT LAMARAN -->
  <div class="page">
    <h1 style="border-bottom: none; font-size: 16pt; margin-bottom: 1.8rem; color: #065f46; text-align: center;">SURAT LAMARAN PEKERJAAN</h1>
    
    <p><strong>Perihal</strong> : Lamaran Posisi Front Office (Staff Pendaftaran &amp; Informasi)<br>
    <strong>Yth. Tim Rekrutmen &amp; Seleksi (HRD)</strong><br>
    <strong>RS Hermina Arcamanik (Hermina Group)</strong><br>
    Jl. A.H. Nasution No. 50, Arcamanik, Kota Bandung</p>

    <p style="margin-top: 1.2rem;">Dengan hormat,</p>

    <p>Berdasarkan informasi lowongan pekerjaan yang dipublikasikan melalui portal resmi karir RS Hermina (<em>hermina-career.sunfishhr.com</em>), melalui surat ini saya bermaksud mengajukan permohonan kerja untuk menempati posisi <strong>Front Office</strong> di <strong>RS Hermina Arcamanik</strong>.</p>
    
    <p>Saya merupakan lulusan S1 Akuntansi dari STIE Pasundan Bandung dengan IPK 3,72. Berbekal rekam jejak kerja yang kuat dalam pelayanan masyarakat, administrasi dokumen, serta ketelitian verifikasi data, saya siap mendedikasikan kemampuan saya untuk memberikan pelayanan prima (<em>Service Excellence</em>) yang ramah, cepat, dan solutif bagi pasien dan keluarga pasien di lingkungan RS Hermina Arcamanik.</p>
    
    <p>Kualifikasi dan pengalaman kerja yang menjadi bekal kesiapan saya untuk posisi ini antara lain:</p>

    <p><strong>1. Pengalaman Pelayanan Langsung &amp; Komunikasi:</strong> Selama 4 tahun menjabat sebagai Kepala Urusan Keuangan di Pemerintah Desa Pananjung, saya terbiasa melayani secara tatap muka ratusan warga masyarakat setiap hari dengan mengedepankan keramahan, kesabaran, dan kejelasan informasi. Saya terlatih mendengarkan kebutuhan masyarakat, memberikan arahan prosedur yang tepat, serta mengelola antrean loket pelayanan dengan tertib.</p>

    <p><strong>2. Ketelitian Verifikasi Dokumen &amp; Administrasi Kasir/Billing:</strong> Latar belakang akuntansi dan pengalaman administrasi di PT Minearth Geo Solution melatih ketelitian saya dalam memverifikasi kelengkapan data identitas, mengelola berkas administrasi, serta melakukan pencatatan transaksi kasir/pembayaran tanpa selisih. Hal ini sangat mendukung dalam proses registrasi pasien (Rawat Jalan maupun Rawat Inap) dan validasi persyaratan asuransi/BPJS.</p>

    <p><strong>3. Penguasaan Teknologi &amp; Adaptasi Sistem:</strong> Terbiasa mengoperasikan Microsoft Office (Word, Excel), Google Workspace, dan sistem basis data operasional secara disiplin. Saya memiliki kemampuan adaptasi yang cepat untuk menguasai Sistem Informasi Manajemen Rumah Sakit (SIMRS) yang diterapkan di RS Hermina.</p>

    <p><strong>4. Kesiapan Fisik &amp; Fleksibilitas Kerja Shift:</strong> Saya memiliki kondisi fisik yang sehat dan prima (Tinggi Badan 175 cm, Berat Badan 70 kg, Sehat Jasmani &amp; Rohani), berdomisili di Bandung, serta <strong>siap sepenuhnya untuk bekerja dalam sistem rotasi shift (pagi, siang, malam), lembur, maupun bertugas pada akhir pekan/hari libur</strong> sesuai kebutuhan operasional rumah sakit.</p>

    <p>Sebagai bahan pertimbangan Bapak/Ibu, saya lampirkan berkas Curriculum Vitae (CV) dan dokumen pendukung lainnya. Besar harapan saya untuk diberikan kesempatan menghadiri tahapan wawancara agar dapat menjelaskan secara lebih rinci kesiapan dan dedikasi yang dapat saya kontribusikan bagi RS Hermina Arcamanik.</p>
    
    <p>Atas perhatian dan kesempatan yang Bapak/Ibu berikan, saya ucapkan terima kasih.</p>

    <div class="signature">
      <p style="margin-bottom: 0;">Hormat saya,</p>
      <img src="../img/ttd%20syabaab.jpg" alt="Tanda Tangan" style="width: 55px; display: block; margin: 0; mix-blend-mode: multiply;" />
      <p style="margin-top: 0;"><strong>Syabaab Amin Amanullah, S.E.</strong><br>
      Tel: 081214914641 &nbsp;|&nbsp; Email: syabaabaminamanullah@gmail.com<br>
      Web Portofolio: <a href="https://syababamin5-lab.github.io/portofolio/" style="color: #065f46; text-decoration: none;">syababamin5-lab.github.io/portofolio</a></p>
    </div>
  </div>

  <!-- PAGE 2: CV -->
  <div class="page">
    <div class="header-container">
      <div class="header-text">
        <h1>SYABAAB AMIN AMANULLAH, S.E.</h1>
        <p style="color:#047857; font-weight:600; margin-bottom:0.2rem">FRONT OFFICE | PATIENT REGISTRATION &amp; SERVICE EXCELLENCE</p>
        <p>Kota/Kab. Bandung &nbsp;|&nbsp; Tel: 081214914641 &nbsp;|&nbsp; Email: syabaabaminamanullah@gmail.com</p>
        <p>Web Portofolio: <a href="https://syababamin5-lab.github.io/portofolio/" style="color: #047857; text-decoration: none;">syababamin5-lab.github.io/portofolio</a></p>
      </div>
      <img src="../img/foto_syabaab.png" alt="Pas Foto Syabaab" class="header-photo" />
    </div>

    <h2>PROFIL PROFESIONAL</h2>
    <p>Sarjana Akuntansi (IPK 3,72) dengan rekam jejak kerja lebih dari 4 tahun di bidang pelayanan publik, administrasi operasional, dan pengelolaan data transaksi. Memiliki kemampuan komunikasi interpersonal yang ramah, santun, dan responsif dalam memberikan informasi serta melayani kebutuhan pasien dan keluarga pasien. Terbiasa bekerja dengan ketelitian tinggi dalam verifikasi dokumen, pencatatan registrasi, dan administrasi kasir/billing. Memiliki kondisi fisik prima (TB: 175 cm / BB: 70 kg), cepat menguasai sistem digital/SIMRS, serta berkomitmen penuh untuk bekerja dalam sistem rotasi waktu kerja (shift) di RS Hermina Arcamanik.</p>

    <div class="grid-2">
      <div>
        <h2>KOMPETENSI UTAMA</h2>
        <ul>
          <li>Pelayanan Prima (<em>Service Excellence</em>) &amp; Komunikasi Pasien</li>
          <li>Registrasi Pasien Rawat Jalan &amp; Rawat Inap</li>
          <li>Verifikasi Dokumen Identitas, Asuransi &amp; BPJS Kesehatan</li>
          <li>Administrasi Kasir Pendaftaran &amp; Pembayaran Billing</li>
          <li>Pengelolaan Informasi Jadwal Dokter &amp; Layanan RS</li>
          <li>Ketelitian Input Data &amp; Pengarsipan Rekam Administrasi</li>
          <li>Kesiapan Kerja Shift (Pagi/Siang/Malam) &amp; Disiplin Tinggi</li>
        </ul>
      </div>
      <div>
        <h2>DATA PRIBADI &amp; KESIAPAN KERJA</h2>
        <ul>
          <li><strong>Tempat, Tgl Lahir:</strong> Bandung, 17 April 1999 (27 Tahun)</li>
          <li><strong>Fisik:</strong> Tinggi 175 cm | Berat 70 kg | Gol. Darah B</li>
          <li><strong>Kesehatan:</strong> Sehat Jasmani &amp; Rohani (Bebas Riwayat Sakit Berat)</li>
          <li><strong>Kesiapan Shift:</strong> Bersedia Bekerja Shift, Lembur &amp; Hari Libur</li>
          <li><strong>Domisili:</strong> Bandung (Akses dan Mobilitas Sangat Lancar)</li>
          <li><strong>Tools:</strong> MS Office (Word, Excel), SIMRS Ready, G-Suite</li>
        </ul>
      </div>
    </div>

    <h2>PENDIDIKAN</h2>
    <h3>STIE PASUNDAN BANDUNG</h3>
    <div class="job-meta">S1 Akuntansi | 2017 – 2021 | IPK: 3,72 / 4,00</div>

    <h2>PENGALAMAN KERJA RELEVAN</h2>

    <h3>PEMERINTAH DESA PANANJUNG</h3>
    <div class="job-meta">Kepala Urusan Keuangan (Bendahara / Staf Layanan Publik) | 2020 – 2024</div>
    <ul>
      <li>Memberikan pelayanan langsung secara tatap muka kepada ratusan warga masyarakat setiap hari dengan sikap ramah, santun, dan komunikatif.</li>
      <li>Memverifikasi kelengkapan berkas administrasi dan identitas pemohon secara teliti sebelum memproses pengajuan dokumen layanan publik.</li>
      <li>Mengelola transaksi penerimaan dan kas pembayaran administrasi dengan akurasi 100% tanpa adanya selisih kas.</li>
      <li>Mengelola sistem pengarsipan ratusan berkas pelayanan dan laporan pertanggungjawaban secara rapi, sistematis, dan mudah ditelusuri.</li>
    </ul>

    <h3>PT MINEARTH GEO SOLUTION</h3>
    <div class="job-meta">Admin &amp; Koordinator Mutu Laboratorium | 2025 – Juni 2026</div>
    <ul>
      <li>Menjadi garda depan pelayanan administrasi dalam melayani komunikasi dengan klien melalui telepon, pesan, dan tatap muka terkait status pengerjaan.</li>
      <li>Menerima, memeriksa kelengkapan data pendaftaran pekerjaan, dan menyusun dokumen penawaran serta tagihan (<em>invoice</em>) klien dengan teliti.</li>
      <li>Mengoperasikan sistem basis data operasional secara disiplin guna memastikan integritas dan ketertelusuran data administrasi.</li>
    </ul>

    <h3>PT CORETERRA GEO ENGINEERING</h3>
    <div class="job-meta">Finance &amp; Accounting (Remote / WFH) | Juni 2026 – Sekarang</div>
    <ul>
      <li>Mengelola pencatatan transaksi administrasi keuangan harian dan memeriksa konsistensi data sebelum dilaporkan.</li>
      <li>Membuktikan kemandirian, tanggung jawab kerja tinggi, dan kedisiplinan dalam menyelesaikan target tugas tepat waktu.</li>
    </ul>

    <h2>KETERAMPILAN &amp; BAHASA</h2>
    <div class="grid-2">
      <div>
        <ul>
          <li><strong>Bahasa:</strong> Indonesia (Aktif &amp; Formal), Sunda (Fasih), Inggris (Pasif)</li>
          <li><strong>Komunikasi:</strong> <em>Active Listening</em>, Empati, Tata Bahasa Santun</li>
        </ul>
      </div>
      <div>
        <ul>
          <li><strong>Software:</strong> Microsoft Excel (Advanced), Microsoft Word, Google Sheets</li>
          <li><strong>Sistem:</strong> Cepat beradaptasi dengan SIMRS &amp; Sistem Pendaftaran Online</li>
        </ul>
      </div>
    </div>

  </div>

  <a href="../../index.html" class="no-print" style="position: fixed; bottom: 20px; left: 20px; background: #065f46; color: white; padding: 10px 20px; border-radius: 50px; text-decoration: none; font-weight: bold; box-shadow: 0 4px 6px rgba(0,0,0,0.1); z-index: 1000; font-family: 'Inter', sans-serif;">
    &larr; Kembali ke Home
  </a>
</body>
</html>`;

const filePath = path.join(process.cwd(), 'public/assets/docs/CV_Hermina.html');
fs.writeFileSync(filePath, htmlContent, 'utf-8');
console.log('Successfully generated CV_Hermina.html for RS Hermina Arcamanik - Front Office.');
