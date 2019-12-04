import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProtectoraFront';

  login: FormGroup;

  constructor() {
    this.login = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    });
  }
}
