import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'buy-me-coffee';
  value: number = 0;

  constructor(private _http: HttpClient) {}

  donate(value: number) {
    this.value = value;
    console.log('donate', this.value);
    this.processPayment();
  }

  processPayment(): void {
    const url = 'http://localhost:3000/create-checkout-session';
    const headers = { 'Content-Type': 'application/json' };
    const body = JSON.stringify({
      items: [ 
        { id: 1, quantity: 1 }
      ]
    });

    this._http.post<any>(url, body, {headers}).subscribe(data => {
      console.log(data);
    });
  }  
}
