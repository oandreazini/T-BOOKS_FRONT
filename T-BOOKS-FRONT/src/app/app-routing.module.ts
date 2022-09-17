import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { AdminPanelAuthorComponent } from './admin-panel-author/admin-panel-author.component';
import { AdminPanelBooksComponent } from './admin-panel-books/admin-panel-books.component';
import { AdminPanelEditorialComponent } from './admin-panel-editorial/admin-panel-editorial.component';
import { AdminPanelLoanComponent } from './admin-panel-loan/admin-panel-loan.component';
import { AdminPanelUsersComponent } from './admin-panel-users/admin-panel-users.component';
import { HomeComponent } from './home/home.component';
import { BooksComponent } from './books/books.component';
import { BookUploadComponent } from './book-upload/book-upload.component';
import { CommentsComponent } from './comments/comments.component';
import { InfoBookComponent } from './info-book/info-book.component';
import { LoginComponent } from './login/login.component';
import { PushBookComponent } from './push-book/push-book.component';
import { RegisterComponent } from './register/register.component';
import { SettingsComponent } from './settings/settings.component';
import { WriteCommentComponent } from './write-comment/write-comment.component';
import { ModAuthorComponent } from './mod-author/mod-author.component';
import { ModUsersComponent } from './mod-users/mod-users.component';
import { ModLoanComponent } from './mod-loan/mod-loan.component';
import { ModEditorialComponent } from './mod-editorial/mod-editorial.component';
import { ModBooksComponent } from './mod-books/mod-books.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'books',
    component: BooksComponent
  },
  {
    path: 'adminPanelAuthor',
    component: AdminPanelAuthorComponent
  },
  {
    path: 'adminPanelBooks',
    component: AdminPanelBooksComponent
  },
  {
    path: 'adminPanelEditorial',
    component: AdminPanelEditorialComponent
  },
  {
    path: 'adminPanelLoan',
    component: AdminPanelLoanComponent
  },
  {
    path: 'adminPanelUsers',
    component: AdminPanelUsersComponent
  },
  {
    path: 'bookUpload',
    component: BookUploadComponent
  },
  {
    path: 'comments',
    component: CommentsComponent
  },
  {
    path: 'books/:id',
    component: InfoBookComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'pushBook',
    component: PushBookComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  },
  {
    path: 'writeComment',
    component: WriteCommentComponent
  },
  {
    path: 'mod_author/:id',
    component: ModAuthorComponent
  },
  {
    path: 'mod_books/:id',
    component: ModBooksComponent
  },
  {
    path: 'mod_editorial/:id',
    component: ModEditorialComponent
  },
  {
    path: 'mod_loan/:id',
    component: ModLoanComponent
  },
  {
    path: 'mod_users/:id',
    component: ModUsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
