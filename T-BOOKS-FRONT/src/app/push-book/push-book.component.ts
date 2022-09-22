import { Component, OnInit } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import { PushBook } from '../models/push-book.model';
import { BooksService } from '../services/books.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-push-book',
  templateUrl: './push-book.component.html',
  styleUrls: ['./push-book.component.css'],
})
export class PushBookComponent implements OnInit {

  book: PushBook = {
    title: '',
    isbn: '',
    synopsis: '',
    author: '',
    editorial: '',
    usuario: {
      id: '',
      name: '',
      email: '',
      phone: '',
      city: '',
      username: '',
      password: '',
      roles: [{
        id: '',
        name: ''
      }]
    }
  };

  constructor(private bookService: BooksService, private tokenStorage: TokenStorageService, private toastService: HotToastService) {}

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
      synopsis: this.book.synopsis,
      author: this.book.author,
      editorial: this.book.editorial,
      usuario: {
        id: this.tokenStorage.getUser(),
        name: this.book.usuario?.name,
        email: this.book.usuario?.email,
        phone: this.book.usuario?.phone,
        city: this.book.usuario?.city,
        username: this.book.usuario?.username,
        password: this.book.usuario?.password,
        roles: [{
          id: idRole,
          name: role
        }]
      },
    };

    console.log("data to introduce: ");
    console.log(data);

    this.bookService.create(data)
    .subscribe(
      response => {
        this.showToast();
        setTimeout(() => {
          this.reload();
        }, 1000);
      },
      error => {
        console.log(error);
      }
    );
  }

  showToast() {
    this.toastService.show('Libro añadido con éxito.', {
      position: 'top-right',
      duration: 5000,
      style: {
        border: '1px solid #badbcc',
        background: '#d1e7dd',
        padding: '16px',
        color: '#0f5132',
      },
    });
  }

  reload(): void {
    window.location.assign('/bookUpload');
  }
}
