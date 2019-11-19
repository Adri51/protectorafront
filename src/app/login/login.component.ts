import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
      nombre: new FormControl('', [
        Validators.required
      ]),
      apellidos: new FormControl('', [
        Validators.required
      ]),
      fechadenacimiento: new FormControl('', [
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required
      ]),
      repitpassword: new FormControl('', [
        Validators.required
      ]),
      codigopostal: new FormControl('', [
        Validators.required
      ]),
      direccion: new FormControl('', [
        Validators.required
      ]),
      telefono: new FormControl('', [
        Validators.required
      ]),
      localidad: new FormControl('', [
        Validators.required
      ]),
      provincia: new FormControl('', [
        Validators.required
      ])
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.login.value);
  }

}
