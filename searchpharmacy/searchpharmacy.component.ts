import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Router } from '@angular/router'
import { IPharmacy } from '../Pharmacy';

@Component({
  selector: 'app-searchpharmacy',
  templateUrl: './searchpharmacy.component.html',
  styleUrls: ['./searchpharmacy.component.css','../../assets/css/dashboard.css']
})
export class SearchpharmacyComponent implements OnInit {
  public searchString

  public pharmacies = [];

  constructor(private _event: EventService,
    private _router: Router) { }

  ngOnInit() {    
    
  }

  searchPharmacy() {
    this.pharmacies=[]
    this._event.searchPharmacy(this.searchString)
    .subscribe(data => this.pharmacies = data.Result as IPharmacy[],
      err => console.log(err));
  }
}
