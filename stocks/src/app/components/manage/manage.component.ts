import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { StocksService } from '../../service/stocks.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

  symbols: Array<string>;
  stock: string;
  @Output() modified = new EventEmitter<Array<string>>();

  constructor(private service: StocksService) {
    this.symbols = service.get();
  }

  add() {
    this.symbols = this.service.add(this.stock.toUpperCase());
    this.modified.emit(this.service.get());
    this.stock = '';
  }

  remove(symbol) {
    this.symbols = this.service.remove(symbol);
    this.modified.emit(this.service.get());
  }

  ngOnInit() {
  }
}
