import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-mod-users',
  templateUrl: './mod-users.component.html',
  styleUrls: ['./mod-users.component.css']
})
export class ModUsersComponent implements OnInit {

  user: User = {
    name: '',
    email: '',
    phone: '',
    city: '',
    username: '',
    password:'',
    role:''
  };
  message = '';

  constructor(private userService: UsersService, private router: Router) { }

  ngOnInit(): void {
    this.message = '';
  }

  updateUser(): void{
    this.message = '';

    this.userService.update(this.user.id, this.user).subscribe(
      response => {
        console.log(response);
        this.message = response.message ? response.message : "The status was updated successfully";
      },
      error => {
        console.log(error);
      }
    );
  }
}
