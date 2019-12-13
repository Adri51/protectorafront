import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-foro',
  templateUrl: './foro.component.html',
  styleUrls: ['./foro.component.css']
})
export class ForoComponent implements OnInit {

  foro: FormGroup;

  constructor() {
    this.foro = new FormGroup({
      titulo: new FormControl(''),
      texto: new FormControl('')
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    this.foro.value.fecha = new Date();
  }

}
