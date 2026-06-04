import { Component } from '@angular/core';

interface Pillar {
  num: string;
  icon: string;
  title: string;
  description: string;
  variant: 'default' | 'alt' | 'warn';
}

@Component({
  selector: 'app-pillars-section',
  standalone: false,
  templateUrl: './pillars-section.component.html',
  styleUrls: ['./pillars-section.component.scss']
})
export class PillarsSectionComponent {
  pillars: Pillar[] = [
    {
      num: 'C — 01',
      icon: 'ti-lock',
      title: 'Confidencialidade',
      description: 'Garante que a informação seja acessível apenas a quem tem permissão. Violada em vazamentos de dados, espionagem e acessos indevidos a contas.',
      variant: 'default'
    },
    {
      num: 'I — 02',
      icon: 'ti-shield-check',
      title: 'Integridade',
      description: 'Assegura que dados não foram alterados de forma não autorizada. Ataques man-in-the-middle e injeção de SQL violam a integridade de sistemas.',
      variant: 'alt'
    },
    {
      num: 'A — 03',
      icon: 'ti-wifi',
      title: 'Disponibilidade',
      description: 'Garante que sistemas e dados estejam acessíveis quando necessário. Ataques DDoS e ransomware têm como alvo direto a disponibilidade de serviços críticos.',
      variant: 'warn'
    }
  ];
}
