import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-participant-event',
  templateUrl: './add-participant-event.component.html',
  styleUrls: ['./add-participant-event.component.css']
})
export class AddParticipantEventComponent implements OnInit {

  separatorKeysCodes: number[] = [ENTER, COMMA];
  fruitCtrl = new FormControl();
  filteredFruits: Observable<string[]> | undefined;
  fruits: string[] = ['Lemon'];
  allFruits: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];
  @ViewChild('fruitInput')
  fruitInput!: ElementRef<HTMLInputElement>;

  group: any;
  msgErr = '';
  user: any;
  alluser: any;
  eventcreated:any;

  msgInfo: string = 'Selectionner les users concernées';
  users: any;

  constructor(private http: HttpClient, private route: Router, public auth: AuthService, private dialogRef: MatDialogRef<AddParticipantEventComponent>) { }

  ngOnInit(): void {
    this.auth.users = [];
    this.http.get('http://localhost:8182/user').subscribe({
      next: (data) => {
        this.alluser = data; //j'obtient tous les users, il faut les 'caster' et les ajouter à une list
        this.alluser.forEach((user: any) => {
          this.auth.users.push(user.login);
        });
        console.log(this.auth.users);
      }
    })

    // Charger tous les Events où je suis l'organizer
    this.user=this.auth.getUserConnect();
    this.http.get('http://localhost:8182/event/organizer/' + this.auth.getUserConnect().id).subscribe({
      next: (data)=> {
        this.eventcreated = data; 
        if(this.eventcreated!= null) {
          console.log(data)
        }
        else{
          this.msgErr ='No event to show';
        }
      },
        error: (err)=>{console.log(err)}
      });

  }

  AddParticipant(participation:any) {
    participation["invited"] = false;
    participation["participate"] = true;
    console.log("les datas du formulaire",participation);
    this.http.post('http://localhost:8182/event/addparticipant',participation).subscribe({
    next: (data)=> {
      console.log("ok");
      this.route.navigateByUrl('event-public');
      this.ngOnInit();
      this.dialogRef.close();
    },
    error: (err)=>{console.log(err)}
  });
  }

}
