import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CurrentMonthComponent } from './pages/current-month/current-month.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'current-month', component: CurrentMonthComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
