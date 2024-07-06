import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JokeSliderPage } from './joke-slider.page';

const routes: Routes = [
  {
    path: '',
    component: JokeSliderPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JokeSliderPageRoutingModule {}
