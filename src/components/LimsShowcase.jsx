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

        {/* Interactive Web App Window Mockup */}
        <div className="max-w-5xl mx-auto mb-20 relative">
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
                  className="text-xs font-mono text-slate-300 hover:text-white ml-4 bg-slate-800/80 px-3 py-1 rounded-md border border-slate-700 w-52 sm:w-72 flex items-center justify-between cursor-pointer transition-colors group/link"
                  title="Buka Live Web App ANSA LIMS"
                >
                  <span className="truncate group-hover/link:underline">https://www.annsa.site/</span>
                  <span className="text-indigo-400 group-hover/link:animate-pulse">🔗</span>
                </a>
              </div>

              <div className="flex items-center gap-2 text-xs text-emerald-400 font-mono bg-emerald-950/60 px-2.5 py-1 rounded border border-emerald-800/50">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>PRODUCTION LIVE</span>
              </div>
            </div>
            
            {/* App Screen Simulation */}
            <div className="p-6 md:p-8 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
              
              {/* App Topbar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-800 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-600/30 border border-indigo-500/40 flex items-center justify-center text-indigo-400">
                    <FlaskConical size={22} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white tracking-wide">ANSA LIMS — Geotechnical Engine</h4>
                    <p className="text-xs text-slate-400">Integrated Soil Mechanics & Quality Control System</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-slate-800 rounded-lg text-xs font-mono text-slate-300 border border-slate-700">
                    Engine: TIMES® v2.4
                  </span>
                  <span className="px-3 py-1 bg-indigo-900/60 text-indigo-300 rounded-lg text-xs font-mono border border-indigo-700/50">
                    DB: Supabase Cloud
                  </span>
                </div>
              </div>

              {/* Metric Highlights */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
                {[
                  { label: "Modul Uji Geoteknik", value: "8+ Metode", desc: "CBR, Triaxial, Shear, Atterberg", color: "border-indigo-500/30 text-indigo-400" },
                  { label: "Validasi Mutu (QC)", value: "100%", desc: "Multi-Tier Verification", color: "border-emerald-500/30 text-emerald-400" },
                  { label: "Pelacakan Sampel", value: "QR-Verified", desc: "Digital Chain of Custody", color: "border-cyan-500/30 text-cyan-400" },
                  { label: "Financial Analytics", value: "Real-time PO", desc: "Invoice & Work Order", color: "border-amber-500/30 text-amber-400" },
                ].map((stat, i) => (
                  <div key={i} className={`p-4 bg-slate-900/70 border ${stat.color} rounded-xl`}>
                    <div className="text-[11px] text-slate-400 font-medium">{stat.label}</div>
                    <div className="text-xl font-bold text-white mt-1">{stat.value}</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">{stat.desc}</div>
                  </div>
                ))}
              </div>

              {/* Feature Showcase Grid inside Mockup */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-xl">
                  <div className="flex items-center gap-2 text-indigo-400 font-semibold text-sm mb-2">
                    <Calculator size={16} />
                    <span>Otomatisasi Kalkulasi Teknis</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Menghilangkan rumus manual di spreadsheet. Sistem otomatis mengolah kurva penetrasi CBR, tegangan geser, dan indeks konsistensi tanah secara instan.
                  </p>
                </div>

                <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-xl">
                  <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm mb-2">
                    <ShieldCheck size={16} />
                    <span>Verifikasi Bertingkat (SOP)</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Data hasil uji hanya dapat disahkan setelah melalui review berjenjang oleh Koordinator Mutu & Kepala Lab sebelum penerbitan sertifikat resmi.
                  </p>
                </div>

                <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-xl">
                  <div className="flex items-center gap-2 text-cyan-400 font-semibold text-sm mb-2">
                    <QrCode size={16} />
                    <span>Verifikasi Publik via QR</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Laporan Hasil Uji (LHU) dilengkapi stempel dan QR Code yang dapat discan oleh klien/auditor untuk mengecek keaslian dokumen secara online.
                  </p>
                </div>
              </div>

              {/* CTA link inside mockup */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-400" />
                  Aplikasi telah aktif digunakan untuk operasional pengujian geoteknik & mekanika tanah.
                </span>
                <a 
                  href="https://www.annsa.site/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-indigo-400 hover:text-indigo-300 font-semibold underline"
                >
                  Jelajahi Langsung di annsa.site <ExternalLink size={13} />
                </a>
              </div>

            </div>
          </div>
        </div>

        {/* Data Flow Pipeline */}
        <div className="mb-20">
          <h3 className="text-center text-sm font-semibold text-slate-500 uppercase tracking-wider mb-8">
            Alur Integrasi Mutu & Data ANSA LIMS
          </h3>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-4xl mx-auto">
            {/* Box 1 */}
            <motion.div 
              whileHover={{ scale: 1.03 }}
              className="flex flex-col items-center p-6 bg-slate-50 rounded-xl border border-slate-200 w-full md:w-1/3 text-center shadow-sm"
            >
              <QrCode size={36} className="text-indigo-600 mb-3" />
              <span className="font-bold text-slate-800 text-base mb-1">1. Sample Intake</span>
              <span className="text-xs text-slate-500">Registrasi Sampel & QR Tracking</span>
            </motion.div>

            {/* Arrow 1 */}
            <div className="hidden md:flex flex-col items-center text-slate-400">
              <ArrowRight size={22} className="text-indigo-500 animate-pulse" />
              <span className="text-[10px] font-mono mt-1 text-slate-400">Testing Formula</span>
            </div>
            <div className="md:hidden flex text-slate-400 rotate-90 my-1">
              <ArrowRight size={20} />
            </div>

            {/* Box 2 */}
            <motion.div 
              whileHover={{ scale: 1.03 }}
              className="flex flex-col items-center p-6 bg-slate-50 rounded-xl border border-slate-200 w-full md:w-1/3 text-center shadow-sm"
            >
              <Calculator size={36} className="text-cyan-600 mb-3" />
              <span className="font-bold text-slate-800 text-base mb-1">2. Soil Mechanics Engine</span>
              <span className="text-xs text-slate-500">Kalkulasi Otomatis CBR, Shear, Triaxial</span>
            </motion.div>

            {/* Arrow 2 */}
            <div className="hidden md:flex flex-col items-center text-slate-400">
              <ArrowRight size={22} className="text-cyan-500 animate-pulse" />
              <span className="text-[10px] font-mono mt-1 text-slate-400">QC Approval</span>
            </div>
            <div className="md:hidden flex text-slate-400 rotate-90 my-1">
              <ArrowRight size={20} />
            </div>

            {/* Box 3 */}
            <motion.div 
              whileHover={{ scale: 1.03 }}
              className="flex flex-col items-center p-6 bg-slate-50 rounded-xl border border-slate-200 w-full md:w-1/3 text-center shadow-sm"
            >
              <FileCheck2 size={36} className="text-emerald-600 mb-3" />
              <span className="font-bold text-slate-800 text-base mb-1">3. Validasi Mutu & LHU</span>
              <span className="text-xs text-slate-500">Pengesahan Dokumen & PO Tracking</span>
            </motion.div>
          </div>
        </div>

        {/* Modules Grid */}
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
                className={`p-6 rounded-2xl bg-gradient-to-br ${mod.color} border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow`}
              >
                <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-sm">
                  <Icon size={24} className={mod.iconColor} />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-3">{mod.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{mod.desc}</p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default LimsShowcase;
