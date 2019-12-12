import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ClientesService } from './clientes.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProtectoraFront';

  login: FormGroup;

  constructor(private clientesService: ClientesService) {
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
        }
      }).catch(err => {
        console.log(err);
      });
  }
}
