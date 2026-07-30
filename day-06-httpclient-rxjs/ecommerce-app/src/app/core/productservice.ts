import { Injectable, Service } from '@angular/core';
import { Product } from '../models/product.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'   // Step 2 from the story: register with DI, one shared instance
})
export class Productservice {

  private apiUrl= 'https://fakestoreapi.com/products';

  constructor(private http:HttpClient){

  }
  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.apiUrl);
  }
  //    private products: Product[] = [
  //   { id: 1, name: 'Wireless Mouse', price: 799, inStock: true },
  //   { id: 2, name: 'Mechanical Keyboard', price: 3499, inStock: true },
  //   { id: 3, name: 'USB-C Hub', price: 1299, inStock: false }
  // ];

  // getProducts():Product[]{
  //   return this.products;
  // }

}
