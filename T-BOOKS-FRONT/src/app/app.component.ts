import { Component } from '@angular/core';
import { Book } from './models/book.model';
import { BooksService } from './services/books.service';
import { TokenStorageService } from './_services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
  <app-search-book [searchBook]="books"></app-search-book>
`
})
export class AppComponent {
  private roles: string[] = [];
  isLoggedIn = false;
  username?:string;
  role !: string | undefined;


  books:any;

  currentBooks: Book = {};
  currentIndex = -1;
  title = '';

  constructor(private booksService: BooksService, private tokenStorageService: TokenStorageService) {}

  ngOnInit(): void{
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    this.role = this.tokenStorageService.getRoles()?.toString().replace(/['"]+/g, '');

    if(this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.username = user.username;
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

  searchName(): void{
    this.currentBooks = {};
    this.currentIndex = -1;

    this.booksService.getByTitle(this.title)
    .subscribe(
      data => {
        this.books = data;
        console.log(data);
        window.location.assign("search_book/:id");
      },
      error => {
        console.log(error);
      });
  }
}
