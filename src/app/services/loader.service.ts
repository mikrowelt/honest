import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {debounce} from 'rxjs/operators/debounce';
import {timer} from  "rxjs/observable/timer";
import {
  tap,
  toArray,
  zip
} from  "rxjs/operators";
import {fromEvent} from "rxjs/observable/fromEvent";
import "rxjs/operator/map"
import "rxjs/operator/retry"
import "rxjs/operator/last"
import "rxjs/observable/timer"
import "rxjs/operators/map"
import "rxjs/operators/zip"
import "rxjs/operator/takeWhile"
import {from} from "rxjs/observable/from";
import {LocalStorage} from "@ngx-pwa/local-storage";
import set = Reflect.set;

@Injectable()
export class LoaderService {

  private loader: Element;

  constructor(
    private router: Router,
    private localStorage: LocalStorage
  ) {
    this.loader = document.querySelector('.honest-loader');
    this.startRouteLoading().subscribe(() => {
      this.loadResources().subscribe((r) => {
        localStorage.getItem('notFirstTime').subscribe((notFirstTime) => {
          if (notFirstTime) {
            console.log(1);
            this.hideLoader();
            this.playAllVideos();
          } else {
            console.log(2);
            this.firstLoadHandle();
          }
        });
      });
    });
  }

  private startRouteLoading() {
    return this.router.events.pipe(
      tap(() => {
        this.showLoader();
      }),
      debounce(() => timer(100)));
  }

  private loadResources() {
    const images = from(document.images)
      .map((image) => {
        return fromEvent(image, 'load')
      })
      .pipe(toArray());
    return from(Array.from(document.querySelectorAll('video')))
      .map((video) => {
        return fromEvent(video, 'canplaythrough')
      })
      .pipe(
        toArray(),
        zip(images)
      );
  }

  private firstLoadHandle() {
    const firstTimeEl = this.loader.querySelector('.honest-loader__first-time');
    this.loader.querySelector('.honest-loader__spinner')
      .classList.add('honest-loader__spinner_hidden');
    firstTimeEl.classList.add('honest-loader__first-time_visible');
    firstTimeEl.addEventListener('click', () => {
      this.localStorage.setItem('notFirstTime', true)
        .subscribe();
      this.hideLoader();
      requestAnimationFrame(() => {
        this.playAllVideos();
      })
    })
  }

  private hideLoader() {
    this.loader.classList.add('honest-loader_hidden');
    this.loader.classList.add('honest-loader_pre-hidden');
  }

  private showLoader() {
    this.loader.classList.remove('honest-loader_hidden');
    this.loader.classList.remove('honest-loader_pre-hidden');
  }

  private playAllVideos() {
    Array.from(document.querySelectorAll('video'))
      .forEach((video) => {
        video.play();
      });
  }
}
