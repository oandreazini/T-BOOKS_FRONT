import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../models/book.model';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-mod-books',
  templateUrl: './mod-books.component.html',
  styleUrls: ['./mod-books.component.css'],
})
export class ModBooksComponent implements OnInit {
  book: Book = {
    title: '',
    isbn: '',
    synopsis: '',
    author: {
      id: '',
      nameSurname: '',
    },
    editorial: {
      id: '',
      name: '',
    },
    user: {
      id: '',
      name: '',
      email: '',
      phone: '',
      city: '',
      username: '',
      password: '',
      role: '',
    },
  };
  message = '';

  constructor(private bookService: BooksService, private router: Router) {}

  ngOnInit(): void {
    this.message = '';
  }

  updateBook(): void {
    this.message = '';

    this.bookService.update(this.book.id, this.book)
    .subscribe(
      response => {
        console.log(response);
        this.message = response.message ? response.message : "The status was updated successfully";
      },
      error => {
        console.log(error);
      }
    );
  }
}
