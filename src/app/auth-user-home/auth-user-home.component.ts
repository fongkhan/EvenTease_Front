import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-auth-user-home',
  templateUrl: './auth-user-home.component.html',
  styleUrls: ['./auth-user-home.component.css']
})
export class AuthUserHomeComponent implements OnInit {
  user : any;
  constructor(private http:HttpClient, private route: Router, private auth: AuthService) { }
  
  ngOnInit(): void {
    //this.user=this.auth.getUserConnect();
    //this.http.post('http://localhost:8182/',user).subscribe({

  }

  
}
