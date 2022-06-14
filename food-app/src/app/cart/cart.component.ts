import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { CartData } from './cartData.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private http : HttpClient, private router : Router) {}
  cartUrl = "https://foodbox-b1013-default-rtdb.firebaseio.com/usercart.json";
  fetchedCartItems : CartData[] = [];
  ngOnInit(): void {
    this.http.get(this.cartUrl).pipe(map((responseData) => {
      const foodsArray : CartData[] = [];
      for(const key in responseData){
        foodsArray.push({...responseData[key], id:key})
      }
      return foodsArray;
    })).subscribe((foods) => {
      this.fetchedCartItems = foods;
    });
  }

  buyItem(){
    alert("Item has been Ordered!");
  }
}
