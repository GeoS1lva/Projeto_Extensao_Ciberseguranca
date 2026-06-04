import { Component, Input } from '@angular/core';
import { ThreatCard } from '../../../core/models';

@Component({
  selector: 'app-threat-card',
  standalone: false,
  templateUrl: './threat-card.component.html',
  styleUrls: ['./threat-card.component.scss']
})
export class ThreatCardComponent {
  @Input() card!: ThreatCard;
}
