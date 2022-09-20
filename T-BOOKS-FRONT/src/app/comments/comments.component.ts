import { Component, OnInit } from '@angular/core';
import { LoansService } from '../services/loans.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  loan: any;

  constructor(private loanService: LoansService) { }

  ngOnInit(): void {
    this.loanService.returnAllLoans()
    .subscribe(
      result => {
        this.loan = result;
        console.log(result);

      },
      error => {
        console.log(error);
      }
    );
  }

}
