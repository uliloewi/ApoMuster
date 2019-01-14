import { Component, OnInit, Input } from '@angular/core';
import { EventService } from '../event.service';
import { IDAndCaption } from '../IDAndCaption';
import { IRequest } from '../Request';
import { ActivatedRoute  } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-customerrequest',
  templateUrl: './customerrequest.component.html',
  styleUrls: ['./customerrequest.component.css','../../assets/css/dashboard.css']
})
export class CustomerrequestComponent implements OnInit {
  public mediums=[]
  public titletypes=[]
  public customerNumber: String
  public cr: IRequest= {RequestID:0,RequestTypeID:"0",ContactMediumTypeID:"0",CreatedBy:localStorage.getItem('personid')}
  saved=false
  hint=""

  constructor(private _event: EventService,  private _activeroute: ActivatedRoute, private _location: Location) {
   }

  ngOnInit() {
    this.customerNumber = this._activeroute.snapshot.params["number"];
    if (this._activeroute.snapshot.queryParams.RequestID !== undefined ) {
      this._event.getRequestByID(this._activeroute.snapshot.queryParams.RequestID)
      .subscribe(data => this.cr = data.Result as IRequest,
        err => console.log(err));
      //this.cr= this._activeroute.snapshot.queryParams as IRequest;
    }
  }

  saveToDatabase () {
    this._event.SaveNewCustomerRequest(this.cr,this.customerNumber)
    .subscribe(  
          res => {                              
              if (res.Status < 300){                
                this.saved =true
                this.hint="Die Anfrage wurde gespeichert."
              }    
          },
          err => {
            console.log(err)
            this.hint="Bitte prüfen Sie die Felder."
          }
    ) 
     
  }

  backClicked() {
    this._location.back();
  }

}
