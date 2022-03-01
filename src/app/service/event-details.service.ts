import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EventDetailsService {

  constructor(private route: Router) { }

  setEventId(eventId: any) {
    localStorage.setItem('eventId',JSON.parse(eventId));
  }

  getEventId(){
    let eventId: any;
    eventId = localStorage.getItem('eventId');
    return JSON.parse(eventId);
  }
/*
  isConnect(){
    if(this.getUserConnect() != null) {
      return true;
    }else{
      return false;
    }
  }
  */
  deleteEventId(){
    localStorage.clear();
    this.route.navigateByUrl("login")
  }
}
