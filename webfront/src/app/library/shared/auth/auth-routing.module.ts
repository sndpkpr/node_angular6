import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/component/login.component';
import { SingupComponent } from './singup/singup.component';
import { AnonymousGuard } from '../../core/services/auth-service/anonymous-guard.service';
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AnonymousGuard]
  },
  {
    path: 'sign-up',
    component: SingupComponent,
    canActivate: [AnonymousGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
