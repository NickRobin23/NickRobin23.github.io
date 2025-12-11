import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import mspLogo from '../assets/msp.png';

interface NavigationProps {
  scrolled: boolean;
}

export function Navigation({ scrolled }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#stats', label: 'Stats' },
    { href: '#about', label: 'About' },
    { href: '#programs', label: 'Programs' },
    { href: '#practice', label: 'Practice' },
    { href: '#contact', label: 'Contact' }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (location.pathname !== '/') {
      navigate('/' + href);
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg border-b-4 border-yellow-500' : 'bg-slate-900/90 backdrop-blur-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <button
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 sm:space-x-4 hover:opacity-80 transition-opacity"
          >
            <img
              src={mspLogo}
              alt="Massachusetts State Police Logo"
              className="h-10 sm:h-14 w-auto"
            />
            <div>
              <span className="text-sm sm:text-lg font-bold text-white block leading-tight">Massachusetts State Police</span>
              <span className="text-[10px] sm:text-xs text-yellow-400 font-semibold tracking-wider">COMMUNITY POLICING</span>
            </div>
          </button>

          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-white hover:text-yellow-400 transition-colors font-semibold cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900/98 backdrop-blur-sm border-t border-slate-800">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block text-white hover:text-yellow-400 transition-colors font-semibold py-2 px-4 rounded hover:bg-slate-800 cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
