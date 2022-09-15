import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book.model';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-push-book',
  templateUrl: './push-book.component.html',
  styleUrls: ['./push-book.component.css'],
})
export class PushBookComponent implements OnInit {
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
      username: '',
      password: '',
      role: '',
    },
  };

  constructor(private bookService: BooksService) {}

  ngOnInit(): void {}

  saveBook(): void {
    const data = {
      title: this.book.title,
      isbn: this.book.isbn,
      synopsis: this.book.synopsis,
      author: {
        id: this.book.author?.id,
        nameSurname: this.book.author?.nameSurname,
      },
      editorial: {
        id: this.book.editorial?.id,
        name: this.book.editorial?.name,
      },
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
