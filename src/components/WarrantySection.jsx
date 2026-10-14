import React from 'react';
import { ShieldCheck, CheckCircle2, Clock, FileText, ArrowUpRight } from 'lucide-react';

export default function WarrantySection() {
  const terms = [
    {
      title: 'Garantia de até 180 Dias',
      desc: 'Nossos reparos contam com cobertura oficial contra defeitos de fabricação em telas, baterias e componentes.'
    },
    {
      title: 'Peças com Rastreabilidade',
      desc: 'Usamos apenas peças selecionadas e testadas. Não trabalhamos com componentes de refugo ou procedência duvidosa.'
    },
    {
      title: 'Diagnóstico 100% Gratuito',
      desc: 'Se abrirmos seu aparelho e o conserto não for viável ou você não aprovar o valor, devolvemos sem cobrar nada.'
    },
    {
      title: '10% de Desconto no PIX',
      desc: 'Valorizamos seu pagamento à vista com condições especiais em manutenções e acessórios.'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#faf8f5] border-b border-[#0d0d0d]/8">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        
        <div className="p-8 sm:p-12 lg:p-16 rounded-3xl bg-white border border-amber-500/30 relative overflow-hidden shadow-xl">
          
          {/* Subtle light background */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 blur-[120px] pointer-events-none"></div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 text-amber-900 border border-amber-500/30 text-xs font-mono font-bold">
                <ShieldCheck className="w-4 h-4 text-amber-700" />
                Compromisso Digital Eletrônicos
              </div>

              <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0d0d0d] tracking-tight leading-[1.08]">
                Confiança que se assina <br />
                <span className="italic font-light copper-text-gradient">com garantia real.</span>
              </h2>

              <p className="text-sm sm:text-base text-[#525252] leading-relaxed">
                Sabemos o valor do seu celular e da sua moto elétrica. Por isso, toda manutenção concluída na Digital Eletrônicos é acompanhada de termo oficial de garantia e suporte pós-venda dedicado.
              </p>

              <div className="pt-2">
                <a
                  href="https://wa.me/5561991696088?text=Ol%C3%A1%2C%20gostaria%20de%20tirar%20uma%20d%C3%BAvida%20sobre%20os%20termos%20de%20garantia%20da%20loja."
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3.5 rounded-full copper-gradient text-black font-bold text-sm inline-flex items-center gap-2 hover:brightness-105 transition shadow-md shadow-amber-500/25"
                >
                  <span>Tirar Dúvidas sobre Garantia</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 grid sm:grid-cols-2 gap-4">
              {terms.map((t, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-[#faf8f4] border border-[#0d0d0d]/8 space-y-2">
                  <div className="flex items-center gap-2 text-amber-800 font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
                    <span>{t.title}</span>
                  </div>
                  <p className="text-xs text-[#525252] leading-relaxed">
                    {t.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
