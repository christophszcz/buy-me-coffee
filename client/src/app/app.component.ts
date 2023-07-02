import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'buy-me-coffee';
  value: number = 0;

  constructor() {}

  donate(value: number) {
    this.value = value;
    console.log('donate', this.value);
  }
    
}
