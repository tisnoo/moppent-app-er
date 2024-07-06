import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'landing',
        loadChildren: () => import('./landing/landing.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab1',
        loadChildren: () => import('./joke-slider/joke-slider.module').then(m => m.Tab1PageModule)
      },
      {
        path: '',
        redirectTo: '/landing',
        pathMatch: 'full'
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
