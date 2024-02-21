import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RegisterComponent} from '@front-end/alphaweb/feat/auth';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, RegisterComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
