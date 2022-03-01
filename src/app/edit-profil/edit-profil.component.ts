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

  constructor(private http: HttpClient, public auth: AuthService, private route: Router,) { }
  
  ngOnInit(): void {
  }

  get user(): any {
    return this.auth.getUserConnect();
    }


    EditProfil(user:any){
      console.log("on recupere les modif",user);
         
        this.http.put('http://localhost:8182/user/update',user).subscribe({
          next: (data)=> {
            console.log("ok");
            this.route.navigateByUrl('profil-perso');
           },
          error: (err)=>{console.log(err)}
        });
      }

      


}

  



