import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-mybooks',
  templateUrl: './dialog-mybooks.component.html',
  styleUrls: ['./dialog-mybooks.component.css']
})
export class DialogMybooksComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}
