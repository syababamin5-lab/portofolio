import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PackageSearch, Scissors, DollarSign, ArrowRight, Server, Repeat, X, ZoomIn, Users, Shield, MessageSquare, Code2, Database } from 'lucide-react';

const ErpShowcase = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const modules = [
    {
      title: "Production & WIP Tracking",
      icon: Scissors,
      desc: "Pelacakan progress detail per divisi (Cutting, Jahit/Makloon, Finishing & QC). Kalkulasi otomatis konsumsi material dan ongkos produksi per satuan (Sunk Cost).",
      color: "from-emerald-50 to-teal-50",
      iconColor: "text-emerald-600"
    },
    {
      title: "Finance, GL & Transactions",
      icon: DollarSign,
      desc: "Integrasi Chart of Accounts (COA) dinamis. Penjualan & Pembelian otomatis masuk Jurnal Umum (General Ledger). Mendukung pajak, diskon, DP, dan PDF dinamis.",
      color: "from-blue-50 to-indigo-50",
      iconColor: "text-blue-600"
    },
    {
      title: "HR, Payroll & Internal Chat",
      icon: Users,
      desc: "Sistem gaji fleksibel (Borongan, Mingguan, Bulanan) terintegrasi manajemen Kasbon. Dilengkapi fitur Real-time Chat antar-divisi tanpa keluar dari sistem.",
      color: "from-purple-50 to-fuchsia-50",
      iconColor: "text-purple-600"
    },
    {
      title: "Dynamic Access & Security (RBAC)",
      icon: Shield,
      desc: "Keamanan berlapis dengan Role dinamis. Menu Registry me-render navigasi sidebar otomatis berdasarkan hak akses, dilengkapi User Logs (Audit Trail).",
      color: "from-rose-50 to-pink-50",
      iconColor: "text-rose-600"
    }
  ];

  return (
    <section id="erp" className="py-20 bg-background-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">SEAM-Annsa: Supply-chain Efficiency Accounting Management</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-base italic mb-4">
            “Weaving a Flawless Financial Fabric – The Loom to Your Business's Balance”
          </p>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-8"></div>
          
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-left">
            <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-slate-100 pb-4 mb-2 gap-4">
              <div>
                <h3 className="text-2xl font-bold text-primary">SEAM-Annsa (Garment ERP)</h3>
                <p className="text-sm text-slate-500 font-medium mt-1">
                  Aplikasi Enterprise Resource Planning (ERP) untuk mendigitalkan rantai pasok, operasional, dan akuntansi industri manufaktur garmen.
                </p>
              </div>
              <a href="https://seam.annsa.site/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-200 text-emerald-700 hover:bg-emerald-100 rounded-lg text-sm font-bold transition-colors w-max">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Kunjungi Live Demo ↗
              </a>
            </div>
            <p className="text-sm font-semibold text-accent mb-6 uppercase tracking-wider mt-2">Peran: Lead Developer & System Architect (End-to-End)</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Problem */}
              <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                <h4 className="font-bold text-slate-700 mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-slate-500"></span> Latar Belakang
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Mendigitalkan seluruh siklus produksi dari pemotongan kain hingga perhitungan laba-rugi dalam ekosistem serverless real-time, merajut efisiensi dan keseimbangan finansial.
                </p>
              </div>

              {/* How it Works */}
              <div className="bg-indigo-50/50 p-5 rounded-xl border border-indigo-100">
                <h4 className="font-bold text-indigo-700 mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-500"></span> Kegunaan & Cara Kerja
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Aplikasi ini mengawal seluruh siklus pabrik garmen: mulai dari pencatatan stok gulungan kain masuk, memantau proses potong (cutting) dan jahit (makloon), hingga barang jadi. Setiap pergerakan barang otomatis tercatat sebagai biaya produksi (HPP) dan masuk ke pembukuan.
                </p>
              </div>

              {/* Impact / Business Value */}
              <div className="bg-emerald-50/50 p-5 rounded-xl border border-emerald-100">
                <h4 className="font-bold text-emerald-700 mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Nilai Bisnis (Business Value)
                </h4>
                <ul className="text-[13px] text-slate-600 leading-relaxed list-disc pl-4 space-y-1">
                  <li>Mencegah kebocoran biaya produksi akibat material terbuang (waste).</li>
                  <li>Memastikan penagihan invoice ke klien tepat waktu dan akurat.</li>
                  <li>Manajemen dapat melihat laba-rugi pabrik secara real-time tanpa menunggu akhir bulan.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Side-by-side Showcase: Mockup on Left, Flow & Modules on Right */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mt-16 mb-16">
          
          {/* Left Column: Real Application Screenshot (Desktop + Mobile Mockup) */}
          <div className="md:col-span-6 lg:col-span-7 relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-3xl blur-xl opacity-20"></div>
            
            <div className="relative flex flex-col md:flex-row items-center justify-center">
              {/* Desktop Dashboard */}
              <div className="w-full md:w-5/6 rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white relative z-10 transition-transform duration-500 hover:scale-[1.02] group/desktop">
                {/* Mac-style Window Header */}
                <div className="bg-slate-100 px-4 py-3 flex items-center gap-2 border-b border-slate-200">
                  <div className="w-3 h-3 rounded-full bg-red-400 shadow-sm"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400 shadow-sm"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-400 shadow-sm"></div>
                  
                  {/* Clickable URL Bar */}
                  <a 
                    href="https://seam.annsa.site/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-xs font-mono text-slate-600 hover:text-emerald-600 hover:border-emerald-300 ml-4 bg-white px-3 py-1 rounded-md shadow-sm border border-slate-200 w-48 sm:w-64 flex items-center justify-between cursor-pointer transition-colors group/link relative z-20"
                    title="Kunjungi Live Demo ERP"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span className="truncate group-hover/link:underline">seam.annsa.site</span>
                    <span className="text-emerald-500 group-hover/link:animate-pulse">🔗</span>
                  </a>
                </div>
                
                <div 
                  className="relative cursor-pointer"
                  onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}assets/img/erp-dashboard.png`)}
                >
                  <img 
                    src={`${import.meta.env.BASE_URL}assets/img/erp-dashboard.png`} 
                    alt="Dashboard ERP Raziq Garment" 
                    className="w-full h-auto object-cover"
                    onError={(e) => {
                      e.target.onerror = null; 
                      e.target.src = "https://placehold.co/1200x675/f8fafc/94a3b8?text=Simpan+foto+Desktop+sebagai+erp-dashboard.png";
                    }}
                  />
                  <div className="absolute inset-0 bg-slate-900/0 group-hover/desktop:bg-slate-900/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="bg-white/95 text-slate-800 p-3 rounded-full shadow-xl opacity-0 group-hover/desktop:opacity-100 transform scale-90 group-hover/desktop:scale-100 transition-all duration-300">
                      <ZoomIn size={24} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile APK Mockup */}
              <div 
                className="w-48 sm:w-56 mt-6 md:mt-0 md:absolute md:-right-2 md:-bottom-8 rounded-[2rem] overflow-hidden shadow-2xl border-[6px] border-slate-900 bg-slate-900 relative z-20 transform md:rotate-3 hover:rotate-0 transition-transform duration-500 cursor-pointer group/mobile"
                onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}assets/img/erp-mobile.jpeg`)}
              >
                {/* iPhone Notch */}
                <div className="absolute top-0 inset-x-0 h-5 bg-slate-900 rounded-b-xl z-30 w-28 mx-auto"></div>
                
                <div className="relative h-full">
                  <img 
                    src={`${import.meta.env.BASE_URL}assets/img/erp-mobile.jpeg`} 
                    alt="Mobile ERP Raziq Garment" 
                    className="w-full h-auto object-cover rounded-[1.75rem] bg-white relative z-10"
                    onError={(e) => {
                      e.target.onerror = null; 
                      e.target.src = "https://placehold.co/400x850/f8fafc/94a3b8?text=Simpan+foto+Mobile+sebagai+erp-mobile.jpeg";
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
            
            {/* Business Process Flow Chart */}
            <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
              <h4 className="text-sm font-bold text-slate-800 mb-3 text-center">Siklus Operasional Garmen</h4>
              <div className="flex items-center justify-between gap-2">
                {/* Box 1 */}
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center p-2.5 bg-slate-50 rounded-xl border border-slate-100 flex-1 text-center"
                >
                  <PackageSearch size={24} className="text-emerald-500 mb-1" />
                  <span className="font-bold text-[11px] text-slate-700">Order & Stok</span>
                  <span className="text-[9px] text-slate-500">Penerimaan Kain</span>
                </motion.div>

                {/* Arrow */}
                <div className="flex flex-col items-center text-slate-400">
                  <ArrowRight size={16} className="animate-pulse" />
                </div>

                {/* Box 2 */}
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center p-2.5 bg-slate-50 rounded-xl border border-slate-100 flex-1 text-center"
                >
                  <Scissors size={24} className="text-blue-500 mb-1" />
                  <span className="font-bold text-[11px] text-slate-700">Produksi</span>
                  <span className="text-[9px] text-slate-500">Potong & Jahit</span>
                </motion.div>

                {/* Arrow */}
                <div className="flex flex-col items-center text-slate-400">
                  <ArrowRight size={16} className="animate-pulse" />
                </div>

                {/* Box 3 */}
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center p-2.5 bg-slate-50 rounded-xl border border-slate-100 flex-1 text-center"
                >
                  <DollarSign size={24} className="text-purple-500 mb-1" />
                  <span className="font-bold text-[11px] text-slate-700">Keuangan</span>
                  <span className="text-[9px] text-slate-500">Invoice & Gaji</span>
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
                    className={`p-4 rounded-2xl bg-gradient-to-br ${mod.color} border border-white/60 shadow-sm hover:shadow-md transition-shadow flex items-start gap-3.5`}
                  >
                    <div className="bg-white w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm mt-0.5">
                      <Icon size={20} className={mod.iconColor} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-800 mb-0.5">{mod.title}</h4>
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
              alt="Enlarged ERP Showcase" 
              className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ErpShowcase;
