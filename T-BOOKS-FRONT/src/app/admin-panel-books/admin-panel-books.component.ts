import { Component, OnInit,AfterViewInit,ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { Book } from '../models/book.model';
import { IBooks } from '../models/ibooks';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-admin-panel-books',
  templateUrl: './admin-panel-books.component.html',
  styleUrls: ['./admin-panel-books.component.css']
})
export class AdminPanelBooksComponent implements OnInit {

  book: Book = {
    title: '',
    isbn: '',
    synopsis: '',
    author: '',
    editorial: '',
    user: {
      id: '',
      name: '',
      email: '',
      phone: '',
      city: '',
      username: '',
      password: '',
      role: '',
    }
  };

  ELEMENT_DATA!: IBooks[];
  displayedColumns: string[] = ['title', 'isbn','synopsis','action'];
  dataSource = new MatTableDataSource<IBooks>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(private booksService: BooksService, private router: Router) { }

  ngOnInit(): void {
    this.getAllBooks();
  }

  getAllBooks(){
    let resp = this.booksService.returnAllBooks();
    resp.subscribe(report=> this.dataSource.data = report as IBooks[]);
  }

  deleteBook(id: any){
    this.booksService.delete(id)
    .subscribe(
      response =>{
        console.log(response);
        this.router.navigate(['/AdminPanelBooks']);
      },
      error => {
        console.log(error);
      }
    );
  }

}
