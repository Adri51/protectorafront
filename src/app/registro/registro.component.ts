import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../clientes.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

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
        Validators.required,
        Validators.pattern(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)
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
    const controlNombre = this.registro.controls['nombre']
    controlNombre.valueChanges.pipe(debounceTime(400)).subscribe((value) => {
      console.log(value);
    });
  }

  onSubmit() {
    // console.log(this.registro.value);
  }

  passwordValidator(registro: FormGroup) {
    const passwordControl = registro.controls['password'];
    const repitpasswordControl = registro.controls['repitpassword'];

    if (passwordControl.value === repitpasswordControl.value) {
      return null;
    } else {
      return { passwordvalidator: true };
    }
  }

}
