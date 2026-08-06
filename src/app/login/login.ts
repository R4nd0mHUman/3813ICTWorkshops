import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})

export class Login {

  constructor(private router: Router) {}

  loginModel = {
    email: '',
    password: ''
  };

  login() {
    const user = this.users.find(u =>
      u.email === this.loginModel.email &&
      u.password === this.loginModel.password
    );

    if (user) {

      this.errorMessage = '';
      console.log('Login successful');
      this.router.navigate(['/profile']);

    } else {
      this.errorMessage = 'Incorrect email or password';
    }
  }

  users = [
  {
    email: 'admin@test.com',
    password: 'admin123'
  },
  {
    email: 'sunny@test.com',
    password: '501iv4n.'
  },
  {
    email: 'test@test.com',
    password: 'testingg'
  }
];

errorMessage = '';

}