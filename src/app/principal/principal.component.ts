import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PerrosService } from '../perros.service';
import { PerrerasService } from '../perreras.service';



@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  buscador: FormGroup;
  arrPerreras: any[];
  arrPerros: any[];
  arrRaza: any[];
  arrColor: any[];
  arrSize: any[];
  arrSexo: any[];



  constructor(private perrosService: PerrosService, private perrerasService: PerrerasService) {
    this.buscador = new FormGroup({
      perrera: new FormControl('', [
        Validators.required
      ]),
      raza: new FormControl('', [
        Validators.required
      ]),
      color: new FormControl(''),
      tamano: new FormControl(''),
      edad: new FormControl('')
    });
  }


  ngOnInit() {

    this.perrerasService.getPerreras()
      .then(response => {
        this.arrPerreras = response;
        //console.log(this.arrPerreras);
      });

    this.perrosService.getPerros()
      .then(response => {
        this.arrPerros = response;
      });

    this.perrosService.getPerrosRaza()
      .then(response => {
        this.arrRaza = response;
      });

    this.perrosService.getPerrosColor()
      .then(response => {
        this.arrColor = response;
      });

    this.perrosService.getPerrosSize()
      .then(response => {
        this.arrSize = response;
      });

    this.perrosService.getPerrosSexo()
      .then(response => {
        this.arrSexo = response;
      });
  }

  onSubmit() {
    this.perrosService.getFindPerro(this.buscador.value);

  }
}

