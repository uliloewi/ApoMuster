import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { IOrder } from './Order';
import { IOrderItem } from './OrderItem';
import { IPharmacy } from './Pharmacy';

@Injectable()
export class EventService {
  public pharm:IPharmacy;
  private _eventsUrl = "http://localhost:3000/api/events";
  //private _saveNewValueUrl = "http://localhost:54703/api/v1/audittrails"; //Yu Li v1
  private _saveNewValueUrl = "http://localhost:54703/api/v2/audittrails"; //Yu Li v2
  private _searchPharmacyByNumberUrl="http://localhost:54703/api2/pharmacies/number=";
  private _searchPharmacyByNameUrl="http://localhost:54703/api2/pharmacies/name=";
  private _searchOrdersForPharmacyUrl="http://localhost:54703/api2/pharmacies/";
  private _orderUrl="http://localhost:54703/api2/orders/";

  constructor(private http: HttpClient) { }

  getEvents() {
    return this.http.get<any>(this._eventsUrl)
  }

  getSpecialEvents() {
    return this.http.get<any>(this._saveNewValueUrl, {
      headers: {'AuthKey':localStorage.getItem('token')}
   })
  }

  SaveNewCustomerNumber(valuepair)
  {
    return this.http.post<any>(this._saveNewValueUrl, valuepair, {headers: {'AuthKey':localStorage.getItem('token')}})
  }

  searchPharmacyByPharmacyName(pharmacyname)
  {
    return this.http.get<IPharmacy[]>(this._searchPharmacyByNameUrl+pharmacyname,  {headers: {'AuthKey':localStorage.getItem('token')}})
  }

  searchPharmacyByCustomerNumber(customernumber)
  {
    return this.http.get<IPharmacy[]>(this._searchPharmacyByNumberUrl+customernumber,  {headers: {'AuthKey':localStorage.getItem('token')}})
  }
  searchOrdersForPharmacy(customernumber)
  {
    return this.http.get<IOrder[]>(this._searchOrdersForPharmacyUrl+customernumber+"/orders",  {headers: {'AuthKey':localStorage.getItem('token')}})
  }

  getOrderById(orderid)
  {
    return this.http.get<IOrder>(this._orderUrl+orderid,  {headers: {'AuthKey':localStorage.getItem('token')}})
  }

  getOrderItemsById(orderid)
  {
    return this.http.get<IOrderItem[]>(this._orderUrl+orderid+"/items",  {headers: {'AuthKey':localStorage.getItem('token')}})
  }
}
