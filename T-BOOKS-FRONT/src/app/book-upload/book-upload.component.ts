import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HotToastService } from '@ngneat/hot-toast';
import { DialogBooksComponent } from '../dialog-books/dialog-books.component';
import { DialogMybooksComponent } from '../dialog-mybooks/dialog-mybooks.component';
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
  id: any;
  book: any;

  constructor(
    private booksService: BooksService,
    private tokenStorage: TokenStorageService,
    private toastService: HotToastService,
    public dialog: MatDialog
  ) {}

  openDialog(id: any, book:any){
    let dialogRef = this.dialog.open(DialogMybooksComponent, {data: {idbook: id, name: book}});

    dialogRef.afterClosed().subscribe(result =>{
      this.id = result;
      this.deleteBook();
    });
  }

  ngOnInit(): void {
    this.userId = this.tokenStorage.getUser();

    this.booksService.getByBooksByUser(this.userId).subscribe(
      (result) => {
        this.books = result;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  deleteBook(): void {
    this.booksService.delete(this.id).subscribe(
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
