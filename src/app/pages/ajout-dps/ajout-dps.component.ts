import { Component, OnInit } from '@angular/core';
import { Service } from '../../services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout-dps',
  templateUrl: './ajout-dps.component.html',
  styleUrl: './ajout-dps.component.css',
})
export class AjoutDpsComponent implements OnInit {
  ndps: any;
  proprietaire: any;
  nature: any;
  impultation: any;
  probleme: any;
  degree: any;
  date: any;
  etat: any;
  storedData: any;
  storedData2: any;
  dps: any[] | undefined;
  modify: boolean = false;
  user: any[] | undefined;

  constructor(private service: Service, private router: Router) {}

  ngOnInit(): void {
    this.storedData = localStorage.getItem('id');
    this.service.getUserById(this.storedData).subscribe((data) => {
      this.user = data;
    });
    const currentDate = new Date();
    this.date = this.formatDate(currentDate);
    this.storedData = localStorage.getItem('dpsToModify');
    if (this.storedData > 0) {
      this.service.getDpsById(this.storedData).subscribe((data) => {
        this.dps = data;
        if (this.dps && this.dps.length > 0) {
          this.ndps = this.dps[0].NDPS;
          this.proprietaire = this.dps[0].Proprietaire;
          this.impultation = this.dps[0].Imputation;
          this.nature = this.dps[0].Nature;
          this.date = this.dps[0].Date;
          this.etat = this.dps[0].etat;
          this.probleme = this.dps[0].Probleme;
          this.degree = this.dps[0].Degre;
        }
      });
      this.modify = true;
    }
  }
  formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
  onAjout() {
    this.storedData2 = localStorage.getItem('id');
    const data = {
      ndps: this.ndps,
      proprietaire: this.proprietaire,
      nature: this.nature,
      imputation: this.impultation,
      probleme: this.probleme,
      degree: this.degree,
      date: this.date,
      etat: this.etat,
      userId: this.storedData2,
    };

    if (this.modify) {
      this.onModify();
    } else {
      if (this.service.postDps(data).subscribe()) {
        alert('Nouveau DPS est Ajoutée');
        this.router.navigate(['/list-dps']);
      }
    }
  }

  onModify() {
    this.storedData2 = localStorage.getItem('id');
    const data = {
      ndps: this.ndps,
      proprietaire: this.proprietaire,
      nature: this.nature,
      imputation: this.impultation,
      probleme: this.probleme,
      degree: this.degree,
      etat: this.etat,
      date: this.date.substring(0, 10),
    };
    if (this.modify) {
      if (this.service.updateDps(data).subscribe()) {
        localStorage.setItem('dpsToModify', JSON.stringify(0));
        alert('le DPS est Modifieé');
        this.router.navigate(['/list-dps']);
      }
    }
  }
}
