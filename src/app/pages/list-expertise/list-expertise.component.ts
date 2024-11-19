import { Component, OnInit } from '@angular/core';
import { Service } from '../../services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-expertise',
  templateUrl: './list-expertise.component.html',
  styleUrl: './list-expertise.component.css',
})
export class ListExpertiseComponent implements OnInit {
  expss: any[] | undefined;
  user: any[] | undefined;
  storedData: any;

  constructor(private service: Service, private router: Router) {}

  saveData(id: number) {
    if (this.user && this.user.length > 0) {
      localStorage.setItem('expToModify', JSON.stringify(id));
    }
  }

  ngOnInit() {
    this.storedData = localStorage.getItem('id');
    this.service.getUserById(this.storedData).subscribe((data) => {
      this.user = data;
      if (this.user && this.user[0]?.Role === 'Admin') {
        this.service.getAllExp().subscribe((data) => {
          this.expss = data;
        });
      } else {
        this.service.getExpByUserId(this.storedData).subscribe((data) => {
          this.expss = data;
        });
      }
    });
  }

  onModify(id: number) {
    this.saveData(id);
    this.router.navigate(['/ajout-expertise']);
  }

  onDelete(id: number) {
    this.service.deleteExp(id).subscribe();
    this.ngOnInit();
  }
  onAfficher(id: number) {
    this.saveData(id);
    this.router.navigate(['/ajout-dps']);
  }
}
