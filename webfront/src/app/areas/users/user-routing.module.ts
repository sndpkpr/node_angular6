import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { AnonymousGuard } from '../../library/core/services/auth-service/anonymous-guard.service';
const userRoutes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: '',
        loadChildren: './modules/dashboard/dashboard.module#DashboardModule',
        canActivate: [AnonymousGuard]
      },
      // {
      //   path: 'benefits',
      //   loadChildren: './modules/benefits/benefits.module#BenefitsModule',
      //   canActivate: [AuthenticatedCompany]
      // },
      // {
      //   path: 'articles',
      //   loadChildren: './modules/articles/articles.module#ArticlesModule',
      //   canActivate: [AuthenticatedCompany]
      // },
      // {
      //   path: 'events',
      //   loadChildren: './modules/events/events.module#EventsModule',
      //   canActivate: [AuthenticatedCompany]
      // },
      // {
      //   path: 'jobs',
      //   loadChildren: './modules/jobs/jobs.module#JobsModule',
      //   canActivate: [AuthenticatedCompany]
      // },
      // {
      //   path: 'products',
      //   loadChildren: './modules/products/products.module#ProductsModule',
      //   canActivate: [AuthenticatedCompany]
      // },
      // {
      //   path: 'groups',
      //   loadChildren: './modules/groups/groups.module#GroupsModule',
      //   canActivate: [AuthenticatedCompany]
      // },
      // {
      //   path: 'discussions',
      //   loadChildren: './modules/discussions/discussions.module#DiscussionsModule',
      //   canActivate: [AuthenticatedCompany]
      // },
      // {
      //   path: 'community',
      //   loadChildren: './modules/directory/directory.module#DirectoryModule',
      //   canActivate: [AuthenticatedCompany]
      // },
      // {
      //   path: 'feed',
      //   loadChildren: './modules/feed/feed.module#FeedModule',
      //   canActivate: [AuthenticatedCompany]
      // },
      // {
      //   path: 'profile',
      //   loadChildren: './modules/profile/profile.module#ProfileModule',
      //   canActivate: [AuthenticatedCompany]
      // },
      // {
      //   path: 'favorites',
      //   loadChildren: './modules/favourites/favourites.module#FavouritesModule',
      //   canActivate: [AuthenticatedCompany]
      // },
      // {
      //   path: 'albums',
      //   loadChildren: './modules/albums/albums.module#AlbumsModule',
      //   canActivate: [AuthenticatedCompany]
      // },
      // {
      //   path: 'notification',
      //   loadChildren: './modules/notifications/notifications.module#NotificationsModule',
      //   canActivate: [AuthenticatedCompany]
      // },
      // {
      //   path: 'new-message',
      //   loadChildren: './modules/messages/messages.module#MessagesModule',
      //   canActivate: [AuthenticatedCompany]
      // },
      // {
      //   path: 'message',
      //   loadChildren: './modules/new-message/new-messages.module#NewMessagesModule',
      //   canActivate: [AuthenticatedCompany]
      // },
      // {
      //   path: 'referral',
      //   component: ReferralComponent,
      //   canActivate: [AuthenticatedCompany]
      // },
      // {
      //   path: 'companylogin',
      //   loadChildren: '../../library/shared/auth/auth.module#AuthModule',
      // },
      // {
      //   path: 'notfound',
      //   component: NotFoundComponent
      // }
    ]
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class UserRoutingModule { }
