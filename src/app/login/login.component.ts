import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: FormGroup;


  constructor(private clientesService: ClientesService) {
    this.login = new FormGroup({
      nombre: new FormControl(''),
      apellidos: new FormControl(''),
      fechadenacimiento: new FormControl(''),
      password: new FormControl(''),
      repitpassword: new FormControl(''),
      codigopostal: new FormControl(''),
      direccion: new FormControl(''),
      telefono: new FormControl(''),
      localidad: new FormControl(''),
      provincia: new FormControl('')
    });
  }

  ngOnInit() {
  }

}
