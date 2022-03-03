import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CreateGroupComponent } from '../create-group/create-group.component';
import { AuthService } from '../service/auth.service';
import { EventDetailsService } from '../service/event-details.service';

@Component({
  selector: 'app-all-my-events',
  templateUrl: './all-my-events.component.html',
  styleUrls: ['./all-my-events.component.css']
})
export class AllMyEventsComponent implements OnInit {
  user : any;
  id: any;
  events: any;
  eventsparticip: any;
  teams: any;
  teamsparticip: any;
  msgErr=''
  constructor(private http:HttpClient, private route: Router, private auth: AuthService, public eventDet: EventDetailsService, private dialog: MatDialog) { }
  
  ngOnInit(): void {

    this.user=this.auth.getUserConnect();
    this.http.get('http://localhost:8182/event/organizer/' + this.auth.getUserConnect().id).subscribe({
      next: (data)=> {
        this.events = data; 
        if(this.events!= null) {
         
        }
        else{
          this.msgErr ='No event to show';
        }
      },
        error: (err)=>{console.log(err)}
      });

      
    this.http.get('http://localhost:8182/user-participe-event/participant/' + this.auth.getUserConnect().id).subscribe({
      next: (data)=> {  
        this.eventsparticip = data; 
      },
        error: (err)=>{console.log(err)}
      });

      this.recupMyTeams();
        
  }


  recupMyTeams() {
    this.http.get('http://localhost:8182/groupe').subscribe({
      next: (data)=> {  
        this.teams = data; 
       // console.log('teams ', this.teams);
      },
        error: (err)=>{console.log(err)}
      });
  }

  goTeamCreatePup(){
    const dialogRef = this.dialog.open(CreateGroupComponent, {
      
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }

  // goCreateGroup() {
  //   this.route.navigateByUrl('create-group');
  // }

}

