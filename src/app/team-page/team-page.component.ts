import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { TeamDetailsService } from '../service/team-details.service';

@Component({
  selector: 'app-team-page',
  templateUrl: './team-page.component.html',
  styleUrls: ['./team-page.component.css']
})
export class TeamPageComponent implements OnInit {
  teamId: any;
  team:any;
  msgErr='';
  constructor(private http: HttpClient, private route: Router, public teamDet: TeamDetailsService, public auth: AuthService, private dialog: MatDialog) { }

  ngOnInit(): void {
  
    this.teamId = this.teamDet.getTeamId();
    this.teamId= 30;
    this.http.get('http://localhost:8182/groupe/'+ this.teamId).subscribe({
      next: (data) => {
        this.team = data;
        if (this.team != null) {
          console.log(this.team)
        }
        else {
          this.msgErr = 'No event to show';
        }
      },
      error: (err) => { console.log(err) }
    });

  }

};
