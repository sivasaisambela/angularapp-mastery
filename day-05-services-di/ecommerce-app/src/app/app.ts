import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product } from './models/product.model';
import { ProductList } from "./features/product-list/product-list";
import { SearchBar } from "./shared/search-bar/search-bar";
import { Productservice } from './core/productservice';


@Component({
  selector: 'app-root',
 imports: [ProductList, SearchBar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {

   products:Product[]=[];
  cart:Product[]=[];

    constructor(private productService:Productservice){

    }

    ngOnInit(): void {
      this.products=this.productService.getProducts();
    }
    
   handleAddToCart(product: Product) {
    this.cart.push(product);
    console.log('Cart:',this.cart);
   }

   handleSearch(term:string){
    console.log('User searched for:',term);
   }


}
