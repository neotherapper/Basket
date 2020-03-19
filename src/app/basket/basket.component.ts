import { Component, OnInit } from '@angular/core';
import { BasketService } from './basket.service';
import { FruitI } from '../components/fruit/fruit.model';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  fruits: FruitI[];
  basketTotal: number;

  constructor(private basketService: BasketService) { }

  ngOnInit(): void {
    this.fruits = this.basketService.getAllFruits();
    this.basketService.basketTotal.subscribe( (total) => {
       this.basketTotal = total;
    });
  }

  onBasketAdd(fruit: FruitI): void {
    this.basketService.addAmountOnBasketTotal(fruit.price);
  }

}
