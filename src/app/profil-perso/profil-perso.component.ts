import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-profil-perso',
  templateUrl: './profil-perso.component.html',
  styleUrls: ['./profil-perso.component.css']
})
export class ProfilPersoComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }

  get user(): any {
    return this.auth.getUserConnect();
    }
}
