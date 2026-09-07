import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FlaskConical, Calculator, FileCheck2, ArrowRight, ShieldCheck, QrCode, ExternalLink, Activity, Database, CheckCircle2, FileSpreadsheet, X, ZoomIn } from 'lucide-react';

const LimsShowcase = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [desktopTab, setDesktopTab] = useState('dashboard');

  const modules = [
    {
      title: "Sample Intake & QR Chain of Custody",
      icon: QrCode,
      desc: "Registrasi sampel tanah, penerbitan barcode & QR code unik, serta pelacakan alur pekerjaan laboratorium secara real-time dari registrasi hingga pengujian.",
      color: "from-indigo-50 to-blue-50",
      iconColor: "text-indigo-600"
    },
    {
      title: "Soil Mechanics Engine & Formula Automation",
      icon: Calculator,
      desc: "Otomatisasi kalkulasi parameter geoteknik: Direct Shear (Cu), Triaxial (CD/UU), CBR Soaked/Unsoaked, Atterberg Limits, hingga analisis gradasi saringan.",
      color: "from-cyan-50 to-teal-50",
      iconColor: "text-cyan-600"
    },
    {
      title: "Multi-tier QC & Digital LHU Verification",
      icon: ShieldCheck,
      desc: "Alur validasi mutu berjenjang (Teknisi -> Koordinator Mutu -> Kepala Lab), terintegrasi analitik keuangan PO, serta penerbitan LHU resmi dengan QR Code publik.",
      color: "from-emerald-50 to-green-50",
      iconColor: "text-emerald-600"
    }
  ];

  return (
    <section id="lims" className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-indigo-50 text-indigo-700 font-semibold text-xs tracking-wider uppercase mb-3 border border-indigo-200">
            Proyek Sistem Mandiri #2
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">ANSA LIMS — Geotechnical Lab System</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-base">
            Sistem Informasi Manajemen Laboratorium (LIMS) berbasis web yang mengintegrasikan kalkulasi mekanika tanah, otomatisasi kontrol mutu (QC), dan verifikasi laporan digital.
          </p>
          <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full mt-6 mb-10"></div>
          
          {/* Main Case Study Card */}
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-left">
            <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-slate-100 pb-4 mb-2 gap-4">
              <div>
                <h3 className="text-2xl font-bold text-slate-900">ANSA LIMS (Laboratory Information Management System)</h3>
                <p className="text-sm text-slate-500 font-medium mt-1">
                  Domain Resmi: <a href="https://www.annsa.site/" target="_blank" rel="noopener noreferrer" className="font-mono text-indigo-600 hover:underline">www.annsa.site</a>
                </p>
              </div>
              <a 
                href="https://www.annsa.site/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 border border-indigo-200 text-indigo-700 hover:bg-indigo-100 rounded-lg text-sm font-bold transition-colors w-max whitespace-nowrap flex-shrink-0"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Kunjungi Live Web App ↗
              </a>
            </div>
            
            <p className="text-sm font-semibold text-indigo-600 mb-6 uppercase tracking-wider mt-2">
              Peran: System Architect, Financial Analytics & QC Automation Designer
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Problem */}
              <div className="bg-red-50/50 p-5 rounded-xl border border-red-100">
                <h4 className="font-bold text-red-700 mb-2 flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 rounded-full bg-red-500"></span> Latar Belakang
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Kalkulasi parameter pengujian tanah (CBR, Triaxial, Shear) dan validasi data mutu sebelumnya mengandalkan <em>spreadsheet</em> manual terpisah, rentan risiko kekeliruan formula, serta menyulitkan pelacakan status pekerjaan klien.
                </p>
              </div>

              {/* Solution */}
              <div className="bg-indigo-50/50 p-5 rounded-xl border border-indigo-100">
                <h4 className="font-bold text-indigo-700 mb-2 flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 rounded-full bg-indigo-500"></span> Solusi Sistem Web App
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Merancang web app <strong>ANSA LIMS</strong> terintegrasi (React 19, Supabase Cloud DB, QR Generator, & XLSX Engine) untuk registrasi sampel geoteknik, kalkulasi formula otomatis, validasi mutu bertingkat, hingga pelacakan PO & dokumen penawaran.
                </p>
              </div>

              {/* Impact */}
              <div className="bg-emerald-50/50 p-5 rounded-xl border border-emerald-100">
                <h4 className="font-bold text-emerald-700 mb-2 flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Hasil & Implementasi
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Akurasi validasi 100% konsisten sesuai standar ASTM/SNI, memangkas waktu review hasil uji hingga 70%, dan memfasilitasi verifikasi keaslian dokumen via QR Code yang aktif online di <strong>www.annsa.site</strong>.
                </p>
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
                      href="https://www.annsa.site/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-xs font-mono text-slate-300 hover:text-white ml-2 sm:ml-4 bg-slate-800/90 px-3 py-1 rounded-md border border-slate-700 max-w-[170px] sm:max-w-[210px] flex items-center justify-between cursor-pointer transition-colors group/link relative z-20"
                      title="Buka Live Web App ANSA LIMS"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span className="truncate group-hover/link:underline">https://www.annsa.site/</span>
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
                    alt="ANSA LIMS Desktop Screenshot" 
                    className="w-full h-auto object-cover"
                    onError={(e) => {
                      e.target.onerror = null; 
                      e.target.src = "https://placehold.co/1200x675/0f172a/94a3b8?text=ANSA+LIMS+Screenshot";
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
                    alt="Mobile App Teknisi ANSA LIMS" 
                    className="w-full h-auto object-cover rounded-[1.75rem] bg-white relative z-10"
                    onError={(e) => {
                      e.target.onerror = null; 
                      e.target.src = "https://placehold.co/400x850/f8fafc/94a3b8?text=Mobile+ANSA+LIMS";
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
              <h4 className="text-sm font-bold text-slate-800 mb-3 text-center">Alur Integrasi Mutu & Data ANSA LIMS</h4>
              <div className="flex items-center justify-between gap-2">
                {/* Box 1 */}
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center p-2.5 bg-white rounded-xl border border-slate-200 flex-1 text-center shadow-xs"
                >
                  <QrCode size={22} className="text-indigo-600 mb-1" />
                  <span className="font-bold text-[11px] text-slate-800">1. Sample</span>
                  <span className="text-[9px] text-slate-500">QR Intake</span>
                </motion.div>

                {/* Arrow */}
                <div className="flex flex-col items-center text-slate-400">
                  <ArrowRight size={14} className="text-indigo-500 animate-pulse" />
                  <span className="text-[8px] font-mono">Formula</span>
                </div>

                {/* Box 2 */}
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center p-2.5 bg-white rounded-xl border border-slate-200 flex-1 text-center shadow-xs"
                >
                  <Calculator size={22} className="text-cyan-600 mb-1" />
                  <span className="font-bold text-[11px] text-slate-800">2. Engine</span>
                  <span className="text-[9px] text-slate-500">Auto-Calc</span>
                </motion.div>

                {/* Arrow */}
                <div className="flex flex-col items-center text-slate-400">
                  <ArrowRight size={14} className="text-cyan-500 animate-pulse" />
                  <span className="text-[8px] font-mono">QC Review</span>
                </div>

                {/* Box 3 */}
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center p-2.5 bg-white rounded-xl border border-slate-200 flex-1 text-center shadow-xs"
                >
                  <FileCheck2 size={22} className="text-emerald-600 mb-1" />
                  <span className="font-bold text-[11px] text-slate-800">3. Validasi</span>
                  <span className="text-[9px] text-slate-500">LHU & PO</span>
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
                      <p className="text-xs text-slate-600 leading-relaxed">{mod.desc}</p>
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
              alt="Enlarged ANSA LIMS Showcase" 
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
