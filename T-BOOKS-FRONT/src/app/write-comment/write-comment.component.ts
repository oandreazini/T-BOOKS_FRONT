import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { Loan } from '../models/loan.model';
import { LoansService } from '../services/loans.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-write-comment',
  templateUrl: './write-comment.component.html',
  styleUrls: ['./write-comment.component.css'],
})
export class WriteCommentComponent implements OnInit {
  loan: Loan = {
    start: '',
    finish: '',
    valuation: '',
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
  message = '';
  idbook: any;

  loans: any;
  loanUser: any;
  loanID: any;

  constructor(
    private loanService: LoansService,
    private tokenStorage: TokenStorageService,
    private toastService: HotToastService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.idbook = this.route.snapshot.paramMap.get('id');

    this.message = '';

    this.getLoanByUser(this.tokenStorage.getUser());
    this.getLoansByBook(this.idbook);

    // console.log("id: " + this.tokenStorage.getUser());
  }

  checkLoan(): void {
    for (let i = 0; i <= this.loans.length; i++) {
      //  console.log(this.loans[i].id);
      if (this.loans[i].usuario.id == this.loanUser[i].usuario.id) {
        this.loanID = this.loans[i].id;
      }
    }
  }

  getLoanByUser(id: any): void {
    this.loanService.returnLoanByUser(id).subscribe(
      (data) => {
        this.loanUser = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getLoansByBook(id: any): void {
    this.loanService.returnLoanByBook(id).subscribe(
      (data) => {
        this.loans = data;
        this.checkLoan();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getLoan(id: any): void {
    this.loanService.returnLoanById(id).subscribe(
      (data) => {
        this.loan = data;
        // console.log("data");
        // console.log(this.loan);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  updateLoan(): void {
    this.message = '';
    // this.getLoan(this.loanID);
    console.log(this.loanID);

     this.getLoan(this.loanID);
    console.log(this.loan);
    this.loanService.update(this.loanID, this.loan)
    .subscribe(
      response =>{
        this.message = response.message ? response.message : "The status was updated successfully";
        this.showToast();
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      },
      error => {
        console.log(error);
      }
    );
  }

  showToast() {
    this.toastService.show('Se ha añadido el comentario con éxito.', {
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
}
