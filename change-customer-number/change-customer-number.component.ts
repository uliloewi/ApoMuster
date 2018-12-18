import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-change-customer-number',
  templateUrl: './change-customer-number.component.html',
  styleUrls: ['./change-customer-number.component.css']
})
export class ChangeCustomerNumberComponent implements OnInit {

  NumberPair = {}

  constructor(private _event: EventService,
    private _router: Router) { }

  ngOnInit() {
  }

  saveToDatabase () {
    this._event.SaveNewCustomerNumber(this.NumberPair)
    .subscribe(
      res => {
        this._router.navigate(['/events'])
      },
      err => console.log(err)
    ) 
  }

}
