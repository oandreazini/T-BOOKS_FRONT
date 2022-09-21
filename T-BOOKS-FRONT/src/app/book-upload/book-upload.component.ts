import { Component, OnInit } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import { BooksService } from '../services/books.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-book-upload',
  templateUrl: './book-upload.component.html',
  styleUrls: ['./book-upload.component.css'],
})
export class BookUploadComponent implements OnInit {
  books: any;

  userId: any;

  constructor(
    private booksService: BooksService,
    private tokenStorage: TokenStorageService,
    private toastService: HotToastService
  ) {}

  ngOnInit(): void {
    this.userId = this.tokenStorage.getUser();
    console.log('user ID: ' + this.userId);

    this.booksService.getByBooksByUser(this.userId).subscribe(
      (result) => {
        this.books = result;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  deleteBook(id: any): void {
    this.booksService.delete(id).subscribe(
      (response) => {
        this.showToast();
        setTimeout(() => {
          this.reload();
        }, 1000);
      },
      (error) => {
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
    window.location.assign('/bookUpload');
  }
}
