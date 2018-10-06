import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './library/shared/shared.module';

// user defined services
import {ApiService} from './library/core/services/api-service/api.service';
import {ErrorHandlerService} from './library/core/services/error-handler/error-handler.service';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  declarations: [
    AppComponent,
    ErrorHandlerService
  ],
  providers: [ApiService,
    ErrorHandlerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
