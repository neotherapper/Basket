import { Injectable } from '@angular/core';
import { FruitI } from '../components/fruit/fruit.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  public basketTotal = new BehaviorSubject(0);

  constructor() { }

  getAllFruits(): FruitI[] {
    return [
      {
        imageUrl: 'apple.jpg',
        description: 'Lorem',
        price: 0.75,
        title: 'Apple',
      },
      {
        imageUrl: 'banana.jpg',
        description: 'Lorem',
        price: 1.05,
        title: 'Banana',
      },
      {
        imageUrl: 'orange.jpg',
        description: 'Lorem',
        price: 1.05,
        title: 'Orange',
      }
    ];
  }

  addAmountOnBasketTotal(amount: number): void {
    this.basketTotal.next(this.basketTotal.getValue() + amount);
  }

}
