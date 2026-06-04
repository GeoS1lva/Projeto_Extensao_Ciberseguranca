import { Component } from '@angular/core';

interface TipBlock {
  tag: string;
  icon: string;
  title: string;
  description: string;
}

interface CheckItem {
  icon: string;
  iconColor: 'green' | 'blue' | 'red';
  title: string;
  description: string;
}

@Component({
  selector: 'app-tips-section',
  standalone: false,
  templateUrl: './tips-section.component.html',
  styleUrls: ['./tips-section.component.scss']
})
export class TipsSectionComponent {
  tips: TipBlock[] = [
    {
      tag: '// prioridade máxima',
      icon: 'ti-key',
      title: 'Autenticação de dois fatores (MFA)',
      description: 'Ative MFA em todas as contas importantes — e-mail, banco, redes sociais. Mesmo que sua senha seja roubada, o invasor ainda precisará do segundo fator (geralmente seu celular) para acessar a conta. Aplicativos como Google Authenticator são mais seguros que SMS.'
    },
    {
      tag: '// essencial',
      icon: 'ti-lock',
      title: 'Gerenciador de senhas',
      description: 'Use senhas longas, únicas e aleatórias para cada serviço, armazenadas em um gerenciador (Bitwarden, 1Password). Você só precisa lembrar uma senha mestra. Elimina 100% do risco de credential stuffing entre serviços.'
    }
  ];

  checks: CheckItem[] = [
    {
      icon: 'ti-refresh',
      iconColor: 'green',
      title: 'Atualizações em dia',
      description: 'Patches corrigem vulnerabilidades conhecidas. Manter sistemas desatualizados é o equivalente a deixar a porta aberta para invasores.'
    },
    {
      icon: 'ti-shield',
      iconColor: 'blue',
      title: 'VPN em redes públicas',
      description: 'Criptografa seu tráfego mesmo em redes não confiáveis. Essencial ao usar Wi-Fi de aeroportos, hotéis e cafés.'
    },
    {
      icon: 'ti-database',
      iconColor: 'green',
      title: 'Backup 3-2-1',
      description: '3 cópias, em 2 mídias diferentes, sendo 1 offsite. A única defesa eficaz contra ransomware é um backup que o malware não consegue alcançar.'
    },
    {
      icon: 'ti-eye',
      iconColor: 'red',
      title: 'Cuidado com permissões',
      description: 'Aplicativos e sites pedem mais acesso do que precisam. Revise regularmente quais apps têm acesso à sua câmera, localização e contatos.'
    }
  ];
}
