import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';

import { AppComponent } from './app.component';
import {Routing} from './app-routing.module';
import { environment } from '../environments/environment';

import { SharedModule } from './shared/shared.module';
import { Constants } from './shared/Constants';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, `${Constants.publishUrl}assets/i18n/${environment.currentVersion}`, `.json`);
}

@NgModule({
  declarations: [
    AppComponent   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    Routing,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient]
      }
  }),
  ],
  providers: [
    /* {
    provide: APP_BASE_HREF,
    useFactory: ()=> Constants.baseUrl
 },*/],
  bootstrap: [AppComponent]
})



export class AppModule { }
