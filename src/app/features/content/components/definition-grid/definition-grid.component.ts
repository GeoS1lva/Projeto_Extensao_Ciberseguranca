import { Component } from '@angular/core';

interface DefinitionCell {
  title: string;
  description: string;
  color: 'green' | 'blue' | 'amber' | 'red';
}

@Component({
  selector: 'app-definition-grid',
  standalone: false,
  templateUrl: './definition-grid.component.html',
  styleUrls: ['./definition-grid.component.scss']
})
export class DefinitionGridComponent {
  cells: DefinitionCell[] = [
    {
      title: 'Segurança da Informação',
      description: 'Proteção de dados em qualquer formato — digital ou físico. Envolve políticas, processos e cultura organizacional para garantir que informações sejam acessadas apenas por quem tem autorização.',
      color: 'green'
    },
    {
      title: 'Segurança de Redes',
      description: 'Defesa da infraestrutura de comunicação contra intrusões, interceptações e ataques de negação de serviço. Inclui firewalls, IDS/IPS, VPNs e monitoramento contínuo de tráfego.',
      color: 'blue'
    },
    {
      title: 'Segurança de Endpoints',
      description: 'Proteção de dispositivos individuais — computadores, celulares, IoT — que se conectam à rede corporativa ou pessoal. Cada dispositivo é um ponto de entrada potencial para ataques.',
      color: 'amber'
    },
    {
      title: 'Resposta a Incidentes',
      description: 'Planos e procedimentos ativados quando uma brecha ocorre. O objetivo é conter o dano, investigar a causa raiz, recuperar sistemas e aprender para prevenir recorrências.',
      color: 'red'
    }
  ];
}
