import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product } from './models/product.model';
import { ProductList } from "./features/product-list/product-list";
import { SearchBar } from "./shared/search-bar/search-bar";


@Component({
  selector: 'app-root',
 imports: [ProductList, SearchBar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  products:Product[]=[
    {id:1,name:'Wireless Mouse',price:799,inStock:true},
    {id:2,name:'Mechanical Keyboard',price:1021,inStock:true},
    { id: 3, name: 'USB-C Hub', price: 1299, inStock: false }

  ];

  cart:Product[]=[];

  
   handleAddToCart(product: Product) {
    this.cart.push(product);
    console.log('Cart:',this.cart);
   }

   handleSearch(term:string){
    console.log('User searched for:',term);
   }


}
