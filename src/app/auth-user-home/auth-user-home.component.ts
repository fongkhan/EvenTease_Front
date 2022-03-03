import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { EventDetailsService } from '../service/event-details.service';

@Component({
  selector: 'app-auth-user-home',
  templateUrl: './auth-user-home.component.html',
  styleUrls: ['./auth-user-home.component.css']
})
export class AuthUserHomeComponent implements OnInit {
  user : any;
  id:any;
  events:any;
  eventsparticip:any;
  msgErr=''
  constructor(private http:HttpClient, private route: Router, private auth: AuthService, public eventDet: EventDetailsService) { }
  
  ngOnInit(): void {

    this.user=this.auth.getUserConnect();
    this.http.get('http://localhost:8182/event/organizer/' + this.auth.getUserConnect().id).subscribe({
      next: (data)=> {
        this.events = data; 
        console.log('events ', this.events)
        if(this.events!= null) {
         
        }
        else{
          this.msgErr ='No event to show';
        }
      },
        error: (err)=>{console.log(err)}
      });

      
    this.http.get('http://localhost:8182/user-participe-event/participant/' + this.auth.getUserConnect().id).subscribe({
      next: (data)=> {  
        this.eventsparticip = data; 
      },
        error: (err)=>{console.log(err)}
      });
      
    
  }

  // goCreateGroup() {
  //   this.route.navigateByUrl('create-group');
  // }

}

