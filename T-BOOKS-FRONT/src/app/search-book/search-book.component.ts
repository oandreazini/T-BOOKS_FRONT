import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.css']
})
export class SearchBookComponent implements OnInit {

  @Input() searchBook:any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.searchBook);
  }

}
