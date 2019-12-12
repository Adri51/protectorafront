import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ClientesService } from './clientes.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProtectoraFront';

  login: FormGroup;
  token: any;

  constructor(private clientesService: ClientesService, private router: Router) {

    this.token = "";

    console.log('token', this.token);
    this.login = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    });
  }

  onSubmit(pLogin) {
    this.clientesService.login(pLogin.value)
      .then(response => {
        if (response['error']) {
          alert(response['error']);
        } else {
          localStorage.setItem('user-token', response['exito']);
          this.token = localStorage.getItem('user-token');

        }
      }).catch(err => {
        console.log(err);
      });
  }

  cerrarSesion() {
    localStorage.removeItem('user-token');
    this.router.navigate(['/principal/']);
    this.token = "";
  }
}
