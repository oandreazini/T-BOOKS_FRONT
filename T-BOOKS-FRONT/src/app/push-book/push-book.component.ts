import { Component, OnInit } from '@angular/core';
import { PushBook } from '../models/push-book.model';
import { BooksService } from '../services/books.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-push-book',
  templateUrl: './push-book.component.html',
  styleUrls: ['./push-book.component.css'],
})
export class PushBookComponent implements OnInit {
  authorName?: string;
  editorialName?: string;

  book: PushBook = {
    title: '',
    isbn: '',
    author: '',
    editorial: '',
    synopsis: '',
    usuario: {
      id: '',
      roles: {
        id: '',
      }
    },
  };

  constructor(private bookService: BooksService, private tokenStorage: TokenStorageService) {}

  ngOnInit(): void {}

  saveBook(): void {
    let role = this.tokenStorage.getRoles();
    let idRole = "1";

    if(role=="ROLE_ADMIN") {
      idRole = "1";
    } else if (role=="ROLE_USER") {
      idRole = "11";
    }

    const data = {
      title: this.book.title,
      isbn: this.book.isbn,
      author: this.book.author,
      editorial: this.book.editorial,
      synopsis: this.book.synopsis,
      usuario: {
        id: this.tokenStorage.getUser(),
        roles: {
          id: idRole
        }
      },
    };

    console.log("data to introduce: ");
    console.log(data)

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
