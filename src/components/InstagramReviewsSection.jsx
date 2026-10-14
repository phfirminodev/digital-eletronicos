import React from 'react';
import { 
  Star, 
  ArrowUpRight, 
  Heart, 
  MessageCircle, 
  CheckCircle2, 
  Sparkles, 
  ExternalLink
} from 'lucide-react';
import InstagramIcon from './icons/InstagramIcon';

export default function InstagramReviewsSection() {
  const reviews = [
    {
      name: 'Gabriel Costa',
      location: 'Itapoã - DF',
      stars: 5,
      comment: 'Troquei a tela do meu Xiaomi Note 12 e ficou perfeita! Atendimento nota 10 dos meninos, super educados e rápidos. Entregaram em menos de 40 minutos com película.',
      service: 'Troca de Tela AMOLED'
    },
    {
      name: 'Ana Paula Ribeiro',
      location: 'Paranoá / Itapoã',
      stars: 5,
      comment: 'Comprei uma scooter elétrica aqui na loja e foi a melhor coisa que fiz. Economia surreal de combustível e qualquer dúvida na revisão eles atendem na hora.',
      service: 'Scooter Elétrica Digital City'
    },
    {
      name: 'Diego Souza',
      location: 'Brasília - DF',
      stars: 5,
      comment: 'Outras assistências disseram que a placa do meu iPhone não tinha conserto. Levei na Digital e em 2 dias o celular tava ligando normal com todos os meus arquivos salvos.',
      service: 'Microsoldagem de Placa'
    },
    {
      name: 'Juliana Mendes',
      location: 'Itapoã - DF',
      stars: 5,
      comment: 'A melhor variedade de capas, películas e carregadores. Comprei uma caixa da FAM e o som é monstruoso. Super recomendo a loja!',
      service: 'Acessórios & Caixa de Som'
    }
  ];

  return (
    <section id="sobre" className="py-16 md:py-24 lg:py-32 bg-[#f5f3ee] relative overflow-hidden border-b border-[#0d0d0d]/8">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 mb-12 items-end">
          <div className="lg:col-span-7 space-y-3">
            <div className="text-xs uppercase tracking-[0.2em] text-pink-700 font-bold font-mono flex items-center gap-2">
              <InstagramIcon className="w-4 h-4 text-pink-600" />
              08 · Comunidade & Instagram Oficial
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0d0d0d] tracking-tight leading-[1.08]">
              Eles confiaram. <br />
              <span className="italic font-light copper-text-gradient">E voltaram pra contar.</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base text-[#525252] leading-relaxed">
              Mais de 10.000 clientes satisfeitos no Distrito Federal. Acompanhe nossos sorteios semanais, bastidores da bancada e novidades no nosso feed.
            </p>
          </div>
        </div>

        {/* Real Instagram Posts Showcase (incorporating user uploaded store photos!) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          
          {/* Card 1: Team & Store Counter */}
          <div className="rounded-3xl border border-[#0d0d0d]/10 bg-white overflow-hidden group hover:border-amber-500/30 transition shadow-sm">
            <div className="relative aspect-square overflow-hidden bg-black">
              <img 
                src="/images/store-team.png" 
                alt="Equipe Digital Eletrônicos no Balcão" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full border border-black/10 text-[11px] text-black font-semibold flex items-center gap-1.5 shadow-sm">
                <InstagramIcon className="w-3.5 h-3.5 text-pink-600" />
                @digital.eletronicos.itp
              </div>
            </div>
            <div className="p-5 space-y-2">
              <div className="flex items-center justify-between text-xs text-[#525252]">
                <span className="font-bold text-[#0d0d0d]">Nossa Equipe de Bancada</span>
                <span className="text-amber-800 font-semibold">Itapoã - DF</span>
              </div>
              <p className="text-xs text-[#525252] leading-relaxed">
                "Quebrou a tela do celular? Calma! A Digital Resolve com atendimento humanizado, rapidez e preço justo."
              </p>
            </div>
          </div>

          {/* Card 2: Electric Scooter Showroom */}
          <div className="rounded-3xl border border-[#0d0d0d]/10 bg-white overflow-hidden group hover:border-amber-500/30 transition shadow-sm">
            <div className="relative aspect-square overflow-hidden bg-black">
              <img 
                src="/images/store-showcase.jpg" 
                alt="Showroom de Motos Elétricas" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full border border-black/10 text-[11px] text-black font-semibold flex items-center gap-1.5 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                Destaque do Feed
              </div>
            </div>
            <div className="p-5 space-y-2">
              <div className="flex items-center justify-between text-xs text-[#525252]">
                <span className="font-bold text-[#0d0d0d]">Showroom & Acessórios</span>
                <span className="text-emerald-700 font-semibold">Pronta Entrega</span>
              </div>
              <p className="text-xs text-[#525252] leading-relaxed">
                Motos elétricas em exposição, fones bluetooth, caixas FAM e a maior parede de películas e capas do DF.
              </p>
            </div>
          </div>

          {/* Card 3: Instagram CTA & Sorteios Callout */}
          <div className="rounded-3xl border border-pink-200/80 bg-gradient-to-br from-white via-pink-50/50 to-amber-50/50 p-6 sm:p-8 flex flex-col justify-between shadow-sm">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-pink-500/10 border border-pink-500/25 flex items-center justify-center text-pink-600">
                <InstagramIcon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-pink-700 font-bold block">
                  Participe dos Sorteios Semanais
                </span>
                <h3 className="font-display font-extrabold text-2xl text-[#0d0d0d] mt-1">
                  Siga @digital.eletronicos.itp
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#525252] leading-relaxed">
                🍀 Siga para concorrer a caixas de som, fones bluetooth, revisões completas e acessórios de primeira linha!
              </p>
            </div>

            <div className="pt-6 border-t border-pink-100 space-y-3">
              <a
                href="https://www.instagram.com/digital.eletronicos.itp?utm_source=ig_web_button_share_sheet&srtk=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noreferrer"
                className="w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-pink-500 via-purple-600 to-amber-500 text-white font-bold text-sm inline-flex items-center justify-center gap-2 hover:opacity-95 transition shadow-md shadow-pink-500/25"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>Seguir no Instagram Oficial</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </a>

              <a
                href="https://linktr.ee/Digital.eletronicos"
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 rounded-full border border-[#0d0d0d]/12 bg-white text-center text-xs font-semibold text-[#404040] hover:text-black transition flex items-center justify-center gap-1.5 shadow-sm"
              >
                <span>Acessar Linktree Oficial</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Real Customer Testimonial Grid */}
        <div className="border-t border-[#0d0d0d]/10 pt-12">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-[0.2em] text-amber-800 font-bold font-mono">
              Avaliações Verificadas
            </span>
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#0d0d0d] mt-1">
              O que dizem os clientes do Itapoã e Brasília
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((rev, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white border border-[#0d0d0d]/10 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 text-amber-500 mb-3">
                    {[...Array(rev.stars)].map((_, s) => (
                      <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-500" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-[#383838] leading-relaxed mb-4">
                    "{rev.comment}"
                  </p>
                </div>

                <div className="pt-3 border-t border-[#0d0d0d]/8">
                  <div className="font-bold text-xs text-[#0d0d0d]">
                    {rev.name}
                  </div>
                  <div className="text-[11px] text-[#737373] flex items-center justify-between mt-0.5">
                    <span>{rev.location}</span>
                    <span className="text-amber-800 font-semibold">{rev.service}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
