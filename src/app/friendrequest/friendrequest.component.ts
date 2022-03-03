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
myfriendrequests:any; /*toutes mes demandes d'amis reçues (où je suis receveur)*/
myfriends:any; /*tous mes amis*/
msgAccept:any = '';
msgAppear:any = "true";


  constructor(private http: HttpClient, private route: Router,private auth: AuthService) { }

  ngOnInit(): void {
    /* Charge le user connecté*/
    this.user = this.auth.getUserConnect();
    /* Charge tous les user*/
    this.http.get('http://localhost:8182/user').subscribe({
    next: (data)=> {
      this.alluser= data;
      console.log(data);
    },
    error: (err)=>{console.log(err)}
  });

  /*Charge My FriendRequest Accepted*/
  this.http.get('http://localhost:8182/friendrequest/'+this.user.id+'/1').subscribe({
    next: (data)=> {
      this.myfriends= data;
      console.log(data);
    },
    error: (err)=>{console.log(err)}
  });
/*Charge My FriendRequest En cours*/
this.http.get('http://localhost:8182/friendrequest/receveur/'+this.user.id+'/2').subscribe({
    next: (data)=> {
      this.myfriendrequests= data;
      console.log(data);
    },
    error: (err)=>{console.log(err)}
  });

  }

  CreateFriendRequest(friendrequest:any){
  this.user = this.auth.getUserConnect();
  friendrequest["demandeur"]=this.user;
  friendrequest["statut"]=2;
  console.log(this.user);
  console.log("les datas du formulaire",friendrequest);
  this.http.post('http://localhost:8182/friendrequest',friendrequest).subscribe({
    next: (data)=> {
      console.log("ok");
      this.ngOnInit();
    },
    error: (err)=>{console.log(err)}
  });

  }

  AcceptFriendRequest(f:any){
    this.http.put('http://localhost:8182/friendrequest/accept',f).subscribe({
    next: (data)=> {
      console.log(data);
      this.msgAccept = "Demande acceptée"+f.id;
      this.msgAppear = "true"+f.id;
      this.ngOnInit();
    },
    error: (err)=>{console.log(err)}
  });
  }

  RefuseFriendRequest(f:any){
    this.http.put('http://localhost:8182/friendrequest/refuse',f).subscribe({
    next: (data)=> {
      console.log(data);
      this.msgAccept = "Demande refusée"+f.id;
      this.msgAppear = "true"+f.id;
      this.ngOnInit();
    },
    error: (err)=>{console.log(err)}
  });
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