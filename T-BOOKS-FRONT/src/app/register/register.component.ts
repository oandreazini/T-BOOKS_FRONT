import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UsersService } from '../services/users.service';
import { AuthService } from '../_services/auth.service';
import { HotToastService } from '@ngneat/hot-toast';
import { ActivatedRoute } from '@angular/router';

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
    role: null,
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
    role: '',
  };
  submitted = false;

  //mensajes alerta campos vacios
  message1: string = '';
  message2: string = '';
  message3: string = '';
  message4: string = '';
  message5: string = '';
  message6: string = '';
  message7: string = '';
  validation = false;
  found = false;

  constructor(
    private userService: UsersService,
    private authService: AuthService,
    private toastService: HotToastService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    const { name, email, phone, city, username, password, role } = this.form;

    console.log(this.form);
    if (this.validation == true) {
      this.authService
        .register(name, email, phone, city, username, password, role)
        .subscribe(
          (data) => {
            this.showToast();
            setTimeout(() => {
              this.isSignUpFailed = false;
              this.isSuccessful = true;
              this.reload();
            }, 2000);
          },
          (error) => {
            this.errorMessage = error.error.message;
            this.isSignUpFailed = true;
          }
        );
    }
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

    this.userService.create(data).subscribe(
      (response) => {
        console.log(response);
        this.submitted = true;
      },
      (error) => {
        console.log(error);
      }
    );
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

  //Función donde se comprueba que los mensajes de alerta esten vacios
  validateForm() {
    var EMAIL_REGEX =
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var PHONE_REGEX = /^(?:(?:\+?[0-9]{2,4})?[ ]?[6789][0-9 ]{8,13})*$/;

    if (this.validation === false) {
      if (this.form.username === null) {
        this.message1 = 'Introduzca un nombre de usuario';
      } else if(this.found= true) {
        this.message1 = 'Esta ocupaoo';
      } else {
        this.message1 = '';
      }
      if (this.form.password === null) {
        this.message2 = 'Introduzca una contraseña';
      } else {
        this.message2 = '';
      }
      if (this.form.password !== this.form.vpassword) {
        this.message7 = 'La contraseña no coincide';
      } else {
        this.message7 = '';
      }
      if (this.form.name === null) {
        this.message3 = 'Introduzca un nombre';
      } else {
        this.message3 = '';
      }
      if (this.form.email === null) {
        this.message4 = 'Introduzca un correo';
      }
      if (EMAIL_REGEX.test(this.form.email)) {
        this.message4 = '';
      } else {
        this.message4 = 'El correo es incorrecto';
      }
      if (this.form.phone === null) {
        this.message5 = 'Introduzca un número de teléfono';
      }
      if (PHONE_REGEX.test(this.form.phone)) {
        this.message5 = '';
      } else {
        this.message5 = 'El télefono es incorrecto';
      }
      if (this.form.city === null) {
        this.message6 = 'Introduzca un ciudad';
      } else {
        this.message6 = '';
      }
    }
    if (
      this.message1 == '' &&
      this.message2 == '' &&
      this.message3 == '' &&
      this.message4 == '' &&
      this.message5 == '' &&
      this.message6 == '' &&
      this.message7 == ''
    ) {
      this.validation = true;
    }
    console.log(this.validation);
    console.log(this.checkUsernameExist());
  }

  checkUsernameExist(): void {
    var username;

     this.userService.getByUsername(this.form.username).subscribe(
      (result) => {
        username = result;
        console.log(result);
        this.found = true;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  checkEmailExist(): void {
    var username;

     this.userService.getByUsername(this.form.username).subscribe(
      (result) => {
        username = result;
        console.log(result);
        this.found = true;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
