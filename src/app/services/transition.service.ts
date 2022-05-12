import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseURL = 'https://dio-santander-bankline-api.herokuapp.com';

@Injectable({
  providedIn: 'root'
})
export class TransitionService {

  constructor(private http: HttpClient) { }

  list(): Observable<any> {
    return this.http.get(`${ baseURL }/transitions`);
  }
  findByIdAccount(id:any): Observable<any> {
    return this.http.get(`${ baseURL }/transitions/${id}`);
  }
// adicionando o método de inclusão (POST) via API
  create(transition:any): Observable<any> {
    return this.http.post(`${ baseURL }/transitions`, transition);
 }
}
