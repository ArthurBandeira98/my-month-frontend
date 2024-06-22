import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NbActionsModule, NbButtonModule, NbIconModule, NbLayoutModule, NbSidebarModule, NbThemeModule } from '@nebular/theme';
import { HeaderComponent } from './header/header.component';
import { NbEvaIconsModule } from '@nebular/eva-icons';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NbThemeModule.forRoot({name: 'dark'}),
    NbSidebarModule.forRoot(),
    NbSidebarModule,
    NbLayoutModule,
    NbButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
