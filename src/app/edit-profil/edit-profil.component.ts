import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-edit-profil',
  templateUrl: './edit-profil.component.html',
  styleUrls: ['./edit-profil.component.css']
})
export class EditProfilComponent implements OnInit {

  constructor(public auth: AuthService) { }
  
  ngOnInit(): void {
  }

  get user(): any {
    return this.auth.getUserConnect();
    }

}

  



