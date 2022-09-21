import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoansService } from '../services/loans.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  id: any;
  loans: any;

  constructor(private loanService: LoansService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.loanService.returnLoanByBook(this.id).subscribe(
      result => {
        this.loans = result;
        console.log(result);
      },
      error => {
        console.log(error);
      }
    );
  }

}
