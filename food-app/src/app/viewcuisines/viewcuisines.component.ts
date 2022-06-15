import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { PostData } from '../cuisines/postData.model';
import { EditServiceService } from '../edit-service.service';

@Component({
  selector: 'app-viewcuisines',
  templateUrl: './viewcuisines.component.html',
  styleUrls: ['./viewcuisines.component.css']
})
export class ViewcuisinesComponent implements OnInit {

  constructor(private http: HttpClient, private router : Router, private editService : EditServiceService) { }
  firebaseUrl = "https://foodbox-b1013-default-rtdb.firebaseio.com/foods.json";
  fetchedItems: PostData[] = [];
  searchText = "";
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

  editItem(fetchedPostsFromUI: {name:string, stock:number, description:string, status:string, id:string, price:string}){
    console.log(fetchedPostsFromUI);
    const deleteUrl = "https://foodbox-b1013-default-rtdb.firebaseio.com/foods/"+fetchedPostsFromUI.id;
    this.editService.setName(fetchedPostsFromUI.name);
    this.editService.setDescription(fetchedPostsFromUI.description);
    this.editService.setPrice(fetchedPostsFromUI.price);
    this.editService.setStock(fetchedPostsFromUI.stock);
    this.editService.setStatus(fetchedPostsFromUI.status);
    this.http.delete(deleteUrl).subscribe((response) => {
      console.log("Cuisine Edited!");
    }); 
    this.router.navigateByUrl('/addcuisine');
  }

  // characters = [
  //   'Ant-Man',
  //   'Aquaman',
  //   'Asterix',
  //   'The Atom',
  //   'The Avengers',
  //   'Batgirl',
  //   'Batman',
  //   'Batwoman',
  // ];
}
