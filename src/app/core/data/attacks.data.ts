import { Attack } from '../models/attack.model';

export const ATTACKS_DATA: Attack[] = [
  {
    id: 'stuxnet',
    yearBadge: '2009–2010',
    navLabel: '2010 — STUXNET',
    title: 'Stuxnet',
    subtitle: '// A PRIMEIRA ARMA CIBERNÉTICA DO MUNDO',
    colorClass: 'red',
    badges: [
      { label: 'NAÇÃO-ESTADO', variant: 'nation' },
      { label: 'ZERO-DAY ×4', variant: 'zero' },
      { label: 'OPERAÇÃO CONJUNTA EUA/ISRAEL', variant: 'apt' },
    ],
    damageCards: [
      { value: '1.000+', label: 'centrífugas destruídas', color: 'red' },
      { value: '30%', label: 'atraso no programa nuclear iraniano', color: 'amber' },
      { value: '45+', label: 'países afetados colateralmente', color: 'blue' },
    ],
    infoBlocks: [
      {
        icon: 'ti-target',
        title: 'O que foi',
        content: 'Worm de sofisticação sem precedentes, desenvolvido conjuntamente por EUA e Israel como parte da <strong>Operação Olympic Games</strong>. Seu alvo era exclusivamente as centrífugas IR-1 usadas no enriquecimento de urânio na instalação de Natanz, no Irã. Foi o primeiro malware capaz de causar <strong>dano físico real a equipamentos industriais</strong>, representando a transição definitiva da guerra cibernética para o mundo físico.',
      },
      {
        icon: 'ti-alert-triangle',
        title: 'Como funcionou',
        content: 'Explorou <strong>quatro vulnerabilidades zero-day do Windows</strong> — número extraordinário para um único malware. Entrou via pen drives (air-gap bypass), se instalou silenciosamente e monitorou PLCs Siemens S7-315 e S7-417. Quando identificou as centrífugas corretas, <strong>acelerou e desacelerou os rotores</strong> fora dos limites seguros enquanto reportava leituras normais aos operadores.',
      },
    ],
    techSteps: [
      { num: '01 —', title: 'Infecção inicial', description: 'Pen drive contaminado inserido em computador Windows conectado à rede de Natanz. Exploração de vulnerabilidade LNK (CVE-2010-2568).' },
      { num: '02 —', title: 'Propagação', description: 'Auto-replicação via compartilhamentos de rede, impressoras e Step7 da Siemens. Rootkit ocultava sua presença de todos os antivírus da época.' },
      { num: '03 —', title: 'Reconhecimento', description: 'Aguardou silenciosamente até identificar as configurações exatas dos PLCs e conversores de frequência Vacon e Fararo Paya usados nas centrífugas.' },
      { num: '04 —', title: 'Sabotagem', description: 'Alterou ciclos de rotação de 1.064 Hz para 1.410 Hz e depois para 2 Hz. Exibiu dados falsificados aos operadores por meses enquanto destruía o maquinário.' },
    ],
    legacyTitle: 'Legado e impacto geopolítico',
    legacyContent: 'Stuxnet provou que infraestruturas físicas críticas — usinas, hospitais, redes elétricas — são vulneráveis a ataques digitais. Inaugurou a era da <strong>guerra cibernética de Estado</strong> e forçou todos os governos do mundo a revisarem suas doutrinas militares. O código, ao vazar para a internet, serviu de base para ataques posteriores como o <strong>Duqu</strong> e o <strong>Flame</strong>, ambos atribuídos aos mesmos atores. O Irã respondeu criando uma das maiores forças de guerra cibernética do mundo.',
    victims: ['NATANZ — IRÃ', 'SIEMENS', 'ÍNDIA (COLATERAL)', 'INDONÉSIA (COLATERAL)', 'AZERBAIJÃO (COLATERAL)'],
  },
  {
    id: 'mirai',
    yearBadge: 'OUTUBRO 2016',
    navLabel: '2016 — MIRAI',
    title: 'Mirai Botnet',
    subtitle: '// QUANDO A GELADEIRA DERRUBOU METADE DA INTERNET',
    colorClass: 'amber',
    badges: [
      { label: 'BOTNET IOT', variant: 'iot' },
      { label: 'ATAQUE DDOS', variant: 'worm' },
      { label: 'CÓDIGO-FONTE VAZADO', variant: 'purple' },
    ],
    damageCards: [
      { value: '1.2 Tbps', label: 'pico de tráfego malicioso', color: 'red' },
      { value: '600k', label: 'dispositivos IoT comprometidos', color: 'amber' },
      { value: '80+', label: 'sites derrubados simultaneamente', color: 'blue' },
    ],
    infoBlocks: [
      {
        icon: 'ti-router',
        title: 'O que foi',
        content: 'Botnet construída por <strong>Paras Jha</strong>, um estudante universitário de 21 anos, originalmente para vantagem em disputas no mundo dos servidores de Minecraft. O malware escaneava a internet em busca de dispositivos IoT — câmeras IP, DVRs e roteadores — que ainda usavam <strong>credenciais padrão de fábrica</strong> (admin/admin, root/root). Sem nenhum exploit sofisticado: apenas senhas que nunca foram trocadas.',
      },
      {
        icon: 'ti-globe',
        title: 'O ataque ao DNS Dyn',
        content: 'Em 21 de outubro de 2016, a botnet foi direcionada ao provedor de DNS <strong>Dyn</strong>, responsável pela resolução de nomes de boa parte da internet americana. O tráfego atingiu 1,2 Tbps — recorde à época. <strong>Twitter, Netflix, Amazon, Spotify, PayPal, GitHub e Reddit</strong> ficaram inacessíveis por horas na costa leste dos EUA e em partes da Europa.',
      },
    ],
    techSteps: [
      { num: '01 —', title: 'Scanner massivo', description: 'Varreu a internet em busca de dispositivos com Telnet aberto na porta 23 e 2323. Testava 61 pares de credenciais padrão conhecidas de fabricantes.' },
      { num: '02 —', title: 'Infecção', description: 'Ao acessar o dispositivo, baixava o payload Mirai diretamente na memória RAM — sem arquivo em disco, dificultando a detecção e o rastreamento.' },
      { num: '03 —', title: 'C2 Command', description: 'Dispositivo reportava a servidor de Comando e Controle e aguardava ordens. O botmaster coordenava centenas de milhares de bots simultaneamente.' },
      { num: '04 —', title: 'Flood DDoS', description: 'Ordem de ataque enviada: todos os bots disparavam UDP flood, DNS flood e SYN flood contra o alvo. Volume impossível de mitigar sem infraestrutura especializada.' },
    ],
    legacyTitle: 'Legado e o problema que persiste',
    legacyContent: 'Mirai expôs uma falha sistêmica da indústria: bilhões de dispositivos IoT chegam ao mercado sem requisitos mínimos de segurança. Após o vazamento do <strong>código-fonte em outubro de 2016</strong>, dezenas de variantes surgiram — Satori, Okiru, Masuta, Reaper. Em 2023, ataques DDoS superiores a 3,4 Tbps ainda utilizavam técnicas derivadas do Mirai. O problema fundamental das <strong>senhas padrão</strong> nunca foi completamente resolvido pela indústria de hardware.',
    victims: ['DYN — DNS PROVIDER', 'TWITTER', 'NETFLIX', 'AMAZON AWS', 'GITHUB', 'KREBS ON SECURITY (620 Gbps)'],
  },
  {
    id: 'wannacry',
    yearBadge: '12 MAIO 2017',
    navLabel: '2017 — WANNACRY',
    title: 'WannaCry',
    subtitle: '// O RANSOMWARE QUE PAROU HOSPITAIS E FÁBRICAS GLOBAIS',
    colorClass: 'red',
    badges: [
      { label: 'RANSOMWARE', variant: 'ransom' },
      { label: 'WORM AUTÔNOMO', variant: 'worm' },
      { label: 'LAZARUS GROUP — COREIA DO NORTE', variant: 'apt' },
    ],
    damageCards: [
      { value: '230k', label: 'computadores infectados', color: 'red' },
      { value: '150', label: 'países atingidos em 24h', color: 'amber' },
      { value: 'US$ 4B', label: 'prejuízo estimado global', color: 'blue' },
    ],
    infoBlocks: [
      {
        icon: 'ti-lock',
        title: 'O que foi',
        content: 'Ransomware autopropagável que combinava criptografia de arquivos com capacidade de worm para se espalhar automaticamente. Utilizou o exploit <strong>EternalBlue</strong>, desenvolvido pela NSA e vazado pelo grupo Shadow Brokers, que explorava vulnerabilidade crítica no protocolo SMBv1 do Windows. A Microsoft havia lançado patch em março de 2017 — dois meses antes. Sistemas desatualizados foram devastados.',
      },
      {
        icon: 'ti-building-hospital',
        title: 'Impacto no NHS britânico',
        content: 'O Sistema Nacional de Saúde do Reino Unido foi a vítima mais emblemática. <strong>19.000 consultas médicas foram canceladas</strong>. Ambulâncias foram redirecionadas. Hospitais ficaram sem acesso a prontuários e exames. O prejuízo direto ao NHS foi de <strong>£ 92 milhões</strong>. Vidas foram colocadas em risco — o ataque demonstrou que infraestrutura crítica de saúde é um alvo de alto risco.',
      },
    ],
    techSteps: [
      { num: '01 —', title: 'EternalBlue', description: 'Exploit da NSA escaneia a internet em busca de portas 445 (SMBv1) abertas. Qualquer Windows sem patch MS17-010 era vulnerável sem nenhuma interação do usuário.' },
      { num: '02 —', title: 'DoublePulsar', description: 'Backdoor implantado no kernel do Windows. Permitia execução arbitrária de código com privilégios máximos e download do payload de ransomware.' },
      { num: '03 —', title: 'Criptografia', description: 'AES-128 + RSA-2048 aplicados em todos os arquivos do sistema. Extensão .WCRY adicionada. Resgate de US$ 300–600 em Bitcoin exigido por máquina infectada.' },
      { num: '04 —', title: 'Kill switch', description: 'Pesquisador Marcus Hutchins registrou o domínio hardcoded no código por US$ 10,69 — travando o malware globalmente. Uma das maiores fortunas de timing da história da segurança.' },
    ],
    quote: {
      text: '"Os hackers também mudaram as rotas de ambulâncias, dificultando o atendimento de pessoas que precisavam de socorro imediato."',
      cite: '— Relatório de impacto do NHS, 2017',
    },
    legacyTitle: 'Legado e lição duradoura',
    legacyContent: 'WannaCry provou que <strong>patches de segurança são questão de sobrevivência</strong>, não burocracia. Também abriu debate político crucial: a NSA havia guardado o EternalBlue por anos como arma ofensiva — e sua perda custou bilhões ao mundo. O Brasil foi o <strong>5º país mais afetado</strong>. Petrobras e Vivo desligaram sistemas preventivamente. Variantes sem kill switch ainda infectam sistemas em 2024, tornando WannaCry um dos malwares mais longevos da história.',
    victims: ['NHS — REINO UNIDO', 'TELEFÓNICA — ESPANHA', 'FEDEX', 'HONDA', 'NISSAN', 'RENAULT', 'PETROBRAS (PREVENTIVO)', 'VIVO (PREVENTIVO)'],
  },
  {
    id: 'solar',
    yearBadge: 'MARÇO–DEZ 2020',
    navLabel: '2020 — SOLARWINDS',
    title: 'SolarWinds',
    subtitle: '// A ESPIONAGEM MAIS SOFISTICADA DA HISTÓRIA MODERNA',
    colorClass: 'blue',
    badges: [
      { label: 'ESPIONAGEM ESTADO', variant: 'spy' },
      { label: 'SUPPLY CHAIN ATTACK', variant: 'supply' },
      { label: 'APT29 — COZY BEAR — RÚSSIA (SVR)', variant: 'apt' },
    ],
    damageCards: [
      { value: '18.000', label: 'organizações com update infectado', color: 'red' },
      { value: '9', label: 'agências federais dos EUA comprometidas', color: 'amber' },
      { value: '9 meses', label: 'presença não detectada nas redes', color: 'blue' },
    ],
    infoBlocks: [
      {
        icon: 'ti-package',
        title: 'O que foi',
        content: 'Operação de espionagem de nação-estado atribuída ao <strong>SVR russo (APT29 / Cozy Bear)</strong> que comprometeu a cadeia de suprimentos de software da SolarWinds. O malware <strong>SUNBURST</strong> foi inserido nas atualizações legítimas do Orion — software de monitoramento de rede usado por agências governamentais dos EUA, Fortune 500 e governos aliados. Quem instalou a atualização recebeu um backdoor assinado digitalmente pela própria SolarWinds.',
      },
      {
        icon: 'ti-building-bank',
        title: 'Extensão do dano',
        content: 'Foram comprometidos os Departamentos de <strong>Tesouro, Estado, Defesa, Comércio, Segurança Interna</strong> e a NNSA (agência responsável pelo arsenal nuclear dos EUA). Também a <strong>FireEye</strong> — uma das principais empresas de cibersegurança do mundo. A Recorded Future identificou <strong>mais de 200 vítimas adicionais</strong> que nunca divulgaram publicamente o comprometimento.',
      },
    ],
    techSteps: [
      { num: '01 —', title: 'Acesso ao build', description: 'Atacantes comprometeram o pipeline de build do Orion, inserindo código SUNBURST diretamente no processo de compilação. O código malicioso foi assinado com certificado legítimo da SolarWinds.' },
      { num: '02 —', title: 'Sleeping — 12 dias', description: 'O malware ficava inativo por 12 a 14 dias após a instalação, sem gerar tráfego suspeito. Técnica de evasão para burlar sandboxes de análise automática.' },
      { num: '03 —', title: 'Reconhecimento', description: 'Após ativação, coletava informações do ambiente: usuários, domínios, software instalado. Só ativava o payload completo se não detectasse ferramentas de segurança como Wireshark ou sistemas Kaspersky.' },
      { num: '04 —', title: 'Exfiltração', description: 'Tráfego C2 camuflado como comunicação legítima do Orion com subdomínios da avsvmcloud.com. Tokens SAML forjados permitiam acesso total a ambientes Office 365 e Azure AD sem disparar alertas.' },
    ],
    quote: {
      text: '"Isso combinou técnicas extraordinariamente furtivas, usando ferramentas nunca antes vistas, com uma estratégia focada em um elo fraco na cadeia de fornecimento de software — uma abordagem que especialistas temiam há anos."',
      cite: '— The Wall Street Journal, dezembro de 2020',
    },
    legacyTitle: 'Legado e redefinição de segurança',
    legacyContent: 'SolarWinds redefiniu o conceito de <strong>confiança zero (Zero Trust)</strong>. Provou que mesmo software legítimo, assinado e de fornecedores confiáveis pode ser um vetor de ataque. A operação ficou ativa por <strong>9 meses sem ser detectada</strong>. O conceito de <strong>supply chain security</strong> tornou-se prioridade máxima para governos e empresas. A Casa Branca emitiu o Executivo 14028 em 2021, exigindo novas práticas de segurança em toda cadeia de software federal.',
    victims: ['DEPARTAMENTO DO TESOURO — EUA', 'DEPARTAMENTO DE ESTADO — EUA', 'MICROSOFT', 'FIREEYE', 'INTEL', 'CISCO', 'DELOITTE', 'NNSA — ARSENAL NUCLEAR EUA'],
  },
];