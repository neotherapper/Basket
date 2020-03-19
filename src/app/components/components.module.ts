import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FruitComponent } from './fruit/fruit.component';



@NgModule({
  declarations: [FruitComponent],
  imports: [CommonModule],
  exports: [FruitComponent],
})
export class ComponentsModule {}
