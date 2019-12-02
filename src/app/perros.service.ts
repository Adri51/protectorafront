import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PerrosService {

  constructor(private http: HttpClient) { }

  getPerros(): Promise<any[]> {
    return this.http.get<any[]>('http://localhost:3000/api/perros').toPromise();
  }
}
