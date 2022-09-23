import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { AdminPanelBooksComponent } from './admin-panel-books/admin-panel-books.component';
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
import { ModUsersComponent } from './mod-users/mod-users.component';
import { ModLoanComponent } from './mod-loan/mod-loan.component';
import { ModBooksComponent } from './mod-books/mod-books.component';
import { AuthGuard } from './guards/auth.guard';
import { OnlyAdminGuard } from './guards/only-admin.guard';

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
    path: 'adminPanelBooks',
    component: AdminPanelBooksComponent,
    canActivate: [OnlyAdminGuard]
  },
  {
    path: 'adminPanelLoan',
    component: AdminPanelLoanComponent,
    canActivate: [OnlyAdminGuard]
  },
  {
    path: 'adminPanelUsers',
    component: AdminPanelUsersComponent,
    canActivate: [OnlyAdminGuard]
  },
  {
    path: 'bookUpload',
    component: BookUploadComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'comments',
    component: CommentsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'books/:id',
    component: InfoBookComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'pushBook',
    component: PushBookComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'settings',
    component: SettingsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'writeComment',
    component: WriteCommentComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'mod_books/:id',
    component: ModBooksComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'mod_loan/:id',
    component: ModLoanComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'mod_users/:id',
    component: ModUsersComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
