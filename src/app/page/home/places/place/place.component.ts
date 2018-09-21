import {
  Component, Input,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { PlaceModel } from '../../../../models/place.model';

@Component({
  selector: 'honest-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    'class': 'honest-place'
  }
})
export class PlaceComponent implements OnInit {

  @Input()
  public place: PlaceModel;

  constructor() { }

  ngOnInit() {
  }

}
