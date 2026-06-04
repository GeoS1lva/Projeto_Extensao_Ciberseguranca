import { Component } from '@angular/core';
import { PillarCard } from '../../../../core/models';
import { PILLAR_CARDS } from '../../../../core/data/protection.data';

@Component({
  selector: 'app-pillars-grid',
  standalone: false,
  templateUrl: './pillars-grid.component.html',
  styleUrls: ['./pillars-grid.component.scss']
})
export class PillarsGridComponent {
  cards: PillarCard[] = PILLAR_CARDS;
}