import { Directive, Input } from "@angular/core";
import { JokeModel } from "../../../models/Joke";

@Directive()
export abstract class JokeSuper<T extends JokeModel> {
  @Input()
  public joke!: T;
}