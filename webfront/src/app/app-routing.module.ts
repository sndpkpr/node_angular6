import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './library/shared/components/home/home.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        loadChildren: './library/shared/auth/auth.module#AuthModule',
        // canActivate: [AnonymousGuard]
      },
      {
        path: '',
        loadChildren: './library/shared/auth/auth.module#AuthModule',
        // canActivate: [AnonymousGuard]
      },
      // {
      //   path: 'news',
      //   loadChildren: './areas/global-pages/open-article/open-article.module#OpenArticleModule'
      // },
      // {
      //   path: 'resetpassword/:id',
      //   loadChildren: './areas/global-pages/reset-password/reset-password.module#ResetPasswordModule'
      // }
    ]
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
