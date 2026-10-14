import React, { useState } from 'react';
import { 
  Calculator, 
  Smartphone, 
  BatteryCharging, 
  Cpu, 
  Cable, 
  Droplets, 
  Bike, 
  CheckCircle2, 
  ArrowUpRight, 
  Clock, 
  ShieldCheck, 
  Phone
} from 'lucide-react';

export default function QuoteSimulatorSection() {
  const [device, setDevice] = useState('Xiaomi / Redmi');
  const [issue, setIssue] = useState('Tela Quebrada / Sem Imagem');
  const [modelName, setModelName] = useState('');

  const devices = [
    { name: 'iPhone / Apple', icon: '📱' },
    { name: 'Samsung Galaxy', icon: '📲' },
    { name: 'Xiaomi / Redmi', icon: '⚡' },
    { name: 'Motorola', icon: '📞' },
    { name: 'Moto Elétrica / Patinete', icon: '🛵' },
    { name: 'Caixa de Som / Outro', icon: '🔊' },
  ];

  const issues = [
    { title: 'Tela Quebrada / Sem Imagem', time: '40 a 60 min', warranty: '90 a 180 dias', desc: 'Troca do display e touch com garantia de sensibilidade e brilho.' },
    { title: 'Bateria Não Segura Carga', time: '30 a 50 min', warranty: '90 dias', desc: 'Substituição por célula nova homologada de alta capacidade.' },
    { title: 'Não Liga / Curto na Placa', time: '24 a 48h', warranty: '90 a 180 dias', desc: 'Análise minuciosa de microsoldagem e componentes na bancada.' },
    { title: 'Conector Não Carrega', time: '45 a 90 min', warranty: '90 dias', desc: 'Substituição da porta Type-C / Lightning / MicroUSB com solda reforçada.' },
    { title: 'Caiu na Água / Oxidação', time: '24 a 36h', warranty: 'Conforme teste', desc: 'Banho químico ultrassônico para reverter a corrosão da placa.' },
    { title: 'Revisão de Moto Elétrica', time: 'Agendamento rápido', warranty: '90 dias', desc: 'Revisão de freios, balanceamento de bateria e verificação elétrica.' },
  ];

  const currentIssueData = issues.find(i => i.title === issue) || issues[0];

  const getWhatsAppSimulatedUrl = () => {
    let msg = `Olá! Fiz uma simulação no site da Digital Eletrônicos:\n\n`;
    msg += `• Dispositivo: ${device}\n`;
    if (modelName.trim()) {
      msg += `• Modelo Exato: ${modelName.trim()}\n`;
    }
    msg += `• Problema: ${issue}\n`;
    msg += `• Tempo Estimado: ${currentIssueData.time}\n`;
    msg += `• Garantia: ${currentIssueData.warranty}\n\n`;
    msg += `Gostaria de confirmar o valor e disponibilidade para atendimento!`;

    return `https://wa.me/5561991696088?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section id="orcamento" className="py-16 md:py-24 lg:py-32 bg-[#faf8f5] relative border-b border-[#0d0d0d]/8">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="text-xs uppercase tracking-[0.2em] text-amber-800 font-bold font-mono flex items-center justify-center gap-2">
            <Calculator className="w-4 h-4 text-amber-700" />
            06 · Simulador de Orçamento Rápido
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0d0d0d] tracking-tight">
            Descubra em segundos <br />
            <span className="italic font-light copper-text-gradient">o prazo e garantia do seu reparo.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#525252]">
            Selecione seu aparelho e o defeito apresentado para gerar uma estimativa imediata sem nenhum compromisso.
          </p>
        </div>

        {/* Simulator Interactive Grid */}
        <div className="max-w-4xl mx-auto rounded-3xl border border-[#0d0d0d]/10 bg-white p-6 sm:p-8 lg:p-10 shadow-xl">
          
          {/* Step 1: Device Selection */}
          <div className="mb-8">
            <label className="text-xs font-mono uppercase tracking-wider text-amber-800 font-bold block mb-3">
              1. Selecione a Categoria do seu Aparelho
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {devices.map((d) => (
                <button
                  key={d.name}
                  type="button"
                  onClick={() => setDevice(d.name)}
                  className={`p-3.5 rounded-2xl border text-xs sm:text-sm font-semibold flex items-center gap-2.5 transition text-left ${
                    device === d.name
                      ? 'bg-amber-500/20 text-[#0d0d0d] border-amber-600 shadow-sm'
                      : 'bg-[#faf8f4] border-[#0d0d0d]/8 text-[#404040] hover:text-black hover:bg-[#ede9df]'
                  }`}
                >
                  <span className="text-lg">{d.icon}</span>
                  <span className="truncate">{d.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Optional Model Input */}
          <div className="mb-8">
            <label className="text-xs font-mono uppercase tracking-wider text-[#595959] font-semibold block mb-2">
              (Opcional) Digite o modelo exato se souber:
            </label>
            <input
              type="text"
              value={modelName}
              onChange={(e) => setModelName(e.target.value)}
              placeholder="Ex: Redmi Note 12, iPhone 14 Pro, Galaxy A54, Moto E22, etc."
              className="w-full bg-[#f8f6f0] border border-[#0d0d0d]/10 rounded-xl px-4 py-3 text-sm text-[#0d0d0d] placeholder-[#8c8c8c] focus:outline-none focus:border-amber-600 transition"
            />
          </div>

          {/* Step 2: Issue Selection */}
          <div className="mb-8">
            <label className="text-xs font-mono uppercase tracking-wider text-amber-800 font-bold block mb-3">
              2. Qual é o problema ou serviço necessário?
            </label>
            <div className="grid sm:grid-cols-2 gap-3">
              {issues.map((iss) => (
                <button
                  key={iss.title}
                  type="button"
                  onClick={() => setIssue(iss.title)}
                  className={`p-4 rounded-2xl border text-left transition ${
                    issue === iss.title
                      ? 'bg-amber-50 border-amber-400 text-[#0d0d0d] shadow-sm'
                      : 'bg-[#faf8f4] border-[#0d0d0d]/8 text-[#404040] hover:text-black hover:bg-[#ede9df]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-sm text-[#0d0d0d]">{iss.title}</span>
                    <span className="text-[11px] font-mono font-bold text-amber-800 bg-amber-500/15 px-2 py-0.5 rounded">
                      {iss.time}
                    </span>
                  </div>
                  <p className="text-xs text-[#525252] leading-relaxed">
                    {iss.desc}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Diagnostic Summary Result */}
          <div className="p-6 rounded-2xl bg-amber-50/60 border border-amber-200/80 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-amber-200/60">
              <div>
                <span className="text-xs text-[#595959] block font-medium">Resumo do Diagnóstico Preliminar:</span>
                <h4 className="text-base sm:text-lg font-extrabold text-[#0d0d0d]">
                  {device} &bull; <span className="text-amber-800">{issue}</span>
                </h4>
              </div>
              <div className="text-xs text-emerald-800 font-bold bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200 w-max shadow-sm">
                ✓ Diagnóstico 100% Sem Custo na Loja
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-white border border-[#0d0d0d]/6 shadow-sm">
                <span className="text-[#595959] block font-medium">Tempo Médio</span>
                <span className="text-sm font-bold text-[#0d0d0d] flex items-center gap-1 mt-0.5 font-display">
                  <Clock className="w-3.5 h-3.5 text-amber-700" />
                  {currentIssueData.time}
                </span>
              </div>
              <div className="p-3 rounded-xl bg-white border border-[#0d0d0d]/6 shadow-sm">
                <span className="text-[#595959] block font-medium">Garantia Assegurada</span>
                <span className="text-sm font-bold text-amber-800 flex items-center gap-1 mt-0.5 font-display">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  {currentIssueData.warranty}
                </span>
              </div>
              <div className="p-3 rounded-xl bg-white border border-[#0d0d0d]/6 col-span-2 sm:col-span-1 shadow-sm">
                <span className="text-[#595959] block font-medium">Bancada</span>
                <span className="text-sm font-bold text-[#0d0d0d] flex items-center gap-1 mt-0.5 font-display">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Itapoã - DF
                </span>
              </div>
            </div>

            {/* Direct WhatsApp Action */}
            <div className="pt-2">
              <a
                href={getWhatsAppSimulatedUrl()}
                target="_blank"
                rel="noreferrer"
                className="w-full py-4 px-6 rounded-full copper-gradient text-black font-bold text-sm sm:text-base inline-flex items-center justify-center gap-2 hover:brightness-105 transition shadow-md shadow-amber-500/25"
              >
                <Phone className="w-4 h-4 fill-black" />
                <span>Confirmar Orçamento pelo WhatsApp (61 99169-6088)</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </a>
              <span className="text-[11px] text-[#595959] text-center block mt-2 font-medium">
                Você será atendido rapidamente pela nossa equipe técnica no WhatsApp.
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
