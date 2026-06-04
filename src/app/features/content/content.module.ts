import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

import { ContentComponent } from './content.component';
import { PageHeroComponent } from './components/page-hero/page-hero.component';
import { TableOfContentsComponent } from './components/table-of-contents/table-of-contents.component';
import { DefinitionGridComponent } from './components/definition-grid/definition-grid.component';
import { PillarsSectionComponent } from './components/pillars-section/pillars-section.component';
import { RiskSectionComponent } from './components/risk-section/risk-section.component';
import { TipsSectionComponent } from './components/tips-section/tips-section.component';
import { LayerDiagramComponent } from './components/layer-diagram/layer-diagram.component';
import { QuizSectionComponent } from './components/quiz-section/quiz-section.component';

const routes: Routes = [
  { path: '', component: ContentComponent }
];

@NgModule({
  declarations: [
    ContentComponent,
    PageHeroComponent,
    TableOfContentsComponent,
    DefinitionGridComponent,
    PillarsSectionComponent,
    RiskSectionComponent,
    TipsSectionComponent,
    LayerDiagramComponent,
    QuizSectionComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class ContentModule {}
