import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';

export interface Answer {
  name: string;
}


@Component({
  selector: 'app-vote-creation',
  templateUrl: './vote-creation.component.html',
  styleUrls: ['./vote-creation.component.css']
})
export class VoteCreationComponent implements OnInit {

  eventcreated:any;
  user:any;
  msgErr:any;

  addOnBlur = true;

  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  answers: Answer [] = [];

  constructor(private http: HttpClient, private route: Router,private auth: AuthService) { }

  ngOnInit(): void {
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

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
  
    // Add our fruit
    if (value) {
      this.answers.push({name: value});
    }
  
    // Clear the input value
    event.chipInput!.clear();
  }
  
  remove(achat: Answer): void {
    const index = this.answers.indexOf(achat);
  
    if (index >= 0) {
      this.answers.splice(index, 1);
    }
  }

  CreateVote(answerlist:any){
    /*this.user = this.auth.getUserConnect();
    answerlist["answer"]=this.user;*/
    let yous: string[] = [];
    this.answers.forEach(element => {
      yous.push(element.name);
    });
    answerlist["answer"]=yous;
    console.log(this.user);
    console.log("les datas du formulaire",answerlist);
    this.http.post('http://localhost:8182/event/vote/create',answerlist).subscribe({
      next: (data)=> {
        console.log("ok");
        this.route.navigateByUrl('auth-user-home');
      },
      error: (err)=>{console.log(err)}
    });
  } 

}
