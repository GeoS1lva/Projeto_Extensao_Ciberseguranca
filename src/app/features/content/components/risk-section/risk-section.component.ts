import { Component } from '@angular/core';

interface RiskItem {
  level: string;
  title: string;
  icon: string;
  body: string;
  highlight: string;
  color: 'red' | 'amber' | 'blue';
}

@Component({
  selector: 'app-risk-section',
  standalone: false,
  templateUrl: './risk-section.component.html',
  styleUrls: ['./risk-section.component.scss']
})
export class RiskSectionComponent {
  risks: RiskItem[] = [
    {
      level: 'ALTO RISCO',
      title: 'Phishing — a ameaça mais comum',
      icon: 'ti-fish-hook',
      highlight: 'senhas, dados de cartão e informações pessoais',
      body: 'E-mails, SMS ou mensagens falsos que imitam empresas legítimas (bancos, Correios, Netflix) para roubar senhas, dados de cartão e informações pessoais. Em 2023, foram registrados mais de 900 milhões de tentativas de phishing no Brasil. Sinais de alerta: urgência excessiva, links encurtados, domínios ligeiramente diferentes do original.',
      color: 'red'
    },
    {
      level: 'MÉDIO RISCO',
      title: 'Senhas fracas e reutilizadas',
      icon: 'ti-key',
      highlight: '81% das violações',
      body: '81% das violações envolvem senhas comprometidas. Usar a mesma senha em múltiplos serviços significa que um único vazamento compromete todas as suas contas. Ferramentas automatizadas testam bilhões de combinações por segundo.',
      color: 'amber'
    },
    {
      level: 'ATENÇÃO',
      title: 'Redes Wi-Fi públicas',
      icon: 'ti-wifi-off',
      highlight: 'Aeroportos, cafés e shoppings',
      body: 'Aeroportos, cafés e shoppings têm redes que podem ser monitoradas ou falsificadas. Atacantes criam hotspots com nomes idênticos aos legítimos e capturam todo o tráfego não criptografado de quem se conecta.',
      color: 'blue'
    }
  ];
}
