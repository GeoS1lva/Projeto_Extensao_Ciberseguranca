import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-tag',
  standalone: false,
  template: `<div class="section-tag" [ngClass]="colorClass">{{ text }}</div>`,
  styleUrls: ['./section-tag.component.scss']
})
export class SectionTagComponent {
  @Input() text = '';
  @Input() color: 'green' | 'blue' = 'blue';

  get colorClass(): string {
    return `section-tag--${this.color}`;
  }
}
