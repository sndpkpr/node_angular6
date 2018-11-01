import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/component/login.component';
import { SharedModule } from '../shared.module';
import { SingupComponent } from './singup/singup.component';
import { RecaptchaModule } from 'ng-recaptcha';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    RecaptchaModule.forRoot(),
    SharedModule,
  ],
  declarations: [LoginComponent, SingupComponent]
})
export class AuthModule { }
