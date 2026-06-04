import { PillarCard, MfaCard, ChecklistItem, VpnItem, HabitItem } from '../models/protection.model';

export const PILLAR_CARDS: PillarCard[] = [
  { icon: 'ti-key',           title: 'Senhas fortes',        description: 'Senhas únicas, longas e aleatórias para cada serviço. Nunca reutilize. Use um gerenciador para criar e guardar com segurança.',                                               tag: 'PRIORIDADE MÁXIMA', variant: 'g' },
  { icon: 'ti-device-mobile', title: 'Autenticação MFA',     description: 'Segundo fator obrigatório em e-mail, banco e redes sociais. Mesmo com a senha roubada, o invasor não entra sem o seu celular.',                                                tag: 'PRIORIDADE MÁXIMA', variant: 'g' },
  { icon: 'ti-refresh',       title: 'Atualizações',         description: 'Patches corrigem vulnerabilidades conhecidas. Sistemas desatualizados são portas abertas — ative atualizações automáticas agora.',                                               tag: 'ESSENCIAL',         variant: 'b' },
  { icon: 'ti-wifi',          title: 'VPN em redes públicas',description: 'Criptografa seu tráfego em redes não confiáveis. Use sempre em aeroportos, cafés, hotéis e shoppings para evitar interceptação.',                                               tag: 'ESSENCIAL',         variant: 'b' },
  { icon: 'ti-database',      title: 'Backup 3-2-1',         description: '3 cópias dos dados, em 2 mídias diferentes, sendo 1 offsite e isolada da rede. Única defesa eficaz contra ransomware.',                                                          tag: 'RECOMENDADO',       variant: 'a' },
  { icon: 'ti-eye',           title: 'Consciência digital',  description: 'Desconfie de urgência, links estranhos e pedidos inesperados. Phishing engana até especialistas — a atenção é sua última defesa.',                                              tag: 'RECOMENDADO',       variant: 'a' },
];

export const MFA_CARDS: MfaCard[] = [
  { icon: 'ti-device-mobile', iconColor: '#00FFB4', titleColor: '#00FFB4', title: 'App autenticador',    description: 'Google Authenticator, Authy ou Aegis geram códigos TOTP localmente no seu dispositivo. Não dependem de rede e são resistentes a SIM swap.',                                                                                                       recLabel: 'MAIS SEGURO',        recVariant: 'best'  },
  { icon: 'ti-usb',           iconColor: '#00FFB4', titleColor: '#00FFB4', title: 'Chave física (FIDO2)',description: 'YubiKey ou Google Titan são resistentes a phishing por design — a chave verifica o domínio real antes de autenticar. Proteção máxima para contas críticas.',                                                                                   recLabel: 'MAIS SEGURO',        recVariant: 'best'  },
  { icon: 'ti-message',       iconColor: '#FFB840', titleColor: '#FFB840', title: 'SMS / ligação',       description: 'Vulnerável a SIM swap — atacante convence operadora a transferir seu número. Melhor que nada, mas substitua por app autenticador se possível.',                                                                                                 recLabel: 'EVITE SE POSSÍVEL',  recVariant: 'ok'    },
  { icon: 'ti-mail',          iconColor: '#00FFB4', titleColor: '#00FFB4', title: 'E-mail (código)',     description: 'Código enviado por e-mail é seguro desde que seu e-mail principal esteja protegido com MFA forte. Não use como único fator de recuperação.',                                                                                                   recLabel: 'ACEITÁVEL',          recVariant: 'best'  },
  { icon: 'ti-ban',           iconColor: '#FF4A6A', titleColor: '#FF4A6A', title: 'Sem MFA algum',       description: 'Com só uma senha protegendo sua conta, um único vazamento de credencial expõe tudo. Em 2023, contas sem MFA foram comprometidas 10× mais que as protegidas.',                                                                                  recLabel: 'NUNCA RECOMENDADO',  recVariant: 'avoid' },
  { icon: 'ti-fingerprint',   iconColor: '#0080FF', titleColor: '#0080FF', title: 'Biometria',           description: 'Face ID e impressão digital são convenientes e seguros no dispositivo. Mas atenção: biometria não pode ser trocada se comprometida — use como complemento, não substituto.',                                                                   recLabel: 'BOM COMPLEMENTO',    recVariant: 'blue'  },
];

export const CHECKLIST_ITEMS: ChecklistItem[] = [
  { label: 'Uso senhas únicas e aleatórias',         done: false },
  { label: 'Uso gerenciador de senhas',              done: false },
  { label: 'MFA ativo no e-mail principal',          done: false },
  { label: 'MFA ativo no banco / fintech',           done: false },
  { label: 'Sistema operacional atualizado',         done: false },
  { label: 'Apps e navegador atualizados',           done: false },
  { label: 'Backup recente dos dados',               done: false },
  { label: 'VPN em redes Wi-Fi públicas',            done: false },
  { label: 'Revisei permissões de apps',             done: false },
  { label: 'Verifiquei e-mail em haveibeenpwned',    done: false },
  { label: 'Antivírus / EDR ativo',                  done: false },
  { label: 'Sei reconhecer tentativas de phishing',  done: false },
];

export const VPN_DO_ITEMS: VpnItem[] = [
  { icon: 'ti-circle-check', text: 'Ative VPN antes de conectar — todo tráfego fica criptografado mesmo em redes comprometidas' },
  { icon: 'ti-circle-check', text: 'Verifique o cadeado HTTPS na URL antes de inserir qualquer dado sensível' },
  { icon: 'ti-circle-check', text: 'Prefira dados móveis (4G/5G) para operações bancárias e acesso a contas críticas' },
  { icon: 'ti-circle-check', text: 'Desative Wi-Fi e Bluetooth quando não estiver usando para evitar conexões automáticas' },
  { icon: 'ti-circle-check', text: 'Esqueça redes públicas após o uso para evitar reconexão automática futura' },
];

export const VPN_DONT_ITEMS: VpnItem[] = [
  { icon: 'ti-circle-x', text: 'Acesse internet banking, cartão de crédito ou qualquer serviço financeiro sem VPN ativa' },
  { icon: 'ti-circle-x', text: 'Conecte em redes com nomes suspeitos como "Free Airport WiFi" ou "Starbucks Free" sem verificação' },
  { icon: 'ti-circle-x', text: 'Faça login em contas importantes — um atacante na mesma rede pode capturar cookies de sessão' },
  { icon: 'ti-circle-x', text: 'Aceite certificados de segurança inválidos ou avisos do navegador sobre conexão insegura' },
  { icon: 'ti-circle-x', text: 'Compartilhe arquivos ou ative descoberta de rede — outros usuários na mesma rede podem acessar' },
];

export const HABIT_ITEMS: HabitItem[] = [
  { num: '01', title: 'Desconfie da urgência',         description: 'Golpes sempre criam pressão de tempo: "sua conta será bloqueada", "clique agora". Urgência é a principal arma do phishing. Pare, respire e verifique pelo canal oficial.' },
  { num: '02', title: 'Verifique o remetente real',    description: 'E-mail de "suporte@banco.com.br.servidorx.com" não vem do banco. Olhe o domínio completo, não apenas o nome exibido — fraudadores falsificam nomes facilmente.' },
  { num: '03', title: 'Não clique — acesse diretamente',description: 'Se receber um link suspeito, não clique. Abra o navegador e acesse o site diretamente digitando o endereço. Simples, eficaz, elimina 100% do risco de links maliciosos.' },
  { num: '04', title: 'Revise permissões mensalmente', description: 'Verifique quais apps têm acesso à câmera, microfone, localização e contatos. Revogue o que não é necessário — dado que não é coletado não pode ser vazado.' },
  { num: '05', title: 'Bloqueie tela automaticamente', description: 'Configure bloqueio automático em 1–2 minutos em todos os dispositivos. Um celular desbloqueado em mãos erradas é pior que uma senha roubada.' },
  { num: '06', title: 'Use e-mails descartáveis',      description: 'Para cadastros em sites de pouca confiança, use serviços como SimpleLogin ou AnonAddy. Protege seu e-mail principal de spam e reduz exposição em vazamentos.' },
  { num: '07', title: 'Monitore seus vazamentos',      description: 'Acesse haveibeenpwned.com e verifique se seu e-mail aparece em bases de dados vazadas. Ative alertas automáticos para ser notificado em novos incidentes.' },
  { num: '08', title: 'Criptografe dispositivos',      description: 'Ative BitLocker (Windows) ou FileVault (Mac) no computador e garanta que o celular tenha criptografia ativa. Dados criptografados são inacessíveis sem a senha, mesmo com acesso físico.' },
  { num: '09', title: 'Cuidado com QR Codes',          description: 'QR codes podem redirecionar para sites maliciosos. Antes de escanear em locais públicos, verifique se o código está sobreposto a outro. Use leitor que mostra o URL antes de abrir.' },
  { num: '10', title: 'Separe identidades digitais',   description: 'Use e-mails e senhas diferentes para trabalho, finanças e lazer. Um vazamento em um serviço de entretenimento não deve comprometer sua conta bancária.' },
];