import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';

const profileRoutes: Routes = [
  { path: '', redirectTo: 'publicindividualprofile', pathMatch: 'full' },
  { path: 'edit', component: EditProfileComponent },
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
