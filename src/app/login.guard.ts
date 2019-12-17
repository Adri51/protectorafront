import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private router: Router) {

  }
  canActivate() {
    const token = localStorage.getItem('user_token');
    if (token) {
      this.router.navigate(['/foro']);
      return true;
    } else {
      this.router.navigate(['/principal']);
      return false;
    }
  }

}
