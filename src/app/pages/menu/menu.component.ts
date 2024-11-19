import { Component, OnInit } from '@angular/core';
import { Service } from '../../services.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent implements OnInit {
  admin: boolean | undefined;
  email: any;
  nom: any;

  user: any[] | undefined;
  storedData: any;

  constructor(private service: Service) {}

  ngOnInit(): void {
    this.storedData = localStorage.getItem('id');
    if (this.storedData) {
      this.service.getUserById(this.storedData).subscribe((data) => {
        this.user = data;
      });
    }
  }
}
