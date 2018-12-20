import { Component, OnInit } from '@angular/core';
import { IOrder } from '../Order';
import { EventService } from '../event.service';
import { Router,ActivatedRoute  } from '@angular/router'

@Component({
  selector: 'app-orderinfo',
  templateUrl: './orderinfo.component.html',
  styleUrls: ['./orderinfo.component.css']
})
export class OrderinfoComponent implements OnInit {
  public order:IOrder
  public orderitems = [];

  constructor(private _event: EventService,
    private _router: ActivatedRoute) { }

  ngOnInit() {
    const id = this._router.snapshot.params["id"];

    this._event.getOrderById(id)
    .subscribe(data => this.order = data,
      err => console.log(err));

      this._event.getOrderItemsById(id)
      .subscribe(data => this.orderitems = data,
        err => console.log(err));
  }

}
