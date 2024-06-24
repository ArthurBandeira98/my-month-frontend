import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NbButtonModule, NbCardModule, NbLayoutModule } from '@nebular/theme';
import { CurrentMonthComponent } from './current-month/current-month.component';

@NgModule({
  declarations: [
    HomeComponent,
    CurrentMonthComponent,
  ],
  imports: [
    CommonModule,
    NbCardModule,
    NbLayoutModule,
    NbButtonModule
  ]
})
export class PagesModule { }
