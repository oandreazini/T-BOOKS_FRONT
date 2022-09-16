import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAuthors } from '../models/iauthors';
import { Author } from '../models/author.model';

const baseURL = 'https://rts-tbooks-bbdd.herokuapp.com/authors';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor(private http: HttpClient) { }

  returnAllAuthors(): Observable<Author[]>{
    return this.http.get<IAuthors[]>(baseURL);
  }

  getById(id: any): Observable<Author>{
    return this.http.get(`${baseURL}/${id}`);
  }

  create(data: any): Observable<any>{
    return this.http.post(baseURL,data);
  }

  update(id: any, data: any): Observable<any>{
    return this.http.put(`${baseURL}/${id}`, data);
  }

  delete(id: any): Observable<any>{
    return this.http.delete(`${baseURL}/${id}`);
  }

}
