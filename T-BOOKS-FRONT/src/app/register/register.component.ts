import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UsersService } from '../services/users.service';
import { AuthService } from '../_services/auth.service';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  form: any = {
    name: null,
    email: null,
    phone: null,
    city: null,
    username: null,
    password: null,
    role:null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';



  user: User = {
    name: '',
    email: '',
    phone: '',
    city: '',
    username: '',
    password: '',
    role: ''
  };
  submitted = false;

  constructor(private userService: UsersService, private authService: AuthService, private toastService: HotToastService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    const {name, email, phone, city, username, password,role} = this.form;

    console.log(this.form);

    this.authService.register(name,email,phone,city,username,password,role)
    .subscribe(
      data => {
        this.showToast();
        setTimeout(() => {
          this.isSignUpFailed = false;
          this.isSuccessful = true;
          this.reload();
        }, 2000);
      },
      error => {
        this.errorMessage = error.error.message;
        this.isSignUpFailed = true;
      }
    );
  }


  saveUser(): void {
    const data = {
      name: this.user.name,
      email: this.user.email,
      phone: this.user.phone,
      city: this.user.city,
      username: this.user.username,
      password: this.user.password,
      role: this.user.role,
    };

    this.userService.create(data)
    .subscribe(
      response => {
        console.log(response);
        this.submitted = true;
      },
      error => {console.log(error)}
    )
  }

  showToast() {
    this.toastService.show('Te has registrado con éxito.', {
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
    window.location.assign('/login');
  }


}
