import { HttpClient } from '@angular/common/http';
import { Injectable }  from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {CateringPromoModel} from "../models/catering-promo.model";

@Injectable()
export class CateringService {

  constructor(private http: HttpClient) {}

  public getCateringPromo(): Observable<CateringPromoModel[]> {
    return this.http.get('/assets/stabs/catering.json')
      .map((items: any) =>  {
        return items.map(item => new CateringPromoModel(item.image, item.title, item.description));
      }) as Observable<CateringPromoModel[]>;
  }
}
