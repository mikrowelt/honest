import { HttpClient } from '@angular/common/http';
import { Injectable }  from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {BannerModel} from "../models/banner.model";

@Injectable()
export class BannerService {

  constructor(private http: HttpClient) {}

  public getBannerInfo(): Observable<BannerModel[]> {
    return this.http.get('/assets/stabs/banner.json')
      .map((items: any) =>  {
        return items.map(item => new BannerModel(item.title, item.description, item.link, item.video));
      }) as Observable<BannerModel[]>;
  }
}
