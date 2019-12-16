import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) { }

  // USUARIO

  insertUsuario(values): Promise<any> {
    return this.http.post('http://localhost:3000/api/usuarios', values).toPromise();
  }

  // LOGIN

  login(values) {

    return this.http.post('http://localhost:3000/api/usuarios/login', values).toPromise();

  }

  // POST

  insertPost(pUser, pUserApellido, values, pFecha): Promise<any> {
    values.usuario = pUser + ' ' + pUserApellido;
    values.fecha = pFecha;
    return this.http.post('http://localhost:3000/api/usuarios/post', values).toPromise();
  }

  getPintarPost(): Promise<any[]> {
    return this.http.get<any[]>('http://localhost:3000/api/usuarios/post').toPromise();

  }
}