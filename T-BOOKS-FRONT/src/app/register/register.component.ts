import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
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

  constructor(private userService: UsersService) {}

  ngOnInit(): void {}

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
}
