import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Router } from '@angular/router'
import { IPharmacy } from '../Pharmacy';

@Component({
  selector: 'app-searchpharmacy',
  templateUrl: './searchpharmacy.component.html',
  styleUrls: ['./searchpharmacy.component.css']
})
export class SearchpharmacyComponent implements OnInit {
  public pharmacy:IPharmacy

  public pharmacies = [];

  constructor(private _event: EventService,
    private _router: Router) { }

  ngOnInit() {
    this.pharmacy = {"Ort":"","Postleitzahl":"","ApothekenName":"","Kundennummer":"",
    "ApothekenID": 0,
    "Betriebsstaette": "",
    "Strasse": "",
    "Telefonnummer": "",
    "Faxnummer": "",
    "EMail": "",
    "Nachname": "",
    "Vorname": "",
    "Titel": "",
    "Geburtsdatum": "",
    "Aktiv": "",
    "Bemerkung": "",
    "Gebiet": "",
    "Gebietsleiter": "",
    "IMS_Kreis_ID": "",
    "Kunden_Klasse": "",
    "IDFNummer": "",
    "Noweda_Kunde": "",
    "Kundennummer_vorgaenger": "",
    "Vorgaenger_gueltig_ab": "",
    "Kundennnummer_nachfolger": "",
    "Nachfolger_gueltig_ab":"",
    "ImportDatum": ""
      }
  }

  searchPharmacy() {
    this._event.searchPharmacy(this.pharmacy)
    .subscribe(data => this.pharmacies = data.Result as IPharmacy[],
      err => console.log(err));
  }
}
