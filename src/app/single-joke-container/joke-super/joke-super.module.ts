import { Directive, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JokeComponent } from './joke/joke.component';
import { RiddleComponent } from './riddle/riddle.component';
import { JokeModel } from '../../../models/Joke';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    RiddleComponent,
    JokeComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [ // Add this export section
    RiddleComponent,
    JokeComponent,
  ],
})
export class JokeSuperModule { }