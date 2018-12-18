import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class EventService {

  private _eventsUrl = "http://localhost:3000/api/events";
  private _specialEventsUrl = "http://localhost:54703/api/audittrails"; //"http://localhost:3000/api/special";

  constructor(private http: HttpClient) { }

  getEvents() {
    return this.http.get<any>(this._eventsUrl)
  }

  getSpecialEvents() {
    return this.http.get<any>(this._specialEventsUrl, {
      headers: {'AuthKey':localStorage.getItem('token')}
   })
  }

  SaveNewCustomerNumber(valuepair)
  {
    return this.http.post<any>(this._specialEventsUrl, valuepair, {headers: {'AuthKey':localStorage.getItem('token')}})
  }
}
