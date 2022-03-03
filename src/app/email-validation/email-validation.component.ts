import { HttpClient, HttpContext, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email-validation',
  templateUrl: './email-validation.component.html',
  styleUrls: ['./email-validation.component.css']
})
export class EmailValidationComponent implements OnInit {
  mail:any;
  codeVerfi:any;
  userTemp:any;
  constructor(private http:HttpClient, private route: Router) { }

  validateMail(userTemp:any){
    console.log("les datas du formulaire");
    
    this.http.post('http://localhost:8182/sign-in/confirm',userTemp).subscribe({
      next: (data)=> {
        console.log("ok");
        this.route.navigateByUrl('home');
       },
      error: (err)=>{console.log(err)}
    });
  }

  ngOnInit(): void {
  }

}
