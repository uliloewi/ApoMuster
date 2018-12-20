import { Component, OnInit } from '@angular/core';
import { IPharmacy } from '../Pharmacy';
import { EventService } from '../event.service';
import { Router,ActivatedRoute  } from '@angular/router'

@Component({
  selector: 'app-pharmacyinfo',
  templateUrl: './pharmacyinfo.component.html',
  styleUrls: ['./pharmacyinfo.component.css']
})
export class PharmacyinfoComponent implements OnInit {

  public pharmacy:IPharmacy
  public orders = [];

  constructor(private _event: EventService,
    private _router: ActivatedRoute) { }

  ngOnInit() {
    const number = this._router.snapshot.params["number"];

    this._event.searchPharmacyByCustomerNumber(number)
    .subscribe(data => this.pharmacy = data[0],
      err => console.log(err));

      this._event.searchOrdersForPharmacy(number)
      .subscribe(data => this.orders = data,
        err => console.log(err));
  }

}
