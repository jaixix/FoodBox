import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  firebaseUserUrl = "https://foodbox-b1013-default-rtdb.firebaseio.com/users.json";
  constructor(private http : HttpClient, private router : Router) {}

  ngOnInit(): void {}

  emailId = "";
  password = "";
  role="";

  registerUser(registerData : {emailId:string, password:string, role:string}){
    alert("Congratulations! You have registered successfully!");
    console.log(registerData);
    this.http.post(this.firebaseUserUrl, registerData).subscribe((responseData) => {
      console.log(responseData);
    });
    this.router.navigateByUrl('/');
  }

  redirectToLogin(){
    this.router.navigateByUrl('/login');
  }
}
