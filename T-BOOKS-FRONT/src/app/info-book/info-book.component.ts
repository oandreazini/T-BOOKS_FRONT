import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Loan } from '../models/loan.model';

import { BooksService } from '../services/books.service';
import { LoansService } from '../services/loans.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-info-book',
  templateUrl: './info-book.component.html',
  styleUrls: ['./info-book.component.css'],
})
export class InfoBookComponent implements OnInit {
  // date: Date = new Date();
  // this.date.getDate() + "-" + this.date.getMonth() + "-" + this.date.getFullYear(),
  // this.date.getDate() + "-" + (this.date.getMonth()+1) + "-" + this.date.getFullYear(),
  // loan: Loan = {
  //   id: '',
  //   start: '',
  //   finish: '',
  //   valuation: '',
  //   comment: '',
  //   user: {
  //     id: '',
  //     name: '',
  //     email: '',
  //     phone: '',
  //     city: '',
  //     username: '',
  //     password: '',
  //     roles: [
  //       {
  //         id: '',
  //         name: '',
  //       },
  //     ],
  //   },
  //   book: {
  //     id: '',
  //     title: '',
  //     isbn: '',
  //     synopsis: '',
  //     author: '',
  //     editorial: '',
  //     usuario: {
  //       id: '',
  //       name: '',
  //       email: '',
  //       phone: '',
  //       city: '',
  //       username: '',
  //       password: '',
  //       roles: [
  //         {
  //           id: '',
  //           name: '',
  //         },
  //       ],
  //     },
  //   },
  // };

  loan: Loan = {
    id: '51',
    start: '22-09-2022',
    finish: '22-10-2022',
    valuation: 3.0,
    comment: 'muy trambolicoooooooooo',
    usuario: {
      id: '1',
      name: 'Barbara',
      email: 'barbara@prueba.com',
      phone: '666777666',
      city: 'Cambrils',
      username: 'barbara',
      password: '$2a$12$VfJAkdmh5aim/WaNltJWHuthbxFMHR42Fo9ic6DNKH8/xq0t.2qWq',
      roles: [
        {
          id: '1',
          name: 'ROLE_ADMIN',
        },
      ],
    },
    book: {
      id: '11',
      title: 'El Hobbit',
      isbn: '9780261102217',
      synopsis:
        'El hobbit Bilbo Bolsón vive una vida tranquila hasta que el mago Gandalf aparece y le encomienda una misión: unirse a un grupo de enanos para recuperar un tesoro que les pertenece.',
      author: 'J.R.R. Tolkien',
      editorial: 'HARPERCOLLINS PUB.',
      usuario: {
        id: '11',
        name: 'Oriol',
        email: 'oriol@prueba.com',
        phone: '777666777',
        city: 'La Selva del Camp',
        username: 'oriol',
        password:
          '$2a$12$rwiKjU6x89W3dYWcNgPNh.ZLc7JhVayHOj7DfTlttOeZFGEwsMTba',
        roles: [
          {
            id: '1',
            name: 'ROLE_ADMIN',
          },
        ],
      },
    },
  };

  submitted = false;

  id: any;

  data: any = null;

  constructor(
    private booksService: BooksService,
    private route: ActivatedRoute,
    private router: Router,
    private loanService: LoansService,
    private tokenStorage: TokenStorageService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this.booksService.returnBookById(this.id).subscribe(
      (result) => {
        this.data = result;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  saveLoan(): void {
    // let role = this.tokenStorage.getRoles();
    // let idRole = '1';

    // if (role == 'ROLE_ADMIN') {
    //   idRole = '1';
    // } else if (role == 'ROLE_USER') {
    //   idRole = '11';
    // }

    // const data = {
    //   id: '51',
    //   start: '22-09-2022',
    //   finish: '22-10-2022',
    //   valuation: 3.0,
    //   comment: 'muy trambolico',
    //   usuario: {
    //     id: '1',
    //     name: 'Barbara',
    //     email: 'barbara@prueba.com',
    //     phone: '666777666',
    //     city: 'Cambrils',
    //     username: 'barbara',
    //     password:
    //       '$2a$12$VfJAkdmh5aim/WaNltJWHuthbxFMHR42Fo9ic6DNKH8/xq0t.2qWq',
    //     roles: [
    //       {
    //         id: '1',
    //         name: 'ROLE_ADMIN',
    //       },
    //     ],
    //   },
    //   book: {
    //     id: '11',
    //     title: 'El Hobbit',
    //     isbn: '9780261102217',
    //     synopsis:
    //       'El hobbit Bilbo Bolsón vive una vida tranquila hasta que el mago Gandalf aparece y le encomienda una misión: unirse a un grupo de enanos para recuperar un tesoro que les pertenece.',
    //     author: 'J.R.R. Tolkien',
    //     editorial: 'HARPERCOLLINS PUB.',
    //     usuario: {
    //       id: '11',
    //       name: 'Oriol',
    //       email: 'oriol@prueba.com',
    //       phone: '777666777',
    //       city: 'La Selva del Camp',
    //       username: 'oriol',
    //       password:
    //         '$2a$12$rwiKjU6x89W3dYWcNgPNh.ZLc7JhVayHOj7DfTlttOeZFGEwsMTba',
    //       roles: [
    //         {
    //           id: '1',
    //           name: 'ROLE_ADMIN',
    //         },
    //       ],
    //     },
    //   },
    // };

    // const data = {
    //   start:
    //     this.date.getDate() +
    //     '-' +
    //     this.date.getMonth() +
    //     '-' +
    //     this.date.getFullYear(),
    //   finish:
    //     this.date.getDate() +
    //     '-' +
    //     (this.date.getMonth() + 1) +
    //     '-' +
    //     this.date.getFullYear(),
    //   valuation: this.loan.valuation,
    //   comment: this.loan.comment,
    //   user: {
    //     id: this.tokenStorage.getUser(),
    //     roles: [
    //       {
    //         id: idRole,
    //         name: role,
    //       },
    //     ],
    //   },
    //   book: {
    //     id: this.data.id,
    //     title: this.data.title,
    //     isbn: this.data.isbn,
    //     synopsis: this.data.synopsis,
    //     author: this.data.author,
    //     editorial: this.data.editorial,
    //     usuario: {
    //       id: this.data.usuario?.id,
    //       name: this.data.usuario?.name,
    //       email: this.data.usuario?.email,
    //       phone: this.data.usuario?.phone,
    //       city: this.data.usuario?.city,
    //       username: this.data.usuario?.username,
    //       password: this.data.usuario?.password,
    //       roles: [this.data.usuario.roles]
    //     },
    //   },
    // };
    console.log('data:');

    console.log(this.loan);

    this.loanService.create(this.loan).subscribe(
      (response) => {
        console.log(response);
        this.submitted = true;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
