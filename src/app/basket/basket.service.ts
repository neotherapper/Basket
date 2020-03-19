import { Injectable } from '@angular/core';
import { FruitI } from '../components/fruit/fruit.model';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  basketTotal: 0;

  constructor() { }

  getAllFruits(): FruitI[] {
    return [
      {
        imageUrl: '../../../assets/apple.jpg',
        description: 'Lorem',
        price: 0.75,
        title: 'Apple',
      },
      {
        imageUrl: '../../../assets/banana.jpg',
        description: 'Lorem',
        price: 1.05,
        title: 'Banana',
      },
      {
        imageUrl: '../../../assets/orange.jpg',
        description: 'Lorem',
        price: 1.05,
        title: 'Orange',
      }
    ];
  }

  addAmountOnBasketTotal(amount: number) {
    return this.basketTotal + amount;
  }

}
