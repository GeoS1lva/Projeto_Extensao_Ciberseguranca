import { Component } from '@angular/core';
import { MfaCard } from '../../../../core/models';
import { MFA_CARDS } from '../../../../core/data/protection.data';

@Component({
  selector: 'app-mfa-grid',
  standalone: false,
  templateUrl: './mfa-grid.component.html',
  styleUrls: ['./mfa-grid.component.scss']
})
export class MfaGridComponent {
  cards: MfaCard[] = MFA_CARDS;
}