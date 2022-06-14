import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { LoginServiceService } from '../login-service.service';
import { UserData } from '../users/userData.model';
import { LoginData } from './login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http : HttpClient, private router : Router, private loginService : LoginServiceService) { }

  ngOnInit(): void {
  }

  emailId = "";
  password = "";

  loginUserUrl = "https://foodbox-b1013-default-rtdb.firebaseio.com/users.json";
  fetchedUsers: UserData[] = [];
  loginUser(loginUserData : {emailId:string, password:string}){
    this.http.get(this.loginUserUrl).pipe(map((responseData) => {
      const usersArray : UserData[] = [];
      for(const key in responseData){
        usersArray.push({...responseData[key], id:key})
      }
      return usersArray;
    })).subscribe((users) => {
      this.fetchedUsers = users;
    });
    if(loginUserData.emailId==="admin1@gmail.com" && loginUserData.password==="admin1"){
      this.loginService.setLoginToken(1);
      console.log(this.loginService.getLoginToken());
      this.router.navigateByUrl('/');
    }
    else if(loginUserData.emailId==="user1@gmail.com" && loginUserData.password==="user1"){
      this.loginService.setLoginToken(0);
      console.log(this.loginService.getLoginToken());
      this.router.navigateByUrl('/'); 
    }
  }
  
  redirecToRegister(){
    this.router.navigateByUrl('/register');
  }
}
