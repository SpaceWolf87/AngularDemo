import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import {TableModule} from 'primeng/table';

import { CurrencyRatesService } from './services/currency-rates-service';
import { CurrencyExchangeComponent } from './components/currency-exchange';



@NgModule({
  declarations: [
    CurrencyExchangeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TableModule,
  ],
  providers: [
    CurrencyRatesService,
  ],
  exports: [
    CurrencyExchangeComponent,
  ],
})
export class CurrencyExchangeModule { }
