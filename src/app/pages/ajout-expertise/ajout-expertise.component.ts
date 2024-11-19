import { Component } from '@angular/core';
import { Service } from '../../services.service';

@Component({
  selector: 'app-ajout-expertise',
  templateUrl: './ajout-expertise.component.html',
  styleUrl: './ajout-expertise.component.css',
})
export class AjoutExpertiseComponent {
  nexp: string | undefined;
  ndps: string | undefined;
  nature: string | undefined;
  quantite: number | undefined;
  presentation: string | undefined;
  date: string | undefined;

  storedData: any;
  storedData2: any;
  exp: any[] | undefined;
  modify: boolean = false;

  constructor(private service: Service) {}

  ngOnInit(): void {
    const currentDate = new Date();
    this.date = this.formatDate(currentDate);

    this.storedData = localStorage.getItem('expToModify');
    if (this.storedData > 0) {
      this.service.getExpById(this.storedData).subscribe((data) => {
        this.exp = data;
        if (this.exp && this.exp.length > 0) {
          this.nexp = this.exp[0].NExp;
          this.ndps = this.exp[0].DPS_NDPS;
          this.quantite = this.exp[0].Quantite;
          this.presentation = this.exp[0].Prest;
          this.nature = this.exp[0].Nature;
          this.date = this.exp[0].Date.substring(0, 10);
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
      nexp: this.nexp,
      ndps: this.ndps,
      presentation: this.presentation,
      nature: this.nature,
      quantite: this.quantite,
      date: this.date,
      user_id: this.storedData2,
    };
    if (this.modify) {
      this.onModify();
    } else {
      if (this.service.postExp(data).subscribe()) {
        alert('l"expertise est Ajoutée');
      }
    }
  }

  onModify() {
    this.storedData2 = localStorage.getItem('id');
    const data = {
      nexp: this.nexp,
      ndps: this.ndps,
      presentation: this.presentation,
      nature: this.nature,
      quantite: this.quantite,
      date: this.date,
    };
    if (this.modify) {
      if (this.service.updateExp(data).subscribe()) {
        localStorage.setItem('expToModify', JSON.stringify(0));
        alert('l"expertise est Modifieé');
      }
    }
  }
}
