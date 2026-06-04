import { Component } from '@angular/core';
import { TimelineItem } from '../../../../core/models';

@Component({
  selector: 'app-timeline-section',
  standalone: false,
  templateUrl: './timeline-section.component.html',
  styleUrls: ['./timeline-section.component.scss']
})
export class TimelineSectionComponent {
  timelineItems: TimelineItem[] = [
    {
      year: '2010',
      title: 'Stuxnet',
      description: 'Primeiro malware de Estado a danificar infraestrutura física. Sabotou centrífugas nucleares iranianas via PLC comprometidos.'
    },
    {
      year: '2016',
      title: 'Mirai Botnet',
      description: 'Rede de 600k dispositivos IoT derrubou DNS globais e tirou metade da internet americana do ar por horas.'
    },
    {
      year: '2017',
      title: 'WannaCry',
      description: 'Ransomware afetou 230 mil computadores em 150 países. NHS britânico paralisou serviços hospitalares por dias.'
    },
    {
      year: '2020',
      title: 'SolarWinds',
      description: 'Ataque à cadeia de suprimentos comprometeu 18.000 organizações incluindo agências do governo dos EUA.'
    }
  ];
}
