import React from 'react';
import { ArrowUpRight, Phone, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 bg-[#f5f3ee] overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-5 sm:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Bold OpenMac Editorial Headline */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8">
            
            <div className="inline-flex items-center gap-2 text-xs uppercase font-mono tracking-[0.2em] text-amber-800 font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
              Bancada Especializada · Itapoã - DF
            </div>

            <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl xl:text-7xl leading-[1.04] tracking-tight text-[#0d0d0d]">
              Seu eletrônico <span className="italic font-light text-[#737373]">como novo.</span><br />
              Sua moto elétrica <span className="italic font-light copper-text-gradient">na pista.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#525252] max-w-xl leading-relaxed font-sans">
              Conserto ágil de celulares (Apple, Samsung, Xiaomi, Motorola), manutenção e venda de motos elétricas, e vitrine selecionada de acessórios. Diagnóstico gratuito e garantia oficial.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href="https://wa.me/5561991696088?text=Ol%C3%A1%2C%20gostaria%20de%20um%20diagn%C3%B3stico%20gratuito%20na%20Digital%20Eletr%C3%B4nicos!"
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 rounded-full copper-gradient text-black font-bold text-sm inline-flex items-center justify-center gap-2 hover:brightness-105 active:scale-95 transition shadow-sm"
              >
                <span>Falar no WhatsApp</span>
                <ArrowUpRight className="w-4 h-4 text-black stroke-[2.5]" />
              </a>

              <a
                href="#rastrear"
                className="px-7 py-4 rounded-full border border-[#0d0d0d]/15 bg-white hover:bg-[#ede9df] text-sm font-semibold text-[#0d0d0d] inline-flex items-center justify-center gap-2 transition"
              >
                <span>Consultar Ordem de Serviço</span>
              </a>
            </div>

            {/* Clean Minimalist Guarantees */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-[#525252]">
              <span className="inline-flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                Diagnóstico 100% gratuito
              </span>
              <span className="inline-flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-700" />
                Telas e baterias em até 40 min
              </span>
              <span className="inline-flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                Até 180 dias de garantia
              </span>
            </div>

          </div>

          {/* Right Column: Clean Visual Showcase */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl border border-[#0d0d0d]/10 bg-white p-8 sm:p-10 shadow-lg text-center flex flex-col items-center">
              
              <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full p-2.5 border-2 border-amber-600/30 bg-black shadow-xl overflow-hidden mb-6">
                <img 
                  src="/images/logo.png" 
                  alt="DIGITAL Eletrônicos Logo" 
                  className="w-full h-full object-contain rounded-full"
                />
              </div>

              <h2 className="font-display font-extrabold text-2xl text-[#0d0d0d]">
                DIGITAL <span className="copper-text-gradient">ELETRÔNICOS</span>
              </h2>

              <p className="text-xs text-[#737373] mt-1 font-medium">
                Assistência Técnica Especializada &bull; Motos Elétricas &bull; Acessórios
              </p>

              <div className="mt-6 pt-5 border-t border-[#0d0d0d]/8 w-full flex items-center justify-between text-xs text-[#525252]">
                <span className="font-mono text-amber-800 font-bold">LOJA FÍSICA NO ITAPOÃ</span>
                <span className="text-[#0d0d0d] font-bold">(61) 99169-6088</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
