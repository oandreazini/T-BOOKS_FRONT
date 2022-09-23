//Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HotToastModule } from '@ngneat/hot-toast';
import { MatDialogModule } from '@angular/material/dialog';

//Components
import { AppComponent } from './app.component';
import { AdminPanelBooksComponent } from './admin-panel-books/admin-panel-books.component';
import { AdminPanelLoanComponent } from './admin-panel-loan/admin-panel-loan.component';
import { AdminPanelUsersComponent } from './admin-panel-users/admin-panel-users.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { BookUploadComponent } from './book-upload/book-upload.component';
import { BooksComponent } from './books/books.component';
import { CommentsComponent } from './comments/comments.component';
import { HomeComponent } from './home/home.component';
import { InfoBookComponent } from './info-book/info-book.component';
import { LoginComponent } from './login/login.component';
import { PushBookComponent } from './push-book/push-book.component';
import { RegisterComponent } from './register/register.component';
import { SettingsComponent } from './settings/settings.component';
import { WriteCommentComponent } from './write-comment/write-comment.component';
import { ModBooksComponent } from './mod-books/mod-books.component';
import { ModLoanComponent } from './mod-loan/mod-loan.component';
import { ModUsersComponent } from './mod-users/mod-users.component';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import { DialogBooksComponent } from './dialog-books/dialog-books.component';
import { DialogLoansComponent } from './dialog-loans/dialog-loans.component';
import { DialogMybooksComponent } from './dialog-mybooks/dialog-mybooks.component';

//Guards
import { AuthGuard } from './guards/auth.guard';
import { DialogAlertComponent } from './dialog-alert/dialog-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminPanelBooksComponent,
    AdminPanelLoanComponent,
    AdminPanelUsersComponent,
    AdminPanelComponent,
    BookUploadComponent,
    BooksComponent,
    CommentsComponent,
    HomeComponent,
    InfoBookComponent,
    LoginComponent,
    PushBookComponent,
    RegisterComponent,
    SettingsComponent,
    WriteCommentComponent,
    ModBooksComponent,
    ModLoanComponent,
    ModUsersComponent,
    DialogExampleComponent,
    DialogBooksComponent,
    DialogLoansComponent,
    DialogMybooksComponent,
    DialogAlertComponent
  ],
  entryComponents: [DialogExampleComponent, DialogBooksComponent, DialogLoansComponent, DialogMybooksComponent, DialogAlertComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatTableModule,
    HttpClientModule,
    FormsModule,
    HotToastModule.forRoot(),
    MatDialogModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
