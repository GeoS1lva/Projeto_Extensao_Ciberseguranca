import { Component, Input } from '@angular/core';
import { Attack } from '../../../../core/models';

@Component({
  selector: 'app-attack-panel',
  standalone: false,
  templateUrl: './attack-panel.component.html',
  styleUrls: ['./attack-panel.component.scss']
})
export class AttackPanelComponent {
  @Input() attack!: Attack;
}