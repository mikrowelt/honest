import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './common/nav-bar/nav-bar.component';
import { HomeComponent } from './page/home/home.component';
import { RouterModule } from '@angular/router';
import appRoutes from './app.routes';
import { WindowRef } from './common/window-ref';

import { ParallaxScrollModule } from 'ng2-parallaxscroll';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent
  ],
  imports: [
    ParallaxScrollModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    WindowRef
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
