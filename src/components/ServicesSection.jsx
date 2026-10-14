import React from 'react';
import { Smartphone, BatteryCharging, Cpu, Bike, ArrowUpRight } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      num: '01',
      title: 'Troca de Tela & Display',
      desc: 'Substituição expressa de telas OLED, AMOLED e LCD com calibração de touch e vedação de fábrica.',
      time: '40 a 60 min',
      icon: Smartphone
    },
    {
      num: '02',
      title: 'Baterias de Alta Autonomia',
      desc: 'Células de lítio homologadas que devolvem 100% da autonomia e estabilidade do seu smartphone.',
      time: '30 a 50 min',
      icon: BatteryCharging
    },
    {
      num: '03',
      title: 'Reparo de Placa & Microsoldagem',
      desc: 'Recuperação avançada em bancada com microscópio: curto-circuito, setor de áudio e desoxidação química.',
      time: '24 a 48h',
      icon: Cpu
    },
    {
      num: '04',
      title: 'Motos & Patinetes Elétricos',
      desc: 'Oficina especializada: revisão geral, balanceamento de bateria de lítio, regulagem de freios e controladora.',
      time: 'Revisão ágil',
      icon: Bike
    }
  ];

  return (
    <section id="servicos" className="py-20 md:py-28 bg-[#faf8f5]">
      <div className="max-w-[1300px] mx-auto px-5 sm:px-8">
        
        {/* Minimalist Section Header */}
        <div className="max-w-2xl mb-14 space-y-3">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-amber-800 font-bold block">
            02 · Bancada Especializada
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#0d0d0d]">
            Serviços com precisão, <br />
            <span className="italic font-light text-[#737373]">do diagnóstico à entrega.</span>
          </h2>
        </div>

        {/* 4 Clean Minimalist Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item) => {
            const Icon = item.icon;
            const waUrl = `https://wa.me/5561991696088?text=${encodeURIComponent(`Olá! Gostaria de um orçamento para: ${item.title}`)}`;
            return (
              <div
                key={item.num}
                className="bg-white p-7 sm:p-8 rounded-3xl border border-[#0d0d0d]/8 flex flex-col justify-between hover:border-amber-600/40 hover:shadow-lg transition duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-xs font-bold text-[#8c8c8c] group-hover:text-amber-800 transition">
                      {item.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#f5f3ee] flex items-center justify-center text-amber-800">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-lg text-[#0d0d0d] mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#595959] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#0d0d0d]/6 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[#8c8c8c]">
                    {item.time}
                  </span>
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-bold text-amber-800 hover:text-black inline-flex items-center gap-1 transition"
                  >
                    <span>Orçamento</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
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
