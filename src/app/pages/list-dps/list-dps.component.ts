import { Component, OnInit } from '@angular/core';
import { Service } from '../../services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-dps',
  templateUrl: './list-dps.component.html',
  styleUrl: './list-dps.component.css',
})
export class ListDpsComponent implements OnInit {
  dpss: any[] | undefined;
  user: any[] | undefined;
  storedData: any;

  constructor(private service: Service, private router: Router) {}

  saveData(id: number) {
    if (this.user && this.user.length > 0) {
      localStorage.setItem('dpsToModify', JSON.stringify(id));
    }
  }

  ngOnInit() {
    this.storedData = localStorage.getItem('id');
    this.service.getUserById(this.storedData).subscribe((data) => {
      this.user = data;
      if (this.user && this.user[0]?.Role === 'Admin') {
        this.service.getAllDps().subscribe((data) => {
          this.dpss = data;
        });
      } else {
        this.service.getDpsByUserId(this.storedData).subscribe((data) => {
          this.dpss = data;
        });
      }
    });
  }

  onModify(id: number) {
    this.saveData(id);
    this.router.navigate(['/ajout-dps']);
  }

  onDelete(id: number) {
    this.service.deleteDps(id).subscribe();
    this.ngOnInit();
  }

  onAjout() {
    localStorage.setItem('dpsToModify', JSON.stringify(null));
    this.router.navigate(['/ajout-dps']);
  }

  onAfficher(id: number) {
    this.saveData(id);
    this.router.navigate(['/ajout-dps']);
  }
}