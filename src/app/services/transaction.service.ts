import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseURL = 'https://dio-santander-bankline-api.herokuapp.com';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) { }

  list(): Observable<any> {
    return this.http.get(`${ baseURL }/transactions`);
  }
  findByIdAccount(id:any): Observable<any> {
    return this.http.get(`${ baseURL }/transactions/${id}`);
  }
// adicionando o método de inclusão (POST) via API
  create(transaction:any): Observable<any> {
    return this.http.post(`${ baseURL }/transactions`, transaction);
 }
}
