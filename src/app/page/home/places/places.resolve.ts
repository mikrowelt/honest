import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs/Rx';
import {PlacesService} from "../../../services/places.service";

@Injectable()
export class PlacesResolve implements Resolve<any> {

  constructor(private placesService: PlacesService) {}

  public resolve(route:ActivatedRouteSnapshot, state:RouterStateSnapshot): Observable<any> {
    return this.placesService.getPlaces();
  }
}
