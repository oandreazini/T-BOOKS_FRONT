import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { Book } from '../models/book.model';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-mod-books',
  templateUrl: './mod-books.component.html',
  styleUrls: ['./mod-books.component.css'],
})
export class ModBooksComponent implements OnInit {
  book: Book = {
    title: '',
    isbn: '',
    synopsis: '',
    author:'',
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
    },
  };
  message = '';

  constructor(private bookService: BooksService, private router: Router, private activateRoute: ActivatedRoute, private toastService: HotToastService) {}

  ngOnInit(): void {
    this.message = '';
    this.getBook(this.activateRoute.snapshot.paramMap.get("id"));
  }

  getBook(id: any): void {
    this.bookService.returnBookById(id)
    .subscribe(
      data => {
        this.book = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  updateBook(): void {
    this.message = '';

    this.bookService.update(this.book.id, this.book)
    .subscribe(
      response => {
        this.message = response.message ? response.message : "The status was updated successfully";
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
    window.location.assign('');
  }
}
