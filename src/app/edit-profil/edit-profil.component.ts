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

/*
    EditProfil(user:any){
      console.log("les datas du formulaire",user);
      this.http.post('http://localhost:8182/edit-profil',user).subscribe({
        next: (data)=> {
          this.user = data; 
          if(this.user != null) {
            console.log('ok');

            // ajouter la comande qui envoie le JSON



            this.route.navigateByUrl('profil-perso');
            
          }
          else{
            // recuperer la donnée de base et l'envoyer avec le form / pas laisser de champ vide;


            this.route.navigateByUrl('profil-perso');


          }
        },
        error: (err)=>{console.log(err)}
      });
    }





*/



}

  



