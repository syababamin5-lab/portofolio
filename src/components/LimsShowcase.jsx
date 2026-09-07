import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FlaskConical, Calculator, FileCheck2, ArrowRight, ShieldCheck, QrCode, ExternalLink, Activity, Database, CheckCircle2, FileSpreadsheet } from 'lucide-react';

const LimsShowcase = () => {
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
          <div className="max-w-4xl mx-auto bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-200 text-left">
            <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-slate-200 pb-4 mb-2 gap-4">
              <div>
                <h3 className="text-2xl font-bold text-slate-900">ANSA LIMS (Laboratory Information Management System)</h3>
                <p className="text-sm text-slate-500 font-medium">Domain Resmi: <span className="font-mono text-indigo-600">www.annsa.site</span></p>
              </div>
              <a 
                href="https://www.annsa.site/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-bold transition-all shadow-md hover:shadow-lg w-max"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Kunjungi Live Web App ↗
              </a>
            </div>
            
            <p className="text-xs font-bold text-indigo-600 mb-6 uppercase tracking-wider mt-2">
              Peran: System Architect, Financial Analytics & QC Automation Designer
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Problem */}
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                <h4 className="font-bold text-rose-700 mb-2 flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 rounded-full bg-rose-500"></span> Latar Belakang
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Kalkulasi parameter pengujian tanah (CBR, Triaxial, Shear) dan validasi data mutu sebelumnya mengandalkan *spreadsheet* manual terpisah, rentan kekeliruan formula, dan menyulitkan pelacakan status pekerjaan klien.
                </p>
              </div>

              {/* Solution */}
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                <h4 className="font-bold text-indigo-700 mb-2 flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 rounded-full bg-indigo-500"></span> Solusi Sistem Web App
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Merancang web app **ANSA LIMS** (React 19, Supabase Cloud DB, QR Generator, & XLSX Engine) untuk registrasi sampel geoteknik, kalkulasi formula otomatis, validasi mutu bertingkat, hingga pelacakan PO & dokumen penawaran.
                </p>
              </div>

              {/* Impact */}
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
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
          
          {/* Left Column: Interactive Web App Window Mockup */}
          <div className="md:col-span-6 lg:col-span-7 relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-3xl blur-xl opacity-20"></div>
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-950 text-slate-100">
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
                    className="text-xs font-mono text-slate-300 hover:text-white ml-4 bg-slate-800/80 px-3 py-1 rounded-md border border-slate-700 w-48 sm:w-64 flex items-center justify-between cursor-pointer transition-colors group/link"
                    title="Buka Live Web App ANSA LIMS"
                  >
                    <span className="truncate group-hover/link:underline">https://www.annsa.site/</span>
                    <span className="text-indigo-400 group-hover/link:animate-pulse">🔗</span>
                  </a>
                </div>

                <div className="flex items-center gap-2 text-xs text-emerald-400 font-mono bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/50">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-[10px]">LIVE</span>
                </div>
              </div>
              
              {/* App Screen Simulation */}
              <div className="p-5 md:p-6 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
                
                {/* App Topbar */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-indigo-600/30 border border-indigo-500/40 flex items-center justify-center text-indigo-400">
                      <FlaskConical size={18} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white tracking-wide">ANSA LIMS Engine</h4>
                      <p className="text-[11px] text-slate-400">Geotechnical & Soil Mechanics</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <span className="px-2 py-0.5 bg-indigo-900/60 text-indigo-300 rounded text-[10px] font-mono border border-indigo-700/50">
                      Supabase Cloud DB
                    </span>
                  </div>
                </div>

                {/* Metric Highlights */}
                <div className="grid grid-cols-2 gap-3 my-4">
                  {[
                    { label: "Modul Uji Geoteknik", value: "8+ Metode", desc: "CBR, Triaxial, Shear, Atterberg", color: "border-indigo-500/30 text-indigo-400" },
                    { label: "Validasi Mutu (QC)", value: "100%", desc: "Multi-Tier Verification", color: "border-emerald-500/30 text-emerald-400" },
                    { label: "Pelacakan Sampel", value: "QR-Verified", desc: "Digital Chain of Custody", color: "border-cyan-500/30 text-cyan-400" },
                    { label: "Financial Analytics", value: "Real-time PO", desc: "Invoice & Work Order", color: "border-amber-500/30 text-amber-400" },
                  ].map((stat, i) => (
                    <div key={i} className={`p-3 bg-slate-900/70 border ${stat.color} rounded-xl`}>
                      <div className="text-[10px] text-slate-400 font-medium">{stat.label}</div>
                      <div className="text-base font-bold text-white mt-0.5">{stat.value}</div>
                      <div className="text-[9px] text-slate-400">{stat.desc}</div>
                    </div>
                  ))}
                </div>

                {/* Feature Highlights inside Mockup */}
                <div className="space-y-2.5 pt-1">
                  <div className="p-3 bg-slate-900/50 border border-slate-800 rounded-xl flex items-start gap-2.5">
                    <Calculator size={16} className="text-indigo-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-xs font-semibold text-white">Otomatisasi Kalkulasi Formula Geoteknik</div>
                      <p className="text-[11px] text-slate-400 leading-relaxed mt-0.5">
                        Menghilangkan human error di spreadsheet. Kurva CBR, tegangan geser, dan konsistensi tanah terhitung instan.
                      </p>
                    </div>
                  </div>

                  <div className="p-3 bg-slate-900/50 border border-slate-800 rounded-xl flex items-start gap-2.5">
                    <ShieldCheck size={16} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-xs font-semibold text-white">Verifikasi Mutu & Stempel QR Publik</div>
                      <p className="text-[11px] text-slate-400 leading-relaxed mt-0.5">
                        Review berjenjang (Teknisi &rarr; Koordinator Mutu &rarr; Kepala Lab) sebelum penerbitan sertifikat digital LHU.
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA link inside mockup */}
                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1.5 text-[11px]">
                    <CheckCircle2 size={14} className="text-emerald-400" />
                    Aktif digunakan untuk operasional pengujian lab.
                  </span>
                  <a 
                    href="https://www.annsa.site/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-indigo-400 hover:text-indigo-300 font-semibold underline text-[11px]"
                  >
                    Buka annsa.site <ExternalLink size={11} />
                  </a>
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
    </section>
  );
};

export default LimsShowcase;
