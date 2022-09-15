import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor(private http: HttpClient) { }

  returnAllAuthors(){
    return this.http.get("https://rts-tbooks-bbdd.herokuapp.com/authors");
  }
}
