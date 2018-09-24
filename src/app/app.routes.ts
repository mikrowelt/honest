import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { NgModule } from '@angular/core';
import { PlacesResolve } from './page/home/places/places.resolve';
import { EventsResolve } from "./page/home/events/events.resolve";
import { CateringPromoResolve } from "./page/home/catering/catering.resolve";
import {BannerResolve} from "./page/home/banner/banner.resolve";

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    resolve: {
      places: PlacesResolve,
      eventImages: EventsResolve,
      cateringPromo: CateringPromoResolve,
      banners: BannerResolve
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
