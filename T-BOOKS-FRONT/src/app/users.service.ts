import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  returnAllUsers(){
    return this.http.get("https://rts-tbooks-bbdd.herokuapp.com/users");
  }
}
