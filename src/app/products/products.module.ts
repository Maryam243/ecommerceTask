import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProducsComponent } from './components/all-producs/all-producs.component';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';
import { AddProductsComponent } from './components/add-products/add-products.component';

import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AllProducsComponent,
    ProductsDetailsComponent,
    AddProductsComponent,
    
  ],
  imports: [
    CommonModule,
    BrowserModule
  ]
})
export class ProductsModule { }
