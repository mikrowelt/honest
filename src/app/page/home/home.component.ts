import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';

import { IParallaxScrollConfig } from 'ng2-parallaxscroll';

@Component({
  selector: 'honest-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    'class': 'honest-home'
  }
})
export class HomeComponent implements OnInit {

  public bannerConfig: IParallaxScrollConfig = {
    axis: 'Y',
    speed: .5,
    initialValue: 100
  };

  public textConfig: IParallaxScrollConfig = {
    axis: 'Y',
    speed: .5,
    initialValue: 100
  };

  constructor() {
    this.textConfig['cssProperty'] = 'padding-top';
  }

  ngOnInit() {

  }

}
