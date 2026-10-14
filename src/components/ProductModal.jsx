import React from 'react';
import { X, Check, ArrowUpRight, Phone, ShieldCheck, Sparkles } from 'lucide-react';

export default function ProductModal({ product, onClose }) {
  if (!product) return null;

  const getWhatsAppBuyUrl = () => {
    const text = encodeURIComponent(`Olá! Tenho interesse no produto: "${product.name}" que vi no site da Digital Eletrônicos. Ainda está disponível na loja?`);
    return `https://wa.me/5561991696088?text=${text}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-white border border-[#0d0d0d]/10 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh] text-[#0d0d0d]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full border border-[#0d0d0d]/10 bg-[#f5f3ee] text-[#595959] hover:text-black hover:bg-[#eae6dc] transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2 mb-3">
          <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${product.badgeColor || 'bg-amber-500/15 text-amber-800 border-amber-500/30'}`}>
            {product.badge}
          </span>
          <span className="text-xs text-[#595959] font-medium">
            {product.categoryLabel}
          </span>
        </div>

        <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#0d0d0d] mb-2">
          {product.name}
        </h3>

        {/* Price & Payment Note */}
        <div className="flex items-baseline gap-3 mb-6 p-4 rounded-2xl bg-[#faf8f4] border border-[#0d0d0d]/8">
          <div>
            <div className="text-xs text-[#737373] font-medium">Condição Comercial</div>
            <div className="font-display font-bold text-2xl text-amber-800">
              {product.price}
            </div>
          </div>
          <span className="text-xs text-[#525252]">
            {product.priceNote}
          </span>
        </div>

        {/* Product Photo Showcase */}
        <div className="rounded-2xl overflow-hidden border border-[#0d0d0d]/10 aspect-video mb-6 bg-black">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Description */}
        <div className="space-y-4 mb-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-amber-800 font-mono">
            Sobre o Produto
          </h4>
          <p className="text-sm text-[#525252] leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Features Checklist */}
        <div className="space-y-3 mb-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-amber-800 font-mono">
            Destaques e Recursos
          </h4>
          <ul className="grid sm:grid-cols-2 gap-2">
            {product.features.map((feat, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-[#262626]">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technical Specs Table */}
        {product.specs && (
          <div className="mb-8">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-800 font-mono mb-3">
              Ficha Técnica
            </h4>
            <div className="rounded-xl border border-[#0d0d0d]/10 divide-y divide-[#0d0d0d]/8 text-xs overflow-hidden">
              {Object.entries(product.specs).map(([key, val]) => (
                <div key={key} className="flex justify-between p-3 bg-[#faf8f4]">
                  <span className="text-[#595959]">{key}</span>
                  <span className="font-semibold text-[#0d0d0d] text-right">{val}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-[#0d0d0d]/10">
          <a
            href={getWhatsAppBuyUrl()}
            target="_blank"
            rel="noreferrer"
            className="flex-1 py-3.5 px-6 rounded-full copper-gradient text-black font-bold text-sm inline-flex items-center justify-center gap-2 hover:brightness-105 transition shadow-md shadow-amber-500/25"
          >
            <Phone className="w-4 h-4 fill-black" />
            <span>Consultar Disponibilidade no WhatsApp</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </a>

          <button
            onClick={onClose}
            className="py-3.5 px-6 rounded-full border border-[#0d0d0d]/12 bg-[#f5f3ee] text-sm font-semibold text-[#262626] hover:bg-[#ede9df] transition"
          >
            Fechar
          </button>
        </div>

      </div>
    </div>
  );
}
