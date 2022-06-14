import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EditServiceService } from '../edit-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private http : HttpClient, private router : Router, private editService : EditServiceService) { }

  firebaseUserUrl = "https://foodbox-b1013-default-rtdb.firebaseio.com/users.json";

  ngOnInit(): void {}

  uName = this.editService.getUName();
  uEmailId = this.editService.getUEmail();
  uPassword = this.editService.getUPassword();
  uRole = this.editService.getURole();

  createUser(userData : {name:string, emailId:string, password:string, role:string}){
    alert("User Added Successfully!");
    console.log(userData);
    this.http.post(this.firebaseUserUrl, userData).subscribe((responseData) => {
      console.log(responseData);
    });
    this.clearParams();
  }

  onClearUsers(){
    this.http.delete(this.firebaseUserUrl).subscribe((response) => {
      alert("Users Cleared!");
    });
    this.clearParams();
  }

  clearParams(){
    this.uName="";
    this.uEmailId="";
    this.uPassword="";
    this.uRole="";
  }

  fetchUsers(){
    this.router.navigateByUrl('/viewusers');
  }
}