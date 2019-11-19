import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PerrosService } from '../perros.service';
import { PerrerasService } from '../perreras.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  buscador: FormGroup;

  constructor(private perrosService: PerrosService, private perrerasService: PerrerasService) {
    this.buscador = new FormGroup({
      perrera: new FormControl('', [
        Validators.required
      ]),
      raza: new FormControl('', [
        Validators.required
      ]),
      color: new FormControl(''),
      tamaño: new FormControl(''),
      edad: new FormControl('')
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.buscador.value);
  }

}
