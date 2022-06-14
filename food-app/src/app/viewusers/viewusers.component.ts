import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { EditServiceService } from '../edit-service.service';
import { UserData } from '../users/userData.model';

@Component({
  selector: 'app-viewusers',
  templateUrl: './viewusers.component.html',
  styleUrls: ['./viewusers.component.css']
})
export class ViewusersComponent implements OnInit {

  firebaseUserUrl = "https://foodbox-b1013-default-rtdb.firebaseio.com/users.json";
  fetchedUsers: UserData[] = [];

  constructor(private http : HttpClient, private router : Router, private editService : EditServiceService) { }

  ngOnInit(): void {
    this.http.get(this.firebaseUserUrl).pipe(map((responseData) => {
      const usersArray : UserData[] = [];
      for(const key in responseData){
        usersArray.push({...responseData[key], id:key})
      }
      return usersArray;
    })).subscribe((users) => {
      this.fetchedUsers = users;
    });
  }

  editUser(fetchedUserFromUI : {name:string, emailId:string, password:string, role:string, id:string}){
    const deleteUserUrl = "https://foodbox-b1013-default-rtdb.firebaseio.com/users/"+fetchedUserFromUI.id;
    console.log(fetchedUserFromUI);
    this.editService.setUName(fetchedUserFromUI.name);
    this.editService.setUEmailId(fetchedUserFromUI.emailId);
    this.editService.setUPassword(fetchedUserFromUI.password);
    this.editService.setURole(fetchedUserFromUI.role);
    this.http.delete(deleteUserUrl).subscribe((response) => {
      console.log("User Edited!");
    }); 
    this.router.navigateByUrl('/adduser');
  }

}
