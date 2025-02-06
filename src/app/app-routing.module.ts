import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductsComponent } from './presentation/home/list-products/list-products.component';
import { FormProductComponent } from './presentation/home/form-product/form-product.component';

const routes: Routes = [
  {path:"view",component:ListProductsComponent},
  {path:"",component:FormProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
