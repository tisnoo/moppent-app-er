import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { GenreModel, genreConverter } from '../../models/Genre';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  item$: Observable<GenreModel[]>;
  firestore: Firestore = inject(Firestore);

  constructor() {
    const itemCollection = collection(this.firestore, 'genres').withConverter(genreConverter);
    this.item$ = collectionData<GenreModel>(itemCollection);
  }

  public goToGenre(item: any): void {
    console.log(item);
  }
}
