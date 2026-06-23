import React from 'react';
import { Mail, Globe, FileText, CheckCircle2, Phone } from 'lucide-react';

const SkillsFooter = () => {
  const technicalSkills = [
    "Microsoft Excel (Advanced)", "Siskeudes", "Google Workspace", 
    "Document Verification", "Data Validation", "Internal Control Mapping", 
    "Business Process Analysis", "Financial Reporting", "Audit Risk Mitigation"
  ];

  return (
    <footer id="skills" className="bg-slate-900 text-slate-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 border-b border-slate-700 pb-12">
          
          {/* Organisasi & Leadership */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-accent rounded-full inline-block"></span>
              Organisasi & Kepemimpinan
            </h3>
            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
              <h4 className="font-bold text-white text-lg mb-1">Ketua HIMAKSI STIEPAS</h4>
              <p className="text-sm text-slate-400 mb-3">Himpunan Mahasiswa Akuntansi</p>
              <p className="text-sm leading-relaxed">
                Memimpin organisasi mahasiswa tingkat program studi. Bertanggung jawab atas pelaksanaan program kerja utama, termasuk penyelenggaraan <strong>SAC Competition</strong> (Student Accounting Competition) tingkat regional.
              </p>
            </div>
          </div>

          {/* Technical Skills SEO Badges */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-accent rounded-full inline-block"></span>
              Keahlian Teknis
            </h3>
            <div className="flex flex-wrap gap-2">
              {technicalSkills.map((skill, idx) => (
                <span 
                  key={idx} 
                  className="bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-lg text-sm flex items-center gap-1.5 hover:border-accent hover:text-white transition-colors cursor-default"
                >
                  <CheckCircle2 size={14} className="text-accent" />
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Contact & Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-white tracking-tight">SYABAAB AMIN AMANULLAH</h2>
            <p className="text-sm text-slate-500 mt-1">Internal Auditor & Business Process Analyst</p>
          </div>
          
          <div className="flex items-center gap-4">
            <a href="mailto:syababamin5@gmail.com" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-colors" title="syababamin5@gmail.com">
              <Mail size={18} />
              <span className="sr-only">Email</span>
            </a>
            <a href="https://wa.me/6281214914641" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-colors" title="WhatsApp: 081214914641">
              <Phone size={18} />
              <span className="sr-only">WhatsApp</span>
            </a>
          </div>
        </div>
        
        <div className="text-center text-xs text-slate-600 mt-12">
          &copy; {new Date().getFullYear()} Syabaab Amin Amanullah. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default SkillsFooter;
