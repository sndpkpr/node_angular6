import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { GlobalHeaderComponent } from './components/global-header/global-header.component';
import { GlobalFooterComponent } from './components/global-footer/global-footer.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { ValidationsComponent } from './components/validations/validations.component';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

export function HttpLoaderFactory(http: HttpClient) {
  // return new TranslateHttpLoader(http);
  const cacheBustSuffix = Date.now();
  // return new TranslateHttpLoader(http, 'http://localhost:3000/' + 'static/Scripts/Locales/');
  return new TranslateHttpLoader(http, 'http://pentest.servcorpcommunity.com/' + 'Scripts/Locales/', '?v=' + cacheBustSuffix);
}

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ToastrModule.forRoot(),
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: (HttpLoaderFactory),
        deps: [HttpClient]
      }
    }),
  ],
  declarations: [HomeComponent,
    GlobalHeaderComponent,
    GlobalFooterComponent,
    AvatarComponent,
    ValidationsComponent
  ],

  exports: [GlobalHeaderComponent,
    GlobalFooterComponent,
    TranslateModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
