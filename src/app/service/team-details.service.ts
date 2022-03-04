import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TeamDetailsService {

  constructor(private route: Router) { }

  setTeamId(TeamId: any) {
    localStorage.setItem('teamId',JSON.parse(TeamId));
  }

  getTeamId(){
    let teamId: any;
    teamId = localStorage.getItem('teamId');
    return JSON.parse(teamId);
  }
/*
  isConnect(){
    if(this.getUserConnect() != null) {
      return true;
    }else{
      return false;
    }
  }
  */
  deleteTeamId(){
    localStorage.clear();
    this.route.navigateByUrl("auth-user-home")
  }
}
