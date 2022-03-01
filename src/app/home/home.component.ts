import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { EventDetailsService } from '../service/event-details.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listevent:any;
  msgErr ='';
  authe:any;

  constructor(private http:HttpClient, private route: Router, public eventDet: EventDetailsService,public auth: AuthService) { }

  ngOnInit(): void {
    this.http.get('http://localhost:8182/event/public').subscribe({
      next: (data)=> {
        this.listevent = data; 
        if(this.listevent!= null) {
          console.log(this.listevent[0])
        }
        else{
          this.msgErr ='No events in coming';
        }
      },
        error: (err)=>{console.log(err)}
      });
    }
  }


