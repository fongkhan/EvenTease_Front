import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  user : any;
  msgErr ='';
  constructor(private http:HttpClient, private route: Router, private auth: AuthService) { }

  ngOnInit(): void {
  }

  connexion(user:any){
    console.log("les datas du formulaire",user);
    this.http.post('http://localhost:8182/connection',user).subscribe({
      next: (data)=> {
        this.user = data; 
        if(this.user != null) {
          console.log('ok');
          this.route.navigateByUrl('email-validation');
          this.auth.setUserSession(this.user);
        }
        else{
          this.msgErr ='Identifiant ou mot de passe erroné';
        }
      },
      error: (err)=>{console.log(err)}
    });
  }
}

