import { Component } from '@angular/core';
import { ThreatCard } from '../../../../core/models';

@Component({
  selector: 'app-threats-section',
  standalone: false,
  templateUrl: './threats-section.component.html',
  styleUrls: ['./threats-section.component.scss']
})
export class ThreatsSectionComponent {
  threats: ThreatCard[] = [
    {
      icon: 'ti-fish-hook',
      title: 'Phishing & Engenharia Social',
      description: 'Manipulação psicológica de usuários para obtenção de credenciais. Responsável por 36% das violações globais em 2023.',
      variant: 'default'
    },
    {
      icon: 'ti-virus',
      title: 'Ransomware',
      description: 'Criptografia maliciosa de dados com exigência de resgate. Ataques cresceram 95% no setor industrial nos últimos 2 anos.',
      variant: 'alt'
    },
    {
      icon: 'ti-arrows-transfer-up',
      title: 'Ataques DDoS',
      description: 'Sobrecarga de infraestrutura com tráfego malicioso distribuído, derrubando serviços e causando bilhões em prejuízos.',
      variant: 'warn'
    },
    {
      icon: 'ti-key',
      title: 'Credential Stuffing',
      description: 'Uso automatizado de credenciais vazadas em múltiplos serviços, aproveitando reutilização de senhas.',
      variant: 'warn'
    },
    {
      icon: 'ti-cpu',
      title: 'Zero-Day Exploits',
      description: 'Exploração de vulnerabilidades desconhecidas antes que patches sejam desenvolvidos e distribuídos.',
      variant: 'default'
    },
    {
      icon: 'ti-database-leak',
      title: 'Vazamento de Dados',
      description: 'Exposição não autorizada de informações sensíveis. Em 2023, mais de 8 bilhões de registros foram comprometidos.',
      variant: 'alt'
    },
  ];
}
