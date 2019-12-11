import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) { }

  insertUsuario(values): Promise<any> {
    return this.http.post('http://localhost:3000/api/usuarios', values).toPromise();
  }
}
