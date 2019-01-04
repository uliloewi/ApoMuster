import { Component, OnInit } from '@angular/core';
import { IPharmacy } from '../Pharmacy';
import { EventService } from '../event.service';
import { Router,ActivatedRoute  } from '@angular/router'
import { IOrder } from '../Order';

@Component({
  selector: 'app-pharmacyinfo',
  templateUrl: './pharmacyinfo.component.html',
  styleUrls: ['./pharmacyinfo.component.css','../../assets/css/dashboard.css']
})
export class PharmacyinfoComponent implements OnInit {

  public pharmacy:IPharmacy
  public orders = [];
  changenumberclicked:boolean

  public OldValue
  public NewValue

  constructor(private _event: EventService,    private _activeroute: ActivatedRoute,private _router: Router) { }

  ngOnInit() {
    const number = this._activeroute.snapshot.params["number"];
    this.changenumberclicked= false;

    this._event.searchPharmacyByCustomerNumber(number)
    .subscribe(data => this.pharmacy = data.Result as IPharmacy,
      err => console.log(err));

      this._event.searchOrdersForPharmacy(number)
      .subscribe(data => this.orders = data.Result as IOrder[],
        err => console.log(err));
  }

  changeCustomerNo(){
    this.OldValue=this.pharmacy.Kundennummer;
    this.changenumberclicked= true;
  }

  saveToDatabase () {
    var NumberPair={ "OldValue":this.OldValue, "NewValue":this.NewValue}
    this._event.SaveNewCustomerNumber(NumberPair)
    .subscribe(      err => console.log(err)    ) 
    this.changenumberclicked= false;
  }

  gotoSearchCustomer(){
    this._router.navigate(['/searchpharmacy'])
  }

}
