import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { GenreModel, genreConverter } from '../../models/Genre';

@Component({
  selector: 'app-landing',
  templateUrl: 'landing.page.html',
  styleUrls: ['landing.page.scss']
})
export class LandingPage {
  item$: Observable<GenreModel[]>;
  firestore: Firestore = inject(Firestore);

  constructor() {
    const itemCollection = collection(this.firestore, 'genres').withConverter(genreConverter);
    this.item$ = collectionData<GenreModel>(itemCollection);
  }
}
