import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-pharmacyheader',
  templateUrl: './pharmacyheader.component.html',
  styleUrls: ['./pharmacyheader.component.css','../../assets/css/dashboard.css']
})
export class PharmacyheaderComponent implements OnInit {

  constructor(private _authService: AuthService) { }

  ngOnInit() {
  }

}
