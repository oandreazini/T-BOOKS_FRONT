import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
const ROLES_KEY = 'auth-roles';

@Injectable({
  providedIn: 'root',
})
export class TokenStorageService {
  constructor(private authService: AuthService, public router: Router) {}

  signOut(): void {
    window.sessionStorage.clear();
    this.authService.unLogged();
  }

  public saveToken(token: string): void {
    console.log('saved Token: ' + token);
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
    // And we set the variable of authService "userLogged to True"
    this.authService.logged();
  }

  public getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUser(userId: any): void {
    console.log('saved user: ' + userId);
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, userId);
  }

  public getUser(): any {
    return window.sessionStorage.getItem(USER_KEY);
  }

  public saveRoles(roles: any): void {
    console.log('saved role: ' + roles);
    window.sessionStorage.removeItem(ROLES_KEY);
    window.sessionStorage.setItem(ROLES_KEY, JSON.stringify(roles));
  }

  public getRoles() {
    return window.sessionStorage.getItem(ROLES_KEY);
  }
}
