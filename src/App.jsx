import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import ErpShowcase from './components/ErpShowcase';

import SkillsFooter from './components/SkillsFooter';
import { FileText } from 'lucide-react';

function App() {
  return (
    <div className="font-sans text-slate-800 bg-background-gray min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        <Timeline />
        <ErpShowcase />

      </main>

      <SkillsFooter />

      {/* Floating Action Button for CV Download */}
      <a 
        href="/assets/docs/CV_Syabaab_Amin_Amanullah.html" 
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-primary text-white px-5 py-3 rounded-full shadow-lg hover:bg-primary/90 hover:scale-105 transition-all group border-2 border-white/20"
      >
        <FileText size={20} className="group-hover:-translate-y-1 transition-transform" />
        <span className="font-semibold text-sm hidden md:inline">Lihat CV</span>
      </a>
    </div>
  );
}

export default App;
