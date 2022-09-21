import { Component, OnInit,AfterViewInit,ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
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
  displayedColumns: string[] = ['id', 'title', 'isbn','synopsis','action'];
  dataSource = new MatTableDataSource<IBooks>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(private booksService: BooksService, private router: Router, private toastService: HotToastService) { }

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
        this.showToast();
        setTimeout(() => {
          this.reload();
        }, 1000);
      },
      error => {
        console.log(error);
      }
    );
  }

  showToast() {
    this.toastService.show('Libro eliminado con éxito.', {
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
    window.location.assign('/adminPanelBooks');
  }

}
