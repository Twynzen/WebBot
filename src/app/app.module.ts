import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatComponent } from './modules/intro/cat.component';
import { PlatformMenuComponent } from './modules/platform-menu/platform-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    CatComponent,
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
