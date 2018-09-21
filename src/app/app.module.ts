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

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    BannerComponent,
    ButtonComponent,
    PlacesComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  providers: [
    WindowRef
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
