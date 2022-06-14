import { Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EditServiceService {

  constructor() { }
  name = "";
  description = "";
  stock = null;
  status = "";
  price = "";

  uName = "";
  uEmailId = "";
  uPassword = "";
  uRole = "";

  setUName(loadUName : string){
    this.uName = loadUName;
  }

  @Output()
  getUName(){
    return this.uName;
  }

  setUEmailId(loadUEmailId : string){
    this.uEmailId = loadUEmailId;
  }

  @Output()
  getUEmail(){
    return this.uEmailId;
  }

  setUPassword(loadUPassword : string){
    this.uPassword = loadUPassword;
  }

  @Output()
  getUPassword(){
    return this.uPassword;
  }

  setURole(loadURole : string){
    this.uRole = loadURole;
  }

  @Output()
  getURole(){
    return this.uRole;
  }
  
  setName(loadName : string){
    this.name = loadName;
    console.log("Load Name : " + loadName);
    console.log("Main Name : " + this.name);
  }

  @Output()
  getName(){
    console.log("Main Name : " + this.name);
    return this.name;
  }

  setDescription(loadDescription : string){
    this.description = loadDescription;
    console.log("Load Desc : " + loadDescription);
    console.log("Main Desc : " + this.description);
  }

  @Output()
  getDescription(){
    console.log("Main Description : " + this.description);
    return this.description;
  }

  setPrice(loadPrice : string){
    this.price = loadPrice;
    console.log("Load Price : " + loadPrice);
    console.log("Main Price : " + this.price);
  }

  @Output()
  getPrice(){
    console.log("Main Price : " + this.price);
    return this.price;
  }

  setStock(loadStock : number){
    this.stock = loadStock;
    console.log("Load Stock : " + loadStock);
    console.log("Main Stock : " + this.stock);
  }

  @Output()
  getStock(){
    console.log("Main Stock : " + this.stock);
    return this.stock;
  }

  setStatus(loadStatus : string){
    this.status = loadStatus;
    console.log("Load Status : " + loadStatus);
    console.log("Main Status : " + this.status);
  }

  @Output()
  getStatus(){
    console.log("Main Status : " + this.status);
    return this.status;
  }
}
