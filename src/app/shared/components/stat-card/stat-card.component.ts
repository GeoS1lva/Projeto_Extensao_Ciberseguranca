import { Component, Input } from '@angular/core';
import { Stat } from '../../../core/models';

@Component({
  selector: 'app-stat-card',
  standalone: false,
  templateUrl: './stat-card.component.html',
  styleUrls: ['./stat-card.component.scss']
})
export class StatCardComponent {
  @Input() stat!: Stat;
}
