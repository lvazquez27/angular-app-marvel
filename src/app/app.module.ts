import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactersComponent } from './characters/characters.component';
import { CharacterPopupComponent } from './character-popup/character-popup.component';
import {HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RequestHistoryComponent } from './request-history/request-history.component';

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    CharacterPopupComponent,
    RequestHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
