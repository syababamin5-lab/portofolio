import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PackageSearch, Scissors, DollarSign, ArrowRight, Server, Repeat, X, ZoomIn } from 'lucide-react';

const ErpShowcase = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const modules = [
    {
      title: "Inventory & Purchasing",
      icon: PackageSearch,
      desc: "Kontrol stok bahan baku, kain, aksesoris, dan otomatisasi Purchase Order.",
      color: "from-emerald-50 to-teal-50",
      iconColor: "text-emerald-600"
    },
    {
      title: "Production & Sales",
      icon: Scissors,
      desc: "Pelacakan progress kerja (WIP), cutting, sewing, hingga invoicing penjualan.",
      color: "from-blue-50 to-indigo-50",
      iconColor: "text-blue-600"
    },
    {
      title: "Cash, Receivable & Accounting",
      icon: DollarSign,
      desc: "Sinkronisasi otomatis piutang dagang, penerimaan kas, hingga pembentukan laporan keuangan manajemen secara real-time.",
      color: "from-purple-50 to-fuchsia-50",
      iconColor: "text-purple-600"
    }
  ];

  return (
    <section id="erp" className="py-20 bg-background-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Studi Kasus Transformasi Digital</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-8"></div>
          
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-left">
            <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-slate-100 pb-4 mb-2 gap-4">
              <h3 className="text-2xl font-bold text-primary">ERP Manufacturing System (Raziq Garment)</h3>
              <a href="https://ansa.up.railway.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-200 text-emerald-700 hover:bg-emerald-100 rounded-lg text-sm font-bold transition-colors w-max">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Lihat Live Demo
              </a>
            </div>
            <p className="text-sm font-semibold text-accent mb-6 uppercase tracking-wider mt-2">Peran: Business Process Designer & Finance Support System</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Problem */}
              <div className="bg-red-50/50 p-5 rounded-xl border border-red-100">
                <h4 className="font-bold text-red-700 mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500"></span> Latar Belakang
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Pencatatan <em>stock opname</em> dan penyusunan laporan keuangan sebelumnya dilakukan secara manual menggunakan <em>spreadsheet</em>. Proses ini cukup menyita waktu admin pabrik dan memiliki risiko ketidakakuratan data.
                </p>
              </div>

              {/* Solution */}
              <div className="bg-emerald-50/50 p-5 rounded-xl border border-emerald-100">
                <h4 className="font-bold text-emerald-700 mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Solusi Sistem
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Merancang sistem informasi terintegrasi (ERP) yang secara otomatis menghubungkan aktivitas mutasi stok fisik di gudang dengan pencatatan jurnal akuntansi.
                </p>
              </div>

              {/* Impact */}
              <div className="bg-blue-50/50 p-5 rounded-xl border border-blue-100">
                <h4 className="font-bold text-blue-700 mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span> Hasil & Implementasi
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Alur kerja menjadi lebih efisien dan akurat. Sistem ini juga dilengkapi <strong>Aplikasi Mobile</strong> agar pekerja area <em>cutting</em> dapat menginput data produksi langsung dari lapangan, serta memudahkan pihak manajemen memantau operasional secara <em>real-time</em> melalui <em>smartphone</em>.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Real Application Screenshot */}
        <div className="max-w-5xl mx-auto mt-16 mb-24 relative">
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
                  href="https://ansa.up.railway.app/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-xs font-mono text-slate-600 hover:text-emerald-600 hover:border-emerald-300 ml-4 bg-white px-3 py-1 rounded-md shadow-sm border border-slate-200 w-48 sm:w-64 flex items-center justify-between cursor-pointer transition-colors group/link relative z-20"
                  title="Kunjungi Live Demo ERP"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span className="truncate group-hover/link:underline">ansa.up.railway.app</span>
                  <span className="text-emerald-500 group-hover/link:animate-pulse">🔗</span>
                </a>
              </div>
              
              <div 
                className="relative cursor-pointer"
                onClick={() => setSelectedImage('/assets/img/erp-dashboard.png')}
              >
                <img 
                  src="/assets/img/erp-dashboard.png" 
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
              className="w-64 mt-8 md:mt-0 md:absolute md:-right-4 md:-bottom-12 rounded-[2.5rem] overflow-hidden shadow-2xl border-[8px] border-slate-900 bg-slate-900 relative z-20 transform md:rotate-6 hover:rotate-0 transition-transform duration-500 cursor-pointer group/mobile"
              onClick={() => setSelectedImage('/assets/img/erp-mobile.jpeg')}
            >
              {/* iPhone Notch */}
              <div className="absolute top-0 inset-x-0 h-6 bg-slate-900 rounded-b-2xl z-30 w-32 mx-auto"></div>
              
              <div className="relative h-full">
                <img 
                  src="/assets/img/erp-mobile.jpeg" 
                  alt="Mobile ERP Raziq Garment" 
                  className="w-full h-auto object-cover rounded-[2rem] bg-white relative z-10"
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = "https://placehold.co/400x850/f8fafc/94a3b8?text=Simpan+foto+Mobile+sebagai+erp-mobile.jpeg";
                  }}
                />
                <div className="absolute inset-0 bg-slate-900/0 group-hover/mobile:bg-slate-900/20 transition-colors duration-300 flex items-center justify-center z-20 rounded-[2rem]">
                  <div className="bg-white/95 text-slate-800 p-3 rounded-full shadow-xl opacity-0 group-hover/mobile:opacity-100 transform scale-90 group-hover/mobile:scale-100 transition-all duration-300">
                    <ZoomIn size={24} />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Interactive Flow Chart Concept */}
        <div className="mb-16">
          <h4 className="text-lg font-bold text-center text-slate-800 mb-8">Siklus Integrasi Modul (Hover for Data Flow)</h4>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 max-w-4xl mx-auto">
            
            {/* Box 1 */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm border-2 border-transparent hover:border-emerald-400 transition-colors w-full md:w-1/3 relative group"
            >
              <PackageSearch size={40} className="text-emerald-500 mb-4" />
              <span className="font-bold text-slate-700">Material</span>
              <div className="absolute opacity-0 group-hover:opacity-100 -bottom-12 bg-slate-800 text-white text-xs px-3 py-2 rounded shadow-lg transition-opacity w-max z-10 pointer-events-none">
                PO & Goods Receipt
              </div>
            </motion.div>

            {/* Arrow */}
            <div className="hidden md:flex flex-col items-center text-slate-400">
              <ArrowRight size={24} className="animate-pulse" />
              <span className="text-[10px] font-mono mt-1">Stok Real-time</span>
            </div>
            <div className="md:hidden flex text-slate-400 rotate-90 my-2">
              <ArrowRight size={24} />
            </div>

            {/* Box 2 */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm border-2 border-transparent hover:border-blue-400 transition-colors w-full md:w-1/3 relative group"
            >
              <Scissors size={40} className="text-blue-500 mb-4" />
              <span className="font-bold text-slate-700">Produksi</span>
              <div className="absolute opacity-0 group-hover:opacity-100 -bottom-12 bg-slate-800 text-white text-xs px-3 py-2 rounded shadow-lg transition-opacity w-max z-10 pointer-events-none">
                WIP & FG Transfer
              </div>
            </motion.div>

            {/* Arrow */}
            <div className="hidden md:flex flex-col items-center text-slate-400">
              <ArrowRight size={24} className="animate-pulse" />
              <span className="text-[10px] font-mono mt-1">Costing (COGS)</span>
            </div>
            <div className="md:hidden flex text-slate-400 rotate-90 my-2">
              <ArrowRight size={24} />
            </div>

            {/* Box 3 */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm border-2 border-transparent hover:border-purple-400 transition-colors w-full md:w-1/3 relative group"
            >
              <Server size={40} className="text-purple-500 mb-4" />
              <span className="font-bold text-slate-700">Accounting</span>
              <div className="absolute opacity-0 group-hover:opacity-100 -bottom-12 bg-slate-800 text-white text-xs px-3 py-2 rounded shadow-lg transition-opacity w-max z-10 pointer-events-none">
                Auto-Journal & PnL
              </div>
            </motion.div>

          </div>
        </div>

        {/* Modules Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {modules.map((mod, idx) => {
            const Icon = mod.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`p-6 rounded-2xl bg-gradient-to-br ${mod.color} border border-white/50 shadow-sm hover:shadow-md transition-shadow`}
              >
                <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-sm">
                  <Icon size={24} className={mod.iconColor} />
                </div>
                <h4 className="text-lg font-bold text-slate-800 mb-3">{mod.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{mod.desc}</p>
              </motion.div>
            );
          })}
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
