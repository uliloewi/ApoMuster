import { Component, OnInit, Input } from '@angular/core';
import { PharmacyinfoComponent } from '../pharmacyinfo/pharmacyinfo.component';

@Component({
  selector: 'app-pharmacyleftmenu',
  templateUrl: './pharmacyleftmenu.component.html',
  styleUrls: ['./pharmacyleftmenu.component.css','../../assets/css/dashboard.css']
})
export class PharmacyleftmenuComponent implements OnInit {

  @Input() ph: PharmacyinfoComponent;

  constructor() { 
  }

  ngOnInit() {
  }

  changeCustomerNo(){
    this.ph.changeCustomerNo();    
  }

  getRequests(){
    this.ph.getRequests();
  }

  showOrders(){
    this.ph.show=0;
  }

}
