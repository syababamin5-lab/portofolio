import fs from 'fs';
import path from 'path';

const docsDir = path.join(process.cwd(), 'public/assets/docs');
const files = fs.readdirSync(docsDir).filter(f => f.endsWith('.html'));

const profileHtmlRegex = /<h2>PROFIL PROFESIONAL<\/h2>\s*<p>.*?<\/p>/s;
const profileHtmlReplacement = `<h2>PROFIL PROFESIONAL</h2>
    <p>Sarjana Akuntansi (IPK 3,72) dengan rekam jejak karir yang solid sejak tahun 2020 di bidang keuangan, administrasi operasional, dan pengembangan sistem. Berpengalaman mengelola tata usaha anggaran publik skala besar, mengawal ketertelusuran dokumen, serta menangani siklus akuntansi korporat (AP/AR). Terbukti mampu berkoordinasi secara efektif dalam lingkungan kerja jarak jauh (remote) maupun onsite. Di samping itu, memiliki keahlian teknis sebagai Business Analyst & System Developer dalam merancang ekosistem bisnis digital (ERP, LIMS, Finance Management). Berbekal penguasaan Microsoft Excel tingkat lanjut dan daya analitis tinggi, saya siap menghadirkan efisiensi proses, validasi data yang akurat, serta kepatuhan administratif di setiap lingkungan kerja.</p>`;

const keysHtmlRegex = /<h2>KEY QUALIFICATIONS<\/h2>\s*<ul>.*?<\/ul>/s;
const keysHtmlReplacement = `<h2>KEY QUALIFICATIONS</h2>
        <ul>
          <li>Administrasi Keuangan, Operasional & Analisis Data</li>
          <li>Siklus Akuntansi, AP/AR & Cash Flow Management</li>
          <li>System Development & Business Process Analysis</li>
          <li>Document Control, Verification & Audit Readiness</li>
          <li>Kepatuhan Administratif & Validasi Data</li>
          <li>Microsoft Excel (Advanced) & Siskeudes</li>
          <li>Remote Collaboration & Team Coordination</li>
          <li>Teliti, Analitis, Disiplin, dan Jujur</li>
        </ul>`;

let updatedHtml = 0;
for (const file of files) {
  const filePath = path.join(docsDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  let changed = false;
  
  if (content.match(profileHtmlRegex)) {
    content = content.replace(profileHtmlRegex, profileHtmlReplacement);
    changed = true;
  }
  if (content.match(keysHtmlRegex)) {
    content = content.replace(keysHtmlRegex, keysHtmlReplacement);
    changed = true;
  }
  
  if (changed) {
    fs.writeFileSync(filePath, content, 'utf-8');
    updatedHtml++;
  }
}
console.log('Updated HTML files:', updatedHtml);


const cvPath = path.join(process.cwd(), 'cv.md');
let cvContent = fs.readFileSync(cvPath, 'utf-8');

const profileMdRegex = /### PROFIL PROFESIONAL\n.*?(?=\n\n### KEY QUALIFICATIONS)/s;
const profileMdReplacement = `### PROFIL PROFESIONAL
Sarjana Akuntansi (IPK 3,72) dengan rekam jejak karir yang solid sejak tahun 2020 di bidang keuangan, administrasi operasional, dan pengembangan sistem. Berpengalaman mengelola tata usaha anggaran publik skala besar, mengawal ketertelusuran dokumen, serta menangani siklus akuntansi korporat (AP/AR). Terbukti mampu berkoordinasi secara efektif dalam lingkungan kerja jarak jauh (remote) maupun onsite. Di samping itu, memiliki keahlian teknis sebagai Business Analyst & System Developer dalam merancang ekosistem bisnis digital (ERP, LIMS, Finance Management). Berbekal penguasaan Microsoft Excel tingkat lanjut dan daya analitis tinggi, saya siap menghadirkan efisiensi proses, validasi data yang akurat, serta kepatuhan administratif di setiap lingkungan kerja.`;

const keysMdRegex = /### KEY QUALIFICATIONS\n- Pengalaman Administrasi Operasional & Data Analyst\n- Sarjana Akuntansi \(IPK 3,72\)\n- Microsoft Excel \(Advanced\) & Microsoft Office\n- ERP Manufacturing Project \(Inventory, Production, Purchasing\)\n- Document Review, Verification & Control\n- Data Validation & Report Preparation\n- Team Coordination & Communication\n- Teliti, Disiplin, dan Jujur/s;

// We will use a simpler regex for keysMd just in case it varies
const keysMdRegexFallback = /### KEY QUALIFICATIONS\n.*?(?=\n\n---)/s;
const keysMdReplacement = `### KEY QUALIFICATIONS
- Administrasi Keuangan, Operasional & Analisis Data
- Siklus Akuntansi, AP/AR & Cash Flow Management
- System Development & Business Process Analysis
- Document Control, Verification & Audit Readiness
- Kepatuhan Administratif & Validasi Data
- Microsoft Excel (Advanced) & Siskeudes
- Remote Collaboration & Team Coordination
- Teliti, Analitis, Disiplin, dan Jujur`;

let cvChanged = false;
if (cvContent.match(profileMdRegex)) {
  cvContent = cvContent.replace(profileMdRegex, profileMdReplacement);
  cvChanged = true;
}
if (cvContent.match(keysMdRegexFallback)) {
  cvContent = cvContent.replace(keysMdRegexFallback, keysMdReplacement);
  cvChanged = true;
}

if (cvChanged) {
  fs.writeFileSync(cvPath, cvContent, 'utf-8');
  console.log('Updated cv.md');
}
