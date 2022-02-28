import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-creation',
  templateUrl: './event-creation.component.html',
  styleUrls: ['./event-creation.component.css']
})
export class EventCreationComponent implements OnInit {

  event: any;
  msgErr = '';


  constructor(private http: HttpClient, private route: Router) { }

  ngOnInit(): void {}

  

  CreateEvent(event:any){
    console.log("les datas du formulaire",event);
    this.http.post('http://localhost:8182/event/create',event).subscribe({
      next: (data)=> {
        console.log("ok");
        
        
      },
      error: (err)=>{console.log(err)}
    });
  } 

}


