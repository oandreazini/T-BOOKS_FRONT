import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book.model';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  allBooks:any;
  books: any;

  currentBooks: Book = {};
  currentIndex = -1;
  search = '';
 
  constructor(private booksService: BooksService) {}

  ngOnInit() {
    this.booksService.returnAllBooks()
    .subscribe(
      result => {
        this.books = result;
        console.log(this.books);
      },
      error => {
        console.log(error);
      }
    );
  }

  searchName(): void{
    this.currentBooks = {};
    this.currentIndex = -1;

    this.booksService.getByTitle(this.search)
    .subscribe(
      data => {
        this.books = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }

  searchAuthor(): void{
    this.currentBooks = {};
    this.currentIndex = -1;

    this.booksService.getByAuthor(this.search)
    .subscribe(
      data => {
        this.books = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }

  searchIsbn(): void{
    this.currentBooks = {};
    this.currentIndex = -1;

    this.booksService.getByIsbn(this.search)
    .subscribe(
      data => {
        this.books = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }

}
