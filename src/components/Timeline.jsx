import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Briefcase, Building, CheckCircle2, TrendingUp } from 'lucide-react';

const experiences = [
  {
    id: 2,
    company: "PT Minearth Geo Solution",
    role: "Admin & Koordinator Mutu Laboratorium",
    period: "2025–Juni 2026",
    icon: Building,
    liveApp: {
      name: "ANSA LIMS — Web App Laboratorium",
      url: "https://www.annsa.site/",
    },
    responsibilities: [
      "Mengembangkan & mengoperasikan Web App ANSA LIMS untuk digitalisasi alur administrasi dan kontrol mutu laboratorium.",
      "Mengelola administrasi operasional laboratorium mekanika tanah.",
      "Melakukan verifikasi dan validasi data hasil pengujian sebelum diterbitkan kepada klien.",
      "Memastikan kesesuaian data hasil pengujian dengan dokumen pendukung dan prosedur yang berlaku.",
      "Menyusun laporan hasil pengujian dan rekapitulasi data operasional.",
      "Mengelola invoice, surat, penawaran, dan dokumen administrasi perusahaan.",
      "Berkoordinasi dengan klien dan tim internal terkait administrasi pekerjaan.",
      "Mendukung penerapan pengendalian mutu hasil pengujian laboratorium."
    ],
    competencies: "ANSA LIMS Web App, Data Validation, Quality Control, Documentation Control, Administrative Compliance",
    stats: { label: "Sistem Digital Lab", value: "ANSA LIMS (annsa.site)" }
  },
  {
    id: 1,
    company: "Pemerintah Desa Pananjung",
    role: "Kepala Urusan Keuangan",
    period: "2020–2024",
    icon: Briefcase,
    responsibilities: [
      "Mengelola anggaran desa rata-rata ± Rp3 miliar per tahun.",
      "Menyusun APBDes, Perubahan APBDes, Realisasi APBDes, SPP, dan LPJ.",
      "Melakukan verifikasi dokumen administrasi dan dokumen pendukung sebelum proses pencairan anggaran.",
      "Memastikan pelaksanaan administrasi dan pelaporan keuangan sesuai ketentuan yang berlaku.",
      "Mengoperasikan aplikasi Siskeudes untuk pengelolaan dan pelaporan keuangan desa.",
      "Menyiapkan dokumen yang diperlukan dalam proses evaluasi dan pemeriksaan oleh instansi terkait.",
      "Berkoordinasi dengan pemerintah kecamatan, kabupaten, dan instansi terkait dalam proses pelaporan dan evaluasi keuangan."
    ],
    competencies: "Financial Administration, Document Verification, Regulatory Compliance, Budget Monitoring, Government Reporting",
    stats: { label: "Kelolaan Anggaran Tahunan", value: "± Rp3 Miliar" }
  }
];

const TimelineItem = ({ exp, isLast }) => {
  const [isOpen, setIsOpen] = useState(false);
  const Icon = exp.icon;

  return (
    <div className="relative pl-8 md:pl-0">
      {/* Timeline Line */}
      {!isLast && (
        <div className="absolute left-[11px] md:left-1/2 md:-ml-px top-10 bottom-[-2rem] w-0.5 bg-slate-200"></div>
      )}

      <div className={`md:flex items-center justify-between w-full ${exp.id % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
        
        {/* Timeline Marker */}
        <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-6 h-6 rounded-full bg-white border-4 border-primary z-10 shadow-sm mt-1.5 md:mt-0"></div>

        {/* Content Box */}
        <div className="w-full md:w-[45%]">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-3 mb-2 text-primary">
              <Icon size={20} />
              <span className="font-semibold text-sm bg-primary/10 px-3 py-1 rounded-full">{exp.period}</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-1">{exp.role}</h3>
            <h4 className="text-lg text-slate-600 font-medium mb-4">{exp.company}</h4>

            {exp.stats && (
              <div className="mb-4 bg-background-gray p-3 rounded-lg border border-slate-200 flex items-center gap-3">
                <TrendingUp className="text-accent" size={24} />
                <div>
                  <div className="text-xs text-slate-500 font-medium uppercase tracking-wider">{exp.stats.label}</div>
                  <div className="text-lg font-bold text-slate-800">{exp.stats.value}</div>
                </div>
              </div>
            )}

            {exp.liveApp && (
              <div className="mb-4">
                <a 
                  href={exp.liveApp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 text-blue-700 hover:from-blue-100 hover:to-indigo-100 rounded-xl text-xs font-bold transition-all shadow-sm group/btn"
                >
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                  <span>Buka Live Web App: {exp.liveApp.name}</span>
                  <span className="group-hover/btn:translate-x-0.5 transition-transform">↗</span>
                </a>
              </div>
            )}

            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center justify-between w-full py-2 text-sm font-medium text-slate-700 hover:text-primary transition-colors border-t border-slate-100 mt-4 pt-4"
            >
              Lihat Detail Tanggung Jawab
              <ChevronDown size={18} className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <ul className="mt-4 space-y-3 text-sm text-slate-600">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-accent mt-0.5 flex-shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 p-3 bg-slate-50 rounded-lg text-xs">
                    <span className="font-semibold text-slate-700 block mb-1">Kompetensi Terbukti:</span>
                    <span className="text-slate-600">{exp.competencies}</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </motion.div>
        </div>
      </div>
    </div>
  );
};

const Timeline = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Pengalaman Profesional</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <TimelineItem key={exp.id} exp={exp} isLast={idx === experiences.length - 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
