import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import ErpShowcase from './components/ErpShowcase';
import LimsShowcase from './components/LimsShowcase';
import SkillsFooter from './components/SkillsFooter';
import { FileText, Briefcase, Layout, ArrowLeft, Download, FlaskConical, ExternalLink } from 'lucide-react';

function App() {
  // Hanya aktifkan Portal Lamaran Kerja saat dijalankan secara LOKAL di komputer Syabaab
  const isLocal = typeof window !== 'undefined' && (
    window.location.hostname === 'localhost' || 
    window.location.hostname === '127.0.0.1' ||
    import.meta.env.DEV
  );

  const [view, setView] = useState(() => (isLocal ? 'dashboard' : 'portfolio'));

  // JIKA AKSES LOKAL & VIEW DASHBOARD: Tampilkan Portal Lamaran Kerja Lengkap
  if (isLocal && view === 'dashboard') {
    return (
      <div className="font-sans text-slate-800 bg-background-gray min-h-screen flex items-center justify-center p-6">
        <div className="max-w-5xl w-full bg-white rounded-3xl shadow-xl p-10 border border-slate-100">
          <div className="text-center mb-12">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-700 font-semibold text-xs tracking-wider uppercase mb-2 border border-blue-200">
              Akses Lokal PC Pribadi
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">Portal Lamaran Kerja</h1>
            <p className="text-lg text-slate-500 font-medium">Syabaab Amin Amanullah, S.E.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            <button 
              onClick={() => setView('portfolio')}
              className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex flex-col items-center justify-center gap-4 p-8 bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-slate-200 rounded-2xl hover:scale-105 transition-all shadow-sm hover:shadow-md group"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform text-slate-700">
                <Layout size={32} />
              </div>
              <h2 className="text-xl font-bold text-slate-800 text-center">Portofolio Umum</h2>
              <p className="text-sm text-slate-500 text-center">Lihat tampilan portofolio publik</p>
            </button>

            <a 
              href="https://www.annsa.site/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex flex-col items-center justify-center gap-4 p-8 bg-gradient-to-br from-indigo-900 to-slate-900 border-2 border-indigo-700 rounded-2xl hover:scale-105 transition-all shadow-sm hover:shadow-md group cursor-pointer text-decoration-none relative overflow-hidden"
            >
              <div className="absolute top-3 right-3 flex items-center gap-1 bg-indigo-500/30 text-indigo-300 px-2.5 py-0.5 rounded-full text-[11px] font-semibold border border-indigo-400/30">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Live Web App
              </div>
              <div className="w-16 h-16 bg-indigo-800/60 rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform text-indigo-300 border border-indigo-600/40">
                <FlaskConical size={32} />
              </div>
              <h2 className="text-xl font-bold text-white text-center flex items-center gap-1.5">
                ANSA LIMS (Lab) <ExternalLink size={16} className="text-indigo-400" />
              </h2>
              <p className="text-sm text-indigo-200 text-center">Web App Geoteknik & Mekanika Tanah (annsa.site)</p>
            </a>

            <a 
              href={`${import.meta.env.BASE_URL}assets/docs/CV_Umum.html`}
              className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex flex-col items-center justify-center gap-4 p-8 bg-gradient-to-br from-slate-700 to-slate-900 border-2 border-slate-800 rounded-2xl hover:scale-105 transition-all shadow-sm hover:shadow-md group cursor-pointer text-decoration-none"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform text-slate-800">
                <FileText size={32} />
              </div>
              <h2 className="text-xl font-bold text-white text-center">CV Umum (Standar)</h2>
              <p className="text-sm text-slate-300 text-center">Format CV 1 halaman (bisa untuk melamar ke mana saja)</p>
            </a>

            <a 
              href={`${import.meta.env.BASE_URL}assets/docs/CV_Alcon.html`}
              className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex flex-col items-center justify-center gap-4 p-8 bg-gradient-to-br from-emerald-50 to-green-100 border-2 border-emerald-200 rounded-2xl hover:scale-105 transition-all shadow-sm hover:shadow-md group cursor-pointer text-decoration-none"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform text-emerald-800">
                <Briefcase size={32} />
              </div>
              <h2 className="text-xl font-bold text-slate-800 text-center">Lamaran ALCON</h2>
              <p className="text-sm text-slate-500 text-center">CV & Surat Lamaran (Posisi Accounting Staff)</p>
            </a>

            <a 
              href={`${import.meta.env.BASE_URL}assets/docs/CV_SwarnaEnviro.html`}
              className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex flex-col items-center justify-center gap-4 p-8 bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-100 rounded-2xl hover:scale-105 transition-all shadow-sm hover:shadow-md group cursor-pointer text-decoration-none"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform text-emerald-600">
                <Layout size={32} />
              </div>
              <h2 className="text-xl font-bold text-slate-800 text-center">Lamaran Swarna Enviro</h2>
              <p className="text-sm text-slate-500 text-center">CV & Surat Lamaran (Posisi Finance & People)</p>
            </a>

            <a 
              href={`${import.meta.env.BASE_URL}assets/docs/CV_AAJaya.html`}
              className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex flex-col items-center justify-center gap-4 p-8 bg-gradient-to-br from-rose-50 to-pink-50 border-2 border-rose-100 rounded-2xl hover:scale-105 transition-all shadow-sm hover:shadow-md group cursor-pointer text-decoration-none"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform text-rose-600">
                <Briefcase size={32} />
              </div>
              <h2 className="text-xl font-bold text-slate-800 text-center">Lamaran AA Jaya</h2>
              <p className="text-sm text-slate-500 text-center">CV & Surat Lamaran (Posisi Finance & Accounting)</p>
            </a>

            <a 
              href={`${import.meta.env.BASE_URL}assets/docs/CV_Eiger.html`}
              className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex flex-col items-center justify-center gap-4 p-8 bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-100 rounded-2xl hover:scale-105 transition-all shadow-sm hover:shadow-md group cursor-pointer text-decoration-none"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform text-blue-600">
                <Briefcase size={32} />
              </div>
              <h2 className="text-xl font-bold text-slate-800 text-center">Lamaran Eiger</h2>
              <p className="text-sm text-slate-500 text-center">CV & Surat Lamaran (Posisi Internal Audit)</p>
            </a>

            <a 
              href={`${import.meta.env.BASE_URL}assets/docs/CV_Stationery.html`}
              className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex flex-col items-center justify-center gap-4 p-8 bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-100 rounded-2xl hover:scale-105 transition-all shadow-sm hover:shadow-md group cursor-pointer text-decoration-none"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform text-emerald-600">
                <FileText size={32} />
              </div>
              <h2 className="text-xl font-bold text-slate-800 text-center">Lamaran Stationery</h2>
              <p className="text-sm text-slate-500 text-center">CV & Surat Lamaran (Posisi Finance)</p>
            </a>

            <a 
              href={`${import.meta.env.BASE_URL}assets/docs/CV_HuluBatuPerkasa.html`}
              className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex flex-col items-center justify-center gap-4 p-8 bg-gradient-to-br from-orange-50 to-amber-50 border-2 border-orange-100 rounded-2xl hover:scale-105 transition-all shadow-sm hover:shadow-md group cursor-pointer text-decoration-none"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform text-orange-600">
                <FileText size={32} />
              </div>
              <h2 className="text-xl font-bold text-slate-800 text-center">Lamaran Hulu Batu</h2>
              <p className="text-sm text-slate-500 text-center">CV & Surat Lamaran (Posisi Accounting)</p>
            </a>

            <a 
              href={`${import.meta.env.BASE_URL}assets/docs/CV_Hermina.html`}
              className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex flex-col items-center justify-center gap-4 p-8 bg-gradient-to-br from-purple-50 to-fuchsia-50 border-2 border-purple-100 rounded-2xl hover:scale-105 transition-all shadow-sm hover:shadow-md group cursor-pointer text-decoration-none"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform text-purple-600">
                <Briefcase size={32} />
              </div>
              <h2 className="text-xl font-bold text-slate-800 text-center">Lamaran Medika Loka</h2>
              <p className="text-sm text-slate-500 text-center">CV & Surat Lamaran (Posisi Keuangan)</p>
            </a>

            <a 
              href={`${import.meta.env.BASE_URL}assets/docs/CV_KalbeFarma.html`}
              className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex flex-col items-center justify-center gap-4 p-8 bg-gradient-to-br from-cyan-50 to-sky-50 border-2 border-cyan-100 rounded-2xl hover:scale-105 transition-all shadow-sm hover:shadow-md group cursor-pointer text-decoration-none"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform text-cyan-600">
                <FileText size={32} />
              </div>
              <h2 className="text-xl font-bold text-slate-800 text-center">Lamaran Kalbe Farma</h2>
              <p className="text-sm text-slate-500 text-center">CV & Surat Lamaran (Finance Analyst Staff)</p>
            </a>

            <a 
              href={`${import.meta.env.BASE_URL}assets/docs/CV_Arista.html`}
              className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex flex-col items-center justify-center gap-4 p-8 bg-gradient-to-br from-indigo-50 to-blue-50 border-2 border-indigo-100 rounded-2xl hover:scale-105 transition-all shadow-sm hover:shadow-md group cursor-pointer text-decoration-none"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform text-indigo-600">
                <Briefcase size={32} />
              </div>
              <h2 className="text-xl font-bold text-slate-800 text-center">Lamaran Arista Group</h2>
              <p className="text-sm text-slate-500 text-center">CV & Surat Lamaran (MT Koordinator Administrasi)</p>
            </a>

            <a 
              href={`${import.meta.env.BASE_URL}assets/docs/CV_K24.html`}
              className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex flex-col items-center justify-center gap-4 p-8 bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-100 rounded-2xl hover:scale-105 transition-all shadow-sm hover:shadow-md group cursor-pointer text-decoration-none"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform text-green-600">
                <FileText size={32} />
              </div>
              <h2 className="text-xl font-bold text-slate-800 text-center">Lamaran Apotek K-24</h2>
              <p className="text-sm text-slate-500 text-center">CV & Surat Lamaran (Posisi Keuangan & Staf Finance)</p>
            </a>

            <a 
              href={`${import.meta.env.BASE_URL}assets/docs/CV_NationalHospital.html`}
              className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex flex-col items-center justify-center gap-4 p-8 bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-100 rounded-2xl hover:scale-105 transition-all shadow-sm hover:shadow-md group cursor-pointer text-decoration-none"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform text-blue-600">
                <Briefcase size={32} />
              </div>
              <h2 className="text-xl font-bold text-slate-800 text-center">Lamaran National Hospital</h2>
              <p className="text-sm text-slate-500 text-center">CV & Surat Lamaran (Finance & Accounting)</p>
            </a>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-200">
            <h3 className="text-xl font-bold text-slate-800 mb-6 text-center">Dokumen Pendukung (Lampiran)</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { name: 'Ijazah S1', file: '03_Ijazah_S1_Syabaab.pdf' },
                { name: 'Transkrip Nilai', file: '04_Transkrip_Nilai_Syabaab.pdf' },
                { name: 'Kartu NPWP', file: '06_kartu npwp syabaab.pdf' },
                { name: 'KTP', file: '07_ktp syabaab.pdf' },
                { name: 'Kartu Keluarga', file: '08_kk_syabaab.pdf' }
              ].map((doc, i) => (
                <a 
                  key={i}
                  href={`${import.meta.env.BASE_URL}assets/docs/${doc.file}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-4 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm group text-decoration-none"
                >
                  <Download size={20} className="text-slate-400 group-hover:text-primary transition-colors" />
                  <span className="font-semibold text-slate-700 group-hover:text-primary transition-colors">{doc.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // TAMPILAN PORTOFOLIO UTAMA (Publik & saat beralih ke portofolio di lokal)
  return (
    <div className="font-sans text-slate-800 bg-background-gray min-h-screen relative">
      <Navbar />
      
      <main>
        <Hero />
        <Timeline />
        <ErpShowcase />
        <LimsShowcase />
      </main>

      <SkillsFooter />

      {/* Tombol kembali ke portal HANYA muncul saat dijalankan secara LOKAL */}
      {isLocal && (
        <button 
          onClick={() => setView('dashboard')}
          className="fixed bottom-6 left-6 z-50 flex items-center gap-2 bg-slate-900 text-white px-5 py-3 rounded-full shadow-lg hover:bg-slate-800 hover:scale-105 transition-all group border border-slate-700"
          title="Kembali ke Portal Lamaran Lokal"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-semibold text-xs">Kembali ke Portal Lamaran (Lokal)</span>
        </button>
      )}
    </div>
  );
}

export default App;
