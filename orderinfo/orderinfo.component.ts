import { Component, OnInit } from '@angular/core';
import { IOrder } from '../Order';
import { IOrderItem } from '../OrderItem';
import { EventService } from '../event.service';
import { Router,ActivatedRoute  } from '@angular/router'

@Component({
  selector: 'app-orderinfo',
  templateUrl: './orderinfo.component.html',
  styleUrls: ['./orderinfo.component.css','../../assets/css/dashboard.css']
})
export class OrderinfoComponent implements OnInit {
  public order:IOrder
  public orderitems = [];

  constructor(private _event: EventService,
    private _router: ActivatedRoute) { }

  ngOnInit() {
    const id = this._router.snapshot.params["id"];

    this._event.getOrderById(id)
    .subscribe(data => this.order = data.Result as IOrder,
      err => console.log(err));

      this._event.getOrderItemsById(id)
      .subscribe(data => this.orderitems = data.Result as IOrderItem[],
        err => console.log(err));
  }

}
