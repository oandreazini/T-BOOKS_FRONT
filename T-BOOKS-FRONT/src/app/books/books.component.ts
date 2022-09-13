import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books:any = null;

  /* Get books from backend */
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get("https://rts-tbooks-bbdd.herokuapp.com/books")
    .subscribe(
      result => {
        this.books = result;
      },
      error => {
        console.log('Problems');
      }
    );
  }
}
