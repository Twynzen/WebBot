import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './modules/intro/intro.component';
import { PlatformMenuComponent } from './modules/platform-menu/platform-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    PlatformMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
