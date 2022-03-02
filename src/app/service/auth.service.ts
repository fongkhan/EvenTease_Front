import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 users: any;
  constructor(private route: Router) { }

  setUserSession(user: any) {
    localStorage.setItem('userConnect',JSON.stringify(user));
  }

  getUserConnect(){
    let user: any;
    user = localStorage.getItem('userConnect');
    return JSON.parse(user);
  }

  isConnect(){
    if(this.getUserConnect() != null) {
      return true;
    }else{
      return false;
    }
  }
  
  logout(){
    localStorage.clear();
    this.route.navigateByUrl("login")
  }

  getEventId(){
    let eventId: any;
    eventId = localStorage.getItem('eventId');
    return JSON.parse(eventId);
  }
 

}
