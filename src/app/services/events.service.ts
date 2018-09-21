import { HttpClient } from '@angular/common/http';
import { Injectable }  from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class EventsService {

  constructor(private http: HttpClient) {}

  public getEventImages(): Observable<any> {
    return this.http.get('/assets/stabs/events.json');
  }
}
