import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book.model';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-push-book',
  templateUrl: './push-book.component.html',
  styleUrls: ['./push-book.component.css'],
})
export class PushBookComponent implements OnInit {
  authorName?: string;
  editorialName?: string;

  book: Book = {
    title: '',
    isbn: '',
    synopsis: '',
    author: '',
    editorial: '',
    user: {
      id: '',
      name: '',
      email: '',
      phone: '',
      username: '',
      password: '',
      role: ''
    },
  };

  constructor(private bookService: BooksService) {}

  ngOnInit(): void {}

  saveBook(): void {
    const data = {
      title: this.book.title,
      isbn: this.book.isbn,
      synopsis: this.book.synopsis,
      author: this.book.author,
      editorial: this.book.editorial,
      user: {
        id: this.book.user?.id,
        name: this.book.user?.name,
        email: this.book.user?.email,
        phone: this.book.user?.phone,
        city: this.book.user?.city,
        username: this.book.user?.username,
        password: this.book.user?.password,
        role: this.book.user?.role,
      },
    };

    this.bookService.create(data)
    .subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );
  }
}
