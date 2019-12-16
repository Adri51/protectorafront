import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ClientesService } from '../clientes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-foro',
  templateUrl: './foro.component.html',
  styleUrls: ['./foro.component.css']
})
export class ForoComponent implements OnInit {

  foro: FormGroup;
  token: any;
  user: any;
  userApellido: any;

  constructor(private clientesService: ClientesService, private router: Router) {
    this.token = "";
    this.user = "";
    this.userApellido = "";

    this.foro = new FormGroup({
      titulo: new FormControl(''),
      texto: new FormControl('')
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    this.foro.value.fecha = new Date();
    this.clientesService.instertPost(this.foro.value);
    // .then(response => {
    //   if (response['error']) {
    //     alert(response['error']);
    //   } else {
    //     localStorage.setItem('user-token', response['exito']);
    //     localStorage.setItem('nombre', response['nombre']);
    //     this.token = localStorage.getItem('user-token');
    //     this.user = localStorage.getItem('nombre');
    //   }
    // }).catch(err => {
    //   console.log(err);
    // });
    // }
    console.log(this.foro.value);


  }
};