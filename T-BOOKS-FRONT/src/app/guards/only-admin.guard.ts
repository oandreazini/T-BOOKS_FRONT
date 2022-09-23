import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { TokenStorageService } from '../_services/token-storage.service';

@Injectable({
  providedIn: 'root',
})
export class OnlyAdminGuard implements CanActivate {
  constructor(
    private router: Router,
    private tokenStorage: TokenStorageService
  ) {}

  canActivate(): boolean {
    if (this.tokenStorage.getRoles() == '"ROLE_ADMIN"') {
      return true;
    } else {
      window.alert(
        'No tienes los permisos necesarios para acceder a este sitio.'
      );
      this.router.navigate(['']);
      return false;
    }
  }
}
