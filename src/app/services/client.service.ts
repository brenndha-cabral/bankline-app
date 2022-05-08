import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'https://dio-santander-bankline-api.herokuapp.com';

@Injectable({
  providedIn: 'root'
})

export class ClientService {
  constructor(private http: HttpClient) { }

  list(): Observable<any> {
    return this.http.get(`${ baseUrl }/clients`);
  }
}
