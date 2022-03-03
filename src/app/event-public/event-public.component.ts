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
  id: any;
  event: any;
  msgErr = '';
  participants: any;
  votes:any;
  eventid:any;
  user:any;


  constructor(private http: HttpClient, private route: Router, public eventDet: EventDetailsService, public auth: AuthService) { }

  ngOnInit(): void {

    this.id = this.eventDet.getEventId();
    
    this.http.post('http://localhost:8182/eventid', this.id).subscribe({
      next: (data) => {
        this.event = data;
        if (this.event != null) {
          console.log(this.event)
        }
        else {
          this.msgErr = 'No event to show';
        }
      },
      error: (err) => { console.log(err) }
    });
    
   
    this.http.post('http://localhost:8182/event/participant/event',this.id).subscribe({
      next: (data2) => {
        this.participants = data2;
        if (this.participants != null) {
          console.log(this.participants)
        }
        else {
          this.msgErr = 'No participants';
        }
      },
      error: (err) => { console.log(err) }
    });

    this.http.post('http://localhost:8182/event/vote/idevent',this.id).subscribe({
      next: (data) => {
        this.votes = data;
        if (this.votes != null) {
          console.log(this.votes)
        }
        else {
          this.msgErr = 'No participants';
        }
      },
      error: (err) => { console.log(err) }
    });


  }
  isPublicCheck() {

    if (this.event["isPublic"]) {
      return true;

    } else {
      return false;
    }
  }

  isParticipantCheck() {
    this.user=this.auth.getUserConnect();
    for (let i = 0; i < this.participants.length; i++ ) {
      if (this.participants[i].user["id"]==this.user["id"]) {
        return true;
    }
   }
   return false;
  }
}





