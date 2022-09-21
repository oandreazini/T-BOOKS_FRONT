import { Component, OnInit } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import { Loan } from '../models/loan.model';
import { LoansService } from '../services/loans.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-write-comment',
  templateUrl: './write-comment.component.html',
  styleUrls: ['./write-comment.component.css']
})
export class WriteCommentComponent implements OnInit {
  loan: Loan = {
    start: '',
    finish: '',
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
      role: '',
    },
    book: {
      id: '',
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
        city: '',
        username: '',
        password: '',
        role: '',
      }
    }
  };
  message = '';


  constructor(private loanService: LoansService, private tokenStorage: TokenStorageService, private toastService: HotToastService) { }


  ngOnInit(): void {
    this.message = '';
    console.log("id: " + this.tokenStorage.getUser());
    this.getLoan(this.tokenStorage.getUser());
  }

  getLoan(id:any): void{
    this.loanService.returnLoanById(id)
    .subscribe(
      data => {
        this.loan = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  updateLoan(): void {
    this.message = '';

    this.loanService.update(this.loan.id, this.loan)
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
