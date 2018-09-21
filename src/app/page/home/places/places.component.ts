import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PlaceModel} from "../../../models/place.model";

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

  public places: PlaceModel[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe((data: any) => {
      this.places = data.places;
    });
  }

}
