import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { GenreModel } from '../../models/Genre';
import { FirestoreDataConverter, QueryDocumentSnapshot, DocumentData } from '@angular/fire/firestore';

const genreConverter: FirestoreDataConverter<GenreModel> = {
  toFirestore(genre: GenreModel): DocumentData {
    return { ...genre };
  },
  fromFirestore(snapshot: QueryDocumentSnapshot): GenreModel {
    const data = snapshot.data() as DocumentData;
    return {
      id: data['id'],
    };
  }
};

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
