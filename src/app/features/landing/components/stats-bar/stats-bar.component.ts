import { Component } from '@angular/core';
import { Stat } from '../../../../core/models';

@Component({
  selector: 'app-stats-bar',
  standalone: false,
  templateUrl: './stats-bar.component.html',
  styleUrls: ['./stats-bar.component.scss']
})
export class StatsBarComponent {
  stats: Stat[] = [
    { value: '8', suffix: '.4T', label: 'custo global em 2023 (USD)' },
    { value: '39', suffix: 's', label: 'intervalo médio entre ataques' },
    { value: '3', suffix: '.5M', label: 'vagas abertas na área' },
    { value: '82', suffix: '%', label: 'brechas por fator humano' },
  ];
}
