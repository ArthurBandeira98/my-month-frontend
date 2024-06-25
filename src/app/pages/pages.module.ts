import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NbActionsModule, NbButtonModule, NbCardModule, NbDialogModule, NbIconModule, NbLayoutModule, NbTabsetModule } from '@nebular/theme';
import { CurrentMonthComponent } from './current-month/current-month.component';
import { CurrentMonthFormComponent } from './current-month/form/form.component';

@NgModule({
  declarations: [
    HomeComponent,
    CurrentMonthComponent,
    CurrentMonthFormComponent,
  ],
  imports: [
    CommonModule,
    NbCardModule,
    NbLayoutModule,
    NbButtonModule,
    NbActionsModule,
    NbIconModule,
    NbTabsetModule,
    NbDialogModule.forRoot()
  ]
})
export class PagesModule { }
