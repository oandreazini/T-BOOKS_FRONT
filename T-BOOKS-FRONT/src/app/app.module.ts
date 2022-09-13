import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminPanelAuthorComponent } from './admin-panel-author/admin-panel-author.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { AdminPanelBooksComponent } from './admin-panel-books/admin-panel-books.component';
import { AdminPanelEditorialComponent } from './admin-panel-editorial/admin-panel-editorial.component';
import { AdminPanelLoanComponent } from './admin-panel-loan/admin-panel-loan.component';
import { AdminPanelUsersComponent } from './admin-panel-users/admin-panel-users.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { InfoBookComponent } from './info-book/info-book.component';
import { CommentsComponent } from './comments/comments.component';
import { WriteCommentComponent } from './write-comment/write-comment.component';
import { BookUploadComponent } from './book-upload/book-upload.component';
import { BookUploadTitleComponent } from './book-upload-title/book-upload-title.component';
import { BooksTitleComponent } from './books-title/books-title.component';
import { BooksComponent } from './books/books.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { SettingsComponent } from './settings/settings.component';
import { SettingsPassComponent } from './settings-pass/settings-pass.component';
import { PushBookComponent } from './push-book/push-book.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminPanelAuthorComponent,
    AdminPanelBooksComponent,
    AdminPanelEditorialComponent,
    AdminPanelLoanComponent,
    AdminPanelUsersComponent,
    AdminPanelComponent,
    InfoBookComponent,
    CommentsComponent,
    WriteCommentComponent,
    BookUploadComponent,
    BookUploadTitleComponent,
    BooksTitleComponent,
    BooksComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    SettingsComponent,
    SettingsPassComponent,
    PushBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
