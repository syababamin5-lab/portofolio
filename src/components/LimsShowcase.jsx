import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FlaskConical, Calculator, FileCheck2, ArrowRight, ShieldCheck, QrCode, ExternalLink, Activity, Database, CheckCircle2, FileSpreadsheet, X, ZoomIn, MonitorPlay, Code2, LineChart, Server } from 'lucide-react';

const LimsShowcase = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [desktopTab, setDesktopTab] = useState('dashboard');

  const modules = [
    {
      title: "Geotechnical Engine (SNI/ASTM)",
      icon: Calculator,
      desc: "Kalkulasi otomatis Atterberg, CBR, Triaxial UU/CU/CD, Direct Shear & Konsolidasi. Menghasilkan kurva regresi dan Lingkaran Mohr secara instan.",
      color: "from-indigo-50 to-blue-50",
      iconColor: "text-indigo-600"
    },
    {
      title: "4-Tier Approval & Digital QR LHU",
      icon: ShieldCheck,
      desc: "Alur validasi berjenjang (Teknisi ➔ QA/QC ➔ Kepala Lab ➔ Direktur). Setiap Laporan Hasil Uji (LHU) terbit dengan QR Code publik anti-pemalsuan.",
      color: "from-emerald-50 to-green-50",
      iconColor: "text-emerald-600"
    },
    {
      title: "Smart Lab Monitoring (LSCP TV)",
      icon: MonitorPlay,
      desc: "Tampilan antrean pengujian sampel secara real-time di layar TV laboratorium (Kiosk Mode) dipadukan dengan PWA Mobile App untuk teknisi lapangan.",
      color: "from-cyan-50 to-teal-50",
      iconColor: "text-cyan-600"
    },
    {
      title: "Full Business & Finance Loop",
      icon: LineChart,
      desc: "Penawaran harga otomatis (Tarif Umum/BRS/Geoland), Tanda Terima Sampel, Invoice otomatis, dan analitik margin laba bersih laboratorium secara real-time.",
      color: "from-purple-50 to-fuchsia-50",
      iconColor: "text-purple-600"
    }
  ];

  return (
    <section id="lims" className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-indigo-50 text-indigo-700 font-semibold text-xs tracking-wider uppercase mb-3 border border-indigo-200">
            Sistem Operasional Laboratorium Terintegrasi
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">TIMES® LIMS (Geotechnical System)</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-base italic">
            "Traceability, Integrity, Management, Engine, System"
          </p>
          <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full mt-6 mb-10"></div>
          
          {/* Main Case Study Card */}
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-left">
            <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-slate-100 pb-4 mb-2 gap-4">
              <div>
                <h3 className="text-2xl font-bold text-slate-900">TIMES® LIMS</h3>
                <p className="text-sm text-slate-500 font-medium mt-1">
                  Sistem LIMS Khusus Laboratorium Pengujian Geoteknik & Mekanika Tanah
                </p>
              </div>
              <a 
                href="https://times.annsa.site/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 border border-indigo-200 text-indigo-700 hover:bg-indigo-100 rounded-lg text-sm font-bold transition-colors w-max whitespace-nowrap flex-shrink-0"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Kunjungi Live Web App ↗
              </a>
            </div>
            
            <p className="text-sm font-semibold text-indigo-600 mb-6 uppercase tracking-wider mt-2">
              Peran: System Architect & Lead Fullstack Developer
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Problem */}
              <div className="bg-red-50/50 p-5 rounded-xl border border-red-100">
                <h4 className="font-bold text-red-700 mb-2 flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 rounded-full bg-red-500"></span> Latar Belakang
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Penggunaan ratusan file Excel yang rentan <em>human-error</em> dalam kalkulasi rumit, birokrasi tanda tangan LHU yang memakan waktu berhari-hari, serta data alat kalibrasi dan keuangan yang tersebar.
                </p>
              </div>

              {/* Solution */}
              <div className="bg-indigo-50/50 p-5 rounded-xl border border-indigo-100">
                <h4 className="font-bold text-indigo-700 mb-2 flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 rounded-full bg-indigo-500"></span> Fungsi Utama Aplikasi
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Memproses ribuan angka mentah dari lapangan, mengkalkulasi rumus geoteknik kompleks secara instan, dan memandu alur kerja teknisi dari penerimaan sampel hingga penerbitan hasil uji bersertifikasi.
                </p>
              </div>

              {/* Impact */}
              <div className="bg-emerald-50/50 p-5 rounded-xl border border-emerald-100">
                <h4 className="font-bold text-emerald-700 mb-2 flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Nilai Bisnis (Business Value)
                </h4>
                <ul className="text-sm text-slate-600 leading-relaxed list-disc pl-4 space-y-1">
                  <li>Efisiensi waktu pengolahan data uji hingga 80%.</li>
                  <li>Keaslian dokumen terjamin 100% via Public QR Code.</li>
                  <li>Meniadakan salah ketik data kalibrasi alat laboratorium.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Side-by-side Showcase: Mockup on Left, Flow & Modules on Right */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mt-16 mb-16">
          
          {/* Left Column: Real Screenshots (Desktop + Mobile Mockup) */}
          <div className="md:col-span-6 lg:col-span-7 relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-3xl blur-xl opacity-20"></div>
            
            <div className="relative flex flex-col md:flex-row items-center justify-center">
              {/* Desktop Dashboard */}
              <div className="w-full md:w-5/6 rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white relative z-10 transition-transform duration-500 hover:scale-[1.02] group/desktop">
                {/* Mac-style Window Header */}
                <div className="bg-slate-900 px-4 py-3 flex items-center justify-between border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500 shadow-sm"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500 shadow-sm"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-sm"></div>
                    
                    {/* Clickable URL Bar */}
                    <a 
                      href="https://times.annsa.site/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-xs font-mono text-slate-300 hover:text-white ml-2 sm:ml-4 bg-slate-800/90 px-3 py-1 rounded-md border border-slate-700 max-w-[170px] sm:max-w-[210px] flex items-center justify-between cursor-pointer transition-colors group/link relative z-20"
                      title="Buka Live Web App TIMES LIMS"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span className="truncate group-hover/link:underline">https://times.annsa.site/</span>
                      <span className="text-indigo-400 group-hover/link:animate-pulse ml-1">🔗</span>
                    </a>
                  </div>

                  {/* View Tabs & Live Indicator */}
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <div className="flex bg-slate-800 p-0.5 rounded-lg border border-slate-700 text-[11px] font-medium">
                      <button 
                        type="button"
                        onClick={(e) => { e.stopPropagation(); setDesktopTab('dashboard'); }}
                        className={`px-2 py-0.5 rounded-md transition-all ${desktopTab === 'dashboard' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'}`}
                      >
                        Dashboard
                      </button>
                      <button 
                        type="button"
                        onClick={(e) => { e.stopPropagation(); setDesktopTab('login'); }}
                        className={`px-2 py-0.5 rounded-md transition-all ${desktopTab === 'login' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'}`}
                      >
                        Login
                      </button>
                    </div>

                    <div className="hidden sm:flex items-center gap-1 text-[10px] text-emerald-400 font-mono bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/50">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span>LIVE</span>
                    </div>
                  </div>
                </div>
                
                {/* Desktop Screenshot */}
                <div 
                  className="relative cursor-pointer bg-slate-900"
                  onClick={() => setSelectedImage(desktopTab === 'dashboard' ? `${import.meta.env.BASE_URL}assets/img/lims-dashboard.png` : `${import.meta.env.BASE_URL}assets/img/lims-login.png`)}
                >
                  <img 
                    src={desktopTab === 'dashboard' ? `${import.meta.env.BASE_URL}assets/img/lims-dashboard.png` : `${import.meta.env.BASE_URL}assets/img/lims-login.png`} 
                    alt="TIMES LIMS Desktop Screenshot" 
                    className="w-full h-auto object-cover"
                    onError={(e) => {
                      e.target.onerror = null; 
                      e.target.src = "https://placehold.co/1200x675/0f172a/94a3b8?text=TIMES+LIMS+Screenshot";
                    }}
                  />
                  <div className="absolute inset-0 bg-slate-900/0 group-hover/desktop:bg-slate-900/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="bg-white/95 text-slate-800 p-3 rounded-full shadow-xl opacity-0 group-hover/desktop:opacity-100 transform scale-90 group-hover/desktop:scale-100 transition-all duration-300">
                      <ZoomIn size={24} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Phone Mockup Overlay (Vertical) */}
              <div 
                className="w-48 sm:w-56 mt-6 md:mt-0 md:absolute md:-right-2 md:-bottom-8 rounded-[2rem] overflow-hidden shadow-2xl border-[6px] border-slate-900 bg-slate-900 relative z-20 transform md:rotate-3 hover:rotate-0 transition-transform duration-500 cursor-pointer group/mobile"
                onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}assets/img/lims-mobile.png`)}
              >
                {/* iPhone Notch */}
                <div className="absolute top-0 inset-x-0 h-5 bg-slate-900 rounded-b-xl z-30 w-28 mx-auto"></div>
                
                <div className="relative h-full">
                  <img 
                    src={`${import.meta.env.BASE_URL}assets/img/lims-mobile.png`} 
                    alt="Mobile App Teknisi TIMES LIMS" 
                    className="w-full h-auto object-cover rounded-[1.75rem] bg-white relative z-10"
                    onError={(e) => {
                      e.target.onerror = null; 
                      e.target.src = "https://placehold.co/400x850/f8fafc/94a3b8?text=Mobile+TIMES+LIMS";
                    }}
                  />
                  <div className="absolute inset-0 bg-slate-900/0 group-hover/mobile:bg-slate-900/20 transition-colors duration-300 flex items-center justify-center z-20 rounded-[1.75rem]">
                    <div className="bg-white/95 text-slate-800 p-2.5 rounded-full shadow-xl opacity-0 group-hover/mobile:opacity-100 transform scale-90 group-hover/mobile:scale-100 transition-all duration-300">
                      <ZoomIn size={20} />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Flow Chart & Modules */}
          <div className="md:col-span-6 lg:col-span-5 flex flex-col gap-4">
            
            {/* Flow Pipeline */}
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 shadow-sm">
              <h4 className="text-sm font-bold text-slate-800 mb-3 text-center">Siklus Operasional Laboratorium</h4>
              <div className="flex items-center justify-between gap-2">
                {/* Box 1 */}
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center p-2.5 bg-white rounded-xl border border-slate-200 flex-1 text-center shadow-xs"
                >
                  <QrCode size={22} className="text-indigo-600 mb-1" />
                  <span className="font-bold text-[11px] text-slate-800">Registrasi</span>
                  <span className="text-[9px] text-slate-500">Intake Sampel</span>
                </motion.div>

                {/* Arrow */}
                <div className="flex flex-col items-center text-slate-400">
                  <ArrowRight size={14} className="text-indigo-500 animate-pulse" />
                </div>

                {/* Box 2 */}
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center p-2.5 bg-white rounded-xl border border-slate-200 flex-1 text-center shadow-xs"
                >
                  <Calculator size={22} className="text-cyan-600 mb-1" />
                  <span className="font-bold text-[11px] text-slate-800">Pengujian</span>
                  <span className="text-[9px] text-slate-500">Auto Kalkulasi</span>
                </motion.div>

                {/* Arrow */}
                <div className="flex flex-col items-center text-slate-400">
                  <ArrowRight size={14} className="text-cyan-500 animate-pulse" />
                </div>

                {/* Box 3 */}
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center p-2.5 bg-white rounded-xl border border-slate-200 flex-1 text-center shadow-xs"
                >
                  <FileCheck2 size={22} className="text-emerald-600 mb-1" />
                  <span className="font-bold text-[11px] text-slate-800">Validasi LHU</span>
                  <span className="text-[9px] text-slate-500">Sertifikasi QR</span>
                </motion.div>
              </div>
            </div>

            {/* Modules Vertical Stack */}
            <div className="flex flex-col gap-3">
              {modules.map((mod, idx) => {
                const Icon = mod.icon;
                return (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className={`p-4 rounded-2xl bg-gradient-to-br ${mod.color} border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex items-start gap-3.5`}
                  >
                    <div className="bg-white w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm mt-0.5">
                      <Icon size={20} className={mod.iconColor} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 mb-0.5">{mod.title}</h4>
                      <p className="text-[11px] text-slate-600 leading-relaxed">{mod.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/90 backdrop-blur-sm p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button 
              className="absolute top-4 right-4 md:top-8 md:right-8 text-white/70 hover:text-white bg-slate-800/50 hover:bg-slate-800 p-2 rounded-full backdrop-blur-md transition-all"
              onClick={() => setSelectedImage(null)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X size={28} />
            </motion.button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              src={selectedImage} 
              alt="Enlarged TIMES LIMS Showcase" 
              className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default LimsShowcase;
