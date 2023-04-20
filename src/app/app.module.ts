import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BreadcrumbModule } from 'angular-crumbs';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { registerLocaleData } from '@angular/common';
import localeHr from '@angular/common/locales/hr';
import localeDe from '@angular/common/locales/de';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreloaderComponent } from './preloader/preloader.component';

registerLocaleData(localeHr, 'hr');
registerLocaleData(localeDe, 'de');

@NgModule({
  declarations: [
    AppComponent,
    PreloaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BreadcrumbModule,
    NgbModule,
    SlickCarouselModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useFactory: () => {
        const language = localStorage.getItem('language');
        return language ? language : 'en';
      },
    }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
