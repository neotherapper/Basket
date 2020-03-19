import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasketComponent } from './basket.component';
import { ComponentsModule } from '../components/components.module';


const routes: Routes = [
  {
    path: '',
    component: BasketComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), ComponentsModule],
  exports: [RouterModule],
})
export class BasketRoutingModule {}
