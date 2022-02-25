import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email-validation',
  templateUrl: './email-validation.component.html',
  styleUrls: ['./email-validation.component.css']
})
export class EmailValidationComponent implements OnInit {

  constructor(private http:HttpClient, private route: Router) { }

  validateMail(user:any){
    console.log("les datas du formulaire",user);
    
    this.http.post('http://localhost:8182/sign-in',user).subscribe({
      next: (data)=> {
        console.log("ok");
        this.route.navigateByUrl('email-validation');
       },
      error: (err)=>{console.log(err)}
    });
  }

  ngOnInit(): void {
  }

}
