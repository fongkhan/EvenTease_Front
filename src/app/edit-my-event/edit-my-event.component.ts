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

  user : any;
  idUser:any;
  idEvent:any;
  listevent:any;
  currentUser: any;
  currentEvent: any;
  msgErr=''

  constructor(private http: HttpClient, public auth: AuthService, public eventDet: EventDetailsService, private route: Router) { }

  currentEvent: any;

  ngOnInit(): void {

    this.currentUser = this.auth.getUserConnect();
    this.currentEvent = this.eventDet.getEventId();

    
    this.http.get('http://localhost:8182/event/organizer',this.currentUser).subscribe({
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

  }

  get Event(): any {
    return this.auth.getEventId();
    }
  get User(): any {
      return this.auth.getUserConnect();
      }


    EditEvent(Event:any){
      //console.log("on recupere les modif",Event);
       // Event["id"]=this.auth.getEventId()["id"]; // on va pas chercher le clic il faut modif cette ligne
        console.log(Event); // pour voir si on ouvre le bon event
        this.http.put('http://localhost:8182/event/update'+ this.currentEvent.idUser ,this.currentEvent).subscribe({
          next: (data)=> {
            //console.log(Event);
            this.currentEvent = data;
            this.eventDet.setEventId(this.currentEvent); // deja initialisé non ?
            this.route.navigateByUrl('auth-user-home');
           },
          error: (err)=>{console.log(err)}
        });
      }



}
