import { Component, OnInit, inject } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { LandingPage } from '../landing/landing.page';
import { ActivatedRoute } from '@angular/router';
import { GenreModel, genreConverter } from '../../models/Genre';
import { AngularFirestore, AngularFirestoreCollection, DocumentData, QueryDocumentSnapshot } from '@angular/fire/compat/firestore';import { Observable, map } from 'rxjs';
import { JokeModel, jokeFromData } from '../../models/Joke';

register();

@Component({
  selector: 'app-tab1',
  templateUrl: 'joke-slider.page.html',
  styleUrls: ['joke-slider.page.scss']
})
export class JokeSliderPage implements OnInit {
  item$?: Observable<JokeModel[]>;
  firestore = inject(AngularFirestore);
  public readonly root = LandingPage;
  public genre?: GenreModel;

  constructor(private readonly route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        this.genre = params as GenreModel;
        this.item$ = this.firestore.collection<DocumentData>('jokes', ref => ref.where('genre', '==', this.genre?.id)).get()
          .pipe(map(actions => {
            console.log(actions.docs);
            return actions.docs.map(jokeFromData);
        }));
      });
    }
}
