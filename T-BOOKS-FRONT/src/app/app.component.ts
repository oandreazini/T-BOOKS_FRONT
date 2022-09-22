import { Component } from '@angular/core';
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

  constructor(private tokenStorageService: TokenStorageService) {}

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
    this.reload();
  }

  reload(): void{
    window.location.assign("login");
  }

  reloadBooks(): void{
    window.location.assign("books");
  }

}
