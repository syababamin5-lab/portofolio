import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, AlertTriangle, Lightbulb, ChevronDown } from 'lucide-react';

const AuditCase = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="audit" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Simulasi Analisis Audit</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-8"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Pendekatan analitis berbasis risiko dalam mengevaluasi kelemahan sistem dan memberikan rekomendasi perbaikan (Internal Control).
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Executive Summary Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between bg-primary text-white p-4 rounded-t-xl font-semibold hover:bg-primary/90 transition-colors"
          >
            <span>Studi Kasus: Optimalisasi Proses Pembelian (Purchasing Cycle)</span>
            <ChevronDown size={20} className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* Expanded Content */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden border-x border-b border-slate-200 rounded-b-xl"
              >
                <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 bg-slate-50">
                  
                  {/* Column 1: Kondisi Lapangan */}
                  <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-slate-400"></div>
                    <div className="flex items-center gap-2 text-slate-700 mb-4 border-b border-slate-100 pb-3">
                      <Search size={20} className="text-slate-500" />
                      <h4 className="font-bold">Kondisi Lapangan (Temuan)</h4>
                    </div>
                    <div className="text-sm text-slate-600">
                      <span className="font-semibold block mb-1 text-slate-800">Pencatatan Manual:</span>
                      Aktivitas pembelian barang dan bahan baku pabrik dicatat menggunakan kertas / spreadsheet terpisah antar divisi.
                    </div>
                  </div>

                  {/* Column 2: Dampak Risiko */}
                  <div className="bg-white p-5 rounded-xl border border-red-100 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-red-400"></div>
                    <div className="flex items-center gap-2 text-red-700 mb-4 border-b border-red-50 pb-3">
                      <AlertTriangle size={20} className="text-red-500" />
                      <h4 className="font-bold">Dampak Risiko</h4>
                    </div>
                    <div className="text-sm text-slate-600">
                      <span className="font-semibold block mb-2 text-slate-800">Risiko Operasional & Finansial:</span>
                      <ol className="list-decimal pl-4 space-y-1">
                        <li>Duplikasi nomor invoice/PO.</li>
                        <li>Selisih data stok fisik gudang (discrepancy).</li>
                        <li>Kerentanan fraud/pembelian tidak terotorisasi.</li>
                      </ol>
                    </div>
                  </div>

                  {/* Column 3: Usulan Solusi */}
                  <div className="bg-white p-5 rounded-xl border border-emerald-100 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500"></div>
                    <div className="flex items-center gap-2 text-emerald-800 mb-4 border-b border-emerald-50 pb-3">
                      <Lightbulb size={20} className="text-emerald-500" />
                      <h4 className="font-bold">Usulan Solusi (Control)</h4>
                    </div>
                    <div className="text-sm text-slate-600 space-y-2">
                      <span className="font-semibold block mb-1 text-slate-800">Implementasi ERP Control:</span>
                      <p>Otomatisasi alur (Purchasing → Inventory → Accounting).</p>
                      <p>Sistem <strong>mengunci</strong> pembuatan invoice jika tidak ada nomor PO yang valid.</p>
                      <p>Pengurangan stok real-time saat barang keluar dari gudang produksi.</p>
                    </div>
                  </div>

                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default AuditCase;
