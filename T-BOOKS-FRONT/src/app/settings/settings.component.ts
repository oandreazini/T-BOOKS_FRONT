import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { User } from '../models/user.model';
import { UsersService } from '../services/users.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

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

  form: any = {
    password: null,
    newpassword: null,
    newpasswordv: null
  };
  equals = true;

  constructor(private userService: UsersService, private router: Router, private toastService: HotToastService, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    this.message = '';
    this.getUser(this.tokenStorage.getUser());

  }

  getUser(id:any): void {
    this.userService.getById(id)
    .subscribe(
      data => {
        this.user = data;
      },
      error => {
        console.log(error);
      }
    )
  }

  updateUser(): void{
    this.message = '';
    this.userService.update(this.tokenStorage.getUser(), this.user).subscribe(
      response => {
        this.message = response.message ? response.message : "The status was updated successfully";
        this.showToast();
        setTimeout(() => {
          window.location.reload();
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
      duration: 1000,
      style: {
        border: '1px solid #badbcc',
        background: '#d1e7dd',
        padding: '16px',
        color: '#0f5132',
      },
    });
  }

  checkPassword() {

    if(this.form.newpassword != this.form.newpasswordv && this.form.password != this.user.password){
      this.equals = false;
    } else {
      this.user.password = this.form.newpassword;
      this.userService.updatePass(this.tokenStorage.getUser(), this.user).subscribe(
        response => {
          this.message = response.message ? response.message : "The status was updated successfully";
          this.showToast();
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        },
        error => {
          console.log(error);
        }
      );
    }
  }
}
