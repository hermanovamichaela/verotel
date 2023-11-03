import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public apiUrl = 'https://dog.ceo/api/breeds/image/random'

  constructor(private http: HttpClient) { }

  public getImage(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
