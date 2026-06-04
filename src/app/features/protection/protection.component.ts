import { Component } from '@angular/core';
import { VpnItem } from '../../core/models';
import { VPN_DO_ITEMS, VPN_DONT_ITEMS } from '../../core/data/protection.data';

@Component({
  selector: 'app-protection',
  standalone: false,
  templateUrl: './protection.component.html',
  styleUrls: ['./protection.component.scss']
})
export class ProtectionComponent {
  vpnDo: VpnItem[]   = VPN_DO_ITEMS;
  vpnDont: VpnItem[] = VPN_DONT_ITEMS;
}