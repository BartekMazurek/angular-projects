import {Component, Input, OnInit, OnChanges} from '@angular/core';
import { StocksService, StockInterface } from '../../service/stocks.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnChanges {

  @Input() changed: Array<string>;

  stocks: Array<StockInterface>;
  symbols: Array<string>;

  constructor(private service: StocksService) {
    this.symbols = service.get();
  }

  ngOnInit() {
    this.service.load(this.symbols).subscribe( stocks => {
      this.stocks = stocks;
    });
  }

  ngOnChanges(): void {
    if (this.changed) {
      this.service.load(this.changed).subscribe( stocks => {
        this.stocks = stocks;
      });
    }
  }
}
