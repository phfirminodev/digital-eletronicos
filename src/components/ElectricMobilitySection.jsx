import React from 'react';
import { Bike, ArrowUpRight, Zap, ShieldCheck } from 'lucide-react';

export default function ElectricMobilitySection() {
  const waUrl = "https://wa.me/5561991696088?text=Olá!%20Gostaria%20de%20saber%20valores%20e%20modelos%20de%20motos%20elétricas%20disponíveis.";

  return (
    <section id="motos-eletricas" className="py-20 md:py-28 bg-[#f5f3ee] border-b border-[#0d0d0d]/8">
      <div className="max-w-[1300px] mx-auto px-5 sm:px-8">
        
        <div className="bg-white rounded-3xl border border-[#0d0d0d]/10 overflow-hidden shadow-sm grid lg:grid-cols-12 items-center">
          
          {/* Left: Clean Photo */}
          <div className="lg:col-span-6 h-full min-h-[340px] bg-black relative">
            <img 
              src="/images/store-showcase.jpg" 
              alt="Motos Elétricas Digital Eletrônicos" 
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-[#0d0d0d] flex items-center gap-1.5 shadow-sm">
              <Bike className="w-3.5 h-3.5 text-amber-800" />
              Showroom no Itapoã - DF
            </div>
          </div>

          {/* Right: Minimalist Content */}
          <div className="lg:col-span-6 p-8 sm:p-12 space-y-6">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-amber-800 font-bold block">
              03 · Eletromobilidade
            </span>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#0d0d0d] tracking-tight leading-tight">
              Motos elétricas no DF: <br />
              <span className="italic font-light copper-text-gradient">liberdade com zero combustível.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#525252] leading-relaxed">
              Economia real todo mês. Scooters com bateria de lítio removível para recarregar em qualquer tomada de casa ou trabalho, zero IPVA e assistência técnica de perto na loja.
            </p>

            {/* 3 Clean Minimal Metrics */}
            <div className="grid grid-cols-3 gap-3 pt-2 border-t border-[#0d0d0d]/8">
              <div>
                <span className="text-[11px] text-[#737373] block">Velocidade</span>
                <span className="font-display font-bold text-base text-[#0d0d0d]">Até 35 km/h</span>
              </div>
              <div>
                <span className="text-[11px] text-[#737373] block">Autonomia</span>
                <span className="font-display font-bold text-base text-amber-800">Até 45 km</span>
              </div>
              <div>
                <span className="text-[11px] text-[#737373] block">Recarga</span>
                <span className="font-display font-bold text-base text-[#0d0d0d]">110V / 220V</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={waUrl}
                target="_blank"
                rel="noreferrer"
                className="px-7 py-3.5 rounded-full copper-gradient text-black font-bold text-xs sm:text-sm inline-flex items-center gap-2 hover:brightness-105 transition shadow-sm"
              >
                <span>Consultar Modelos & Parcelamento</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
