import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book.model';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.css']
})
export class SearchBookComponent implements OnInit {

  books:any;

  currentBooks: Book = {};
  currentIndex = -1;
  title = '';
  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
  }

  // searchName(): void{
  //   this.currentBooks = {};
  //   this.currentIndex = -1;

  //   this.booksService.getByTitle(this.title)
  //   .subscribe(
  //     data => {
  //       this.books = data;
  //       console.log(data);
  //     },
  //     error => {
  //       console.log(error);
  //     });
  // }

}
