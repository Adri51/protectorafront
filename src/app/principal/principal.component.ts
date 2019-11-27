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

  constructor(private perrosService: PerrosService, private perrerasService: PerrerasService) {
  }

  ngOnInit() {
    this.perrerasService.getPerreras()
      .then(response => {
        this.arrPerreras = response;
      });
  }
}
