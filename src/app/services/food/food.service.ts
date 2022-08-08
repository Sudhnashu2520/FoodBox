import { Injectable } from '@angular/core';

import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/tags';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id: number):Foods{
    return this.getAll().find(food => food.id == id )!;
  }

  getAllFoodByTag(tag: string) :Foods[]{
    return tag == "All" ?
    this.getAll() : this.getAll().filter(food => food.tags?.
    includes(tag));
  }

  getAllTag():Tag[]{
    return [
      {name: 'All', count:(5)},
      {name: 'Fastfood', count:(3)},
      {name: 'Pizza', count:(2)},
      {name: 'Chinese', count:(2)}    
    ]
  }

  getAll():Foods[]{
    return [
      {
        id: 1,
        name: 'Pizza',
        cookTime: '10-20',
        price: 6,
        favorite: true,
        origins: ['Italy','America'],
        star: 4.5,
        imageUrl: '/assets/food-1.jpg',
        tags: ['Fastfood', 'Pizza']
      },
      {
        id: 2,
        name: 'Chilli Potato',
        cookTime: '10-20',
        price:3,
        favorite: false,
        origins: ['chinese'],
        star: 4.1,
        imageUrl: '/assets/food-2.jpg',
        tags: [ 'Chinese']
      },
      {
        id: 3,
        name: 'Buger',
        cookTime: '10-15',
        price:5,
        favorite: false,
        origins: ['America'],
        star: 4.5,
        imageUrl: '/assets/food-3.jpg',
        tags: ['Fastfood', 'Burger','Pizza']
      },
      {
        id: 4,
        name: 'Fries',
        cookTime: '10',
        price:8,
        favorite: false,
        origins: ['America'],
        star: 4.4,
        imageUrl: '/assets/food-4.jpg',
        tags: ['Fastfood', 'Fries']
      },
      {
        id: 5,
        name: 'Soup',
        cookTime: '10-20',
        price:9,
        favorite: false,
        origins: ['Chinese'],
        star: 4.2,
        imageUrl: '/assets/food-5.jpg',
        tags: [ 'Soup','Chinese']
      }
      
    ];
  }
}
