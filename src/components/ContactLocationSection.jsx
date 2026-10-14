import React from 'react';
import { MapPin, Phone, Clock, ArrowUpRight, Navigation } from 'lucide-react';
import InstagramIcon from './icons/InstagramIcon';

export default function ContactLocationSection() {
  return (
    <section id="contato" className="py-20 md:py-28 bg-[#faf8f5]">
      <div className="max-w-[1300px] mx-auto px-5 sm:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Essential Store Info */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-amber-800 font-bold block">
                06 · Atendimento & Localização
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0d0d0d] tracking-tight">
                Estamos no Itapoã. <br />
                <span className="italic font-light text-[#737373]">Passe na loja ou chame online.</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 pt-2">
              <div className="p-6 rounded-2xl bg-white border border-[#0d0d0d]/8 space-y-2">
                <div className="flex items-center gap-2 text-amber-800 text-xs font-bold uppercase tracking-wider">
                  <MapPin className="w-4 h-4 text-amber-700" />
                  <span>Loja Física</span>
                </div>
                <div className="text-sm font-bold text-[#0d0d0d]">
                  Itapoã &bull; Brasília - DF
                </div>
                <p className="text-xs text-[#595959]">
                  Estacionamento em frente e fácil acesso.
                </p>
                <div className="pt-2">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Digital+Eletronicos+Itapoã+DF"
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-bold text-amber-800 hover:text-black inline-flex items-center gap-1 transition"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Traçar Rota no Maps</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[#0d0d0d]/8 space-y-2">
                <div className="flex items-center gap-2 text-amber-800 text-xs font-bold uppercase tracking-wider">
                  <Clock className="w-4 h-4 text-amber-700" />
                  <span>Horário</span>
                </div>
                <div className="text-xs text-[#525252] space-y-1">
                  <div><strong>Segunda a Sexta:</strong> 08:30 às 19:00</div>
                  <div><strong>Sábado:</strong> 08:30 às 17:00</div>
                  <div className="text-red-600 font-medium"><strong>Domingo:</strong> Fechado</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="https://wa.me/5561991696088?text=Ol%C3%A1%2C%20gostaria%20de%20atendimento%20na%20Digital%20Eletr%C3%B4nicos!"
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 rounded-full copper-gradient text-black font-bold text-sm inline-flex items-center justify-center gap-2 hover:brightness-105 transition shadow-sm"
              >
                <Phone className="w-4 h-4 fill-black" />
                <span>Chamar no WhatsApp (61 99169-6088)</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </a>

              <a
                href="https://www.instagram.com/digital.eletronicos.itp?utm_source=ig_web_button_share_sheet&srtk=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noreferrer"
                className="px-6 py-4 rounded-full border border-[#0d0d0d]/12 bg-white text-xs font-bold text-[#0d0d0d] hover:bg-[#ede9df] inline-flex items-center justify-center gap-2 transition"
              >
                <InstagramIcon className="w-4 h-4 text-pink-600" />
                <span>@digital.eletronicos.itp</span>
              </a>
            </div>

          </div>

          {/* Right Column: Clean Facade Visual */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-[#0d0d0d]/10 overflow-hidden bg-black aspect-square sm:aspect-[4/3] lg:aspect-square relative shadow-lg">
              <img 
                src="/images/store-team.png" 
                alt="Loja Física Digital Eletrônicos no Itapoã DF" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent flex items-end p-6">
                <span className="text-xs font-bold text-white">
                  Fachada da loja no Itapoã - DF &bull; Telefone (61) 99169-6088
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
