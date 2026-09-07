import React from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems = [
    { name: 'Profile', to: 'hero' },
    { name: 'Experience', to: 'experience' },
    { name: 'ERP System', to: 'erp' },
    { name: 'ANSA LIMS', to: 'lims' },
    { name: 'Skills', to: 'skills' },
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
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-64}
                duration={500}
                activeClass="!text-emerald-700 font-bold border-b-2 border-emerald-500"
                className="text-sm font-medium text-slate-500 hover:text-emerald-600 cursor-pointer transition-all py-2 border-b-2 border-transparent"
              >
                {item.name}
              </Link>
            ))}
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
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-64}
                duration={500}
                onClick={() => setIsOpen(false)}
                activeClass="!text-emerald-700 font-bold bg-emerald-50 border-emerald-500"
                className="block px-3 py-2 text-base font-medium text-slate-500 hover:text-emerald-600 hover:bg-slate-50 cursor-pointer transition-all border-l-4 border-transparent"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
