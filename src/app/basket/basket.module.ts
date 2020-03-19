import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasketRoutingModule } from './basket-routing.module';
import { BasketComponent } from './basket.component';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [BasketComponent],
  imports: [
    CommonModule,
    BasketRoutingModule,
    ComponentsModule
  ]
})
export class BasketModule { }
