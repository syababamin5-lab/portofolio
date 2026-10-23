import fs from 'fs';
import path from 'path';

const htmlContent = `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>CV & Surat Lamaran - Syabaab Amin Amanullah (RS Hermina Arcamanik)</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
    body { font-family: 'Inter', sans-serif; color: #1e293b; line-height: 1.35; margin: 0; padding: 1cm 0; background: #f4f4f9; font-size: 0.85rem; }
    .page { background: #fff; padding: 1.5cm 1.6cm; box-shadow: 0 4px 10px rgba(0,0,0,0.1); margin: 0 auto 1.5cm auto; max-width: 21cm; border-radius: 8px; box-sizing: border-box; }
    @page { margin: 5mm 10mm; }
    @media print {
      body { background: transparent; padding: 0; font-size: 10.5pt; line-height: 1.35; }
      .page { box-shadow: none; margin: 0; border-radius: 0; padding: 0; max-width: none; page-break-after: always; }
      .page:last-child { page-break-after: auto; }
      @page { margin: 1.2cm 1.5cm; }
      h2, h3, p, ul, li { page-break-inside: avoid; }
      .no-print { display: none !important; }
    }
    h1 { font-size: 15pt; border-bottom: 2px solid #065f46; padding-bottom: 4pt; color: #065f46; margin-top: 0; margin-bottom: 6pt; }
    h2 { font-size: 11pt; border-bottom: 1px solid #cbd5e1; padding-bottom: 2pt; color: #047857; margin-top: 9pt; margin-bottom: 4pt; }
    h3 { font-size: 10pt; margin-top: 6pt; margin-bottom: 1pt; color: #0f172a; font-weight: 700; }
    p { margin-top: 0; margin-bottom: 0.55rem; text-align: justify; }
    .header-container { display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.6rem; border-bottom: 2px solid #065f46; padding-bottom: 0.5rem; }
    .header-text { flex: 1; }
    .header-text h1 { border: none; font-size: 15.5pt; margin-bottom: 2pt; padding-bottom: 0; text-align: left; }
    .header-text p { text-align: left; color: #475569; font-size: 9pt; margin: 1.5pt 0; }
    .header-photo { width: 72px; height: 96px; margin-left: 1.2rem; border-radius: 6px; object-fit: cover; box-shadow: 0 4px 6px rgba(0,0,0,0.1); border: 2px solid #fff; }
    ul { margin-top: 0.15rem; margin-bottom: 0.35rem; padding-left: 1.2rem; }
    li { margin-bottom: 0.12rem; text-align: left; }
    .job-meta { font-size: 0.8rem; color: #64748b; font-style: italic; margin-bottom: 0.2rem; }
    .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
    .signature { margin-top: 1.2rem; }
    .highlight-box { background: #f0fdf4; border-left: 3px solid #059669; padding: 0.5rem 0.8rem; margin: 0.6rem 0; font-size: 0.83rem; }
  </style>
</head>
<body>

  <!-- PAGE 1: SURAT LAMARAN (JUJUR & TO THE POINT) -->
  <div class="page">
    <h1 style="border-bottom: none; font-size: 16pt; margin-bottom: 2rem; color: #065f46; text-align: center;">SURAT LAMARAN PEKERJAAN</h1>
    
    <p><strong>Perihal</strong> : Lamaran Pekerjaan &ndash; Front Office<br>
    <strong>Yth. Tim Rekrutmen &amp; Seleksi (HRD)</strong><br>
    <strong>RS Hermina Arcamanik</strong><br>
    Kota Bandung</p>

    <p style="margin-top: 1.5rem;">Dengan hormat,</p>

    <p>Sehubungan dengan informasi lowongan kerja yang tersedia pada portal karir resmi RS Hermina, melalui surat ini saya bermaksud mengajukan diri untuk posisi <strong>Front Office</strong> di <strong>RS Hermina Arcamanik</strong>.</p>
    
    <p>Saya merupakan lulusan S1 Akuntansi dari STIE Pasundan Bandung (IPK 3,72) yang berdomisili di Bandung. Saya memiliki rekam jejak kerja lebih dari 4 tahun di bidang administrasi dan tata kelola keuangan, baik di instansi publik maupun perusahaan swasta.</p>

    <p>Pengalaman saya sebagai Kepala Urusan Keuangan di Pemerintah Desa Pananjung membiasakan saya mengelola tata usaha anggaran, memverifikasi keabsahan dokumen administrasi, serta berkoordinasi langsung dengan berbagai pihak secara tertib dan transparan. Di samping itu, pengalaman administrasi di PT Minearth Geo Solution melatih ketelitian saya dalam pengelolaan dokumen perusahaan, surat penawaran, invoice, koordinasi klien, dan verifikasi data operasional.</p>

    <p>Dengan latar belakang administrasi yang teliti, penguasaan Microsoft Office (Word, Excel), kemampuan komunikasi yang baik, serta daya adaptasi yang tinggi terhadap sistem komputer operasional (termasuk SIMRS), saya siap memberikan kontribusi terbaik bagi pelayanan administrasi di RS Hermina Arcamanik.</p>

    <div class="highlight-box">
      <strong>Kesiapan Fisik &amp; Waktu Kerja:</strong><br>
      Tinggi Badan 175 cm, Berat Badan 70 kg, Kondisi Sehat Prima. Saya berdomisili di Bandung dan <strong>siap sepenuhnya bekerja dalam sistem rotasi waktu kerja (shift pagi/siang/malam), lembur, maupun bertugas di hari libur</strong> sesuai ketentuan rumah sakit.
    </div>

    <p style="margin-top: 0.8rem;">Sebagai bahan pertimbangan, saya melampirkan berkas Curriculum Vitae (CV) dan dokumen pendukung. Besar harapan saya untuk diberikan kesempatan wawancara agar dapat menjelaskan kualifikasi dan kesiapan saya secara langsung.</p>
    
    <p>Atas perhatian dan kesempatan yang Bapak/Ibu berikan, saya ucapkan terima kasih.</p>

    <div class="signature">
      <p style="margin-bottom: 0;">Hormat saya,</p>
      <img src="../img/ttd%20syabaab.jpg" alt="Tanda Tangan" style="width: 55px; display: block; margin: 0; mix-blend-mode: multiply;" />
      <p style="margin-top: 0;"><strong>Syabaab Amin Amanullah, S.E.</strong><br>
      Tel: 081214914641 &nbsp;|&nbsp; Email: syabaabaminamanullah@gmail.com<br>
      Portofolio: <a href="https://syababamin5-lab.github.io/portofolio/" style="color: #065f46; text-decoration: none;">syababamin5-lab.github.io/portofolio</a></p>
    </div>
  </div>

  <!-- PAGE 2: CV -->
  <div class="page">
    <div class="header-container">
      <div class="header-text">
        <h1>SYABAAB AMIN AMANULLAH, S.E.</h1>
        <p style="color:#047857; font-weight:600; margin-bottom:0.2rem">ADMINISTRASI | DATA VERIFICATION | FRONT OFFICE CANDIDATE</p>
        <p>Kota/Kab. Bandung &nbsp;|&nbsp; Tel: 081214914641 &nbsp;|&nbsp; Email: syabaabaminamanullah@gmail.com</p>
        <p>Portofolio: <a href="https://syababamin5-lab.github.io/portofolio/" style="color: #047857; text-decoration: none;">syababamin5-lab.github.io/portofolio</a></p>
      </div>
      <img src="../img/foto_syabaab.png" alt="Pas Foto Syabaab" class="header-photo" />
    </div>

    <h2>PROFIL PROFESIONAL</h2>
    <p>Sarjana Akuntansi (IPK 3,72) dengan pengalaman kerja lebih dari 4 tahun di bidang administrasi, verifikasi data, dan tata kelola keuangan operasional. Terbiasa mengelola dokumen penting dengan ketelitian tinggi, berkoordinasi secara profesional dengan berbagai pihak, serta mengoperasikan perangkat lunak pengolah data dan sistem komputer. Memiliki kondisi fisik prima (TB 175 cm / BB 70 kg), komunikasi yang baik, serta siap berkomitmen penuh untuk bekerja dalam sistem rotasi shift di RS Hermina Arcamanik.</p>

    <div class="grid-2">
      <div>
        <h2>KOMPETENSI UTAMA</h2>
        <ul>
          <li>Administrasi Dokumen &amp; Pengarsipan Data</li>
          <li>Verifikasi &amp; Validasi Keabsahan Berkas</li>
          <li>Pelayanan Informasi &amp; Koordinasi Pelanggan/Klien</li>
          <li>Pengolahan Data &amp; Rekapitulasi (MS Excel/Word)</li>
          <li>Pencatatan Transaksi &amp; Ketelitian Administrasi</li>
          <li>Kesiapan Kerja Rotasi Shift &amp; Disiplin Tinggi</li>
        </ul>
      </div>
      <div>
        <h2>DATA PRIBADI &amp; KESIAPAN KERJA</h2>
        <ul>
          <li><strong>Tempat, Tgl Lahir:</strong> Bandung, 17 April 1999 (27 Tahun)</li>
          <li><strong>Fisik:</strong> Tinggi 175 cm | Berat 70 kg | Gol. B</li>
          <li><strong>Kesehatan:</strong> Sehat Jasmani &amp; Rohani (Kondisi Prima)</li>
          <li><strong>Kesiapan Shift:</strong> Siap Shift Pagi, Siang, Malam &amp; Lembur</li>
          <li><strong>Domisili:</strong> Bandung (Mobilitas Cepat ke Arcamanik)</li>
          <li><strong>Aplikasi:</strong> MS Office (Word, Excel), SIMRS Ready</li>
        </ul>
      </div>
    </div>

    <h2>PENDIDIKAN</h2>
    <h3>STIE PASUNDAN BANDUNG</h3>
    <div class="job-meta">S1 Akuntansi | 2017 – 2021 | IPK: 3,72 / 4,00</div>

    <h2>PENGALAMAN KERJA</h2>

    <h3>PT CORETERRA GEO ENGINEERING</h3>
    <div class="job-meta">Finance &amp; Accounting (Remote / WFH) | Juni 2026 – September 2026</div>
    <ul>
      <li>Mengelola administrasi keuangan dan pembukuan perusahaan secara menyeluruh.</li>
      <li>Melakukan rekonsiliasi kas/bank dan memantau arus kas harian.</li>
      <li>Menyusun laporan keuangan periodik dan rekapitulasi data untuk evaluasi manajemen.</li>
      <li>Mengelola proses penagihan (invoicing) dan verifikasi bukti pembayaran dengan tingkat akurasi tinggi.</li>
    </ul>

    <h3>PT MINEARTH GEO SOLUTION</h3>
    <div class="job-meta">Admin &amp; Koordinator Mutu Laboratorium | 2025 – Juni 2026</div>
    <ul>
      <li>Mengelola administrasi operasional laboratorium dan pengarsipan berkas kerja.</li>
      <li>Melakukan verifikasi dan validasi data hasil pengujian sebelum diserahkan kepada pihak terkait.</li>
      <li>Mengelola penerbitan invoice, surat penawaran, dan dokumen administrasi perusahaan.</li>
      <li>Berkoordinasi dengan klien dan tim internal terkait kelancaran administrasi pekerjaan.</li>
      <li>Memastikan kesesuaian data dengan dokumen pendukung dan standar prosedur yang berlaku.</li>
    </ul>

    <h3>PEMERINTAH DESA PANANJUNG</h3>
    <div class="job-meta">Kepala Urusan Keuangan (Kaur Keuangan) | 2020 – 2024</div>
    <ul>
      <li>Bertanggung jawab penuh atas pengelolaan tata usaha anggaran sekitar ±Rp3 miliar per tahun.</li>
      <li>Melakukan verifikasi keabsahan dokumen administrasi dan berkas pendukung Surat Permintaan Pembayaran (SPP) sebelum pencairan anggaran.</li>
      <li>Mengoperasikan aplikasi Siskeudes untuk penatausahaan dan pelaporan keuangan secara tertib.</li>
      <li>Menyusun Laporan Pertanggungjawaban (LPJ) keuangan secara berkala tanpa temuan audit.</li>
      <li>Berkoordinasi dengan instansi pemerintah kecamatan dan pihak terkait dalam rangka tertib administrasi dan pelaporan.</li>
    </ul>

    <h2>KETERAMPILAN &amp; TOOLS</h2>
    <div class="grid-2">
      <div>
        <ul>
          <li><strong>Administrasi:</strong> Verifikasi Dokumen, Rekapitulasi Data, Document Filing</li>
          <li><strong>Bahasa:</strong> Bahasa Indonesia (Aktif &amp; Formal), Bahasa Sunda (Fasih)</li>
        </ul>
      </div>
      <div>
        <ul>
          <li><strong>Software:</strong> Microsoft Excel (Advanced), Microsoft Word, Google Workspace</li>
          <li><strong>Sistem:</strong> Cepat beradaptasi dengan sistem komputer baru &amp; SIMRS</li>
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
console.log('Successfully updated CV_Hermina.html with 100% authentic work experience.');
