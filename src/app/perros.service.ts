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

  getPerrosRaza(): Promise<any[]> {
    return this.http.get<any[]>('http://localhost:3000/api/perros/raza').toPromise();
  }

  getPerrosColor(): Promise<any[]> {
    return this.http.get<any[]>('http://localhost:3000/api/perros/color').toPromise();
  }

  getPerrosSize(): Promise<any[]> {
    return this.http.get<any[]>('http://localhost:3000/api/perros/tamano').toPromise();
  }

  getPerrosSexo(): Promise<any[]> {
    return this.http.get<any[]>('http://localhost:3000/api/perros/sexo').toPromise();
  }
}
