import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

import { LandingComponent } from './landing.component';
import { HeroComponent } from './components/hero/hero.component';
import { StatsBarComponent } from './components/stats-bar/stats-bar.component';
import { ThreatsSectionComponent } from './components/threats-section/threats-section.component';
import { TimelineSectionComponent } from './components/timeline-section/timeline-section.component';
import { DefenseSectionComponent } from './components/defense-section/defense-section.component';
import { CtaSectionComponent } from './components/cta-section/cta-section.component';

const routes: Routes = [
  { path: '', component: LandingComponent }
];

@NgModule({
  declarations: [
    LandingComponent,
    HeroComponent,
    StatsBarComponent,
    ThreatsSectionComponent,
    TimelineSectionComponent,
    DefenseSectionComponent,
    CtaSectionComponent,
  ],
  imports: [
    SharedModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export class LandingModule {}
