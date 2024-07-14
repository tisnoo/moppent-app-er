import { Component } from '@angular/core';
import { JokeModelRiddle } from '../../../../models/Joke';
import { JokeSuper } from '../joke-super';

@Component({
  selector: 'app-riddle',
  templateUrl: './riddle.component.html',
  styleUrls: ['./riddle.component.scss'],
})
export class RiddleComponent extends JokeSuper<JokeModelRiddle> {}
