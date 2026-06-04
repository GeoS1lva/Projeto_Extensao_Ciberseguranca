import { Component } from '@angular/core';

interface ImpactStat {
  value: string;
  label: string;
  colorClass: string;
}

@Component({
  selector: 'app-impact-bar',
  standalone: false,
  templateUrl: './impact-bar.component.html',
  styleUrls: ['./impact-bar.component.scss']
})
export class ImpactBarComponent {
  stats: ImpactStat[] = [
    { value: '4',       label: 'ataques analisados',              colorClass: 'c-red'   },
    { value: '230k+',   label: 'sistemas comprometidos',          colorClass: 'c-amber' },
    { value: '18k',     label: 'organizações infiltradas',        colorClass: 'c-blue'  },
    { value: 'US$ 12B+',label: 'prejuízo estimado total',         colorClass: 'c-green' },
  ];
}