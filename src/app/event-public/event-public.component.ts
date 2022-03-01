import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { EventDetailsService } from '../service/event-details.service';

@Component({
  selector: 'app-event-public',
  templateUrl: './event-public.component.html',
  styleUrls: ['./event-public.component.css']
})
export class EventPublicComponent implements OnInit {
  id:any ;
  event:any;
  msgErr ='';

  constructor(private http:HttpClient, private route: Router, public eventDet: EventDetailsService,public auth: AuthService) { }

  ngOnInit(): void {
    this.id = this.eventDet.getEventId();
    this.http.post('http://localhost:8182/eventid',this.id).subscribe({
      next: (data)=> {
        this.event = data; 
        if(this.event!= null) {
          console.log(this.event)
        }
        else{
          this.msgErr ='No event to show';
        }
      },
        error: (err)=>{console.log(err)}
      });
    }
  }

  

