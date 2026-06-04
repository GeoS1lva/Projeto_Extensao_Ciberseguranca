import { Component, Input } from '@angular/core';
import { AttackBadge } from '../../../core/models';

@Component({
  selector: 'app-classification-badge',
  standalone: false,
  template: `<span class="cls-badge" [ngClass]="'cls-badge--' + badge.variant">{{ badge.label }}</span>`,
  styleUrls: ['./classification-badge.component.scss']
})
export class ClassificationBadgeComponent {
  @Input() badge!: AttackBadge;
}