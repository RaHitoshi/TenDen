import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Info1Component } from './info1/info1.component';

@NgModule({
  declarations: [
    AppComponent,
    Info1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent,Info1Component]
})
export class AppModule { }
