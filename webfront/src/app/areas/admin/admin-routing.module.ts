import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    // children: [
    //   {
    //     path: 'manageactivateduser',
    //     loadChildren: './modules/manage-member/manage-activated-user/manage-activated-user.module#ManageActivatedUserModule'
    //   }
    //   ,
    //   {
    //     path: 'managedeactivateduser',
    //     loadChildren: './modules/manage-member/manage-deactivated-user/manage-deactivated-user.module#ManageDeactivatedUserModule'
    //   }
    // ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes)
  ],
  declarations: [RouterModule]
})
export class AdminRoutingModule { }
