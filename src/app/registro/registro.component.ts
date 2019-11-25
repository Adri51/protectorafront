import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../clientes.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  registro: FormGroup;


  constructor(private clientesService: ClientesService) {
    this.registro = new FormGroup({
      nombre: new FormControl('', [
        Validators.required
      ]),
      apellidos: new FormControl('', [
        Validators.required
      ]),
      email: new FormControl('', [
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
    console.log(this.registro.value);
  }

}
