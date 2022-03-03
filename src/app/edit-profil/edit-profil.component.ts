import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-edit-profil',
  templateUrl: './edit-profil.component.html',
  styleUrls: ['./edit-profil.component.css']
})
export class EditProfilComponent implements OnInit {

  // user:any;

  msgErr = '';
  currentUser: any;
  fieldTextType: any;
  
  

  constructor(private http: HttpClient, public auth: AuthService, private route: Router,) { }
  
  ngOnInit(): void {
    this.currentUser = this.auth.getUserConnect();
  }

  get user(): any {
    return this.auth.getUserConnect();
    }
    
    // Pour switch type de text à password
    toggleFieldTextType() {
      this.fieldTextType = !this.fieldTextType;
    }



    EditProfil(){
     // console.log("on recupere les modif",user);
       // user["id"]=this.auth.getUserConnect()["id"];
       // console.log(user);
        this.http.put('http://localhost:8182/user/update/'+ this.currentUser.id ,this.currentUser).subscribe({
          next: (data)=> {
            // console.log(data);
            this.currentUser = data;
            this.auth.setUserSession(this.currentUser);
            this.route.navigateByUrl('profil-perso');
           },
          error: (err)=>{console.log(err)}
        });
      }

      


}

  



