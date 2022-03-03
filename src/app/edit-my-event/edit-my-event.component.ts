import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { EventDetailsService } from '../service/event-details.service';

@Component({
  selector: 'app-edit-my-event',
  templateUrl: './edit-my-event.component.html',
  styleUrls: ['./edit-my-event.component.css']
})
export class EditMyEventComponent implements OnInit {

  constructor(private http: HttpClient, public auth: AuthService, private route: Router) { }

  currentEvent: any;

  ngOnInit(): void {
  }

  get Event(): any {
    return this.auth.getEventId();
    }
    get user(): any {
      return this.auth.getUserConnect();
      }


    EditEvent(Event:any){
      console.log("on recupere les modif",Event);
        Event["id"]=this.auth.getEventId()["id"]; // on va pas chercher le clic il faut modif cette ligne
        console.log(Event);
        this.http.put('http://localhost:8182/event/update',Event).subscribe({
          next: (data)=> {
            console.log(Event);
            this.route.navigateByUrl('profil-perso');
           },
          error: (err)=>{console.log(err)}
        });
      }



}
