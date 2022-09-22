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
  date: Date = new Date();

  loan: Loan = {
    start: this.date.getDate() + "-" + this.date.getMonth() + "-" + this.date.getFullYear(),
    finish: this.date.getDate() + "-" + (this.date.getMonth()+1) + "-" + this.date.getFullYear(),
    valuation: '',
    comment: '',
    user: {
      id: '',
      name: '',
      email: '',
      phone: '',
      city: '',
      username: '',
      password: '',
      roles: {
        id: '',
        name: '',
      },
    },
    book: {
      id: '',
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
        roles: {
          id: '',
          name: '',
        },
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
        console.log(this.data)
      },
      (error) => {
        console.log(error);
      }
    );

  }

  saveLoan(): void {
    let role = this.tokenStorage.getRoles();
    let idRole = 1;

    if(role=="ROLE_ADMIN") {
      idRole = 1;
    } else if (role=="ROLE_USER") {
      idRole = 11;
    }

    const data = {
      start: this.loan.start,
      finish: this.loan.finish,
      valuation: this.loan.valuation,
      comment: this.loan.comment,
      user: {
        id: this.tokenStorage.getUser(),
        roles: {
          id: idRole
        }
      },
      book: {
        id: this.data.id,
        usuario: {
          id: this.data.usuario?.id,
          roles: this.data.usuario.roles

        },
      },
    };
    console.log("data:");

     console.log(data);


    this.loanService.create(data)
    .subscribe(
      response => {

        console.log(response);
        this.submitted = true;
      },
      error => {
        console.log(error);
      }
    );

  }
}
