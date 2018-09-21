import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'honest-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    'class': 'honest-banner'
  }
})
export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
