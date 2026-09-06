// Traduções dos 39 produtos das oito categorias do trabalho, consultados na DummyJSON.
// Somente a apresentação textual é localizada; os dados recebidos da API não são alterados.
const translations = {
  83: {
    title: 'Camisa xadrez azul e preta',
    description: 'Camisa masculina elegante e confortável com estampa xadrez clássica. Feita com tecido de alta qualidade, é adequada para ocasiões casuais e semiformais.',
  },
  84: {
    title: 'Camiseta masculina Gigabyte Aorus',
    description: 'Camiseta descolada e casual para fãs de jogos. Com o logotipo Aorus e um design elegante, é ideal para expressar seu estilo gamer.',
  },
  85: {
    title: 'Camisa masculina xadrez clássica',
    description: 'Camisa masculina atemporal e versátil com estampa xadrez clássica. O caimento confortável e o estilo casual fazem dela uma peça essencial para diversas ocasiões.',
  },
  86: {
    title: 'Camisa masculina de manga curta',
    description: 'Uma opção leve e elegante para os dias quentes. Com caimento confortável e mangas curtas, é ideal para um visual descontraído e bem-arrumado.',
  },
  87: {
    title: 'Camisa masculina xadrez',
    description: 'Camisa clássica e versátil com uma elegante estampa xadrez. Adequada para diversas ocasiões, acrescenta um toque de elegância ao seu guarda-roupa.',
  },
  88: {
    title: 'Tênis Nike Air Jordan 1 vermelho e preto',
    description: 'O Nike Air Jordan 1 vermelho e preto é um icônico tênis de basquete, conhecido pelo design elegante e pelos recursos de alto desempenho que o tornam um favorito entre atletas e fãs de tênis.',
  },
  89: {
    title: 'Chuteiras de beisebol Nike',
    description: 'As chuteiras de beisebol Nike foram projetadas para oferecer máxima tração e desempenho em campo. Proporcionam estabilidade e suporte aos jogadores durante partidas e treinos.',
  },
  90: {
    title: 'Tênis Puma Future Rider',
    description: 'Os tênis Puma Future Rider combinam estilo retrô e conforto moderno. Ideais para uso casual, são uma opção confortável e estilosa para o dia a dia.',
  },
  91: {
    title: 'Tênis esportivo branco-creme e vermelho',
    description: 'Este tênis esportivo combina estilo e funcionalidade, sendo uma escolha moderna para os fãs de esportes. A combinação de vermelho e branco-creme acrescenta um toque ousado e cheio de energia.',
  },
  92: {
    title: 'Tênis esportivo vermelho e branco-creme',
    description: 'Outra versão do tênis esportivo vermelho e branco-creme, com um design exclusivo. Oferece estilo e conforto para ocasiões casuais.',
  },
  93: {
    title: 'Relógio com pulseira de couro marrom',
    description: 'Relógio elegante com design clássico. A pulseira de couro legítimo e o mostrador refinado acrescentam um toque de sofisticação ao visual.',
  },
  94: {
    title: 'Relógio Longines Master Collection',
    description: 'O Longines Master Collection é um relógio elegante e refinado, conhecido pela precisão e pelo trabalho artesanal. Seu design atemporal é um símbolo de luxo e sofisticação.',
  },
  95: {
    title: 'Relógio Rolex Cellini Date com mostrador preto',
    description: 'O Rolex Cellini Date com mostrador preto é um relógio clássico e prestigiado. Com mostrador preto e indicador de data, transmite sofisticação e representa a tradição da Rolex.',
  },
  96: {
    title: 'Relógio Rolex Cellini Moonphase',
    description: 'O Rolex Cellini Moonphase é uma obra-prima da relojoaria, com indicador de fases da Lua e design requintado. Reflete o compromisso da Rolex com a precisão e a elegância.',
  },
  97: {
    title: 'Relógio Rolex Datejust',
    description: 'O Rolex Datejust é um relógio icônico e versátil com visor de data. Conhecido pelo design atemporal e pela confiabilidade, é um símbolo da excelência da Rolex em relojoaria.',
  },
  98: {
    title: 'Relógio Rolex Submariner',
    description: 'O Rolex Submariner é um lendário relógio de mergulho com uma rica história. Conhecido pela durabilidade e resistência à água, é um símbolo de aventura e exploração.',
  },
  172: {
    title: 'Bolsa feminina azul',
    description: 'Acessório elegante e espaçoso para o dia a dia. Com uma cor azul vibrante e vários compartimentos, combina moda e funcionalidade.',
  },
  173: {
    title: 'Bolsa feminina de couro Heshe',
    description: 'Bolsa de couro luxuosa e de alta qualidade para a mulher sofisticada. Com design atemporal e fabricação durável, é um acessório versátil.',
  },
  174: {
    title: 'Bolsa feminina Prada',
    description: 'Uma icônica bolsa de grife que transmite elegância e luxo. Feita com precisão e com o logotipo Prada, é uma peça de destaque para quem aprecia moda.',
  },
  175: {
    title: 'Mochila branca de couro sintético',
    description: 'Mochila moderna e prática para a mulher contemporânea. Com design branco elegante e amplo espaço interno, é ideal para visuais casuais e para a rotina em movimento.',
  },
  176: {
    title: 'Bolsa feminina preta',
    description: 'Acessório clássico e versátil que combina com diferentes roupas. Com sua cor preta atemporal e design funcional, é uma peça essencial no guarda-roupa feminino.',
  },
  177: {
    title: 'Vestido de gala preto',
    description: 'Vestido de noite elegante e atemporal. Com um design preto refinado, é ideal para eventos formais e ocasiões especiais, transmitindo sofisticação e estilo.',
  },
  178: {
    title: 'Espartilho de couro com saia',
    description: 'Conjunto ousado que combina um espartilho estiloso com uma saia coordenada. Ideal para quem acompanha as tendências da moda, destaca-se em qualquer evento.',
  },
  179: {
    title: 'Espartilho com saia preta',
    description: 'Conjunto elegante e versátil que combina um espartilho moderno com uma saia preta clássica. Oferece um visual atual e coordenado para diversas ocasiões.',
  },
  180: {
    title: 'Vestido com estampa de ervilhas',
    description: 'Vestido estiloso e confortável com estampa de ervilhas. Ideal para passeios casuais, acrescenta um toque divertido ao guarda-roupa e é uma ótima opção para o dia a dia.',
  },
  181: {
    title: 'Conjunto Marni vermelho e preto',
    description: 'Conjunto de alfaiataria sofisticado e moderno. A combinação de tons vermelhos e pretos destaca o design contemporâneo para um visual ousado e confiante.',
  },
  182: {
    title: 'Brinco de cristal verde',
    description: 'Acessório deslumbrante com um cristal verde vibrante. Seu design clássico acrescenta elegância ao visual, sendo ideal para ocasiões formais ou especiais.',
  },
  183: {
    title: 'Brinco oval verde',
    description: 'Acessório elegante e versátil com formato oval exclusivo. Para ocasiões casuais ou mais elegantes, a tonalidade verde e o design contemporâneo fazem dele uma peça de destaque.',
  },
  184: {
    title: 'Brinco tropical',
    description: 'Acessório divertido inspirado em elementos tropicais. Com cores vibrantes e design alegre, é ideal para acrescentar um toque de verão ao visual.',
  },
  185: {
    title: 'Chinelo preto e marrom',
    description: 'Uma escolha confortável e estilosa para uso casual. A combinação de preto e marrom acrescenta um toque de sofisticação aos momentos de descanso.',
  },
  186: {
    title: 'Sapatos de salto Calvin Klein',
    description: 'Elegantes e sofisticados, os sapatos de salto Calvin Klein foram projetados para ocasiões formais. Com design clássico e materiais de alta qualidade, complementam um visual cheio de estilo.',
  },
  187: {
    title: 'Sapatos femininos dourados',
    description: 'Uma escolha glamorosa para ocasiões especiais. Com tonalidade dourada e design elegante, acrescentam um toque de luxo ao visual.',
  },
  188: {
    title: 'Sapatos Pampi',
    description: 'Os sapatos Pampi combinam conforto e estilo para o dia a dia. Com design versátil, são adequados para diversas ocasiões casuais e proporcionam um visual moderno e descontraído.',
  },
  189: {
    title: 'Sapatos vermelhos',
    description: 'Estes sapatos se destacam pela cor vermelha vibrante. Seja em uma festa ou em um passeio casual, acrescentam cor e estilo ao guarda-roupa.',
  },
  190: {
    title: 'Relógio IWC Ingenieur automático de aço',
    description: 'Relógio durável e sofisticado. Com caixa de aço inoxidável e movimento automático, combina precisão e estilo para quem aprecia relógios.',
  },
  191: {
    title: 'Relógio Rolex Cellini Moonphase',
    description: 'O relógio Rolex Cellini Moonphase é uma obra-prima da relojoaria. Com indicador de fases da Lua, demonstra o trabalho artesanal e a elegância pelos quais a Rolex é reconhecida.',
  },
  192: {
    title: 'Relógio feminino Rolex Datejust',
    description: 'Relógio icônico projetado para mulheres. Com design atemporal e indicador de data, oferece elegância e funcionalidade.',
  },
  193: {
    title: 'Relógio feminino dourado',
    description: 'Acessório deslumbrante que combina luxo e estilo. Com caixa banhada a ouro e design elegante, acrescenta um toque de glamour a qualquer visual.',
  },
  194: {
    title: 'Relógio de pulso feminino',
    description: 'Relógio versátil e moderno para o dia a dia. Com pulseira confortável e design simples e elegante, combina com diversos estilos.',
  },
};

export function getProductText(product) {
  const translation = translations[product?.id];
  return {
    title: translation?.title ?? product?.title,
    description: translation?.description ?? product?.description,
  };
}
