import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { PostData } from '../cuisines/postData.model';

@Component({
  selector: 'app-viewcuisinesuser',
  templateUrl: './viewcuisinesuser.component.html',
  styleUrls: ['./viewcuisinesuser.component.css']
})
export class ViewcuisinesuserComponent implements OnInit {

  constructor(private http: HttpClient, private router : Router) {}
  firebaseUrl = "https://foodbox-b1013-default-rtdb.firebaseio.com/foods.json";
  cartUrl = "https://foodbox-b1013-default-rtdb.firebaseio.com/usercart.json";
  fetchedItems: PostData[] = [];
  cartToken = 0;
  ngOnInit(): void {
    this.http.get(this.firebaseUrl).pipe(map((responseData) => {
      const foodsArray : PostData[] = [];
      for(const key in responseData){
        foodsArray.push({...responseData[key], id:key})
      }
      return foodsArray;
    })).subscribe((foods) => {
      this.fetchedItems = foods;
    });
  }

  addToCart(foodItemFromUI : {name:string, price:string, stock:number, description:string}){
    alert("Cuisine Added To Cart Successfully!");
    this.cartToken=1;
    console.log(foodItemFromUI);
    this.http.post(this.cartUrl, foodItemFromUI).subscribe((responseData) => {
      console.log(responseData);
    });
  }

  goToCart(){
    this.router.navigateByUrl('/usercart');
  }
}
