import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

import { ProtectionComponent } from './protection.component';
import { ProtectionHeroComponent } from './components/protection-hero/protection-hero.component';
import { PillarsGridComponent } from './components/pillars-grid/pillars-grid.component';
import { PasswordGeneratorComponent } from './components/password-generator/password-generator.component';
import { MfaGridComponent } from './components/mfa-grid/mfa-grid.component';
import { SecurityChecklistComponent } from './components/security-checklist/security-checklist.component';
import { HabitsListComponent } from './components/habits-list/habits-list.component';

const routes: Routes = [
  { path: '', component: ProtectionComponent }
];

@NgModule({
  declarations: [
    ProtectionComponent,
    ProtectionHeroComponent,
    PillarsGridComponent,
    PasswordGeneratorComponent,
    MfaGridComponent,
    SecurityChecklistComponent,
    HabitsListComponent,
  ],
  imports: [
    SharedModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export class ProtectionModule {}