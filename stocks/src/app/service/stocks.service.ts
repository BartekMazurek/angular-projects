import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';

export interface StockInterface {
  symbol: string;
  lastTradePriceOnly: number;
  change: number;
  changeInPercent: number;
}

@Injectable({
  providedIn: 'root'
})

export class StocksService {

  private stocks: Array<string> = ['APPL', 'GOOG', 'FB', 'AMZN', 'TWTR'];
  private service = 'https://angular2-in-action-api.herokuapp.com';

  constructor(private http: HttpClient) { }

  get() {
    return this.stocks.slice();
  }

  add(stock) {
    this.stocks.push(stock);
    return this.get();
  }

  remove(stock) {
    this.stocks.splice(this.stocks.indexOf(stock), 1);
    return this.get();
  }

  load(symbols) {
    if (symbols) {
      return this.http.get<Array<StockInterface>>(this.service + '/stocks/snapshot?symbols=' + symbols.join());
    }
  }

}
