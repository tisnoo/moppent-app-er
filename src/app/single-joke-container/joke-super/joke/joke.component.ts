import { Component } from '@angular/core';
import { JokeModelJoke } from '../../../../models/Joke';
import { JokeSuper } from '../joke-super';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.scss'],
})
export class JokeComponent extends JokeSuper<JokeModelJoke> {}
