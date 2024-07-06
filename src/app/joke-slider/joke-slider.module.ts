import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { JokeSliderPage } from './joke-slider.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { JokeSliderPageRoutingModule } from './joke-slider-routing.module';
import { SingleJokeContainerComponent } from '../single-joke-container/single-joke-container.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SingleJokeContainerComponent,
    JokeSliderPageRoutingModule,
  ],
  declarations: [JokeSliderPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Tab1PageModule {}
