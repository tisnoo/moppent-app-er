import {Component, Input} from '@angular/core';
import {JokeModel, JokeModelJoke, JokeModelRiddle} from '../../models/Joke';
import { CommonModule } from '@angular/common';
import { JokeSuperModule } from './joke-super/joke-super.module';
import { JokeSuper } from './joke-super/joke-super';
import { IonicModule } from '@ionic/angular';

type Styling = {
  background: string;
  color: string;
}

@Component({
  imports: [
    CommonModule,
    JokeSuperModule,
    IonicModule,
  ],
  standalone: true,
  selector: 'app-single-joke-container',
  templateUrl: './single-joke-container.component.html',
  styleUrls: ['./single-joke-container.component.scss'],
})
export class SingleJokeContainerComponent extends JokeSuper<JokeModel> {
  public readonly styling: Styling;

  private readonly colors: string[] = [
    '#9dc6d8',
    '#00b3ca',
    '#7dd0b6',
    '#1d4e89',
    '#d2b29b',
    '#e38690',
    '#f69256',
    '#ead98b',
    '#965251',
    '#c6cccc',
  ];

  public constructor() {
    super();
    const ind: number = Math.floor(Math.random() * this.colors.length);
    this.styling =  {background: this.colors[ind], color: '#FFF'};
  };

  isJokeModelJoke(joke: JokeModel): joke is JokeModelJoke {
    return joke.type === 'joke';
  }

  isJokeModelRiddle(joke: JokeModel): joke is JokeModelRiddle {
    return joke.type === 'riddle';
  }

  generateStyle(): string {
    return `
      --background: ${this.styling.background};
      --color: ${this.styling.color};
      box-shadow: 0 4px 8px #FFF !important;
      border-radius: 10px !important;
    `;
  }
}
