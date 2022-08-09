import { Injectable } from '@angular/core';
import { Foods } from 'src/app/Shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(){ }

  getAll():Foods[]{
    return [
      {
        id:1,
        name:'Pizza Pepperoni',
        cookTime:'10-20',
        price:10,
        favorite:false,
        origins:['italy'],
        star:4.5,
        imageUrl:'/assets/food-1-jpg.jpg',
        tags:['FastFood','Pizza','Lunch'],
      },
      {
        id:2,
        name:'Meatball',
        cookTime:'20-30',
        price:20,
        favorite:true,
        origins:['persia','middle east','china','India'],
        star:4.7,
        imageUrl:'/assets/food-2-jpg.jpg',
        tags:['SlowFood','Lunch'],
      },
      {
        id:3,
        name:'Hamburger',
        cookTime:'10-15',
        price:5,
        favorite:false,
        origins:['Germany','Us'],
        star:3.5,
        imageUrl:'/assets/food-3-jpg.jpg',
        tags:['FastFood','Hamburger'],
      },
      {
        id:4,
        name:'Fried Potatoes',
        cookTime:'15-20',
        price:2,
        favorite:true,
        origins:['Belgium','France'],
        star:3.3,
        imageUrl:'/assets/food-4-jpg.jpg',
        tags:['FastFood','Fry'],
      },
      {
        id:5,
        name:'Chicken Soup',
        cookTime:'40-50',
        price:11,
        favorite:false,
        origins:['India','Asia'],
        star:3.0,
        imageUrl:'/assets/food-5-jpg.jpg',
        tags:['FastFood','Soup'],
      },
      {
        id:6,
        name:'Vegetables Pizza',
        cookTime:'40-50',
        price:9,
        favorite:false,
        origins:['Italy'],
        star:4.0,
        imageUrl:'/assets/food-6-jpg.jpg',
        tags:['FastFood','Pizza','Lunch'],
      },
      {
        id:7,
        name:'Kheer',
        cookTime:'10-15',
        price:9,
        favorite:true,
        origins:['Indian'],
        star:4.0,
        imageUrl:'/assets/food-7-jpg.jpg',
        tags:['FastFood','Pizza','Lunch'],
      },
      {
        id:8,
        name:'Vegetables Spicy Pizza',
        cookTime:'15-25',
        price:13,
        favorite:true,
        origins:['Turkey','Palestine'],
        star:3.8,
        imageUrl:'/assets/food-8-jpg.jpg',
        tags:['FastFood','Pizza','Lunch'],
      }
      
    ]
  }
}
