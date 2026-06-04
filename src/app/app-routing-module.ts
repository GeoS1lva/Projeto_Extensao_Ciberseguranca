import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/landing/landing.module').then(m => m.LandingModule)
  },
  {
    path: 'conteudo',
    loadChildren: () => import('./features/content/content.module').then(m => m.ContentModule)
  },
  {
    path: 'casos',
    loadChildren: () => import('./features/attacks/attacks.module').then(m => m.AttacksModule)
  },
  {
    path: 'protecao',
    loadChildren: () => import('./features/protection/protection.module').then(m => m.ProtectionModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}