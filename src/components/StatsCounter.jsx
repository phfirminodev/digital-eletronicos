import React from 'react';

export default function StatsCounter() {
  const stats = [
    { value: '+10 Mil', label: 'Aparelhos Reparados' },
    { value: '40 Min', label: 'Troca Expressa de Tela' },
    { value: '180 Dias', label: 'Garantia Oficial' },
    { value: '0 R$', label: 'Diagnóstico Sem Custo' }
  ];

  return (
    <section className="py-12 bg-[#ede9df] border-y border-[#0d0d0d]/8">
      <div className="max-w-[1300px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
          {stats.map((stat, i) => (
            <div key={i} className="space-y-1">
              <div className="font-display font-extrabold text-3xl sm:text-4xl text-[#0d0d0d]">
                {stat.value}
              </div>
              <div className="text-xs uppercase tracking-wider font-bold text-amber-900">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
