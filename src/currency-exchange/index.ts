import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CurrencyRatesService } from './services/currency-rates-service';

import { CurrencyExchangeComponent } from './components/currency-exchange';

import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    CurrencyExchangeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    CurrencyRatesService,
  ],
  exports: [
    CurrencyExchangeComponent,
  ],
})
export class CurrencyExchangeModule { }
