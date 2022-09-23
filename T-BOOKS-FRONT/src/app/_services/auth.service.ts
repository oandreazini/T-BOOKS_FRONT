import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const AUTH_API = 'https://rts-tbooks-bbdd.herokuapp.com/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'applicatoin/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  userLogged = false;

  user: any = null;

  login(username: string, password: string): Observable<any> {
    this.user = null;

    this.user = {
      username: username,
      password: password,
    };
    return this.http.post(AUTH_API + 'login', JSON.stringify(this.user), {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  register(
    name: string,
    email: string,
    phone: string,
    city: string,
    username: string,
    password: string,
    role: string
  ): Observable<any> {
    this.user = null;

    this.user = {
      name: name,
      email: email,
      phone: phone,
      city: city,
      username: username,
      password: password,
    };
    return this.http.post(AUTH_API + 'register', JSON.stringify(this.user), {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  logged(): void {
    this.userLogged = true;
  }

  unLogged(): void {
    this.userLogged = false;
  }
}
