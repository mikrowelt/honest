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
            this.hideLoader();
            this.playAllVideos();
          } else {
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
    const filteredImages = Array.from(document.images).filter(_ => _.complete);
    const imagesLength = filteredImages.length;
    const images = from(filteredImages)
      .mergeMap((image) => {
        return fromEvent(image, 'load')
      })
      .pipe(
        takeWhile((v, i) => {
          return imagesLength - 1 !== i;
        }),
        toArray()
      );
    const videosFiltered = Array.from(document.querySelectorAll('video')).filter((_: any) => _.readyState === 4);
    const videos = videosFiltered;
    return from(videos)
      .mergeMap((video) => {
        return fromEvent(video, 'canplay')
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
    const firstTimeEl = this.loader.querySelector('.honest-loader__first-time');
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
    this.loader.classList.add('honest-loader_pre-hidden');
    setTimeout(() => {
      this.loader.classList.add('honest-loader_hidden');
      window['isLoading'] = false;
    }, 1000)
  }

  private showLoader() {
    window['isLoading'] = true;
    this.loader.classList.remove('honest-loader_hidden');
    this.loader.classList.remove('honest-loader_pre-hidden');
  }

  private playAllVideos() {
    Array.from(document.querySelectorAll('video'))
      .forEach((video) => {
        (video as any).play();
      });
  }
}
