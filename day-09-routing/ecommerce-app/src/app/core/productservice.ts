import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { Product } from '../models/product.model';
import { ProductApiModel } from '../models/api/product-api.model';


@Injectable({
  providedIn: 'root'   // Step 2 from the story: register with DI, one shared instance
})
export class ProductService {

  private apiUrl= 'https://fakestoreapi.com/products';

  constructor(private http:HttpClient){

  }
  
  getProducts(): Observable<Product[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      map((response: any) => {
        // 1. Defend against wrapped response objects (like { products: [...] } or { data: [...] })
        let rawProducts: any[] = [];
        if (Array.isArray(response)) {
          rawProducts = response;
        } else if (response && Array.isArray(response.products)) {
          rawProducts = response.products;
        } else if (response && Array.isArray(response.data)) {
          rawProducts = response.data;
        } else {
          console.warn('API response is not an array and does not contain expected arrays:', response);
          return [];
        }

        // 2. Defend against missing properties to prevent "toUpperCase" crashes
        return rawProducts.map(product => {
          // Fallback to product.name if product.title is undefined
          const rawTitle = product.title || product.name || 'Unnamed Product';

          return {
            id: product.id,
            title: typeof rawTitle === 'string' ? rawTitle.toUpperCase() : 'UNNAMED PRODUCT',
            price: product.price !== undefined ? product.price : 0,
            category: product.category || product.categoryLabel || 'General',
            image: product.image || product.imageUrl || '',
            description: product.description || ''
          } as Product;
        });
      }),
      // This will now only catch critical connection/network failures!
      catchError(error => {
        console.error('Critical network error in ProductService:', error);
        return of([]);
      })
    );
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
