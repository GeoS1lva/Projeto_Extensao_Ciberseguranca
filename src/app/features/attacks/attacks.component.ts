import { Component } from '@angular/core';
import { Attack } from '../../core/models';
import { ATTACKS_DATA } from '../../core/data/attacks.data';

@Component({
  selector: 'app-attacks',
  standalone: false,
  templateUrl: './attacks.component.html',
  styleUrls: ['./attacks.component.scss']
})
export class AttacksComponent {
  attacks: Attack[] = ATTACKS_DATA;
  activeId = ATTACKS_DATA[0].id;

  get activeAttack(): Attack {
    return this.attacks.find(a => a.id === this.activeId)!;
  }

  onAttackSelected(id: string): void {
    this.activeId = id;
  }
}