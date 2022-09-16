import { Component, OnInit } from '@angular/core';
import { Loan } from '../models/loan.model';
import { LoansService } from '../services/loans.service';

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
  submitted = false;

  constructor(private loanService: LoansService) { }

  ngOnInit(): void {
  }

  saveLoan(): void {
    const data = {
      start: this.loan.start,
      finish: this.loan.finish,
      valuation: this.loan.valuation,
      comment: this.loan.comment,
    };

    this.loanService.create(data).subscribe(
      response => {
        console.log(response);
        this.submitted = true;
      },
      error => {console.log(error)}
    )
  }

}
