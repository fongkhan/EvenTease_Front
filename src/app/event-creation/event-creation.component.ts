import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-event-creation',
  templateUrl: './event-creation.component.html',
  styleUrls: ['./event-creation.component.css']
})
export class EventCreationComponent implements OnInit {

  event: any;
  msgErr = '';
  user:any;

  constructor(private http: HttpClient, private route: Router,private auth: AuthService) { }

  ngOnInit(): void {}


  CreateEvent(event:any){
    this.user = this.auth.getUserConnect();
    event["organizer"]=this.user;
    console.log(this.user);
    console.log("les datas du formulaire",event);
    this.http.post('http://localhost:8182/event/create',event).subscribe({
      next: (data)=> {
        console.log("ok");
        this.route.navigateByUrl('auth-user-home');
      },
      error: (err)=>{console.log(err)}
    });
  } 

}


