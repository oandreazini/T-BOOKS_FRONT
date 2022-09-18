import { Component, OnInit } from '@angular/core';
import { Loan } from '../models/loan.model';
import { LoansService } from '../services/loans.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-mod-loan',
  templateUrl: './mod-loan.component.html',
  styleUrls: ['./mod-loan.component.css']
})
export class ModLoanComponent implements OnInit {
  loan: Loan = {
    start: '',
    finish: '',
    valuation: '',
    comment: ''
  };
  message = '';

  constructor(private loanService: LoansService,  private router: Router) { }

  ngOnInit(): void {
    this.message ='';
  }

  updateLoan(): void {
    this.message = '';

    this.loanService.update(this.loan.id, this.loan)
    .subscribe(
      response => {
        console.log(response);
        this.message = response.message ? response.message: "The status was updated successfully";
      },
      error => {console.log(error)}
    );
  }
}
