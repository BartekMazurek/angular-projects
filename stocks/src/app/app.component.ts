import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    private changedStocks: Array<string>;

    onChange(changed: Array<string>) {
        this.changedStocks = changed;
    }
}
