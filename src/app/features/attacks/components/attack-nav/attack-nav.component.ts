import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Attack } from '../../../../core/models';

@Component({
  selector: 'app-attack-nav',
  standalone: false,
  templateUrl: './attack-nav.component.html',
  styleUrls: ['./attack-nav.component.scss']
})
export class AttackNavComponent {
  @Input() attacks: Attack[] = [];
  @Input() activeId = '';
  @Output() attackSelected = new EventEmitter<string>();

  select(id: string): void {
    this.attackSelected.emit(id);
  }
}