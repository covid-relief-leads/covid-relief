import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TitleBarComponent } from './components/title-bar/title-bar.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MainContentComponent } from './components/main-content/main-content.component';
import { WantToHelpComponent } from './components/want-to-help/want-to-help.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleBarComponent,
    MainContentComponent,
    WantToHelpComponent,
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatCardModule,
    AppRoutingModule
  ],
  exports: [
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
