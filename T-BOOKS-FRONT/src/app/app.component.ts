import { Component } from '@angular/core';
import { Book } from './models/book.model';
import { BooksService } from './services/books.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
  <app-search-book [searchBook]="books"></app-search-book>
`
})
export class AppComponent {
  // title = 'T-BOOKS-FRONT';

  books:any;

  currentBooks: Book = {};
  currentIndex = -1;
  title = '';

  constructor(private booksService: BooksService) {}

  searchName(): void{
    this.currentBooks = {};
    this.currentIndex = -1;

    this.booksService.getByTitle(this.title)
    .subscribe(
      data => {
        this.books = data;
        console.log(data);
        window.location.assign("search_book/:id");
      },
      error => {
        console.log(error);
      });
  }
}
