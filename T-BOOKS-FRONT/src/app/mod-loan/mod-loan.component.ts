import { Component, OnInit } from '@angular/core';
import { Loan } from '../models/loan.model';
import { LoansService } from '../services/loans.service';
import { ActivatedRoute, Router } from '@angular/router';


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

  constructor(private loanService: LoansService,  private router: Router, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.message ='';
    this.getLoan(this.activateRoute.snapshot.paramMap.get("id"));
  }

  getLoan(id: any): void {
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
      response => {
        console.log(response);
        this.message = response.message ? response.message: "The status was updated successfully";
      },
      error => {console.log(error)}
    );
  }

  reload(): void{
    window.location.assign("/adminPanelLoan");
  }
}

