import {Component, Input} from '@angular/core';
import {JokeModel, JokeModelJoke, JokeModelRiddle} from '../../models/Joke';
import { CommonModule } from '@angular/common';
import { JokeComponent } from './joke/joke.component';

@Component({
  imports: [
    CommonModule,
    JokeComponent,
  ],
  standalone: true,
  selector: 'app-single-joke-container',
  templateUrl: './single-joke-container.component.html',
  styleUrls: ['./single-joke-container.component.scss'],
})
export class SingleJokeContainerComponent {

  @Input()
  public joke!: JokeModel;

  isJokeModelJoke(joke: JokeModel): joke is JokeModelJoke {
    return joke.type === 'joke';
  }

  isJokeModelRiddle(joke: JokeModel): joke is JokeModelRiddle {
    return joke.type === 'riddle';
  }
}
