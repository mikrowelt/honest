import {
  ChangeDetectorRef,
  Component, ElementRef,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BannerModel} from "../../../models/banner.model";
import "rxjs/add/operator/repeat"
import "rxjs/add/operator/delay"
import {of} from "rxjs/observable/of";
import {concatMap, delay, map, mapTo, mergeMap, timeout} from "rxjs/operators";
import {defer} from "rxjs/observable/defer";
import {
  animate, state, style, transition,
  trigger
} from "@angular/animations";
import {from} from "rxjs/observable/from";
import {LoaderService} from "../../../services/loader.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'honest-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({opacity:0}),
        animate(500, style({opacity:1}))
      ]),
      transition(':leave', [
        animate(500, style({opacity:0}))
      ])
    ]),
    trigger('fadeInOutList', [
      state('true', style({opacity:1})),
      state('false', style({opacity:0})),
      transition('* => *', animate(500))
    ])
  ],
  host: {
    'class': 'honest-banner'
  }
})
export class BannerComponent implements OnInit {

  public banners: BannerModel[];

  public selectedBanner: BannerModel;

  private animationEvent: Subscription;

  constructor(
    private route: ActivatedRoute,
    private loadingService: LoaderService
  ) { }

  ngOnInit() {
    this.route.data.subscribe((data: any) => {
      this.banners = data.banners;
    });

    this.loadingService.loading.subscribe((isLoading) => {
      if (isLoading) {
        this.stopAnimation();
      } else {
        this.startAnimation();
      }
    });
  }

  private startAnimation() {
    let startDate = Date.now();
    let it = 0;
    this.stopAnimation();
    this.animationEvent = defer(() => {
      return from(this.banners).pipe(
        concatMap((banner, i) => {
          it++;
          this.selectedBanner = banner;
          return of(banner).delay(new Date(startDate + (it * 10000)));
        })
      )
    })
      .repeat()
      .subscribe();
  }

  private stopAnimation() {
    if (this.animationEvent) {
      this.animationEvent.unsubscribe();
      this.animationEvent = null;
    }
  }
}
