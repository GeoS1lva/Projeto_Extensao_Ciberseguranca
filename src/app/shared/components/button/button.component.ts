import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: false,
  template: `
    <button
      class="btn"
      [ngClass]="'btn--' + variant"
      (click)="clicked.emit()"
      [type]="type">
      <ng-content></ng-content>
    </button>
  `,
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() variant: 'primary' | 'ghost' | 'outline' = 'primary';
  @Input() type: 'button' | 'submit' = 'button';
  @Output() clicked = new EventEmitter<void>();
}
