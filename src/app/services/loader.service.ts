import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {debounce} from 'rxjs/operators/debounce';
import {timer} from  "rxjs/observable/timer";
import {
  takeWhile,
  tap,
  toArray,
  zip
} from  "rxjs/operators";
import {fromEvent} from "rxjs/observable/fromEvent";
import "rxjs/util/pipe"
import "rxjs/operator/map"
import "rxjs/operator/retry"
import "rxjs/operator/last"
import "rxjs/observable/timer"
import "rxjs/operators/map"
import "rxjs/operators/zip"
import "rxjs/operator/takeWhile"
import "rxjs/add/operator/mergeMap"
import {from} from "rxjs/observable/from";
import set = Reflect.set;
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Observable} from "rxjs/Observable";

@Injectable()
export class LoaderService {

  private loader: Element;

  public loading: BehaviorSubject<boolean> = new BehaviorSubject(true);

  constructor(
    private router: Router
  ) {
    this.loader = document.querySelector('.honest-loader');
    this.startRouteLoading().subscribe(() => {
      this.loadResources().subscribe(() => {
        this.firstLoadHandle();
      });
    });
  }

  private startRouteLoading(): Observable<any> {
    return this.router.events.pipe(
      tap(() => {
        this.showLoader();
      }),
      debounce(() => timer(100)));
  }

  private loadResources(): Observable<any[]> {
    const filteredImages = Array.from(document.images).filter(_ => _.complete);
    const imagesLength = filteredImages.length;
    const images = from(filteredImages)
      .mergeMap((image) => {
        const theImage = new Image();
        const onLoad = fromEvent(theImage, 'load');
        theImage.src = image.src;
        return onLoad;
      })
      .pipe(
        takeWhile((v, i) => {
          return imagesLength - 1 !== i;
        }),
        toArray()
      );
    const videos = Array.from(document.querySelectorAll('video')).filter((_: any) => _.readyState === 4);
    return from(videos)
      .mergeMap((video) => {
        return fromEvent(video, 'canplaythrough')
      })
      .map(() => true)
      .pipe(
        takeWhile((v, i) => {
          return videos.length - 1 !== i;
        }),
        toArray(),
        zip(images)
      );
  }

  private firstLoadHandle() {
    this.loader.querySelector('.honest-loader__first-time')
      .classList.add('honest-loader__first-time_visible');
    this.loader.addEventListener('click', () => {
      this.hideLoader();
      requestAnimationFrame(() => {
        this.playAllVideos();
      })
    })
  }

  private hideLoader() {
    this.loading.next(false);
    this.loader.classList.add('honest-loader_pre-hidden');
    setTimeout(() => {
      this.loader.classList.add('honest-loader_hidden');
    }, 1000)
  }

  private showLoader() {
    this.loading.next(true);
    this.loader.classList.remove('honest-loader_hidden');
    this.loader.classList.remove('honest-loader_pre-hidden');
  }

  private playAllVideos() {
    Array.from(document.querySelectorAll('video'))
      .forEach((video: HTMLVideoElement) => {
        video.play();
      });
  }
}
