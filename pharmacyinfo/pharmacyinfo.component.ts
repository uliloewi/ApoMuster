import { Component, OnInit } from '@angular/core';
import { IPharmacy } from '../Pharmacy';
import { EventService } from '../event.service';
import { Router,ActivatedRoute  } from '@angular/router'
import { IOrder } from '../Order';
import { IRequest } from '../Request';

@Component({
  selector: 'app-pharmacyinfo',
  templateUrl: './pharmacyinfo.component.html',
  styleUrls: ['./pharmacyinfo.component.css','../../assets/css/dashboard.css']
})
export class PharmacyinfoComponent implements OnInit {

  public pharmacy:IPharmacy
  public orders = [];
  public requests = [];
  changenumberclicked:boolean
  getrequestsclicked:boolean

  public OldValue
  public NewValue

  constructor(private _event: EventService,    private _activeroute: ActivatedRoute,private _router: Router) { }

  ngOnInit() {
    const number = this._activeroute.snapshot.params["number"];
    this.changenumberclicked= false;
    this.getrequestsclicked=false;

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
    this.getrequestsclicked=false;
  }

  getRequests(){
    this._event.getRequests(this.pharmacy.Kundennummer)
    .subscribe(data => this.requests = data.Result as IRequest[],
      err => console.log(err)); 
    this.changenumberclicked= false;
    this.getrequestsclicked=true;   
  }

  cancelChange(){
    this.changenumberclicked= false;
  }

  saveToDatabase () {
    var NumberPair={ "OldValue":this.OldValue, "NewValue":this.NewValue}
    this._event.SaveNewCustomerNumber(NumberPair)
    .subscribe(   
      res => {                              
        if (res != "Die neue Kundennummer wurde gespeichert."){
          alert(res);
        }
        else{
          this.changenumberclicked= false;
        }    
    },
    err => console.log(err)
    )     
  }

  gotoSearchCustomer(){
    this._router.navigate(['/searchpharmacy'])
  }

  newRequest( ){
    this._router.navigate(['/customerrequest',this.pharmacy.Kundennummer])
  }

  showRequest(id){
    var ha: IRequest=this.requests.find(x => x.RequestID == id)
    this._router.navigate(['/customerrequest',this.pharmacy.Kundennummer],{queryParams:ha});
  }

}
