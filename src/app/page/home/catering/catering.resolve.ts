import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs/Rx';
import {CateringService} from "../../../services/catering.service";

@Injectable()
export class CateringPromoResolve implements Resolve<any> {

  constructor(private cateringService: CateringService) {}

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.cateringService.getCateringPromo();
  }
}
