import React, { useState } from 'react';
import { Phone, X, MessageCircle } from 'lucide-react';

export default function WhatsAppFloatingButton() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Tooltip callout (Clean Light Style) */}
      {showTooltip && (
        <div className="mb-2 relative bg-white border border-amber-500/40 p-3.5 rounded-2xl shadow-2xl max-w-xs animate-in fade-in slide-in-from-bottom-2 duration-300 text-[#0d0d0d]">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-1.5 right-1.5 text-[#8c8c8c] hover:text-black p-1"
            title="Fechar"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
            <span className="text-[11px] font-bold text-emerald-800">
              Técnico Online no Itapoã
            </span>
          </div>
          
          <p className="text-xs text-[#525252] pr-3">
            Precisa de orçamento para seu celular ou moto elétrica? Fale conosco agora!
          </p>
        </div>
      )}

      {/* Main Floating Button */}
      <a
        href="https://wa.me/5561991696088?text=Ol%C3%A1%2C%20estou%20no%20site%20da%20Digital%20Eletr%C3%B4nicos%20e%20gostaria%20de%20atendimento!"
        target="_blank"
        rel="noreferrer"
        className="relative group p-4 rounded-full bg-[#25D366] text-black shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center"
        aria-label="Abrir WhatsApp da Digital Eletrônicos"
      >
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping group-hover:opacity-50"></span>
        <Phone className="w-6 h-6 fill-black text-black relative z-10" />
      </a>
    </div>
  );
}
