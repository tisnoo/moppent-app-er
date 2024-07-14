import { ChangeDetectorRef, Component, ComponentFactoryResolver, ElementRef, Inject, OnInit, ViewChild, ViewContainerRef, inject } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { LandingPage } from '../landing/landing.page';
import { ActivatedRoute } from '@angular/router';
import { GenreModel, genreConverter } from '../../models/Genre';
import { AngularFirestore, AngularFirestoreCollection, DocumentData, QueryDocumentSnapshot } from '@angular/fire/compat/firestore';import { BehaviorSubject, Observable, map } from 'rxjs';
import { JokeModel, jokeFromData } from '../../models/Joke';

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import { SingleJokeContainerComponent } from '../single-joke-container/single-joke-container.component';

register();

@Component({
  selector: 'app-tab1',
  templateUrl: 'joke-slider.page.html',
  styleUrls: ['joke-slider.page.scss']
})
export class JokeSliderPage implements OnInit {
  @ViewChild('swiper', { read: ViewContainerRef, static: true }) swiperWrapper!: ViewContainerRef;
  @ViewChild("swiper") swiperRef: ElementRef | undefined;
  public swiper!: Swiper;

  firestore = inject(AngularFirestore);
  public readonly root = LandingPage;
  public genre?: GenreModel;
  public next!: AngularFirestoreCollection;
  public lastDoc: number = 0;

  private readonly cdr = inject(ChangeDetectorRef);

  constructor(private readonly route: ActivatedRoute, private resolver: ComponentFactoryResolver) {}


  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        this.genre = params as GenreModel;
        this.next = this.firestore.collection<DocumentData>('jokes', ref => ref.where('genre', '==', this.genre?.id).limit(2));
        this.query();
      });

      document.querySelector('swiper-container')?.addEventListener('swiperslidechange', (event) => {
        const activeIndex = this.getSwiper().activeIndex;
        if (activeIndex > this.lastDoc) {
          this.lastDoc = activeIndex;
          this.query();
        }
      });
    }

  private query(): void {
    this.next.get()
      .pipe(map(actions => {
        this.getSwiper().appendSlide(actions.docs.map(jokeFromData).map(this.createSlide, this))
        this.next = this.firestore.collection<DocumentData>('jokes', ref => ref.where('genre', '==', this.genre?.id).limit(1).startAfter(actions.docs[actions.docs.length - 1]));
      }))
      .subscribe();
  }

  private createSlide(joke: JokeModel): HTMLElement {
    const slideEl = document.createElement('swiper-slide');
    slideEl.classList.add('swiper-slide');
  
    slideEl.style.cssText = `
      display: flex;
      align-items: center;
      justify-content: center;
    `;
  
    const componentFactory = this.resolver.resolveComponentFactory(SingleJokeContainerComponent);
    const componentRef = this.swiperWrapper!.createComponent(componentFactory);
    componentRef.instance.joke = joke;
  
    slideEl.appendChild(componentRef.location.nativeElement);
    return slideEl;
  }

  private getSwiper(): Swiper {
    return this.swiperRef?.nativeElement.swiper;
  }
}
