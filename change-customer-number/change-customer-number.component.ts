import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { ActivatedRoute,Router } from '@angular/router'

@Component({
  selector: 'app-change-customer-number',
  templateUrl: './change-customer-number.component.html',
  styleUrls: ['./change-customer-number.component.css']
})
export class ChangeCustomerNumberComponent implements OnInit {

  //NumberPair = {}
  public OldValue
  public NewValue

  constructor(private _event: EventService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.OldValue = this.route.snapshot.params["oldnumber"];
  }

  saveToDatabase () {
    var NumberPair={ "OldValue":this.OldValue, "NewValue":this.NewValue}
    this._event.SaveNewCustomerNumber(NumberPair)
    .subscribe(
      res => {
        this.router.navigate(['/pharmacyinfo', this.OldValue])
      },
      err => console.log(err)
    ) 
  }

}
