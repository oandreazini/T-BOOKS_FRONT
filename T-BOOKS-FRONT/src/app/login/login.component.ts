import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null,
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string | undefined;

  usernameView?: string;

  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private toastService: HotToastService
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorage.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorage.getUser();
      const token = this.tokenStorage.getToken();
      this.usernameView = JSON.stringify(user).replace(/['"]+/g, '');
      this.roles = this.tokenStorage
        .getRoles()
        ?.toString()
        .replace(/['"]+/g, '');
    }
  }

  onSubmit(): void {
    this.authService.login(this.form.username, this.form.password).subscribe(
      (data) => {
        this.tokenStorage.saveToken(JSON.stringify(data['token']).replace(/['"]+/g, ''));
        this.tokenStorage.saveUser(JSON.stringify(data['userId']).replace(/['"]+/g, ''));
        this.tokenStorage.saveRoles(JSON.stringify(data['roles']).replace(/['"]+/g, ''));
        this.showToast();
        setTimeout(() => {
          this.usernameView = this.form.username;
          this.isLoginFailed = false;
          this.isLoggedIn = true;
          this.reload();
        }, 1000);
      },
      (error) => {
        this.errorMessage = error.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  showToast() {
    this.toastService.show('Has iniciado sesión con éxito.', {
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
