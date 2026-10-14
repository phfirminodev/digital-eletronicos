import React from 'react';
import { Phone, ArrowUpRight } from 'lucide-react';
import InstagramIcon from './icons/InstagramIcon';

export default function Footer() {
  return (
    <footer className="bg-[#ede9df] border-t border-[#0d0d0d]/10 text-[#595959] py-12">
      <div className="max-w-[1300px] mx-auto px-5 sm:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#0d0d0d]/8">
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden p-0.5 border border-amber-600/30 bg-black">
              <img 
                src="/images/logo.png" 
                alt="DIGITAL Eletrônicos" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div>
              <span className="font-display font-bold text-base text-[#0d0d0d] block">
                DIGITAL Eletrônicos
              </span>
              <span className="text-[10px] text-[#737373] uppercase tracking-wider font-mono">
                Itapoã · Brasília - DF
              </span>
            </div>
          </div>

          <nav className="flex items-center gap-6 text-xs font-semibold text-[#525252]">
            <a href="#servicos" className="hover:text-black transition">Serviços</a>
            <a href="#motos-eletricas" className="hover:text-black transition">Motos Elétricas</a>
            <a href="#produtos" className="hover:text-black transition">Produtos</a>
            <a href="#rastrear" className="hover:text-black transition">Rastrear OS</a>
            <a href="#contato" className="hover:text-black transition">Contato</a>
          </nav>

          <div className="flex items-center gap-3">
            <a 
              href="https://www.instagram.com/digital.eletronicos.itp?utm_source=ig_web_button_share_sheet&srtk=ZDNlZDc0MzIxNw==" 
              target="_blank" 
              rel="noreferrer"
              className="w-9 h-9 rounded-full bg-white border border-[#0d0d0d]/10 flex items-center justify-center text-[#262626] hover:text-amber-800 transition"
              title="Instagram"
            >
              <InstagramIcon className="w-4 h-4 text-pink-600" />
            </a>
            <a 
              href="https://wa.me/5561991696088" 
              target="_blank" 
              rel="noreferrer"
              className="w-9 h-9 rounded-full bg-white border border-[#0d0d0d]/10 flex items-center justify-center text-[#262626] hover:text-emerald-700 transition"
              title="WhatsApp"
            >
              <Phone className="w-4 h-4" />
            </a>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#737373]">
          <div>
            &copy; {new Date().getFullYear()} DIGITAL Eletrônicos &bull; Todos os direitos reservados.
          </div>
          <div>
            Assistência Técnica &bull; Motos Elétricas &bull; Acessórios
          </div>
        </div>

      </div>
    </footer>
  );
}
