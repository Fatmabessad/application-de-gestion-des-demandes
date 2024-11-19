import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from '../../services.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent {
  login: boolean = true;
  register: boolean = false;
  user: any[] | undefined;

  id: string = '1';
  password: any;
  nom: any;
  email: any;

  constructor(private service: Service, private router: Router) {}

  saveData() {
    if (this.user && this.user.length > 0) {
      localStorage.setItem('id', JSON.stringify(this.user[0].NUser));
    }
  }

  onRegister() {
    const data = {
      nom: this.nom,
      email: this.email,
      password: this.password,
    };
    if (this.nom && this.email && this.password) {
      this.service.postUser(data).subscribe();
      this.onLogin();
    }
  }

  onLogin() {
    this.service.getUserByEmail(this.email).subscribe((data) => {
      this.user = data;
      console.log(this.user);
      if (this.user && this.user[0].Email == this.email) {
        this.saveData();
        this.router.navigate(['/list-dps']);
      }
    });
  }

  loginfn() {
    this.login = !this.login;
    this.register = !this.register;
  }
}
