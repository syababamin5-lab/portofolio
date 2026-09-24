import fs from 'fs';
import path from 'path';

const cvPath = path.join(process.cwd(), 'cv.md');
let content = fs.readFileSync(cvPath, 'utf-8');

const keysReplacement = `- Administrasi Keuangan, Operasional & Analisis Data
- Siklus Akuntansi, AP/AR & Cash Flow Management
- System Development & Business Process Analysis
- Document Control, Verification & Audit Readiness
- Kepatuhan Administratif & Validasi Data
- Microsoft Excel (Advanced) & Siskeudes
- Remote Collaboration & Team Coordination
- Teliti, Analitis, Disiplin, dan Jujur`;

// Find where KEY QUALIFICATIONS starts and where the next section (---) starts
const startIndex = content.indexOf('### KEY QUALIFICATIONS\n') + '### KEY QUALIFICATIONS\n'.length;
let endIndex = content.indexOf('\n---', startIndex);

if (endIndex === -1) {
  endIndex = content.indexOf('\r\n---', startIndex);
}

if (startIndex > -1 && endIndex > -1) {
  content = content.substring(0, startIndex) + keysReplacement + '\n' + content.substring(endIndex);
  fs.writeFileSync(cvPath, content, 'utf-8');
  console.log('Updated cv.md keys');
} else {
  console.log('Failed to find indices');
}
