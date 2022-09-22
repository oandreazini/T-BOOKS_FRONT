import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-loans',
  templateUrl: './dialog-loans.component.html',
  styleUrls: ['./dialog-loans.component.css']
})
export class DialogLoansComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}
