import { Component } from '@angular/core';
import { UsersService } from './services/users.service';
import { TokenStorageService } from './_services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private roles: string[] = [];
  isLoggedIn = false;
  username?:string;
  role !: string | undefined;
  user?: string;

  constructor(private tokenStorageService: TokenStorageService, private userService: UsersService) {}

  ngOnInit(): void{

    this.isLoggedIn = !!this.tokenStorageService.getToken();

    this.role = this.tokenStorageService.getRoles()?.toString().replace(/['"]+/g, '');

    if(this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.username = user.username;
    }

    let userID = this.tokenStorageService.getUser();
    this.returnUser(userID);
  }

  logout(): void {
    this.tokenStorageService.signOut();
    this.reload();
  }

  reload(): void{
    window.location.assign("login");
  }

  reloadBooks(): void{
    window.location.assign("books");
  }

  returnUser(id:any): void {
    this.userService.getById(id).subscribe(
      (result) =>{
        this.user = result.username;

      },
      (error) => {
        console.log(error);
      }
    );
  }

}
