import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../models/book.model';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.css']
})
export class SearchBookComponent implements OnInit {

  @Input() books:any;

  currentBooks: Book = {};
  currentIndex = -1;
  title = '';
  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
  }

}
