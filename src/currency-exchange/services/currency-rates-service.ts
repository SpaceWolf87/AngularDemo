import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CurrencyRates } from '../models';

@Injectable()
export class CurrencyRatesService {
  webApiUrl = 'https://www.csast.csas.cz/webapi/api/v1/rates/exchangerates?web-api-key=86d63706-3a9c-4762-bd7a-415651cc26f8';

  constructor(private http: HttpClient) {}

  getExchangeRatesList() {
    return this.http.get<CurrencyRates[]>(this.webApiUrl);
  }
}
