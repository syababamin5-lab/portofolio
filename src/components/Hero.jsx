import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ShieldCheck, TrendingUp, Cpu, Database, Briefcase } from 'lucide-react';
import { Link } from 'react-scroll';

const badges = [
  { name: 'Internal Audit', icon: ShieldCheck },
  { name: 'Finance & Accounting', icon: Briefcase },
  { name: 'Internal Control', icon: ShieldCheck },
  { name: 'Business Process Improvement', icon: TrendingUp },
  { name: 'ERP Digitalization', icon: Cpu },
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
              <h2 className="text-xl md:text-2xl text-slate-600 font-medium mb-8">
                Internal Auditor & Business Process Analyst Portfolio
              </h2>
              <p className="text-base md:text-lg text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Sarjana Akuntansi dengan pengalaman mendalam dalam pengelolaan keuangan operasional, 
                pengendalian mutu data laboratorium, verifikasi dokumen kepatuhan, serta perancangan 
                proses bisnis berbasis ERP. Berfokus pada penguatan pengendalian internal 
                <span className="font-semibold text-primary"> (Internal Control) </span> 
                dan digitalisasi sistem untuk meminimalkan risiko operasional.
              </p>
            </motion.div>

            <motion.div 
              className="flex flex-wrap justify-center lg:justify-start gap-3 mb-12"
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
                Jelajahi Portfolio
                <ArrowDown size={20} className="animate-bounce" />
              </Link>
            </motion.div>
          </div>

          {/* Photo Content */}
          <div className="w-full lg:w-2/5 flex justify-center lg:justify-end">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="relative"
            >
              {/* Photo Frame Styling */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-3xl transform rotate-3 scale-105 opacity-20 blur-lg"></div>
              <div className="absolute inset-0 border-2 border-primary/20 rounded-3xl transform -rotate-3 scale-105"></div>
              
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden border-4 border-white shadow-2xl bg-white flex items-center justify-center">
                <img 
                  src="/assets/img/foto_syabaab.png" 
                  alt="Syabaab Amin Amanullah" 
                  className="object-cover w-full h-full"
                />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
