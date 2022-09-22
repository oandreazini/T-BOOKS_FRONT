import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUsers } from '../models/iusers';
import { User } from '../models/user.model';

const baseURL = 'https://rts-tbooks-bbdd.herokuapp.com/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  returnAllUsers(): Observable<User[]>{
    return this.http.get<IUsers[]>(baseURL);
  }

  getById(id: any): Observable<User>{
    return this.http.get(`${baseURL}/${id}`);
  }

  create(data: any): Observable<any>{
    return this.http.post('https://rts-tbooks-bbdd.herokuapp.com/register', data);
  }

  update(id: any, data: any): Observable<any>{
    return this.http.put(`${baseURL}/${id}`, data);
  }

  delete(id: any): Observable<any>{
    return this.http.delete(`${baseURL}/${id}`);
  }

  getByUsername(username: any): Observable<User>{
    return this.http.get(`${baseURL}/username/${username}`);
  }

  updatePass(id: any, data: any): Observable<any>{
    return this.http.put(`${baseURL}/pass/${id}`, data);
  }


}
