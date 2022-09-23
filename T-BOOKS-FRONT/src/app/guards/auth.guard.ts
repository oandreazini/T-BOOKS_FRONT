import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { TokenStorageService } from '../_services/token-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private tokenStorage: TokenStorageService
  ) {}

  canActivate(): boolean {
    if (!!this.tokenStorage.getRoles()) {
      return true;
    } else {
      window.alert(
        'No tienes permiso para acceder aquí. Porfavor, ingresa con tu cuenta.'
      );
      this.router.navigate(['/login']);
      return false;
    }
  }
}
