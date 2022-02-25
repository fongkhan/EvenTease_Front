import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private http:HttpClient, private route: Router) { }

  user : any;
  msgErr ='';

  ngOnInit(): void {
  }

  register(user:any){
    console.log("les datas du formulaire",user);
    this.http.post('http://localhost:8182/sign-in',user).subscribe({
      next: (data)=> {
        console.log("ok");
        this.route.navigateByUrl('email-validation');
       },
      error: (err)=>{console.log(err)}
    });
  }
}
