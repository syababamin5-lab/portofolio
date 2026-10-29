import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ShieldCheck, TrendingUp, Cpu, Database, Briefcase } from 'lucide-react';
import { Link } from 'react-scroll';

const badges = [
  { name: 'Financial Reporting & Cycle', icon: Briefcase },
  { name: 'Cash Flow & Reconciliation', icon: TrendingUp },
  { name: 'Accounting System Digitalization', icon: Database },
  { name: 'Internal Audit & Controls', icon: ShieldCheck },
  { name: 'Business Process Analysis', icon: Cpu },
];

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-background-gray overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-[-10%] left-[-5%] w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* Text Content */}
          <div className="w-full lg:w-3/5 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-accent/10 text-accent font-medium text-sm mb-6 border border-accent/20">
                Available for Opportunities
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight mb-4">
                SYABAAB AMIN AMANULLAH, <span className="text-primary font-serif italic">S.E.</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-slate-600 font-semibold mb-6 flex flex-wrap items-center justify-center lg:justify-start gap-2">
                <span>Finance &amp; Accounting Professional</span>
                <span className="hidden sm:inline text-slate-300 font-normal">|</span>
                <span className="text-accent font-medium">Accounting Systems &amp; Automation</span>
              </h2>
              <p className="text-base md:text-lg text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 text-justify lg:text-left">
                Sarjana Akuntansi (S.E.) dengan keahlian mendalam dalam <span className="font-semibold text-slate-800">siklus akuntansi penuh, rekonsiliasi kas/bank, penyusunan laporan keuangan periodik, dan tata kelola anggaran</span>. Berpengalaman memastikan akurasi data finansial, kepatuhan prosedur, serta manajemen operasional harian. Memiliki nilai tambah strategis dalam menginisiasi digitalisasi proses bisnis dan sistem akuntansi (ERP) agar operasional keuangan berjalan efisien, terstruktur, dan <span className="font-semibold text-primary">akuntabel</span>.
              </p>
            </motion.div>

            <motion.div 
              className="flex flex-wrap justify-center lg:justify-start gap-3 mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {badges.map((badge, idx) => {
                const Icon = badge.icon;
                return (
                  <span key={idx} className="flex items-center gap-2 bg-white border border-slate-200 shadow-sm px-4 py-2 rounded-lg text-sm font-medium text-slate-700 hover:border-accent hover:text-accent transition-colors">
                    <Icon size={16} className="text-primary" />
                    {badge.name}
                  </span>
                );
              })}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link
                to="experience"
                spy={true}
                smooth={true}
                offset={-64}
                duration={500}
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:-translate-y-1 cursor-pointer"
              >
                Jelajahi Profil &amp; Pengalaman
                <ArrowDown size={20} className="animate-bounce" />
              </Link>
            </motion.div>
          </div>

          {/* Photo Content */}
          <div className="w-full lg:w-2/5 flex justify-center lg:justify-end">
            <motion.div 
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="relative"
            >
              {/* Elegant glow frame */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-primary/15 via-emerald-100 to-sky-100 rounded-3xl blur-md opacity-80"></div>
              
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-92 lg:h-92 rounded-3xl overflow-hidden border-4 border-white shadow-xl bg-slate-50 flex items-center justify-center">
                <img 
                  src={`${import.meta.env.BASE_URL}assets/img/foto_syabaab.png`} 
                  alt="Syabaab Amin Amanullah, S.E." 
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Floating Professional Badge */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-sm border border-slate-200/90 shadow-md px-4 py-2 rounded-full flex items-center gap-2 whitespace-nowrap text-xs font-semibold text-slate-800">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Sarjana Akuntansi • IPK 3.72
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
