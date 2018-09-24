import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs/Rx';
import {BannerService} from "../../../services/banner.service";

@Injectable()
export class BannerResolve implements Resolve<any> {

  constructor(private bannerService: BannerService) {}

  public resolve(route:ActivatedRouteSnapshot, state:RouterStateSnapshot): Observable<any> {
    return this.bannerService.getBannerInfo();
  }
}
