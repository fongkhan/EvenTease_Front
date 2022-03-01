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
  listevent:any;
  listeventparticip:any;
  msgErr=''
  constructor(private http:HttpClient, private route: Router, private auth: AuthService, public eventDet: EventDetailsService) { }
  
  ngOnInit(): void {

    this.user=this.auth.getUserConnect();
    this.http.post('http://localhost:8182/event/organizer',this.user).subscribe({
      next: (data)=> {
        this.listevent = data; 
        if(this.listevent!= null) {
         
        }
        else{
          this.msgErr ='No event to show';
        }
      },
        error: (err)=>{console.log(err)}
      });

      
    this.http.post('http://localhost:8182/event/participant/user',this.user).subscribe({
      next: (data)=> {
        
        this.listevent["participer"] = data; 
        if(this.listevent!= null) {
          console.log(this.listevent.participer[0].event)
        }
        else{
          this.msgErr ='No event to show';
        }
      },
        error: (err)=>{console.log(err)}
      });
      
    
  }

}

