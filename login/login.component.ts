import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData = {}
  successfulLogin=true

  constructor(private _auth: AuthService,
              private _router: Router) { }

  ngOnInit() {
  }

  loginUser () {
    this.successfulLogin=false
    this._auth.loginUser(this.loginUserData)
    .subscribe(
      res => {        
        if (res !== undefined && res.Result !== null) {
          
          localStorage.setItem('token', res.Result);
          localStorage.setItem('username', res.Msg.split('\n')[0]);          
          localStorage.setItem('personid', res.Msg.split('\n')[1]);   
          this._router.navigate(['/searchpharmacy']);
          this.successfulLogin=true;
        }
      },
      err =>   console.log(err)
    )
    
  }

}
