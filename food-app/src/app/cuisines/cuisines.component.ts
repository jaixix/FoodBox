import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EditServiceService } from '../edit-service.service';

@Component({
  selector: 'app-cuisines',
  templateUrl: './cuisines.component.html',
  styleUrls: ['./cuisines.component.css']
})
export class CuisinesComponent implements OnInit {

  constructor(private http: HttpClient, private router:Router, private editService : EditServiceService) { }
  firebaseUrl = "https://foodbox-b1013-default-rtdb.firebaseio.com/foods.json";

  ngOnInit(): void {}

  cName = this.editService.getName();
  cDescription = this.editService.getDescription();
  cPrice = this.editService.getPrice();
  cStatus = this.editService.getStatus();
  cStock = this.editService.getStock();

  createItem(postData : {name:String, description:String, price:String, stock:Number, status:Boolean}){
    alert("Post Added Successfully!");
    console.log(postData);
    this.http.post(this.firebaseUrl, postData).subscribe((responseData) => {
      console.log(responseData);
    });
    this.clearParams();
  }

  fetchCusines(){
      this.router.navigateByUrl('/viewcuisines');
  }

  onClearCuisines(){
    this.http.delete(this.firebaseUrl).subscribe((response) => {
      alert("Cuisines Cleared!");
    });
    this.clearParams();
  }

  clearParams(){
    this.cName="";
    this.cDescription="";
    this.cPrice="";
    this.cStatus="";
    this.cStock=null;
  }

}
