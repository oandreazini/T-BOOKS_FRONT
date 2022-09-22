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

    // const data = {
    //   title: "Cazadores de sombras 1",
    //   isbn: "9788408083801",
    //   synopsis: "Chica se enamora de un chico no muy normal cuando mata a otro chico no muy normal en una discoteca de Nueva York.",
    //   author: "Cassandra Clare",
    //   editorial: "Destino",
    //   usuario: {
    //     id: "21",
    //     name: "Roger",
    //     email: "roger@gmail.com",
    //     phone: "777777777",
    //     city: "Calafell",
    //     username: "roger",
    //     password: "$2a$12$1ovVlPGO/oVF.Q0ofgTB2Ov5GO.BOU3/mErUmXDG.tq4vY8Vo.4Fi",
    //     roles: [{
    //       id: "1",
    //       name: "ROLE_ADMIN"
    //     }]
    //   }
    // };

    console.log("data to introduce: ");
    console.log(data);

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
