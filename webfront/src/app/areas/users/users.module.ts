import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { UserRoutingModule } from './user-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AutoCompleteModule } from 'primeng/autocomplete';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    NgbModule
  ],
  declarations: [
    UserComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class UsersModule { }
