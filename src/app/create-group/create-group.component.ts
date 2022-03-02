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
  user: any;
  alluser: any;

  members = ["member1"];
  memberNumber = 1;
  membersObj = [];

  msgInfo: string = 'Selectionner les users concernées';
  users: any;
  constructor(private http: HttpClient, private route: Router, public auth: AuthService) { }

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
  }

  CreateGroup(group: any) {
    // this.user = this.auth.getUserConnect();
    // group["admin"] = this.user;
    // group["members"] = this.members;
    // console.log(this.user);

    group.admin = this.auth.getUserConnect();
    const membres = group.membres;
    group.membres = null;

    console.log("les datas ", group);
    this.http.post('http://localhost:8182/group/user/' + membres, group).subscribe({
      next: (data) => {
        // console.log(data);
        // this.route.navigateByUrl('auth-user-home');
      },
      error: (err) => { console.log(err) }
    });
  }

  addInputMember() {
    this.memberNumber++;
    this.members.push("memberT" + this.memberNumber)
  }
  removeInputMember() {
    this.memberNumber = this.memberNumber - 1;
    this.members.splice(this.memberNumber)
  }

  removeInputAllMember() {
    this.members.splice(1, this.memberNumber)
  }
}
