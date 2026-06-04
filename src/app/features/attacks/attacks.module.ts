import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

import { AttacksComponent } from './attacks.component';
import { AttacksHeroComponent } from './components/attacks-hero/attacks-hero.component';
import { ImpactBarComponent } from './components/impact-bar/impact-bar.component';
import { AttackNavComponent } from './components/attack-nav/attack-nav.component';
import { AttackPanelComponent } from './components/attack-panel/attack-panel.component';

const routes: Routes = [
  { path: '', component: AttacksComponent }
];

@NgModule({
  declarations: [
    AttacksComponent,
    AttacksHeroComponent,
    ImpactBarComponent,
    AttackNavComponent,
    AttackPanelComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class AttacksModule {}