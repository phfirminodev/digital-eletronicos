// Catálogo de produtos da DIGITAL Eletrônicos (Motos, Celulares, Áudio e Acessórios)
export const PRODUCTS_DATA = [
  {
    id: 'moto-e1',
    name: 'Scooter Elétrica Digital City 1000W',
    category: 'motos',
    categoryLabel: 'Motos & Patinetes',
    badge: 'Destaque na Loja',
    badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    price: 'Consulte Condições',
    priceNote: 'Parcelamento em até 18x ou desconto no PIX',
    image: '/images/store-showcase.jpg',
    features: [
      'Motor 1000W Silencioso de Alta Eficiência',
      'Autonomia de até 45 km por recarga',
      'Bateria portátil de Lítio (carrega em tomada comum)',
      'Painel digital LCD, alarme antifurto e farol LED',
      'Cesto frontal reforçado + baú traseiro para bagagem'
    ],
    description: 'A scooter elétrica que revolucionou a mobilidade no Itapoã e DF. Liberdade, economia absurda de combustível e zero IPVA. Ideal para o dia a dia, trabalho e lazer.',
    specs: {
      'Velocidade Máxima': 'Até 35 km/h',
      'Autonomia Média': '35 - 45 km',
      'Tempo de Carga': '4 a 6 horas em 110V/220V',
      'Capacidade de Peso': 'Até 160 kg (2 pessoas)',
      'Garantia': 'Garantia com suporte técnico na própria loja'
    }
  },
  {
    id: 'patinete-pro',
    name: 'Patinete Elétrico Urban Pro 350W',
    category: 'motos',
    categoryLabel: 'Motos & Patinetes',
    badge: 'Mobilidade Prática',
    badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    price: 'Consulte Estoque',
    priceNote: 'Facilidade no cartão ou à vista com desconto',
    image: '/images/store-showcase.jpg',
    features: [
      'Estrutura dobrável em alumínio aeroespacial',
      'Autonomia de até 30 km',
      'Pneus sólidos antifuro de 8.5 polegadas',
      'Freio a disco traseiro + regenerativo E-ABS',
      'Aplicativo de controle via Bluetooth'
    ],
    description: 'Leve, dobrável e ágil para deslocamentos rápidos no trânsito urbano. Cabe no porta-malas do carro ou no canto de casa.',
    specs: {
      'Velocidade Máxima': '25 km/h',
      'Autonomia': '25 - 30 km',
      'Peso do Equipamento': '12.5 kg',
      'Recarga': '3 a 4 horas'
    }
  },
  {
    id: 'som-fam-boombox',
    name: 'Caixa de Som Amplificada FAM Bass Extreme',
    category: 'audio',
    categoryLabel: 'Caixas de Som & Áudio',
    badge: 'Sucesso de Vendas',
    badgeColor: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    price: 'R$ 389,00',
    priceNote: '10% de desconto no PIX ou em até 10x sem juros',
    image: '/images/store-showcase.jpg',
    features: [
      'Graves potentes com radiadores passivos duplos',
      'Bateria interna para até 12 horas de música contínua',
      'Conexão Bluetooth 5.3, USB, Cartão SD e Entrada Auxiliar',
      'Resistente a respingos d’água (IPX6)',
      'Alça de transporte reforçada embutida'
    ],
    description: 'Aquela caixa de som robusta da FAM que os clientes procuram na loja! Som limpo e graves que balançam o ambiente para churrascos, festas e momentos em família.',
    specs: {
      'Potência': '80W RMS Real',
      'Bateria': '6000 mAh recarregável',
      'Conexões': 'Bluetooth 5.3 / USB / P2 / TF Card',
      'Garantia': '90 dias direto com a Digital Eletrônicos'
    }
  },
  {
    id: 'phone-galaxy-a',
    name: 'Samsung Galaxy A15 / A25 5G (Novo na Caixa)',
    category: 'smartphones',
    categoryLabel: 'Smartphones & Celulares',
    badge: 'Novo Lacrado',
    badgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    price: 'Consulte Valor do Dia',
    priceNote: 'Garantia de 1 ano + Película de brinde aplicada',
    image: '/images/store-team.png',
    features: [
      'Tela Super AMOLED 90Hz fluida e vibrante',
      'Câmera Tripla de 50MP com fotos nítidas',
      'Bateria de 5000 mAh que dura mais de 1 dia',
      'Conectividade 5G ultrarrápida',
      'Opções de 128GB e 256GB de armazenamento'
    ],
    description: 'Celulares novos e originais com procedência garantida. Comprando na Digital você já sai com película instalada e assistência técnica de perto.',
    specs: {
      'Condição': 'Novo / Lacrado na Caixa com NF',
      'Processador': 'Octa-Core de alta eficiência',
      'Garantia': '12 meses'
    }
  },
  {
    id: 'phone-xiaomi-note',
    name: 'Xiaomi Redmi Note 13 / 13 Pro',
    category: 'smartphones',
    categoryLabel: 'Smartphones & Celulares',
    badge: 'Mais Vendido',
    badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    price: 'Consulte Valores',
    priceNote: 'Melhor custo-benefício com desconto no PIX',
    image: '/images/store-team.png',
    features: [
      'Câmera Ultra-Clear de 108MP com zoom óptico',
      'Carregamento Turbo de 33W (carregador incluso)',
      'Sensor de digital sob a tela',
      'Design premium ultrafino'
    ],
    description: 'O rei do custo-benefício. Disponível em várias cores na vitrine da Digital Eletrônicos no Itapoã.',
    specs: {
      'Memória RAM': '8GB + 8GB expansão virtual',
      'Armazenamento': '256GB UFS',
      'Garantia': 'Garantia completa da loja'
    }
  },
  {
    id: 'carregador-turbo-65w',
    name: 'Carregador Turbo Ultra Fast GaN 65W (Dupla Porta)',
    category: 'acessorios',
    categoryLabel: 'Acessórios & Cabos',
    badge: 'Alta Performance',
    badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    price: 'R$ 119,00',
    priceNote: 'Carrega celular, notebook e tablet ao mesmo tempo',
    image: '/images/store-showcase.jpg',
    features: [
      'Tecnologia de Nitreto de Gálio (GaN) mais frio e compacto',
      'Compatível com iPhone 15/16, Samsung 45W e Xiaomi Turbo',
      'Proteção contra sobrecarga, curto e sobreaquecimento',
      'Saídas USB-C Power Delivery 3.0 e USB-A Quick Charge'
    ],
    description: 'Carregamento veloz de verdade que preserva a saúde da bateria do seu smartphone.',
    specs: {
      'Potência': 'Até 65W reais',
      'Homologação': 'Com circuitos de corte térmico inteligente'
    }
  },
  {
    id: 'kit-pelicula-case',
    name: 'Combo Proteção Total: Película Cerâmica 9D + Case Antishock',
    category: 'acessorios',
    categoryLabel: 'Proteção & Acessórios',
    badge: 'Aplicação Grátis',
    badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    price: 'A partir de R$ 45,00',
    priceNote: 'Instalação profissional sem bolhas na hora',
    image: '/images/store-showcase.jpg',
    features: [
      'Película cerâmica inquebrável com toque suave',
      'Case em silicone militar com bordas elevadas para câmera',
      'Disponível para iPhone, Samsung, Xiaomi e Motorola',
      'Variedade imensa de cores e modelos na parede da loja'
    ],
    description: 'A maior parede de cases e películas do Itapoã. Escolha sua cor favorita e saia protegido.',
    specs: {
      'Compatibilidade': 'Mais de 180 modelos de smartphones'
    }
  },
  {
    id: 'fone-bluetooth-anc',
    name: 'Fone TWS Bluetooth com Cancelamento de Ruído',
    category: 'audio',
    categoryLabel: 'Caixas de Som & Áudio',
    badge: 'Graves Profundos',
    badgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    price: 'R$ 139,00',
    priceNote: 'Excelente para ligações, treinos e viagens',
    image: '/images/store-showcase.jpg',
    features: [
      'Autonomia de até 28 horas com o estojo carregador',
      'Microfone duplo com inteligência para chamadas limpas',
      'Resistente a suor e chuva leve',
      'Emparelhamento instantâneo ao abrir a tampa'
    ],
    description: 'Som estéreo imersivo sem fios com design ergonômico confortável.',
    specs: {
      'Bluetooth': 'Versão 5.3 com baixa latência',
      'Bateria Fones': 'Até 6h contínuas por carga'
    }
  }
];

export const CATEGORIES = [
  { id: 'all', label: 'Todos os Itens' },
  { id: 'motos', label: '🛵 Motos & Patinetes' },
  { id: 'smartphones', label: '📱 Celulares & Aparelhos' },
  { id: 'audio', label: '🔊 Caixas de Som & Fones' },
  { id: 'acessorios', label: '⚡ Carregadores, Cabos & Cases' },
];
