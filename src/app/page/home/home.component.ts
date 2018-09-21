import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';

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

  constructor() {}

  ngOnInit() {}

}
