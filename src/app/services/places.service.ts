import { PlaceModel } from '../models/place.model';
import { HttpClient } from '@angular/common/http';
import { Injectable }  from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class PlacesService {

  constructor(private http: HttpClient) {}

  public getPlaces(): Observable<PlaceModel[]> {
    return this.http.get('/assets/stabs/places.json')
      .map((items: any) => {
        return items.map(item => new PlaceModel(item.image, item.title, item.description));
      }) as Observable<PlaceModel[]>;
  }
}
