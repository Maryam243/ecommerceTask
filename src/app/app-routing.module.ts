import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProducsComponent } from './products/components/all-producs/all-producs.component';
import { ProductsDetailsComponent } from './products/components/products-details/products-details.component';
import { AddProductsComponent } from './products/components/add-products/add-products.component';

const routes: Routes = [
  {path: 'products', component:AllProducsComponent},
  {path: 'productDetails', component:ProductsDetailsComponent},
  {path:'addProduct',component:AddProductsComponent},
  {path:'' , redirectTo: 'products',pathMatch:"full" }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
