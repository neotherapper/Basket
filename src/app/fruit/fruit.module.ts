import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FruitRoutingModule } from './fruit-routing.module';
import { FruitComponent } from './fruit.component';


@NgModule({
  declarations: [FruitComponent],
  imports: [
    CommonModule,
    FruitRoutingModule
  ]
})
export class FruitModule { }
