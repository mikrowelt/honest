import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'honest-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    'class': 'honest-places'
  }
})
export class PlacesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
