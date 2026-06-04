import { Component, Input } from '@angular/core';
import { VpnItem } from '../../../core/models';

@Component({
  selector: 'app-vpn-split',
  standalone: false,
  templateUrl: './vpn-split.component.html',
  styleUrls: ['./vpn-split.component.scss']
})
export class VpnSplitComponent {
  @Input() doItems: VpnItem[] = [];
  @Input() dontItems: VpnItem[] = [];
}