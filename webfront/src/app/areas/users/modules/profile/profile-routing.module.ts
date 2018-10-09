import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const profileRoutes: Routes = [
  // { path: '', redirectTo: 'publicindividualprofile', pathMatch: 'full' },
  // { path: 'publicindividualprofile', component: EditProfileComponent },
  // { path: 'publicindividualprofile/:id', component: ViewProfileComponent },
  // { path: 'individualprofile', component: EditProfileComponent, canDeactivate: [ConfirmDeactivateGuardEditProfile] },
  // { path: 'individualprofile/:id', component: EditProfileComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(profileRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class ProfileRoutingModule { }
