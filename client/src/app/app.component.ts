import { catchError, Observable, of } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'buy-me-coffee';
  value: number = 0;
  errorMessage: any;

  constructor(private _http: HttpClient) {}

  donate(value: number): void {
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

    this._http.post<any>(url, body, {headers})
      .pipe(catchError((error: any, caught: Observable<any>): Observable<any> => {
        this.errorMessage = error.message;
        console.error('There was an error!', error);
        return of();
      }))
      .subscribe(data => {
        console.log(data);
        //this.value = data.value;
      });
  }  
}
