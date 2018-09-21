import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './common/nav-bar/nav-bar.component';
import { HomeComponent } from './page/home/home.component';
import { AppRoutingModule } from './app.routes';
import { WindowRef } from './common/window-ref';
import { BannerComponent } from './page/home/banner/banner.component';
import { ButtonComponent } from './common/button/button.component';
import { PlacesComponent } from './page/home/places/places.component';
import { PlaceComponent } from './page/home/places/place/place.component';
import { HttpClientModule } from '@angular/common/http';
import { PlacesService } from './services/places.service';
import { PlacesResolve } from "./page/home/places/places.resolve";
import { EventsComponent } from './page/home/events/events.component';
import { ParallaxDirective } from "./common/parallax.directive";
import { DoubleCarouselComponent } from './page/home/events/double-carousel/double-carousel.component';
import {EventsService} from "./services/events.service";
import {EventsResolve} from "./page/home/events/events.resolve";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    BannerComponent,
    ButtonComponent,
    PlacesComponent,
    PlaceComponent,
    EventsComponent,
    ParallaxDirective,
    DoubleCarouselComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    WindowRef,
    PlacesService,
    PlacesResolve,
    EventsService,
    EventsResolve
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
