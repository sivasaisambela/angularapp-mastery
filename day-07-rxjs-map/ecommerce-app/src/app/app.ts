import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product } from './models/product.model';
import { ProductList } from "./features/product-list/product-list";
import { SearchBar } from "./shared/search-bar/search-bar";
import { ProductService } from './core/productservice';


@Component({
  selector: 'app-root',
 imports: [ProductList, SearchBar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {

 products = signal<Product[]>([]);   // was: products: Product[] = []
  cart = signal<Product[]>([]);

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.products.set(data);      // was: this.products = data
      },
      error: (err) => {
        console.error('Failed to load products:', err);
      }
    });
  }

  handleAddToCart(product: Product) {
    this.cart.update(current => [...current, product]);
  }

  handleSearch(term: string) {
    console.log('User searched for:', term);
  }

}
