import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { IDAndCaption } from '../IDAndCaption';
import { IRequest } from '../Request';
import { ActivatedRoute  } from '@angular/router'

@Component({
  selector: 'app-customerrequest',
  templateUrl: './customerrequest.component.html',
  styleUrls: ['./customerrequest.component.css','../../assets/css/dashboard.css']
})
export class CustomerrequestComponent implements OnInit {

  public mediums=[]
  public titletypes=[]
  public customerNumber: String
  public cr: IRequest= {RequestID:0,RequestTypeID:"0",ContactMediumTypeID:"0"}


  constructor(private _event: EventService,  private _activeroute: ActivatedRoute) {
    
   }

  ngOnInit() {
    this.customerNumber = this._activeroute.snapshot.params["number"];
    this._event.getContactMediumType()
    .subscribe(data => this.mediums = data.Result as IDAndCaption[],
      err => console.log(err));

    this._event.getRequestType()
      .subscribe(data => this.titletypes = data.Result as IDAndCaption[],
        err => console.log(err));
  }

  saveToDatabase () {
    this._event.SaveNewCustomerRequest(this.cr,this.customerNumber)
    .subscribe(  
          err => console.log(err)
    )     
  }

}