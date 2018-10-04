import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { GlobalHeaderComponent } from './components/global-header/global-header.component';
import { GlobalFooterComponent } from './components/global-footer/global-footer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HomeComponent, GlobalHeaderComponent, GlobalFooterComponent],
  exports: [GlobalHeaderComponent]
})
export class SharedModule { }
