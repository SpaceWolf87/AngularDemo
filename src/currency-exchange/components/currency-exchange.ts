import { Component, OnInit } from '@angular/core';
import {TableModule} from 'primeng/table';

import { CurrencyRatesService } from '../services/currency-rates-service';
import { CurrencyRates } from '../models';

@Component({
  selector: 'app-currency-exchange',
  templateUrl: './currency-exchange.html',
  styleUrls: ['./currency-exchange.css']
})

export class CurrencyExchangeComponent {
  currencyRatesList: CurrencyRates[];
  constructor(private currencyRatesService: CurrencyRatesService) {}

  ngOnInit() {
    this.getExchangeRatesList();
  }

  getExchangeRatesList() {
    this.currencyRatesService.getExchangeRatesList().subscribe(
      data => {
        this.currencyRatesList = data;
      }
    );
  }
}
