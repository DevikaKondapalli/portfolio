import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'AI Integration', href: '#ai-for-analytics' },
    { label: 'Education', href: '#education' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'py-4 bg-[#0B0E14]/80 border-b border-white/[0.06] backdrop-blur-md shadow-lg shadow-black/20' 
        : 'py-6 bg-transparent'
    }`}>
      <div className="max-w-[1080px] mx-auto px-6 flex items-center justify-between">
        {/* Logo/Name */}
        <a href="#hero" className="font-mono text-lg font-bold tracking-tight text-textPrimary hover:text-accentTeal transition-colors">
          DEVIKA.K
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href} 
              className="text-sm font-medium text-textSecondary hover:text-textPrimary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <a 
            href="#contact" 
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold font-mono tracking-wide uppercase border border-accentTeal/30 text-accentTeal hover:bg-accentTeal/10 rounded transition-all duration-300"
          >
            Contact <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-1 text-textSecondary hover:text-textPrimary transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#0B0E14]/95 border-b border-white/[0.06] backdrop-blur-lg py-6 px-6 flex flex-col gap-5 animate-fade-in shadow-2xl">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href} 
              onClick={() => setIsMenuOpen(false)}
              className="text-base font-medium text-textSecondary hover:text-textPrimary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a 
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="w-full flex items-center justify-center gap-1.5 px-4 py-2.5 text-sm font-semibold font-mono tracking-wide uppercase border border-accentTeal/30 text-accentTeal hover:bg-accentTeal/10 rounded transition-all duration-300"
          >
            Contact <ArrowUpRight size={16} />
          </a>
        </div>
      )}
    </nav>
  );
}
