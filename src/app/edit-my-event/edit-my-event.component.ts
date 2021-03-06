import { _getEventTarget } from '@angular/cdk/platform';
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

  event: any;
  user: any;
  idUser: any;
  idEvent: any;
  listevent: any;
  currentUser: any;
  currentEvent: any;
  msgErr = ''

  myEvent: any;

  constructor(private http: HttpClient, public auth: AuthService, public eventDet: EventDetailsService, private route: Router) { }



  ngOnInit(): void {
    this.myEvent = this.eventDet.eventCurrent;
    /* Charge le user connecté*/
    this.user = this.auth.getUserConnect();
    // charge l'ID de l'event connecté
    this.idEvent = this.eventDet.getEventId();
    this.currentEvent = this.myEvent.myEvent;
    console.log('current event ', this.currentEvent);
    // charge tout l'event correspond / donc "Organizer" aussi
    // Création d'un event vide
    //this.eventDet.setEventId(5); // a supp

  }

  // fct qui check si user = organizer // à appeler dans la div boutton init + dans le div haut de page
  isOrganiserCheck() {
    this.user = this.auth.getUserConnect();
    if (this.myEvent.myEvent.organizer.id == this.user.id) {
      return true;
    } else {
      return false;
    }
  }

  // fct similaire / voir son fonctionneent
  get Event(): any {
    return this.auth.getEventId();
  }
  // pareil
  get User(): any {
    return this.auth.getUserConnect();
  }

  // il y a de base l'info event id dans le localstorage + on l'a recup dans le ng init
  EditEvent(Event: any) {
    //console.log("on recupere les modif",Event);
    // Event["id"]=this.auth.getEventId()["id"]; // on va pas chercher le clic il faut modif cette ligne
    //console.log(Event); // pour voir si on ouvre le bon event


    this.http.put('http://localhost:8182/event/update/' + this.currentEvent.id, this.currentEvent).subscribe({
      next: (data) => {
        console.log(Event);
        console.log(data);
        this.route.navigateByUrl('auth-user-home');
      },
      error: (err) => { console.log(err) }
    });
  }



}
