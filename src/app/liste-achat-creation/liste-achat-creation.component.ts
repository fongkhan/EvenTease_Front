import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';

export interface Achat {
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
  msgErr:any;
  /*achats = ["achat1"];
  achatNumber = 1;*/
  addOnBlur = true;

  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  achats: Achat [] = [];
  


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
    this.achats.push({name: value});
  }

  // Clear the input value
  event.chipInput!.clear();
}

remove(achat: Achat): void {
  const index = this.achats.indexOf(achat);

  if (index >= 0) {
    this.achats.splice(index, 1);
  }
}

CreateShoppingList(shoppinglist:any){
  this.user = this.auth.getUserConnect();
  shoppinglist["createur"]=this.user;
  let yous: string[] = [];
  this.achats.forEach(element => {
    yous.push(element.name);
  });
  shoppinglist["achat"]=yous;
  console.log(this.user);
  console.log("les datas du formulaire",shoppinglist);
  this.http.post('http://localhost:8182/shoppinglist/add',shoppinglist).subscribe({
    next: (data)=> {
      console.log("ok");
      this.route.navigateByUrl('auth-user-home');
    },
    error: (err)=>{console.log(err)}
  });
} 

}

