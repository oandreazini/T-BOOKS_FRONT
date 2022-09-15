import { Component, OnInit } from '@angular/core';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books:any;

  constructor(private booksService: BooksService) {}

  ngOnInit() {
    this.booksService.returnAllBooks()
    .subscribe(
      result => {
        this.books = result;
      },
      error => {
        console.log(error);
      }
    );
  }
}
