import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainListComponent } from './main-browse/main-list/main-list.component';
import { TitleDropDownComponent } from './main-browse/title-drop-down/title-drop-down.component';

@NgModule({
  declarations: [
    AppComponent,
    MainListComponent,
    TitleDropDownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
