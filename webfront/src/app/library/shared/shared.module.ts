import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { GlobalHeaderComponent } from './components/global-header/global-header.component';
import { GlobalFooterComponent } from './components/global-footer/global-footer.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { ValidationsComponent } from './components/validations/validations.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HomeComponent,
                GlobalHeaderComponent,
                GlobalFooterComponent,
                AvatarComponent,
                ValidationsComponent],

  exports: [GlobalHeaderComponent,
            GlobalFooterComponent]
})
export class SharedModule { }
