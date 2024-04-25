import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RegisterContainerComponent} from '@alphaweb/feat/auth';
import {HTTP_INTERCEPTORS ,HttpClientModule} from '@angular/common/http';
import {BasicAuthInterceptor } from '@alphaweb/data/auth';


@NgModule({
  declarations: [],
  imports: [HttpClientModule,BrowserModule, BrowserAnimationsModule, RegisterContainerComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BasicAuthInterceptor,
      multi: true,
    },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: ErrorInterceptor,
    //   multi: true,
    // },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {
  }
}
