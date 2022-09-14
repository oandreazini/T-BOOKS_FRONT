import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }

  returnAllBooks(){
    return this.http.get("https://rts-tbooks-bbdd.herokuapp.com/books");
  }

  returnBookById(id:any){
    return this.http.get("https://rts-tbooks-bbdd.herokuapp.com/books"+id);
  }
}
