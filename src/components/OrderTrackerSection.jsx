import React, { useState } from 'react';
import { Search, CheckCircle2, Clock, Phone, ArrowUpRight } from 'lucide-react';
import { SAMPLE_ORDERS, generateDynamicOrder } from '../data/sampleOrders';

export default function OrderTrackerSection() {
  const [inputCode, setInputCode] = useState('OS-2024');
  const [order, setOrder] = useState(SAMPLE_ORDERS['OS-2024']);

  const handleSearch = (e) => {
    e?.preventDefault();
    if (!inputCode.trim()) return;
    setOrder(generateDynamicOrder(inputCode));
  };

  const getWhatsAppOsUrl = () => {
    const text = encodeURIComponent(`Olá! Gostaria de atualizações sobre a minha Ordem de Serviço: ${order.code} (${order.device}).`);
    return `https://wa.me/5561991696088?text=${text}`;
  };

  return (
    <section id="rastrear" className="py-20 md:py-28 bg-[#f5f3ee] border-b border-[#0d0d0d]/8">
      <div className="max-w-[1000px] mx-auto px-5 sm:px-8">
        
        {/* Minimalist Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10 space-y-3">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-amber-800 font-bold block">
            05 · Rastreamento de Reparo
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#0d0d0d] tracking-tight">
            Consulte sua Ordem de Serviço.
          </h2>
          <p className="text-sm text-[#525252]">
            Digite o número da sua OS para acompanhar o status do seu aparelho em tempo real.
          </p>

          {/* Clean Input Form */}
          <form onSubmit={handleSearch} className="pt-3 flex gap-2 max-w-md mx-auto">
            <input
              type="text"
              value={inputCode}
              onChange={(e) => setInputCode(e.target.value)}
              placeholder="Ex: OS-2024"
              className="flex-1 bg-white border border-[#0d0d0d]/15 rounded-full px-5 py-3 text-sm text-[#0d0d0d] placeholder-[#8c8c8c] focus:outline-none focus:border-amber-600 font-mono uppercase shadow-sm"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-full copper-gradient text-black font-bold text-xs uppercase tracking-wider hover:brightness-105 transition shadow-sm"
            >
              Consultar
            </button>
          </form>
        </div>

        {/* Minimalist Order Status Result Card */}
        {order && (
          <div className="bg-white rounded-3xl border border-[#0d0d0d]/10 p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-[#0d0d0d]/8">
              <div>
                <div className="flex items-center gap-3">
                  <span className="font-mono font-extrabold text-2xl text-[#0d0d0d]">
                    {order.code}
                  </span>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-300">
                    {order.statusLabel}
                  </span>
                </div>
                <div className="text-xs sm:text-sm text-[#595959] mt-1">
                  {order.device} &bull; Cliente: <strong className="text-[#0d0d0d]">{order.client}</strong>
                </div>
              </div>

              <div className="text-left sm:text-right text-xs text-[#525252]">
                <div>Previsão: <strong className="text-emerald-700">{order.estimatedDelivery}</strong></div>
                <div>Técnico: <strong className="text-[#0d0d0d]">{order.technician}</strong></div>
              </div>
            </div>

            {/* Clean 4-Stage Horizontal Timeline */}
            <div className="space-y-3">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#737373] block font-semibold">
                Progresso do Reparo
              </span>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                <div className="p-3 rounded-2xl bg-[#faf8f4] border border-[#0d0d0d]/6">
                  <div className="flex items-center gap-1.5 font-bold text-[#0d0d0d] mb-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>1. Entrada</span>
                  </div>
                  <span className="text-[11px] text-[#737373]">Recebido na loja</span>
                </div>

                <div className="p-3 rounded-2xl bg-[#faf8f4] border border-[#0d0d0d]/6">
                  <div className="flex items-center gap-1.5 font-bold text-[#0d0d0d] mb-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>2. Diagnóstico</span>
                  </div>
                  <span className="text-[11px] text-[#737373]">Laudo aprovado</span>
                </div>

                <div className="p-3 rounded-2xl bg-amber-50 border border-amber-300 shadow-sm">
                  <div className="flex items-center gap-1.5 font-bold text-amber-900 mb-1">
                    <span className="w-2 h-2 rounded-full bg-amber-600 animate-ping"></span>
                    <span>3. Bancada</span>
                  </div>
                  <span className="text-[11px] text-amber-800 font-medium">Reparo em execução</span>
                </div>

                <div className="p-3 rounded-2xl bg-[#f5f3ee] border border-[#0d0d0d]/6 opacity-50">
                  <div className="flex items-center gap-1.5 font-medium text-[#737373] mb-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>4. Retirada</span>
                  </div>
                  <span className="text-[11px] text-[#8c8c8c]">Pronto p/ entrega</span>
                </div>
              </div>
            </div>

            {/* Quick Action Button */}
            <div className="pt-2 flex justify-end">
              <a
                href={getWhatsAppOsUrl()}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-2.5 rounded-full copper-gradient text-black font-bold text-xs inline-flex items-center gap-1.5 hover:brightness-105 transition"
              >
                <Phone className="w-3.5 h-3.5 fill-black" />
                <span>Falar com o Técnico sobre esta OS</span>
              </a>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
