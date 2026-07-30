import { Injectable, Service } from '@angular/core';
import { Product } from '../models/product.model';


@Injectable({
  providedIn: 'root'   // Step 2 from the story: register with DI, one shared instance
})
export class Productservice {

     private products: Product[] = [
    { id: 1, name: 'Wireless Mouse', price: 799, inStock: true },
    { id: 2, name: 'Mechanical Keyboard', price: 3499, inStock: true },
    { id: 3, name: 'USB-C Hub', price: 1299, inStock: false }
  ];

  getProducts():Product[]{
    return this.products;
  }

}
