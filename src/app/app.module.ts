import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IframeButtonComponent } from './iframe-button/iframe-button.component';
import { IframeImageComponent } from './iframe-image/iframe-image.component';

@NgModule({
  declarations: [
    AppComponent,
    IframeButtonComponent,
    IframeImageComponent
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
