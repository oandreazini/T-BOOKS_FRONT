import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = "https://rts-tbooks-bbdd.herokuapp.com/books";

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }

  returnAllBooks(){
    return this.http.get(baseUrl);
  }

  returnBookById(id:any){
    return this.http.get(baseUrl+"/"+id);
  }
}
