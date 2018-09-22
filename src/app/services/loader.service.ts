import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {debounce} from 'rxjs/operators/debounce';
import {Observable} from "rxjs/Observable";
import {timer} from  "rxjs/observable/timer";
import {concatAll, last, map, merge, take, takeWhile, tap, timeout, toArray} from  "rxjs/operators";
import {mergeMap} from "rxjs/operator/mergeMap";
import {from} from "rxjs/observable/from";
import {of} from "rxjs/observable/of";
import {flatMap} from "tslint/lib/utils";
import {fromEvent} from "rxjs/observable/fromEvent";

@Injectable()
export class LoaderService {

  constructor(private router: Router) {
    const loader = document.querySelector('.honest-loader');
    router.events.pipe(
      tap(() => {
        loader.classList.remove('honest-loader_hidden');
        loader.classList.remove('honest-loader_pre-hidden');
      }),
      debounce(() => timer(100)),
      map(() => document.images),
      concatAll(),
      map((image) => fromEvent(image, 'load')),
      takeWhile((value, index) => {
        return index !== document.images.length - 1;
      }),
      toArray(),
    )
      .subscribe(() => {
        loader.classList.add('honest-loader_pre-hidden');
        setTimeout(() => {
          loader.classList.add('honest-loader_hidden');
        }, 600)
      });
  }
}
