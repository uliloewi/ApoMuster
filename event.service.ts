import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class EventService {  
  private _saveNewValueUrl = "http://localhost:54703/api/v1/audittrails"; //Yu Li v1
  //private _saveNewValueUrl = "http://localhost:54703/api/v2/audittrails"; //Yu Li v2
  public static _rootUrl="http://localhost:54703/api2/";
  private _pharmacyUrl=EventService._rootUrl+ "pharmacies/";
  private _orderUrl=EventService._rootUrl+ "orders/";

  constructor(private http: HttpClient) { }

  getSpecialEvents() {
    return this.http.get<any>(this._saveNewValueUrl, {
      headers: {'AuthKey':localStorage.getItem('token')}
   })
  }

  SaveNewCustomerNumber(valuepair)
  {
    return this.http.post<any>(this._saveNewValueUrl, valuepair, {headers: {'AuthKey':localStorage.getItem('token')}})
  }

  SaveNewCustomerRequest(cutomerRequest,customernumber)
  {
    return this.http.post<any>(this._pharmacyUrl+customernumber+"/requests", cutomerRequest, {headers: {'AuthKey':localStorage.getItem('token')}})
  }

  getRequests(customernumber): any {
    return this.http.get<any>(this._pharmacyUrl+customernumber+"/requests", {headers: {'AuthKey':localStorage.getItem('token')}})
  }

  getRequestByID(id): any {
    return this.http.get<any>(EventService._rootUrl+ "requests/"+id, {headers: {'AuthKey':localStorage.getItem('token')}})
  }

  searchPharmacy(pharmacyStr)
  {
     return this.http.get<any>(this._pharmacyUrl+"query/"+pharmacyStr , {headers: {'AuthKey':localStorage.getItem('token')}})
  }

  searchPharmacyByCustomerNumber(customernumber)
  {
    return this.http.get<any>(this._pharmacyUrl+customernumber,  {headers: {'AuthKey':localStorage.getItem('token')}})
  }

  searchOrdersForPharmacy(customernumber)
  {
    return this.http.get<any>(this._pharmacyUrl+customernumber+"/orders",  {headers: {'AuthKey':localStorage.getItem('token')}})
  }

  getOrderById(orderid)
  {
    return this.http.get<any>(this._orderUrl+orderid,  {headers: {'AuthKey':localStorage.getItem('token')}})
  }

  getOrderItemsById(orderid)
  {
    return this.http.get<any>(this._orderUrl+orderid+"/items",  {headers: {'AuthKey':localStorage.getItem('token')}})
  }
}
