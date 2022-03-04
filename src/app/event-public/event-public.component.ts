import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddParticipantEventComponent } from '../add-participant-event/add-participant-event.component';
import { AuthService } from '../service/auth.service';
import { EventDetailsService } from '../service/event-details.service';
import { MatDialog } from '@angular/material/dialog';
import { ListeAchatCreationComponent } from '../liste-achat-creation/liste-achat-creation.component';
import { VoteCreationComponent } from '../vote-creation/vote-creation.component';

@Component({
  selector: 'app-event-public',
  templateUrl: './event-public.component.html',
  styleUrls: ['./event-public.component.css']
})
export class EventPublicComponent implements OnInit {
  id: any;
  msgErr = '';
  participants: any;
  votes: any;
  eventid: any;
  user: any;
  voteAnswerUser: any;
  votanswer: any;
  idVote: any;
  nbVoteAnswer: any;

  shoppinglist:any;
  shoppinglists:any;

  myEvent: any;

  constructor(private http: HttpClient, private route: Router, public eventDet: EventDetailsService, public auth: AuthService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.myEvent = this.eventDet.eventCurrent;

    this.http.get('http://localhost:8182/participant/event/'+this.myEvent.id).subscribe({
      next: (data) => {
        this.participants = data;
        // console.log('part ', this.participants);
      },
      error: (err) => { console.log(err) }
    });

    this.http.get('http://localhost:8182/event/vote/' + this.myEvent.id).subscribe({
      next: (data) => {
        this.votes = data;
        console.log(this.votes);

      },
      error: (err) => { console.log(err) }
    });

    this.http.get('http://localhost:8182/event/shoppingList/' + this.myEvent.id).subscribe({
      next: (data4) => {
        this.shoppinglists = data4;
        console.log(this.shoppinglists);

      },
      error: (err) => { console.log(err) }
    });



  }

  isPublicCheck() {

    if (this.myEvent.isPublic) {
      return true;

    } else {
      return false;
    }
  }

  goAddParticipantPup() {
    const dialogRef = this.dialog.open(AddParticipantEventComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }

  goAddVotePup() {
    const dialogRef = this.dialog.open(VoteCreationComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }

  goAddShoppingListPup() {
    const dialogRef = this.dialog.open(ListeAchatCreationComponent, {

    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }

  getAllAnswersOfVote(idVote: any) {
    this.nbVoteAnswer = [0, 0, 0, 0];
    console.log("ok");
    this.http.get('http://localhost:8182/event/vote/answer/user/' + idVote).subscribe({
      next: (data) => {
        console.log(data);
        this.voteAnswerUser = data;
        for (var vote of this.voteAnswerUser) {
          for (let i = 0; i < 4; i++) {
            if (vote.idAnswer == i + 1) {
              this.nbVoteAnswer[i]++;
            }
          }
        }
        console.log(this.nbVoteAnswer);
      },
      error: (err) => { console.log(err) }
    })

  }

  getAllAnswersOfShoppingList() {}

  isParticipantCheck() {
    this.user = this.auth.getUserConnect();
    if (this.participants != null) {
      for (let i = 0; i < this.participants.length; i++) {
        if (this.participants[i].user["id"] == this.user["id"]) {
          return true;
        }
      }
      return true;
    }
    else {
      return false;
    }
  }

  isOrganiserCheck() {
    this.user = this.auth.getUserConnect();
    if (this.myEvent.organizer.id == this.user.id) {
      return true;
    }
    return false;
  }

  goToEdit(e: any) {
    this.eventDet.eventCurrent = e;
    this.route.navigateByUrl('edit-my-event');
  }
}





