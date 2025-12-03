import React, { useState, useEffect } from 'react';
import { Menu, X, Dumbbell } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Concept', href: '#concept' },
    { name: 'Features', href: '#features' },
    { name: 'Message', href: '#message' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-950/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 group">
          <div className="bg-amber-500 p-1.5 rounded-lg group-hover:bg-amber-400 transition-colors">
            <Dumbbell className="w-6 h-6 text-slate-950" />
          </div>
          <span className="text-2xl font-serif font-bold tracking-wider text-white">
            PAIR FIT
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-amber-500 transition-colors uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#cta"
            className="px-6 py-2 bg-amber-600 hover:bg-amber-500 text-white text-sm font-bold rounded-full transition-all transform hover:scale-105"
          >
            無料カウンセリング
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-slate-900 border-t border-slate-800 p-6 md:hidden flex flex-col gap-4 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-slate-300 hover:text-amber-500 font-medium py-2 border-b border-slate-800"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#cta"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-4 w-full text-center px-6 py-3 bg-amber-600 text-white font-bold rounded-lg"
          >
            無料カウンセリング
          </a>
        </div>
      )}
    </header>
  );
};