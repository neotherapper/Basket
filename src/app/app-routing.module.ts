import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'basket',
    pathMatch: 'full',
  },
  {
    path: 'basket',
    loadChildren: () =>
      import('./basket/basket.module').then(m => m.BasketModule),
  },
  {
    path: 'fruit/:fruitId',
    loadChildren: () => import('./fruit/fruit.module').then(m => m.FruitModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
