import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-info-book',
  templateUrl: './info-book.component.html',
  styleUrls: ['./info-book.component.css']
})
export class InfoBookComponent implements OnInit {

  id:any;

  data:any = null;

  constructor(private booksService:BooksService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this.booksService.returnBookById(this.id)
    .subscribe(
      result => {
        this.data = result;
      },
      error => {
        console.log(error);
      }
    )
  }

}
