export const mockUser = {
  name: 'Lucas',
  avatarUrl: 'https://media.licdn.com/dms/image/v2/D4D22AQE3Vi22eYO-WQ/feedshare-shrink_1280/B4DZefe6JlGUAk-/0/1750727372338?e=1755129600&v=beta&t=lOPFd5ynoRUyNN2T50Fs0_S1_tHms_hZz3rlMxm8Jms',
  eventName: '#CPWeekendAracaju 2025'
};

export const mockPalestras = [
  {
    horario: '13:00',
    titulo: 'Inovação em IA',
    palco: "What's Next",
    palestrante: 'Ana Souza',
    banner: 'https://media.licdn.com/dms/image/v2/D4D22AQGVyKd0kHrR4Q/feedshare-shrink_2048_1536/B4DZeYygvmHAAo-/0/1750615068291?e=1755129600&v=beta&t=UxZA609B0uj5ghhFrRSqJxjnFFh8CmQlNlV7fXFpX70',
    resumo: 'Explorando as últimas tendências em inteligência artificial e suas aplicações reais.',
    tags: ['#IA', '#MachineLearning']
  },
  {
    horario: '15:00',
    titulo: 'Web3 e o Futuro',
    palco: 'Blockchain Arena',
    palestrante: 'Carlos Lima',
    banner: 'https://media.licdn.com/dms/image/v2/D4D22AQGzHGCSzzjh3Q/feedshare-shrink_2048_1536/B4DZfRnTezG8Ao-/0/1751568431726?e=1755129600&v=beta&t=Pze6npKuHxR0zG-XNpYTcsNHxYO_gg4YvoJw3J4wJPs',
    resumo: 'Como a Web3 pode transformar a internet e criar novas oportunidades.',
    tags: ['#Web3', '#Blockchain']
  },
  {
    horario: '17:00',
    titulo: 'Metaverso na Prática',
    palco: 'Main Stage',
    palestrante: 'Débora Reis',
    banner: 'https://placehold.co/600x400/0055ff/ffffff?text=Metaverso',
    resumo: 'Demonstração de casos reais de uso do Metaverso em empresas.',
    tags: ['#Metaverso']
  },
  {
    horario: '18:30',
    titulo: 'Robótica Educacional',
    palco: 'Maker Lab',
    palestrante: 'Eduardo Tavares',
    banner: 'https://placehold.co/600x400/0099ff/ffffff?text=Robótica',
    resumo: 'Como utilizar robótica em sala de aula para engajar estudantes.',
    tags: ['#Robótica', '#Educação']
  }
];

export const mockPessoas = [
  { nome: 'Jean R.', skill: 'Dev Fullstack' },
  { nome: 'Otavio M.', skill: 'Product Manager' },
];

export const mockMenuApps = [
  { nome: 'Palestras', icon: '🎤', path: '/palestras' },
  { nome: 'Pessoas', icon: '👥', path: '/pessoas' },
  { nome: 'Mapa', icon: '🗺️', path: '/mapa' },
  { nome: 'Chat', icon: '💬', path: '/chat' },
  { nome: 'Comunidades', icon: '🌐', path: '/comunidades' }
];

export const mockEvents = [
  {
    id: 'cpweekend-aracaju',
    nome: '#CPWeekendAracaju 2025',
    cidade: 'Aracaju/SE',
    data: '24 a 26 Outubro 2025',
    banner: 'https://brasil.campus-party.org/wp-content/uploads/2025/04/Widget_CPWeekendAracaju_1920x1000px.png'
  },
  {
    id: 'cpgoias5',
    nome: '#CPGoiás5 – Campus Party Goias 2025',
    cidade: 'Goiânia/GO',
    data: '19 a 23 Junho 2025',
    banner: 'https://brasil.campus-party.org/wp-content/uploads/2025/04/cpgoias5_widget-4events.png'
  },
  {
    id: 'cpgoias5',
    nome: 'CP Goiás 5 2025',
    cidade: 'Goiânia/GO',
    data: '19 a 23 Novembro 2025',
    banner: 'https://brasil.campus-party.org/wp-content/uploads/2025/04/cpgoias5_widget-4events.png'
  }
];

export const mockFalaCampusPost = [
  {
    id: 1,
    nome: 'Campus Party Brasil',
    avatar: 'https://media.licdn.com/dms/image/v2/C4E0BAQH253Tnv7XpNw/company-logo_200_200/company-logo_200_200/0/1630578219998/campuspartybrasil_logo?e=1757548800&v=beta&t=lLNxu3DhJCq-XfN6ta3MgT8K6ioBWa7ZvD0OP-4ZDoY',
    texto: 'Campuseiros! 💧 Lembrete importante: mantenham-se hidratados durante os eventos! O corpo precisa de água para manter a energia e o foco nas palestras e workshops. Levem sempre uma garrafinha!',
    hashtags: ['#CampusParty', '#Hidratacao', '#Saude', '#DicasCampus'],
    botaoAcao: { texto: 'Saiba Mais', link: '/dicas-saude' },
    curtidas: 142,
    curtido: false,
    tempo: '2h'
  },
  {
    id: 2,
    nome: 'Lucas Oliveira - STAFF Campus',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    texto: 'Galera! 🔥 Não percam os próximos eventos da Campus Party! CPGoiás5 em Junho e CPWeekend Aracaju em Outubro. Já garantiram seus ingressos? As palestras de IA e Web3 prometem ser épicas!',
    hashtags: ['#CPGoias5', '#CPWeekendAracaju', '#ProximosEventos', '#IA', '#Web3'],
    botaoAcao: { texto: 'Comprar Ingresso', link: '/ingressos' },
    curtidas: 267,
    curtido: false,
    tempo: '6h'
  },
  {
    id: 3,
    nome: 'Equipe Médica CP',
    avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face',
    texto: 'Pessoal, durante os 4 dias de evento é essencial beber pelo menos 2 litros de água por dia! 🚰 Temos bebedouros espalhados por toda a arena. Sintomas de desidratação incluem dor de cabeça e cansaço.',
    hashtags: ['#SaudeCampus', '#Hidratacao', '#CuidadosMedicos'],
    botaoAcao: { texto: 'Localizar Bebedouros', link: '/mapa-bebedouros' },
    curtidas: 89,
    curtido: true,
    tempo: '4h'
  },
  {
    id: 4,
    nome: 'Campus Party Goiás',
    avatar: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=100&h=100&fit=crop&crop=center',
    texto: 'Campuseiros de Goiás! 🏆 Faltam poucos meses para o #CPGoiás5. Preparem-se para 5 dias intensos de tecnologia, inovação e networking. Hidratem-se bem e venham com energia total!',
    hashtags: ['#CPGoias5', '#Goiania', '#Tecnologia', '#Networking'],
    botaoAcao: { texto: 'Ver Programação', link: '/programacao-goias' },
    curtidas: 198,
    curtido: true,
    tempo: '1d'
  },
  {
    id: 5,
    nome: 'Ana Santos - Nutricionista',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b332c2ba?w=100&h=100&fit=crop&crop=face',
    texto: 'Dica nutricional para os campuseiros! 🥤 Além da água, consumam frutas ricas em água como melancia e laranja. Evitem excesso de cafeína e bebidas açucaradas. Seu corpo agradece!',
    hashtags: ['#Nutricao', '#AlimentacaoSaudavel', '#CampusParty', '#Wellness'],
    botaoAcao: { texto: 'Dicas Nutricionais', link: '/nutricao' },
    curtidas: 156,
    curtido: false,
    tempo: '1d'
  }
];

export const mockComunidadeFeed = [
  {
    id: 1,
    usuario: {
      nome: 'Ana Silva',
      avatar: 'https://images.unsplash.com/photo-1751768785340-acd17b0331a0?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      verificado: true
    },
    texto: 'Acabei de sair da palestra sobre IA Generativa! 🤖 A evolução da tecnologia está impressionante. Quem mais estava lá? Vamos trocar ideias!',
    imagem: 'https://media.licdn.com/dms/image/v2/D4D22AQFImxqjvkXsEg/feedshare-shrink_800/B4DZfRnTeXG8Ak-/0/1751568431769?e=1755129600&v=beta&t=swoRjZQ9gSc9PGF0LIQQZxgqA_E38Ip4OksEw1gMh8o',
    hashtags: ['#IA', '#CampusParty', '#Tecnologia', '#Inovacao'],
    curtidas: 89,
    curtido: false,
    comentarios: [
      {
        id: 1,
        usuario: 'João Santos',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face',
        texto: 'Estava lá também! Incrível mesmo! 🚀',
        tempo: '2h'
      },
      {
        id: 2,
        usuario: 'Maria Costa',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face',
        texto: 'Perdeu a parte sobre GPT-4? Foi sensacional!',
        tempo: '1h'
      }
    ],
    tempo: '3h'
  },
  {
    id: 2,
    usuario: {
      nome: 'Carlos Mendoza',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      verificado: false
    },
    texto: 'Networking é tudo! 🤝 Conheci pessoas incríveis hoje na área de blockchain. A comunidade tech é realmente especial. #networking #blockchain',
    imagem: 'https://media.licdn.com/dms/image/v2/D4D22AQH3BQ3RCg1MxA/feedshare-shrink_800/B4DZfRnTebGgAk-/0/1751568431575?e=1755129600&v=beta&t=AghCHSYuT_SeiT5bppGbf8sXfdwlmmQpARdwewlZh-A',
    hashtags: ['#Networking', '#Blockchain', '#CampusParty', '#Conexoes'],
    curtidas: 156,
    curtido: true,
    comentarios: [
      {
        id: 1,
        usuario: 'Fernanda Lima',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=50&h=50&fit=crop&crop=face',
        texto: 'Verdade! Fiz várias conexões também 💪',
        tempo: '4h'
      }
    ],
    tempo: '5h'
  },
  {
    id: 3,
    usuario: {
      nome: 'Roberta Tech',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face',
      verificado: true
    },
    texto: 'Quem mais está empolgado com Web3? 🌐 As possibilidades são infinitas! Acabei de participar de um workshop incrível sobre NFTs e DeFi.',
    imagem: 'https://media.licdn.com/dms/image/v2/D4D22AQGzHGCSzzjh3Q/feedshare-shrink_800/B4DZfRnTezG8Ag-/0/1751568431685?e=1755129600&v=beta&t=HkLxpch1BsXavh7pFzqhrvB1RD-kTA82H6qGNKj38GM',
    hashtags: ['#Web3', '#NFT', '#DeFi', '#Blockchain', '#Futuro'],
    curtidas: 234,
    curtido: false,
    comentarios: [
      {
        id: 1,
        usuario: 'Pedro Crypto',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop&crop=face',
        texto: 'Web3 é o futuro! 🚀',
        tempo: '6h'
      },
      {
        id: 2,
        usuario: 'Luciana Dev',
        avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=50&h=50&fit=crop&crop=face',
        texto: 'Adorei o workshop! Muito esclarecedor',
        tempo: '5h'
      },
      {
        id: 3,
        usuario: 'Rafael Blockchain',
        avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=50&h=50&fit=crop&crop=face',
        texto: 'Vamos criar um grupo para discutir mais sobre isso!',
        tempo: '4h'
      }
    ],
    tempo: '7h'
  },
  {
    id: 4,
    usuario: {
      nome: 'Diego Gamer',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face',
      verificado: false
    },
    texto: 'Game dev é paixão! 🎮 Participando da Game Jam aqui na Campus Party. Quem mais está desenvolvendo jogos? Vamos trocar experiências!',
    hashtags: ['#GameDev', '#GameJam', '#IndieGames', '#Unity', '#Programming'],
    curtidas: 78,
    curtido: true,
    comentarios: [
      {
        id: 1,
        usuario: 'Camila Games',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=50&h=50&fit=crop&crop=face',
        texto: 'Estou na Game Jam também! Qual engine você está usando?',
        tempo: '8h'
      }
    ],
    tempo: '9h'
  },
  {
    id: 5,
    usuario: {
      nome: 'Startup Campus',
      avatar: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=100&h=100&fit=crop&crop=face',
      verificado: true
    },
    texto: 'Pitch perfeito! 💡 Acabamos de apresentar nossa startup de sustentabilidade tech. Obrigado a todos que vieram assistir e deram feedback!',
    hashtags: ['#Startup', '#Pitch', '#Sustentabilidade', '#Inovacao', '#Empreendedorismo'],
    curtidas: 312,
    curtido: false,
    comentarios: [
      {
        id: 1,
        usuario: 'Investidor Tech',
        avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=50&h=50&fit=crop&crop=face',
        texto: 'Projeto muito interessante! Vamos conversar?',
        tempo: '10h'
      },
      {
        id: 2,
        usuario: 'Mentor Campus',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face',
        texto: 'Parabéns pela apresentação! 👏',
        tempo: '9h'
      }
    ],
    tempo: '11h'
  }
];

export const mockChats = [
  {
    id: 1,
    tipo: 'privado',
    nome: 'Ana Silva',
    avatar: 'https://unsplash.com/pt-br/fotografias/uma-fotografia-de-retrato-mostra-uma-pessoa-com-dupla-exposicao-W_rtUkr9Kgk',
    ultimaMensagem: 'Áudio',
    tempo: '10:30',
    naoLidas: 2,
    online: true,
    mensagens: [
      {
        id: 1,
        remetente: 'Ana Silva',
        texto: 'Oi! Tudo bem?',
        tempo: '10:25',
        minha: false,
        tipo: 'texto'
      },
      {
        id: 2,
        remetente: 'Você',
        texto: 'Oi Ana! Tudo ótimo, e você?',
        tempo: '10:26',
        minha: true,
        tipo: 'texto'
      },
      {
        id: 3,
        remetente: 'Ana Silva',
        texto: 'Vamos nos encontrar na palestra de IA?',
        tempo: '10:28',
        minha: false,
        tipo: 'texto'
      },
      {
        id: 4,
        remetente: 'Ana Silva',
        duracao: '0:15',
        tempo: '10:30',
        minha: false,
        tipo: 'audio'
      }
    ]
  },
  {
    id: 2,
    tipo: 'grupo',
    nome: 'Desenvolvedores IA',
    avatar: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?w=100&h=100&fit=crop&crop=center',
    ultimaMensagem: 'Carlos: Documento compartilhado',
    tempo: '09:45',
    naoLidas: 5,
    participantes: 24,
    mensagens: [
      {
        id: 1,
        remetente: 'Pedro Santos',
        texto: 'Pessoal, quem vai na palestra de Machine Learning?',
        tempo: '09:20',
        minha: false,
        tipo: 'texto'
      },
      {
        id: 2,
        remetente: 'Você',
        texto: 'Eu vou! Vai ser incrível 🚀',
        tempo: '09:22',
        minha: true,
        tipo: 'texto'
      },
      {
        id: 3,
        remetente: 'Maria Tech',
        duracao: '0:32',
        tempo: '09:25',
        minha: false,
        tipo: 'audio'
      },
      {
        id: 4,
        remetente: 'Carlos Dev',
        nomeArquivo: 'Apresentacao_IA.pdf',
        tamanhoArquivo: '2.5 MB',
        tempo: '09:45',
        minha: false,
        tipo: 'arquivo'
      }
    ]
  },
  {
    id: 3,
    tipo: 'privado',
    nome: 'João Maker',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    ultimaMensagem: 'Foto',
    tempo: '08:15',
    naoLidas: 0,
    online: false,
    mensagens: [
      {
        id: 1,
        remetente: 'João Maker',
        texto: 'Viu o projeto de robótica que apresentaram?',
        tempo: '08:10',
        minha: false,
        tipo: 'texto'
      },
      {
        id: 2,
        remetente: 'Você',
        texto: 'Vi sim! Muito impressionante',
        tempo: '08:12',
        minha: true,
        tipo: 'texto'
      },
      {
        id: 3,
        remetente: 'João Maker',
        imagem: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop',
        tempo: '08:15',
        minha: false,
        tipo: 'imagem'
      }
    ]
  },
  {
    id: 4,
    tipo: 'grupo',
    nome: 'Blockchain Brasil',
    avatar: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=100&h=100&fit=crop&crop=center',
    ultimaMensagem: 'Fernanda: Código fonte',
    tempo: '07:30',
    naoLidas: 12,
    participantes: 156,
    mensagens: [
      {
        id: 1,
        remetente: 'Ricardo Crypto',
        texto: 'Pessoal, o que acharam da palestra sobre DeFi?',
        tempo: '07:00',
        minha: false,
        tipo: 'texto'
      },
      {
        id: 2,
        remetente: 'Fernanda Blockchain',
        nomeArquivo: 'smart-contract.sol',
        tamanhoArquivo: '15 KB',
        tempo: '07:30',
        minha: false,
        tipo: 'arquivo'
      }
    ]
  },
  {
    id: 5,
    tipo: 'privado',
    nome: 'Camila Games',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face',
    ultimaMensagem: 'Obrigada pela ajuda!',
    tempo: 'ontem',
    naoLidas: 0,
    online: true,
    mensagens: [
      {
        id: 1,
        remetente: 'Camila Games',
        texto: 'Consegui resolver o bug! Obrigada pela ajuda! 🙏',
        tempo: 'ontem',
        minha: false,
        tipo: 'texto'
      }
    ]
  },
  {
    id: 6,
    tipo: 'grupo',
    nome: 'Startups Campus',
    avatar: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=100&h=100&fit=crop&crop=center',
    ultimaMensagem: 'Investidor: Projeto interessante!',
    tempo: 'ontem',
    naoLidas: 3,
    participantes: 89,
    mensagens: [
      {
        id: 1,
        remetente: 'Investidor Tech',
        texto: 'Projeto muito interessante! Vamos conversar?',
        tempo: 'ontem',
        minha: false,
        tipo: 'texto'
      }
    ]
  }
]; 