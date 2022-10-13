import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/book.model';

const baseUrl = "http://tbooksback-env.eba-xdm3b3er.us-east-1.elasticbeanstalk.com/books";

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }

  returnAllBooks(): Observable<Book[]>{
    return this.http.get<Book[]>(baseUrl);
  }

  returnBookById(id:any): Observable<Book>{
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any>{
    return this.http.post(baseUrl,data);
  }

  update(id: any, data: any): Observable<any>{
    return this.http.put(`${baseUrl}/${id}`,data);
  }

  delete(id: any): Observable<any>{
    return this.http.delete(`${baseUrl}/${id}`);
  }

  getByTitle(title: any): Observable<Book[]>{
    return this.http.get<Book[]>(`${baseUrl}/title/${title}`);
  }

  getByBooksByUser(userId: any): Observable<Book[]>{
    return this.http.get<Book[]>(`${baseUrl}/user/${userId}`);
  }

  getByAuthor(author: any): Observable<Book[]>{
    return this.http.get<Book[]>(`${baseUrl}/author/${author}`)
  }

  getByIsbn(isbn: any): Observable<Book[]>{
    return this.http.get<Book[]>(`${baseUrl}/isbn/${isbn}`)
  }

  getPageBooks(): Observable<any>{
    return this.http.get<any>(`http://tbooksback-env.eba-xdm3b3er.us-east-1.elasticbeanstalk.com/bookspage`);
  }

  getPage(p: any): Observable<any>{
    return this.http.get<any>(`http://tbooksback-env.eba-xdm3b3er.us-east-1.elasticbeanstalk.com/bookspage?sortBy=id&page=${p}`);
  }
}
