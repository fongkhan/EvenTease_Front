import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.css']
})
export class CreateGroupComponent implements OnInit {

  group: any;
  msgErr = '';
  user:any;
  alluser:any;

  members = ["member1"];
  memberNumber = 1;

  constructor(private http: HttpClient, private route: Router,private auth: AuthService) { }

  ngOnInit(): void {
    this.http.get('http://localhost:8182/user').subscribe({
      next: (data)=> {
        this.alluser= data; //j'obtient tous les users, il faut les 'caster' et les ajouter à une list
        console.log(data);

  }})
}

  CreateGroup(group:any){
    this.user = this.auth.getUserConnect();
    group["admin"]=this.user;
    console.log(this.user);
    console.log("les datas du formulaire",group);
    this.http.post('http://localhost:8182/group/create',group).subscribe({
      next: (data)=> {
        console.log(group);
        this.route.navigateByUrl('auth-user-home');
      },
      error: (err)=>{console.log(err)}
    });
  } 
  /*textAreasList:any = [];

    addMember(){        
        this.textAreasList.push('text_area'+ (this.textAreasList.length + 1));
    }*/

    addInputMember() {
      this.memberNumber++; 
      this.members.push("member"+this.memberNumber)
    }
    removeInputMember() {
      this.members.splice(this.memberNumber)
    }
}
