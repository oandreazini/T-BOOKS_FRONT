import { Component, OnInit } from '@angular/core';
import { BooksService } from '../services/books.service';


@Component({
  selector: 'app-book-upload',
  templateUrl: './book-upload.component.html',
  styleUrls: ['./book-upload.component.css']
})
export class BookUploadComponent implements OnInit {

  books:any;

  userId: any;

  constructor(private booksService: BooksService) { }

  ngOnInit(): void {



    this.booksService.getByBooksByUser(this.userId)
    .subscribe(
      result => {
        this.books = result;
      },
      error => {
        console.log(error);
      }
    );
  }

  deleteBook(id: any): void {

  }

}
