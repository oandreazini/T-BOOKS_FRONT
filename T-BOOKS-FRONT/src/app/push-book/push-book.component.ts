import { Component, OnInit } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import { ConnectableObservable } from 'rxjs';
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
      roles: [
        {
          id: '',
          name: '',
        },
      ],
    },
  };

  message1: string = '';
  message2: string = '';
  message3: string = '';
  message4: string = '';
  validation = false;

  constructor(
    private bookService: BooksService,
    private tokenStorage: TokenStorageService,
    private toastService: HotToastService
  ) {}

  ngOnInit(): void {
    // console.log(this.form.isbn + ' isbn');

    console.log(this.validation + " validación");
  }

  saveBook(): void {
    let role = this.tokenStorage.getRoles();
    let idRole = '1';

    if (role == 'ROLE_ADMIN') {
      idRole = '1';
    } else if (role == 'ROLE_USER') {
      idRole = '11';
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
        roles: [
          {
            id: idRole,
            name: role,
          },
        ],
      },
    };

    console.log('data to introduce: ');
    console.log(data);
    if(this.validation === true){
    this.bookService.create(data).subscribe(
      (response) => {
        this.showToast();
        setTimeout(() => {
          this.reload();
        }, 1000);
      },
      (error) => {
        console.log(error);
      }
    );
    }
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

  validateForm() {
    console.log(this.book.isbn + " isbn book");

    var ISBN_REGEX = /^(?=(?:\D*\d){10}(?:(?:\D*\d){3})?$)[\d-]+$/;

    if (this.validation === false) {
      if (this.book.title === '' || this.book.title === null) {
        this.message1 = 'Introduzca un título';
      } else {
        this.message1 = '';
      }
      if (this.book.isbn === '' || this.book.isbn === null) {
        this.message2 = 'Introduzca un isbn';
      } else{
        this.message2 = '';
      }
      // if (ISBN_REGEX.test(this.book.isbn)) {
      //   this.message2 = '';
      // } else {
      //   this.message2 = 'El isbn no coincide';
      // }
      if (this.book.editorial === '' || this.book.editorial === null) {
        this.message3 = 'Introduzca una editorial';
      } else {
        this.message3 = '';
      }
      if (this.book.author === '' || this.book.author === null) {
        this.book.author = "Anónimo";
      }
      if (this.book.synopsis === '' || this.book.synopsis === null) {
        this.message4 = 'Introduzca una sinopsis';
      } else {
        this.message4 = '';
      }

    }
    if (
      this.message1 === '' &&
      this.message2 === '' &&
      this.message3 === '' &&
      this.message4 === ''
    ) {
      this.validation = true;
      this.saveBook();
    }
    console.log(this.validation + ' validation');
  }
}
