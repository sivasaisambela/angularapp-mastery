import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { ProductDetail } from './features/product-detail/product-detail';
import { AddProduct } from './features/add-product/add-product';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'products/:id', component: ProductDetail },
    { path: 'add-product', component: AddProduct }
];