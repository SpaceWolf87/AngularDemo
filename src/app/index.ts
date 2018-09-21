import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CurrencyExchangeModule } from '../currency-exchange';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CurrencyExchangeModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
