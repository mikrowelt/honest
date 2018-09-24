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
import { CateringComponent } from './page/home/catering/catering.component';
import { CarouselComponent } from './page/home/catering/carousel/carousel.component';
import {CateringService} from "./services/catering.service";
import {CateringPromoResolve} from "./page/home/catering/catering.resolve";
import { ContactsComponent } from './page/home/contacts/contacts.component';
import { ContactFormComponent } from './common/contact-form/contact-form.component';
import { FooterComponent } from './common/footer/footer.component';
import {RecaptchaModule} from "ng-recaptcha";
import {SimpleModalModule} from "ngx-simple-modal";
import { CaptchaComponent } from './common/captcha/captcha.component';
import {ContactsService} from "./services/contacts.service";
import {FormsModule} from "@angular/forms";
import {Ng2PageScrollModule} from "ng2-page-scroll";
import {LoaderService} from "./services/loader.service";
import {ScrollAnimationDirective} from "./common/scroll-animation.directive";
import {BannerResolve} from "./page/home/banner/banner.resolve";
import {BannerService} from "./services/banner.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { WordScrollerComponent } from './common/word-scroller/word-scroller.component';

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
    DoubleCarouselComponent,
    CateringComponent,
    CarouselComponent,
    ContactsComponent,
    ContactFormComponent,
    FooterComponent,
    CaptchaComponent,
    ScrollAnimationDirective,
    WordScrollerComponent
  ],
  entryComponents: [
    CaptchaComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    RecaptchaModule.forRoot(),
    SimpleModalModule.forRoot({container: 'honest-root'}),
    FormsModule,
    Ng2PageScrollModule,
    BrowserAnimationsModule
  ],
  providers: [
    WindowRef,
    PlacesService,
    PlacesResolve,
    EventsService,
    EventsResolve,
    CateringService,
    CateringPromoResolve,
    ContactsService,
    LoaderService,
    BannerService,
    BannerResolve,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
