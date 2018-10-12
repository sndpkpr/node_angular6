import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CookieModule, CookieService, COOKIE_OPTIONS } from 'ngx-cookie';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './library/shared/shared.module';

// user defined services
import {ApiService} from './library/core/services/api-service/api.service';
import {ErrorHandlerService} from './library/core/services/error-handler/error-handler.service';
import { NotificationService } from 'src/app/library/core/services/notification-service/notification.service';
import { AnonymousGuard, AuthenticatedAdmin, AuthenticatedUser } from './library/core/services/auth-service/anonymous-guard.service';
import { SvInterceptorService } from './library/core/services/interceptor/sv-interceptor.service';
export function HttpLoaderFactory(http: HttpClient) {
  // return new TranslateHttpLoader(http);
  const cacheBustSuffix = Date.now();
  // return new TranslateHttpLoader(http, 'http://localhost:3000/' + 'static/Scripts/Locales/');
  return new TranslateHttpLoader(http, 'http://pentest.servcorpcommunity.com/' + 'Scripts/Locales/', '?v=' + cacheBustSuffix);
}


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgbModule,
    CookieModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (HttpLoaderFactory),
        deps: [HttpClient]
      }
    }),
  ],
  declarations: [
    AppComponent
  ],
  providers: [ApiService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SvInterceptorService,
      multi: true,
    },
    ErrorHandlerService,
    NotificationService,
    CookieService,
    AnonymousGuard,
    AuthenticatedAdmin,
    AuthenticatedUser],
  bootstrap: [AppComponent]
})
export class AppModule { }
