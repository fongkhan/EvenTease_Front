import { Component } from '@angular/core';


import { AuthService } from './service/auth.service';
//IMPOTRATION DES SERVICES
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EvenTease_Front';
  
  constructor(public auth: AuthService){}
  //IMPOTRATION DES SERVICES
  
  //user=this.auth.getUserConnect();


    get user(): any {
      return this.auth.getUserConnect();
      }


}