import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SectionTagComponent } from './components/section-tag/section-tag.component';
import { ButtonComponent } from './components/button/button.component';
import { ThreatCardComponent } from './components/threat-card/threat-card.component';
import { StatCardComponent } from './components/stat-card/stat-card.component';
import { ClassificationBadgeComponent } from './components/classification-badge/classification-badge.component';
import { VictimTagComponent } from './components/victim-tag/victim-tag.component';
import { QuoteBlockComponent } from './components/quote-block/quote-block.component';
import { SectionHeaderComponent } from './components/section-header/section-header.component';
import { VpnSplitComponent } from './components/vpn-split/vpn-split.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    SectionTagComponent,
    ButtonComponent,
    ThreatCardComponent,
    StatCardComponent,
    ClassificationBadgeComponent,
    VictimTagComponent,
    QuoteBlockComponent,
    SectionHeaderComponent,
    VpnSplitComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    NavbarComponent,
    FooterComponent,
    SectionTagComponent,
    ButtonComponent,
    ThreatCardComponent,
    StatCardComponent,
    ClassificationBadgeComponent,
    VictimTagComponent,
    QuoteBlockComponent,
    SectionHeaderComponent,
    VpnSplitComponent,
    CommonModule,
    RouterModule,
  ]
})
export class SharedModule {}