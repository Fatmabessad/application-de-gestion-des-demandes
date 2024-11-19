import { Component, OnInit } from '@angular/core';
import { Service } from '../../services.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent implements OnInit {
  users: any[] | undefined;
  storedData: any;

  constructor(private service: Service) {}

  ngOnInit() {
    this.storedData = localStorage.getItem('id');
    this.service.getAllUsers().subscribe((data) => {
      this.users = data;
    });
  }

  onDelete(id: number) {
    this.service.deleteUser(id).subscribe();
    this.ngOnInit();
  }
}
