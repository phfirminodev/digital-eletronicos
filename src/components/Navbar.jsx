import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowUpRight, Search } from 'lucide-react';
import InstagramIcon from './icons/InstagramIcon';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Serviços', href: '#servicos' },
    { label: 'Motos Elétricas', href: '#motos-eletricas' },
    { label: 'Produtos', href: '#produtos' },
    { label: 'Rastrear OS', href: '#rastrear', isSpecial: true },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#f5f3ee]/95 backdrop-blur-md border-b border-[#0d0d0d]/10 py-3.5 shadow-[0_2px_12px_rgba(0,0,0,0.03)]' 
        : 'bg-[#f5f3ee] border-b border-[#0d0d0d]/6 py-4'
    }`}>
      <div className="max-w-[1300px] mx-auto px-5 sm:px-8 flex items-center justify-between">
        
        {/* Brand Logo & Name */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full overflow-hidden p-0.5 border border-amber-600/30 bg-black group-hover:border-amber-600 transition">
            <img 
              src="/images/logo.png" 
              alt="DIGITAL Eletrônicos" 
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-extrabold text-base tracking-tight text-[#0d0d0d]">
              DIGITAL <span className="font-light text-[#737373]">Eletrônicos</span>
            </span>
            <span className="text-[10px] uppercase font-mono tracking-wider text-amber-800 font-semibold">
              Itapoã · Brasília-DF
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links (Clean & Spacious) */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-xs uppercase tracking-wider font-semibold transition ${
                item.isSpecial
                  ? 'inline-flex items-center gap-1.5 text-amber-800 hover:text-amber-950 font-bold'
                  : 'text-[#595959] hover:text-[#0d0d0d]'
              }`}
            >
              {item.isSpecial && <span className="w-1.5 h-1.5 rounded-full bg-amber-600 animate-pulse"></span>}
              {item.label}
            </a>
          ))}
        </nav>

        {/* WhatsApp Single Minimal Action */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://wa.me/5561991696088?text=Ol%C3%A1!%20Gostaria%20de%20um%20or%C3%A7amento%20na%20Digital%20Eletr%C3%B4nicos."
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 rounded-full copper-gradient text-black font-bold text-xs inline-flex items-center gap-2 hover:brightness-105 active:scale-95 transition shadow-sm"
          >
            <Phone className="w-3.5 h-3.5 fill-black" />
            <span>(61) 99169-6088</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg border border-[#0d0d0d]/10 bg-white text-[#262626]"
          aria-label="Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5 text-amber-700" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#0d0d0d]/10 px-6 py-6 space-y-4 shadow-lg animate-in fade-in duration-200">
          <div className="flex flex-col gap-3">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold text-[#262626] hover:text-amber-800 py-1 flex items-center justify-between"
              >
                <span>{item.label}</span>
                <ArrowUpRight className="w-4 h-4 text-[#a3a3a3]" />
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-[#0d0d0d]/8 space-y-2">
            <a
              href="https://wa.me/5561991696088"
              target="_blank"
              rel="noreferrer"
              className="w-full py-3 rounded-full copper-gradient text-black font-bold text-xs flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 fill-black" />
              <span>Chamar no WhatsApp (61 99169-6088)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
