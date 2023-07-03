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
  }

  processPayment() {
    const url = 'http://localhost:3000/payment';
    const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    const body = { title: 'Angular POST Request Example' };

    this._http.post<any>(url, body, {headers}).subscribe(data => {
      console.log(data);
    })
  }  
}
