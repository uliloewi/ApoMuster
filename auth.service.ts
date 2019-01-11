import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Router } from '@angular/router'

@Injectable()
export class AuthService {

  private _registerUrl = "http://localhost:3000/api/register";
  //private _loginUrl = "http://localhost:54703/api/login"; // Yu Li v1
  private _loginUrl = "http://localhost:54703/api2/login"; //Yu Li v2

  constructor(private http: HttpClient,
              private _router: Router) { }

  registerUser(user) {
    return this.http.post<any>(this._registerUrl, user)
  }

  loginUser(user) {
    var encodedData = window.btoa(user.email+"|"+user.password)
    return this.http.post<any>(this._loginUrl,null,{  //Yu Li v2
      headers: {'login':encodedData}
   })
   /* return this.http.get<any>(this._loginUrl, {   //Yu Li v1
    headers: {'login':encodedData}
   }) */
  }

  logoutUser() {
    localStorage.removeItem('token')
    localStorage.removeItem("username")
    localStorage.removeItem("personid")
    this._router.navigate(['/events'])
  }

  getToken() {
    return localStorage.getItem('token')
  }

  loggedIn() {    
    var ss = localStorage.getItem('token')
    var rem=ss!==null && ss!=="" && ss!=="null" ;
    return rem
  }
}
