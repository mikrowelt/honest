import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'honest-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    'class': 'honest-footer'
  }
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
