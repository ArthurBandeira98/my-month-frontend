import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NbCardModule } from '@nebular/theme';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    NbCardModule,
  ]
})
export class PagesModule { }
