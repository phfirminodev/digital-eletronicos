// Simulação e banco de Ordens de Serviço (Rastreamento estilo OpenMac)
export const SAMPLE_ORDERS = {
  'OS-2024': {
    code: 'OS-2024',
    client: 'Marcos Vinicius S.',
    device: 'Xiaomi Redmi Note 12 Pro',
    reportedIssue: 'Tela trincada após queda e falha no touch lateral',
    technician: 'Lucas (Bancada 02)',
    openedAt: 'Hoje às 09:15',
    estimatedDelivery: 'Hoje às 16:30',
    currentStageIndex: 3, // 0 to 5
    statusLabel: 'Em Reparo na Bancada',
    statusColor: 'text-amber-400 bg-amber-500/10 border-amber-500/30',
    checklist: [
      { item: 'Câmera Frontal e Traseira', ok: true },
      { item: 'Conector de Carga e Microfone', ok: true },
      { item: 'Alto-falantes estéreo', ok: true },
      { item: 'Sensores de Proximidade e Biometria', ok: true },
      { item: 'Consumo de Bateria na Fonte', ok: true }
    ],
    timeline: [
      {
        title: 'Check-in e Entrada na Loja',
        description: 'Aparelho recebido na unidade Itapoã-DF com ficha de inspeção inicial.',
        time: 'Hoje, 09:15',
        completed: true
      },
      {
        title: 'Diagnóstico Técnico Realizado',
        description: 'Placa mãe 100% íntegra. Necessidade de substituição do conjunto frontal AMOLED.',
        time: 'Hoje, 10:00',
        completed: true
      },
      {
        title: 'Orçamento Aprovado pelo Cliente',
        description: 'Cliente autorizou o reparo com tela original e película de cortesia.',
        time: 'Hoje, 10:25',
        completed: true
      },
      {
        title: 'Execução do Reparo na Bancada',
        description: 'Desmontagem técnica, limpeza do chassi, remoção da cola antiga e aplicação de nova vedação térmica.',
        time: 'Hoje, 11:10 (Em andamento)',
        completed: false,
        active: true
      },
      {
        title: 'Testes de Qualidade & Calibração',
        description: 'Verificação de touch screen, brilho dinâmico, chamadas e sensores.',
        time: 'Previsão: 15:30',
        completed: false
      },
      {
        title: 'Pronto para Retirada / Entrega',
        description: 'Aparelho embalado, lacrado e com termo de garantia pronto para o cliente retirar.',
        time: 'Previsão: 16:30',
        completed: false
      }
    ],
    notes: 'Aparelho em perfeito estado interno. Tela substituta já testada com sucesso no multímetro e touch test.'
  },
  'OS-1042': {
    code: 'OS-1042',
    client: 'Fernanda Caroline M.',
    device: 'iPhone 13 128GB Estelar',
    reportedIssue: 'Troca de bateria com saúde abaixo de 74% e limpeza da grade de áudio',
    technician: 'Mateus (Especialista Apple)',
    openedAt: 'Ontem às 14:00',
    estimatedDelivery: 'Pronto para Retirada',
    currentStageIndex: 5,
    statusLabel: 'Pronto para Retirada',
    statusColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
    checklist: [
      { item: 'Saúde da Bateria Nova', ok: true, note: '100% de capacidade' },
      { item: 'Face ID & Sensores TrueDepth', ok: true },
      { item: 'Carregamento MagSafe e Cabo', ok: true },
      { item: 'Higienização das Caixas Acústicas', ok: true }
    ],
    timeline: [
      { title: 'Check-in e Entrada na Loja', description: 'Entrada efetuada com bateria original desgastada.', time: 'Ontem, 14:00', completed: true },
      { title: 'Diagnóstico Técnico Realizado', description: 'Bateria com 1.200 ciclos. Placa em perfeito estado elétrico.', time: 'Ontem, 14:30', completed: true },
      { title: 'Orçamento Aprovado', description: 'Aprovado via WhatsApp pelo cliente.', time: 'Ontem, 14:45', completed: true },
      { title: 'Execução do Reparo na Bancada', description: 'Instalação de célula de bateria premium com preservação de fita térmica.', time: 'Ontem, 15:30', completed: true },
      { title: 'Testes de Qualidade & Calibração', description: 'Ciclo completo de carga e descarga realizado com sucesso.', time: 'Ontem, 17:00', completed: true },
      { title: 'Pronto para Retirada', description: 'Disponível no balcão da Digital Eletrônicos com 90 dias de garantia.', time: 'Disponível Agora', completed: true, active: true }
    ],
    notes: 'Aparelho higienizado externamente e limpo de cortesia.'
  },
  'OS-3088': {
    code: 'OS-3088',
    client: 'Rodrigo Medeiros',
    device: 'Scooter Elétrica Digital City 1000W',
    reportedIssue: 'Revisão geral dos 2.000 km, regulagem de freio a disco e balanceamento de bateria',
    technician: 'Equipe de Mobilidade Elétrica',
    openedAt: 'Ontem às 16:30',
    estimatedDelivery: 'Amanhã às 11:00',
    currentStageIndex: 4,
    statusLabel: 'Em Testes Finais de Rodagem',
    statusColor: 'text-blue-400 bg-blue-500/10 border-blue-500/30',
    checklist: [
      { item: 'Pastilhas e Discos de Freio', ok: true, note: 'Regulados e lubrificados' },
      { item: 'Tensão das Células da Bateria', ok: true, note: 'Tensão balanceada em 60V' },
      { item: 'Pressão dos Pneus & Aperto dos Eixos', ok: true },
      { item: 'Painel Digital & Iluminação LED', ok: true }
    ],
    timeline: [
      { title: 'Entrada na Oficina Elétrica', description: 'Veículo recebido para revisão preventiva.', time: 'Ontem, 16:30', completed: true },
      { title: 'Diagnóstico & Inspeção Visual', description: 'Inspeção estrutural, elétrica e dos eixos de suspensão.', time: 'Ontem, 17:15', completed: true },
      { title: 'Orçamento Confirmado', description: 'Revisão preventiva padrão autorizada.', time: 'Ontem, 17:40', completed: true },
      { title: 'Manutenção na Bancada', description: 'Ajuste de cabos, sangria e regulagem de freios, verificação da controladora.', time: 'Hoje, 10:00', completed: true },
      { title: 'Testes de Qualidade & Rodagem', description: 'Teste de tração, aceleração progressiva e frenagem de emergência.', time: 'Hoje, 14:00', completed: false, active: true },
      { title: 'Pronto para Entrega', description: 'Limpeza e polimento antes da retirada do condutor.', time: 'Previsão: Amanhã 11:00', completed: false }
    ],
    notes: 'Bateria com ótima saúde e motor em perfeito torque.'
  }
};

// Gerador inteligente para qualquer código digitado pelo usuário
export function generateDynamicOrder(code) {
  const cleanCode = code.toUpperCase().trim();
  if (SAMPLE_ORDERS[cleanCode]) {
    return SAMPLE_ORDERS[cleanCode];
  }

  // Gera uma OS dinâmica e interativa para qualquer número que o usuário digitar!
  return {
    code: cleanCode,
    client: 'Cliente Digital Eletrônicos',
    device: 'Smartphone / Dispositivo Eletrônico',
    reportedIssue: 'Entrada em assistência para análise técnica e reparo',
    technician: 'Bancada Técnica Digital (Itapoã-DF)',
    openedAt: 'Data recente registrada',
    estimatedDelivery: 'Em até 24h úteis',
    currentStageIndex: 2,
    statusLabel: 'Diagnóstico Técnico em Andamento',
    statusColor: 'text-amber-400 bg-amber-500/10 border-amber-500/30',
    checklist: [
      { item: 'Integridade física do chassi', ok: true },
      { item: 'Consumo na fonte regulada de bancada', ok: true },
      { item: 'Testes de periféricos e áudio', ok: false, note: 'Em análise' },
      { item: 'Inspeção de bateria e carga', ok: true }
    ],
    timeline: [
      { title: '1. Entrada & Check-in na Loja', description: 'Ordem de Serviço aberta e aparelho catalogado no sistema.', time: 'Registrado com sucesso', completed: true },
      { title: '2. Triagem e Inspeção de Bancada', description: 'Aparelho na bancada com técnico responsável alocado.', time: 'Concluído', completed: true },
      { title: '3. Elaboração do Laudo e Orçamento', description: 'Equipe finalizando laudo para envio de valores e peças.', time: 'Em andamento agora', completed: false, active: true },
      { title: '4. Execução Técnica do Reparo', description: 'Substituição das peças com ferramental de alta precisão.', time: 'Aguardando aprovação', completed: false },
      { title: '5. Testes Finais de Qualidade', description: 'Controle de qualidade antes da liberação do equipamento.', time: 'Pendente', completed: false },
      { title: '6. Pronto para Retirada', description: 'Disponível no balcão com termo oficial de garantia.', time: 'Pendente', completed: false }
    ],
    notes: 'Para acompanhar detalhes específicos com o técnico, você também pode clicar no botão do WhatsApp abaixo.'
  };
}
