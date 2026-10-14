import React from 'react';
import { ArrowUpRight, Phone } from 'lucide-react';
import { PRODUCTS_DATA } from '../data/products';

export default function CatalogSection() {
  // Show 4 top featured items for pure minimalism
  const featured = PRODUCTS_DATA.slice(0, 4);

  return (
    <section id="produtos" className="py-20 md:py-28 bg-[#faf8f5]">
      <div className="max-w-[1300px] mx-auto px-5 sm:px-8">
        
        {/* Minimalist Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-amber-800 font-bold block mb-2">
              04 · Vitrine & Acessórios
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#0d0d0d] tracking-tight">
              Destaques na loja física
            </h2>
          </div>
          <a
            href="https://wa.me/5561991696088?text=Olá!%20Gostaria%20de%20consultar%20o%20catálogo%20completo%20de%20acessórios%20e%20produtos."
            target="_blank"
            rel="noreferrer"
            className="text-xs uppercase tracking-wider font-bold text-amber-800 hover:text-black inline-flex items-center gap-1.5 transition"
          >
            <span>Ver Catálogo Completo no WhatsApp</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* 4 Clean Minimal Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((prod) => {
            const waBuyUrl = `https://wa.me/5561991696088?text=${encodeURIComponent(`Olá! Tenho interesse no produto: ${prod.name}. Está disponível na loja?`)}`;
            return (
              <div 
                key={prod.id}
                className="bg-white rounded-3xl border border-[#0d0d0d]/8 overflow-hidden flex flex-col justify-between hover:shadow-lg hover:border-amber-600/30 transition duration-300"
              >
                <div>
                  <div className="aspect-[4/3] bg-black overflow-hidden relative">
                    <img 
                      src={prod.image} 
                      alt={prod.name} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-white/95 px-2.5 py-1 rounded-full text-[10px] font-bold text-amber-900 border border-black/10">
                      {prod.badge}
                    </div>
                  </div>

                  <div className="p-6 space-y-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#8c8c8c] block font-semibold">
                      {prod.categoryLabel}
                    </span>
                    <h3 className="font-display font-bold text-base text-[#0d0d0d] line-clamp-2">
                      {prod.name}
                    </h3>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-[#0d0d0d]/6 mt-auto">
                  <div className="pt-3 mb-3">
                    <div className="font-display font-bold text-base text-amber-800">
                      {prod.price}
                    </div>
                  </div>

                  <a
                    href={waBuyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-2.5 rounded-full copper-gradient text-black font-bold text-xs inline-flex items-center justify-center gap-1.5 hover:brightness-105 transition"
                  >
                    <Phone className="w-3.5 h-3.5 fill-black" />
                    <span>Pedir no WhatsApp</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
