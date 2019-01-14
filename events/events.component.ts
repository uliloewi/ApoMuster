import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css', '../../assets/css/fontawesome-all.min.css','../../assets/css/animations.css','../../assets/dist/css/main.css']
})
export class EventsComponent implements OnInit {
  status: boolean = true;
  events = []
  hasToken=false
  constructor(private _eventService: EventService,private _authService: AuthService) { }

  ngOnInit() {  
  }
  ChangeClass(){
    this.status = !this.status;   
  }
}
