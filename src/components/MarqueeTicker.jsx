import React from 'react';

export default function MarqueeTicker() {
  const items = [
    'Motos & Patinetes Elétricos',
    'Troca de Tela em 40 Minutos',
    'Baterias Homologadas',
    'Diagnóstico 100% Gratuito',
    'Reparo de Placa & Microsoldagem',
    'Caixas de Som FAM & Áudio',
    'Carregadores Turbo GaN 65W',
    'Garantia Oficial de até 180 Dias',
    'Itapoã · Brasília - DF',
    'Desoxidação Ultrassônica',
    'Películas Cerâmica 9D & Cases'
  ];

  return (
    <div className="border-y border-[#0d0d0d]/10 bg-[#ede9df] py-4 overflow-hidden select-none">
      <div className="animate-marquee flex items-center">
        {[...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center gap-8 md:gap-12 px-4 md:px-6 shrink-0">
            <span className="font-display font-semibold text-xs sm:text-sm tracking-wider uppercase text-[#262626] hover:text-amber-800 transition cursor-default">
              {item}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
          </div>
        ))}
      </div>
    </div>
  );
}
