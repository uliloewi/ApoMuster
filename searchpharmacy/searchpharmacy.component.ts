import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-searchpharmacy',
  templateUrl: './searchpharmacy.component.html',
  styleUrls: ['./searchpharmacy.component.css']
})
export class SearchpharmacyComponent implements OnInit {
  CustomerNumber;
  PharmacyName;
  public pharmacies = [];

  constructor(private _event: EventService,
    private _router: Router) { }

  ngOnInit() {
  }

  searchPharmacyByPharmacyName() {
    this._event.searchPharmacyByPharmacyName(this.PharmacyName)
    .subscribe(data => this.pharmacies = data,
      err => console.log(err));
  }

  searchPharmacyByCustomerNumber() {
    this._event.searchPharmacyByCustomerNumber(this.CustomerNumber)
    .subscribe(data => this.pharmacies = data,
      err => console.log(err));
  }

  setSelectedPharmacy(val){
    this._event.pharm = val; 
  }


}
