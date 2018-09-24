import {
  Component, HostBinding,
  Input,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { PlaceModel } from '../../../../models/place.model';

@Component({
  selector: 'honest-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PlaceComponent implements OnInit {

  @HostBinding('class')
  public get setClasses() {
    return 'honest-place honest-place_flipped';
  }

  @Input()
  public place: PlaceModel;

  constructor() { }

  ngOnInit() {
  }

}
