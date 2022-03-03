import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';

export interface Fruit {
  name: string;
}

@Component({
  selector: 'app-liste-achat-creation',
  templateUrl: './liste-achat-creation.component.html',
  styleUrls: ['./liste-achat-creation.component.css']
})
export class ListeAchatCreationComponent implements OnInit {

  eventcreated:any;
  shoppinglist:any;
  pricelist:any;
  user:any;
  achats = ["achat1"];
  achatNumber = 1;
  addOnBlur = true;

  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  fruits: Fruit[] = [{name: 'Lemon'}, {name: 'Lime'}, {name: 'Apple'}];
  


 constructor(private http: HttpClient, private route: Router,private auth: AuthService) { }


ngOnInit(): void {
  this.user = this.auth.getUserConnect();
  this.http.post('http://localhost:8182/event/organizer',this.user).subscribe({
    next: (data)=> {
      this.eventcreated= data; //j'obtient tous les events où je suis organizer
      console.log(data);
    },
    error: (err)=>{console.log(err)}
  });
}

add(event: MatChipInputEvent): void {
  const value = (event.value || '').trim();

  // Add our fruit
  if (value) {
    this.fruits.push({name: value});
  }

  // Clear the input value
  event.chipInput!.clear();
}

remove(fruit: Fruit): void {
  const index = this.fruits.indexOf(fruit);

  if (index >= 0) {
    this.fruits.splice(index, 1);
  }
}
CreateShoppingList(shoppinglist:any){
  this.user = this.auth.getUserConnect();
  shoppinglist["createur"]=this.user;
  console.log(this.user);
  console.log("les datas du formulaire",shoppinglist);
  this.http.post('http://localhost:8182/event/create',shoppinglist).subscribe({
    next: (data)=> {
      console.log("ok");
      this.route.navigateByUrl('auth-user-home');
    },
    error: (err)=>{console.log(err)}
  });
} 

addInputAchat() {
  this.achatNumber++; 
  this.achats.push("achat"+this.achatNumber)
}

removeInputAchat() {
  this.achatNumber = this.achatNumber-1;
  this.achats.splice(this.achatNumber)
}

removeInputAllAchat() {
  this.achats.splice(1,this.achatNumber)
}

}

