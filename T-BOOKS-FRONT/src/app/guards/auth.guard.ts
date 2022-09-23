import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router : Router, private authService: AuthService){}

  canActivate(): boolean {
    if(this.authService.userLogged) {
      console.log("Guard 'AuthGuard' used");
      return true;
    } else {
      console.log("Guard 'AuthGuard' used");
      window.alert("No tienes permiso para acceder aquí. Porfavor, ingresa con tu cuenta.");
      this.router.navigate(['/login']);
      return false;
    }
  }

}
