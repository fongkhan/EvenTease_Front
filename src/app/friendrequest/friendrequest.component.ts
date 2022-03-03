import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-friendrequest',
  templateUrl: './friendrequest.component.html',
  styleUrls: ['./friendrequest.component.css']
})
export class FriendrequestComponent implements OnInit {
user:any;
friendrequest:any;
alluser:any;
myfriendrequest:any;

  constructor(private http: HttpClient, private route: Router,private auth: AuthService) { }

  ngOnInit(): void {
    this.user = this.auth.getUserConnect();
    this.http.get('http://localhost:8182/user').subscribe({
    next: (data)=> {
      this.alluser= data;
      console.log(data);
    },
    error: (err)=>{console.log(err)}
  });

  
  this.http.get('http://localhost:8182/friendrequest/'+this.user.id+'/'+this.user.id).subscribe({
    next: (data)=> {
      this.myfriendrequest= data;
      console.log(data);
    },
    error: (err)=>{console.log(err)}
  });


  }

  CreateFriendRequest(friendrequest:any){}

  AcceptFriendRequest(friendrequest:any){}

  RefuseFriendRequest(friendrequest:any){
    this.user = this.auth.getUserConnect();
    friendrequest["demandeur"]=this.user;
    friendrequest["statut"]=2;
  }

  /*CreateFriendRequest(friendrequest:any){
    this.user = this.auth.getUserConnect();
    friendrequest["demandeur"]=this.user;
    friendrequest["statut"]=2;
    console.log(this.user);
    console.log("les datas du formulaire",friendrequest);
    this.http.post('http://localhost:8182/friendrequest',friendrequest).subscribe({
      next: (data)=> {
        console.log("ok");
      },
      error: (err)=>{console.log(err)}
    });
  } */

}