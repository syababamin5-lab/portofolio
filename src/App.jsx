import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import ErpShowcase from './components/ErpShowcase';
import LimsShowcase from './components/LimsShowcase';
import SkillsFooter from './components/SkillsFooter';

function App() {
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
    </div>
  );
}

export default App;
