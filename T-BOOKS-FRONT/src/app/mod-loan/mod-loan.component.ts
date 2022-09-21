import { Component, OnInit } from '@angular/core';
import { Loan } from '../models/loan.model';
import { LoansService } from '../services/loans.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';


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

  constructor(private loanService: LoansService,  private router: Router, private activateRoute: ActivatedRoute, private toastService: HotToastService) { }

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
        this.message = response.message ? response.message: "The status was updated successfully";
        this.showToast();
        setTimeout(() => {
          this.reload();
        }, 1000);
      },
      error => {console.log(error)}
    );
  }

  showToast() {
    this.toastService.show('Los cambios se han actualizado con éxito.', {
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
    window.location.assign('/adminPanelLoan');
  }
}

