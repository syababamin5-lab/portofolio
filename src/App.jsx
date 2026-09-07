import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import ErpShowcase from './components/ErpShowcase';
import SkillsFooter from './components/SkillsFooter';

function App() {
  return (
    <div className="font-sans text-slate-800 bg-background-gray min-h-screen relative">
      <Navbar />
      
      <main>
        <Hero />
        <Timeline />
        <ErpShowcase />
      </main>

      <SkillsFooter />
    </div>
  );
}

export default App;
