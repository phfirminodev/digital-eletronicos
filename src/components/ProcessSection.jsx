import React from 'react';

export default function ProcessSection() {
  const steps = [
    {
      step: '01',
      title: 'Diagnóstico 100% Gratuito',
      desc: 'Traga seu aparelho ou moto elétrica na loja física no Itapoã. Analisamos detalhadamente sem nenhuma cobrança de laudo.'
    },
    {
      step: '02',
      title: 'Orçamento Claro e Sem Pressão',
      desc: 'Passamos o valor exato de peças e mão de obra pelo WhatsApp ou no balcão. Você só autoriza se fizer sentido para você.'
    },
    {
      step: '03',
      title: 'Reparo com Peças Testadas',
      desc: 'Bancada profissional, microscópio térmico e peças de alta qualidade. A maioria das trocas de tela fica pronta em até 40 minutos.'
    },
    {
      step: '04',
      title: 'Entrega com Garantia Oficial',
      desc: 'Seu equipamento é testado em um rigoroso checklist antes da entrega, com certificado de garantia de até 180 dias em nota.'
    }
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-[#f5f3ee] relative border-b border-[#0d0d0d]/8">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Header (OpenMac style 04 Processo) */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="text-xs uppercase tracking-[0.2em] text-amber-800 font-bold font-mono">
            07 · Metodologia de Trabalho
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0d0d0d] tracking-tight leading-[1.08]">
            Simples, transparente, <br />
            <span className="italic font-light copper-text-gradient">do começo ao fim.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#525252]">
            Sem surpresas no preço e sem enrolação no prazo. Conheça como seu aparelho é tratado pela nossa equipe.
          </p>
        </div>

        {/* 4 Steps Grid with OpenMac Hairline Paper style */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#0d0d0d]/10 border border-[#0d0d0d]/10 rounded-3xl overflow-hidden shadow-sm">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 sm:p-8 lg:p-10 flex flex-col justify-between group hover:bg-[#faf8f4] transition duration-300"
            >
              <div>
                <div className="font-display font-extrabold text-4xl sm:text-5xl text-[#d4cfc5] group-hover:text-amber-800 transition mb-6">
                  {item.step}
                </div>
                <h3 className="font-display font-bold text-lg sm:text-xl text-[#0d0d0d] mb-3">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#525252] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
