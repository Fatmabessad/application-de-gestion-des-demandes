import { Component, OnInit } from '@angular/core';
import { Service } from '../../services.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent implements OnInit {
  apercu: boolean = true;
  securite: boolean = false;

  email: any;
  nom: string | undefined;
  mail: string | undefined;

  mailInp: any;
  passInp: any;
  storedData: any;
  user: any[] | undefined;

  constructor(private service: Service) {}

  ngOnInit(): void {
    this.storedData = localStorage.getItem('id');
    this.service.getUserById(this.storedData).subscribe((data) => {
      this.user = data;
    });
  }

  onChanger() {
    const data = {
      email: this.mailInp,
      motpasse: this.passInp,
      id: this.storedData,
    };
    this.service.updateUser(data).subscribe();
  }

  goToApercu() {
    this.apercu = true;
    this.securite = false;
  }
  goToSecurite() {
    this.apercu = false;
    this.securite = true;
  }
}
