import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const appSubItems = [
    { name: 'SEAM-Annsa (Garment ERP)', to: 'erp' },
    { name: 'TIMES LIMS (Geotechnical)', to: 'lims' },
    { name: 'LODE (Project Finance)', to: 'geofinance' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link 
            to="hero" 
            spy={true} 
            smooth={true} 
            offset={-64} 
            duration={500} 
            className="flex-shrink-0 font-black text-2xl text-slate-800 tracking-tighter cursor-pointer flex items-baseline hover:text-emerald-700 transition-colors"
          >
            Portofolio Syabaab<span className="text-emerald-500">.</span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={-64}
              duration={500}
              activeClass="!text-emerald-700 font-bold border-b-2 border-emerald-500"
              className="text-sm font-medium text-slate-500 hover:text-emerald-600 cursor-pointer transition-all py-2 border-b-2 border-transparent"
            >
              Profile
            </Link>

            <Link
              to="experience"
              spy={true}
              smooth={true}
              offset={-64}
              duration={500}
              activeClass="!text-emerald-700 font-bold border-b-2 border-emerald-500"
              className="text-sm font-medium text-slate-500 hover:text-emerald-600 cursor-pointer transition-all py-2 border-b-2 border-transparent"
            >
              Experience
            </Link>

            {/* Grouped App Portfolio Item */}
            <div className="relative group py-2">
              <Link
                to="erp"
                spy={true}
                smooth={true}
                offset={-64}
                duration={500}
                activeClass="!text-emerald-700 font-bold border-b-2 border-emerald-500"
                className="flex items-center gap-1 text-sm font-medium text-slate-500 hover:text-emerald-600 cursor-pointer transition-all py-2 border-b-2 border-transparent group-hover:text-emerald-600"
              >
                <span>App Portfolio</span>
                <ChevronDown size={14} className="transition-transform group-hover:rotate-180 text-slate-400 group-hover:text-emerald-600" />
              </Link>

              {/* Hover Dropdown */}
              <div className="absolute top-full left-0 w-60 bg-white rounded-xl shadow-xl border border-slate-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 mb-1">
                  Karya Sistem &amp; Aplikasi
                </div>
                {appSubItems.map((sub) => (
                  <Link
                    key={sub.to}
                    to={sub.to}
                    spy={true}
                    smooth={true}
                    offset={-64}
                    duration={500}
                    className="block px-3 py-2 text-xs font-semibold text-slate-600 hover:text-emerald-700 hover:bg-emerald-50 cursor-pointer transition-colors"
                  >
                    {sub.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={-64}
              duration={500}
              activeClass="!text-emerald-700 font-bold border-b-2 border-emerald-500"
              className="text-sm font-medium text-slate-500 hover:text-emerald-600 cursor-pointer transition-all py-2 border-b-2 border-transparent"
            >
              Skills
            </Link>

            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-64}
              duration={500}
              activeClass="!text-emerald-700 font-bold border-b-2 border-emerald-500"
              className="text-sm font-medium text-slate-500 hover:text-emerald-600 cursor-pointer transition-all py-2 border-b-2 border-transparent"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-primary focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={-64}
              duration={500}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-base font-medium text-slate-500 hover:text-emerald-600 hover:bg-slate-50 cursor-pointer transition-all"
            >
              Profile
            </Link>
            <Link
              to="experience"
              spy={true}
              smooth={true}
              offset={-64}
              duration={500}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-base font-medium text-slate-500 hover:text-emerald-600 hover:bg-slate-50 cursor-pointer transition-all"
            >
              Experience
            </Link>
            
            {/* Grouped App Portfolio in mobile */}
            <div className="pt-2 pb-1 border-y border-slate-100 my-1">
              <Link
                to="erp"
                spy={true}
                smooth={true}
                offset={-64}
                duration={500}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-1.5 text-base font-bold text-emerald-700 hover:bg-emerald-50 cursor-pointer"
              >
                App Portfolio
              </Link>
              <div className="pl-6 space-y-1 mt-1">
                {appSubItems.map((sub) => (
                  <Link
                    key={sub.to}
                    to={sub.to}
                    spy={true}
                    smooth={true}
                    offset={-64}
                    duration={500}
                    onClick={() => setIsOpen(false)}
                    className="block py-1 text-sm text-slate-500 hover:text-emerald-600 cursor-pointer"
                  >
                    • {sub.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={-64}
              duration={500}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-base font-medium text-slate-500 hover:text-emerald-600 hover:bg-slate-50 cursor-pointer transition-all"
            >
              Skills
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-64}
              duration={500}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-base font-medium text-slate-500 hover:text-emerald-600 hover:bg-slate-50 cursor-pointer transition-all"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
