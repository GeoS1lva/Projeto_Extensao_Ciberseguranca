import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-victim-tag',
  standalone: false,
  template: `<span class="victim-tag">{{ label }}</span>`,
  styleUrls: ['./victim-tag.component.scss']
})
export class VictimTagComponent {
  @Input() label = '';
}