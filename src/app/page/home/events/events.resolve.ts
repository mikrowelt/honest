import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs/Rx';
import {EventsService} from "../../../services/events.service";

@Injectable()
export class EventsResolve implements Resolve<any> {

  constructor(private eventsService: EventsService) {}

  public resolve(route:ActivatedRouteSnapshot, state:RouterStateSnapshot): Observable<any> {
    return this.eventsService.getEventImages();
  }
}
