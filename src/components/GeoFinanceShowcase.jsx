import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Landmark, Briefcase, Truck, Database, ArrowRight, X, ZoomIn, Map, Target, TrendingUp } from 'lucide-react';

const GeoFinanceShowcase = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [desktopTab, setDesktopTab] = useState('dashboard');

  const modules = [
    {
      title: "Executive Dashboard",
      icon: Activity,
      desc: "Dasbor pemantauan kesehatan finansial (Revenue, Gross Profit, Cashflow), utilisasi alat berat, dan 'Peta Urat Dana' penentu profitabilitas.",
      color: "from-amber-50 to-orange-50",
      iconColor: "text-amber-600"
    },
    {
      title: "Finance & Accounting Core",
      icon: Landmark,
      desc: "Jurnal Double-Entry, Manajemen AP/AR (Aging Report), dan Generator Laporan Keuangan Eksekutif (PDF 4 Halaman) otomatis.",
      color: "from-rose-50 to-red-50",
      iconColor: "text-rose-600"
    },
    {
      title: "Project Financials & Ops",
      icon: Briefcase,
      desc: "Pemantauan ketat Rencana Anggaran Biaya (RAB), komparasi Invoice vs Actual Cost di lapangan, dan arus kas mingguan per proyek.",
      color: "from-yellow-50 to-amber-50",
      iconColor: "text-yellow-600"
    },
    {
      title: "Asset & Inventory Costing",
      icon: Truck,
      desc: "Melacak nilai mesin bor/tambang, depresiasi otomatis yang terhubung ke pembukuan, serta kontrol biaya consumables & spareparts.",
      color: "from-orange-50 to-amber-50",
      iconColor: "text-orange-600"
    },
    {
      title: "Master Data Management",
      icon: Database,
      desc: "Fondasi data terpusat untuk Chart of Accounts (COA), Direktori Klien/Vendor, Pajak, dan SDM operasional lapangan.",
      color: "from-stone-50 to-slate-50",
      iconColor: "text-stone-600"
    }
  ];

  return (
    <section id="geofinance" className="py-20 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-amber-50 text-amber-700 font-semibold text-xs tracking-wider uppercase mb-3 border border-amber-200">
            Sistem Tata Kelola Keuangan Proyek & Korporat
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">LODE (Lifecycle Operation Data Engine)</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-base italic">
            "Weaving a Flawless Financial Fabric – Memetakan 'Urat Dana' dari setiap Operasi Tambang"
          </p>
          <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full mt-6 mb-10"></div>
          
          {/* Main Case Study Card */}
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-left">
            <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-slate-100 pb-4 mb-2 gap-4">
              <div>
                <h3 className="text-2xl font-bold text-slate-900">LODE (Project & Corporate Finance)</h3>
                <p className="text-sm text-slate-500 font-medium mt-1">
                  Sistem ERP Keuangan Khusus Konsultan Pertambangan & Geoteknik
                </p>
              </div>
              <a 
                href="https://lode.annsa.site/?mode=readonly" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-200 text-amber-700 hover:bg-amber-100 rounded-lg text-sm font-bold transition-colors w-max whitespace-nowrap flex-shrink-0"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Kunjungi Live Web App ↗
              </a>
            </div>
            
            <p className="text-sm font-semibold text-amber-600 mb-6 uppercase tracking-wider mt-2">
              Peran: Financial System Developer & Business Analyst
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Problem */}
              <div className="bg-red-50/50 p-5 rounded-xl border border-red-100">
                <h4 className="font-bold text-red-700 mb-2 flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 rounded-full bg-red-500"></span> Latar Belakang
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Dinamika lapangan pertambangan yang sangat tinggi menyebabkan kesenjangan informasi antara realitas operasional/biaya di lapangan dengan angka pembukuan di kantor pusat.
                </p>
              </div>

              {/* Solution */}
              <div className="bg-amber-50/50 p-5 rounded-xl border border-amber-100">
                <h4 className="font-bold text-amber-700 mb-2 flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span> Kegunaan & Cara Kerja
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  LODE bertindak sebagai kompas finansial. Aplikasi ini mencatat seluruh pengeluaran di lapangan, menghitung penyusutan alat berat, dan secara otomatis menerbitkan Laporan Eksekutif elegan untuk direksi secara transparan.
                </p>
              </div>

              {/* Impact */}
              <div className="bg-emerald-50/50 p-5 rounded-xl border border-emerald-100">
                <h4 className="font-bold text-emerald-700 mb-2 flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Hasil & Business Value
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Manajemen dapat "menambang" potensi profit maksimal dengan memastikan tidak ada satu rupiah pun modal yang tidak terlacak, serta memantau perputaran RAB proyek secara real-time.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Side-by-side Showcase: Mockup on Left, Flow & Modules on Right */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mt-16 mb-16">
          
          {/* Left Column: Real Screenshots (Desktop + Mobile Mockup) */}
          <div className="md:col-span-6 lg:col-span-7 relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-amber-500 to-rose-500 rounded-3xl blur-xl opacity-20"></div>
            
            <div className="relative flex flex-col md:flex-row items-center justify-center">
              {/* Desktop Dashboard */}
              <div className="w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white relative z-10 transition-transform duration-500 hover:scale-[1.02] group/desktop">
                {/* Mac-style Window Header */}
                <div className="bg-slate-900 px-4 py-3 flex items-center justify-between border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500 shadow-sm"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500 shadow-sm"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-sm"></div>
                    
                    {/* Clickable URL Bar */}
                    <a 
                      href="https://lode.annsa.site/?mode=readonly" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-xs font-mono text-slate-300 hover:text-white ml-2 sm:ml-4 bg-slate-800/90 px-3 py-1 rounded-md border border-slate-700 max-w-[170px] sm:max-w-[210px] flex items-center justify-between cursor-pointer transition-colors group/link relative z-20"
                      title="Buka Live Web App LODE"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span className="truncate group-hover/link:underline">https://lode.annsa.site/?mode=readonly</span>
                      <span className="text-amber-400 group-hover/link:animate-pulse ml-1">🔗</span>
                    </a>
                  </div>

                  {/* View Tabs & Live Indicator */}
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <div className="flex bg-slate-800 p-0.5 rounded-lg border border-slate-700 text-[11px] font-medium">
                      <button 
                        type="button"
                        onClick={(e) => { e.stopPropagation(); setDesktopTab('dashboard'); }}
                        className={`px-2 py-0.5 rounded-md transition-all ${desktopTab === 'dashboard' ? 'bg-amber-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'}`}
                      >
                        Dashboard
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
                  onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}assets/img/lode-dashboard.png`)}
                >
                  <img 
                    src={`${import.meta.env.BASE_URL}assets/img/lode-dashboard.png`} 
                    alt="LODE Desktop Screenshot" 
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-slate-900/0 group-hover/desktop:bg-slate-900/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="bg-white/95 text-slate-800 p-3 rounded-full shadow-xl opacity-0 group-hover/desktop:opacity-100 transform scale-90 group-hover/desktop:scale-100 transition-all duration-300">
                      <ZoomIn size={24} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Flow Chart & Modules */}
          <div className="md:col-span-6 lg:col-span-5 flex flex-col gap-4">
            
            {/* Flow Pipeline */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
              <h4 className="text-sm font-bold text-slate-800 mb-3 text-center">Lifecycle Operation Workflow</h4>
              <div className="flex items-center justify-between gap-2">
                {/* Box 1 */}
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center p-2.5 bg-slate-50 rounded-xl border border-slate-200 flex-1 text-center shadow-xs"
                >
                  <Map size={22} className="text-amber-600 mb-1" />
                  <span className="font-bold text-[11px] text-slate-800">Operasi</span>
                  <span className="text-[9px] text-slate-500">Tambang / Bor</span>
                </motion.div>

                {/* Arrow */}
                <div className="flex flex-col items-center text-slate-400">
                  <ArrowRight size={14} className="text-amber-500 animate-pulse" />
                </div>

                {/* Box 2 */}
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center p-2.5 bg-slate-50 rounded-xl border border-slate-200 flex-1 text-center shadow-xs"
                >
                  <Target size={22} className="text-rose-600 mb-1" />
                  <span className="font-bold text-[11px] text-slate-800">Financials</span>
                  <span className="text-[9px] text-slate-500">RAB & Costing</span>
                </motion.div>

                {/* Arrow */}
                <div className="flex flex-col items-center text-slate-400">
                  <ArrowRight size={14} className="text-rose-500 animate-pulse" />
                </div>

                {/* Box 3 */}
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center p-2.5 bg-slate-50 rounded-xl border border-slate-200 flex-1 text-center shadow-xs"
                >
                  <TrendingUp size={22} className="text-emerald-600 mb-1" />
                  <span className="font-bold text-[11px] text-slate-800">Executive</span>
                  <span className="text-[9px] text-slate-500">Profit & Report</span>
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
                    className={`p-3.5 rounded-2xl bg-gradient-to-br ${mod.color} border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex items-start gap-3`}
                  >
                    <div className="bg-white w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm mt-0.5">
                      <Icon size={18} className={mod.iconColor} />
                    </div>
                    <div>
                      <h4 className="text-[13px] font-bold text-slate-900 mb-0.5">{mod.title}</h4>
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
              alt="Enlarged LODE Showcase" 
              className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GeoFinanceShowcase;
