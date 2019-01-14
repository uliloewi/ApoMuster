import { Component, OnInit } from '@angular/core';
import { IPharmacy } from '../Pharmacy';
import { EventService } from '../event.service';
import { Router,ActivatedRoute  } from '@angular/router'
import { IOrder } from '../Order';
import { IOrderItem } from '../OrderItem';
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
  show=0
  public order:IOrder
  public orderitems = [];

  public OldValue
  public NewValue

  constructor(private _event: EventService,    private _activeroute: ActivatedRoute,private _router: Router) { }

  ngOnInit() {
    const number = this._activeroute.snapshot.params["number"];
    this._event.searchPharmacyByCustomerNumber(number)
    .subscribe(data => this.pharmacy = data.Result as IPharmacy,
      err => console.log(err));
    this._event.searchOrdersForPharmacy(number)
    .subscribe(data => this.orders = data.Result as IOrder[],
      err => console.log(err));
  }

  changeCustomerNo(){
    this.OldValue=this.pharmacy.Kundennummer;
    this.show=1
  }

  getRequests(){
    this._event.getRequests(this.pharmacy.Kundennummer)
    .subscribe(data => this.requests = data.Result as IRequest[],
      err => console.log(err)); 
    this.show=2
  }

  getOrderdetail(id){    
    this._event.getOrderById(id)
    .subscribe(data => this.order = data.Result as IOrder,
      err => console.log(err));

    this._event.getOrderItemsById(id)
    .subscribe(data => this.orderitems = data.Result as IOrderItem[],
      err => console.log(err));
    this.show=3
  }

  cancelChange(){
    this.show= 0;
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
          this.show= 0;
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
    //var ha: IRequest=this.requests.find(x => x.RequestID == id)
    //this._router.navigate(['/customerrequest',this.pharmacy.Kundennummer],{queryParams:ha});
    this._router.navigate(['/customerrequest',this.pharmacy.Kundennummer],{queryParams:{ RequestID: id } });
  }

}
