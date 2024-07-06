import { Component, Input } from '@angular/core';
import { JokeModelJoke } from '../../../models/Joke';

@Component({
  standalone: true,
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.scss'],
})
export class JokeComponent {
  @Input()
  public joke!: JokeModelJoke;
}
