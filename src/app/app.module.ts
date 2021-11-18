import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayLolComponent } from './components/display-lol/display-lol.component';
import { PageLolComponent } from './pages/page-lol/page-lol.component';
import { HttpClientModule } from '@angular/common/http';
import { AddCharComponent } from './layouts/add-char/add-char.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayLolComponent,
    PageLolComponent,
    AddCharComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
