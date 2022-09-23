import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
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

  constructor(private userService: UsersService, private router: Router, private toastService: HotToastService) { }

  ngOnInit(): void {
    this.message = '';
  }

  updateUser(): void{
    this.message = '';

    this.userService.update(this.user.id, this.user).subscribe(
      response => {
        this.message = response.message ? response.message : "The status was updated successfully";
        this.showToast();
        setTimeout(() => {
          this.reload();
        }, 1000);
      },
      error => {
        console.log(error);
      }
    );
  }

  showToast() {
    this.toastService.show('Los cambios se han actualizado con éxito.', {
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
    window.location.assign('/adminPanelUsers');
  }
}
