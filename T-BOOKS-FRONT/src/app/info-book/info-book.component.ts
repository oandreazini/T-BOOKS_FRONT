import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
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
  submitted = false;

  id: any;

  data: any = null;

  date: Date = new Date();

  loan: Loan = {
    id: '',
    start: '',
    finish: '',
    valuation: 0.0,
    comment: '',
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
        roles: [
          {
            id: '',
            name: '',
          },
        ],
      },
    },
  };

  constructor(
    private booksService: BooksService,
    private route: ActivatedRoute,
    private loanService: LoansService,
    private tokenStorage: TokenStorageService,
    private toastService: HotToastService
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
    let role = this.tokenStorage.getRoles();
    let idRole = '1';

    if (role == 'ROLE_ADMIN') {
      idRole = '1';
    } else if (role == 'ROLE_USER') {
      idRole = '11';
    }

    const data = {
      start:
        this.date.getDate() +
        '-' +
        this.date.getMonth() +
        '-' +
        this.date.getFullYear(),
      finish:
        this.date.getDate() +
        '-' +
        (this.date.getMonth() + 1) +
        '-' +
        this.date.getFullYear(),
      valuation: this.loan.valuation,
      comment: this.loan.comment,
      usuario: {
        id: this.tokenStorage.getUser(),
        roles: [
          {
            id: idRole,
            name: role,
          },
        ],
      },
      book: {
        id: this.data.id,
        title: this.data.title,
        isbn: this.data.isbn,
        synopsis: this.data.synopsis,
        author: this.data.author,
        editorial: this.data.editorial,
        usuario: {
          id: this.data.usuario?.id,
          name: this.data.usuario?.name,
          email: this.data.usuario?.email,
          phone: this.data.usuario?.phone,
          city: this.data.usuario?.city,
          username: this.data.usuario?.username,
          password: this.data.usuario?.password,
          roles: this.data.usuario?.roles,
        },
      },
    };

    this.loanService.create(data).subscribe(
      (response) => {
        console.log(response);
        this.submitted = true;
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

  showToast() {
    this.toastService.show('Has realizado el pedido con éxito.', {
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
    window.location.reload();
  }
}
