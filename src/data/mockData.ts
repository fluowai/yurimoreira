import { PracticeArea, MetricItem, LegalArticle } from '../types';

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: 'familia',
    title: 'Direito de Família',
    shortDescription: 'Divórcio, guarda, alimentos, união estável e sucessões.',
    fullDescription: 'Atuação sensível e técnica em questões familiares e sucessórias, priorizando a pacificação de conflitos, a proteção dos menores e o patrimônio da família com absoluta confidencialidade.',
    iconName: 'Users',
    keyServices: [
      'Divórcio consensual e litigioso judicial ou em cartório',
      'Pensão alimentícia (fixação, revisão e execução)',
      'Regulamentação de guarda unilateral e compartilhada',
      'Reconhecimento e dissolução de união estável com partilha',
      'Inventário judicial, extrajudicial e planejamento sucessório',
      'Adoção, tutela e curatela'
    ]
  },
  {
    id: 'civil',
    title: 'Direito Civil',
    shortDescription: 'Contratos, indenizações, responsabilidade civil.',
    fullDescription: 'Proteção ampla de direitos civis, patrimoniais e contratuais. Defesa em disputas complexas, elaboração de instrumentos jurídicos seguros e cobrança de indenizações.',
    iconName: 'Briefcase',
    keyServices: [
      'Elaboração, análise e rescisão de contratos civis e comerciais',
      'Ações de reparação de danos morais e materiais',
      'Direito imobiliário, usucapião, despejo e reintegração de posse',
      'Cobranças, execuções de títulos e recuperação de crédito',
      'Direito do consumidor e relações de consumo',
      'Responsabilidade civil médica e profissional'
    ]
  },
  {
    id: 'empresarial',
    title: 'Direito Empresarial',
    shortDescription: 'Consultoria, contratos e suporte para empresas.',
    fullDescription: 'Assessoria jurídica corporativa contínua e estratégica, estruturando negócios com segurança legal para impulsionar o crescimento sustentável e blindar o patrimônio dos sócios.',
    iconName: 'Building2',
    keyServices: [
      'Constituição, alteração e dissolução societária',
      'Elaboração de acordos de sócios e memorandos de entendimento',
      'Assessoria contínua para redução de passivos trabalhistas e cíveis',
      'Recuperação de empresas, renegociação de dívidas e falências',
      'Proteção de marcas, patentes e segredos empresariais',
      'Compliance e adequação à LGPD (Lei Geral de Proteção de Dados)'
    ]
  },
  {
    id: 'criminal',
    title: 'Direito Criminal',
    shortDescription: 'Defesa técnica e acompanhamento em todas as fases do processo.',
    fullDescription: 'Defesa combativa e intransigente das garantias constitucionais da ampla defesa e do contraditório. Atuação emergencial e estratégica em todas as esferas e instâncias.',
    iconName: 'Scale',
    keyServices: [
      'Plantão 24 horas para atendimento em prisões em flagrante',
      'Audiências de custódia e pedidos de liberdade provisória',
      'Acompanhamento completo de inquéritos policiais na Delegacia',
      'Defesa técnica em processos penais e crimes econômicos',
      'Impetração de Habeas Corpus perante Tribunais Superiores (TJ, STJ, STF)',
      'Atuação especializada perante o Tribunal do Júri'
    ]
  },
  {
    id: 'consultoria',
    title: 'Consultoria Jurídica',
    shortDescription: 'Orientação preventiva para pessoas e empresas.',
    fullDescription: 'Advocacia preventiva focada em antecipar riscos, evitar litígios desnecessários e assegurar economia de tempo e recursos com decisões juridicamente embasadas.',
    iconName: 'FileText',
    keyServices: [
      'Elaboração de pareceres técnicos e diagnósticos jurídicos',
      'Auditoria legal preventiva (due diligence)',
      'Consultoria pré-contratual e mediação extrajudicial',
      'Treinamento e palestras de conformidade regulatória',
      'Mapeamento de riscos operacionais e estratégicos'
    ]
  }
];

export const METRICS: MetricItem[] = [
  { number: '+500', label: 'Clientes atendidos' },
  { number: '+1.000', label: 'Processos acompanhados' },
  { number: '98%', label: 'Taxa de satisfação' },
  { number: '10+', label: 'Anos de experiência' }
];

export const LEGAL_ARTICLES: LegalArticle[] = [
  {
    id: 'divorcio-extrajudicial',
    title: 'Divórcio em Cartório: Rapidez, Economia e Requisitos Legais',
    category: 'Direito de Família',
    date: '10 Set 2026',
    readTime: '4 min',
    summary: 'Entenda como o procedimento extrajudicial pode simplificar a partilha de bens e a dissolução conjugal em poucos dias.',
    content: [
      'O divórcio extrajudicial, instituído pela Lei 11.441/2007, revolucionou a forma como casais podem dissolver o matrimônio sem a morosidade do Judiciário.',
      'Para sua realização, é indispensável o consenso mútuo, a presença de um advogado e a inexistência de filhos menores ou incapazes (com flexibilizações recentes quando as questões de guarda e alimentos já estiverem judicializadas).',
      'A escritura pública possui validade imediata para alteração de estado civil e transferência de imóveis junto aos cartórios de registro de imóveis.'
    ]
  },
  {
    id: 'contratos-empresariais-riscos',
    title: 'Contratos Empresariais: Como Blindar seu Negócio contra Inadimplência',
    category: 'Direito Empresarial',
    date: '02 Set 2026',
    readTime: '5 min',
    summary: 'Cláusulas essenciais para resguardar sócios, prever garantias reais e evitar litígios onerosos.',
    content: [
      'Muitas disputas societárias e perdas financeiras decorrem de contratos genéricos baixados da internet que não consideram as particularidades do negócio.',
      'Definir com precisão o foro de eleição, cláusulas penais compensatórias, prazos para notificação prévia e garantias (como fiança ou alienação fiduciária) é vital para preservar a liquidez da empresa.',
      'A advocacia preventiva custa uma fração do valor de uma longa disputa judicial.'
    ]
  },
  {
    id: 'direitos-audiencia-custodia',
    title: 'A Importância Crucial da Audiência de Custódia nas Primeiras 24 Horas',
    category: 'Direito Criminal',
    date: '25 Ago 2026',
    readTime: '6 min',
    summary: 'A presença imediata do advogado de defesa assegura a análise da legalidade da prisão e a preservação dos direitos fundamentais.',
    content: [
      'A audiência de custódia é o momento no qual a pessoa presa em flagrante é apresentada ao juiz competente para verificação de tortura, maus-tratos e necessidade da prisão cautelar.',
      'O papel da defesa técnica é demonstrar os predicados pessoais favoráveis do custodiado (residência fixa, ocupação lícita, primariedade) para pleitear a concessão de liberdade provisória com ou sem fiança.'
    ]
  }
];

export const OFFICE_CONTACT = {
  phoneDisplay: '+55 11 98765-4321',
  phoneRaw: '5511987654321',
  email: 'contato@escritorioyurimoreira.com.br',
  address: 'Rua Nome da Rua, 123 - Sala 45\nBairro - Cidade/UF',
  addressOneLine: 'Rua Nome da Rua, 123 - Sala 45, Bairro - Cidade/UF',
  website: 'www.escritorioyurimoreira.com.br',
  instagram: 'https://instagram.com',
  linkedin: 'https://linkedin.com',
  youtube: 'https://youtube.com',
  whatsappMessage: 'Olá, Dr. Yuri Moreira. Gostaria de agendar uma consulta jurídica.'
};
