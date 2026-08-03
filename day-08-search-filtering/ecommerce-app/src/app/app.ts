import { Component, computed, OnInit, signal } from '@angular/core';
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

   allProducts = signal<Product[]>([]);   // Step: renamed from "products"
     searchTerm = signal<string>('');       // Step 2: new signal, starts empty
 //products = signal<Product[]>([]);   // was: products: Product[] = []
  cart = signal<Product[]>([]);

   // Step 3: computed() — this is a FORMULA, not a stored value.
  // Angular tracks that it reads allProducts() and searchTerm(),
  // and automatically reruns this function whenever either changes.
  filteredProducts= computed(()=>{
    const term= this.searchTerm().toLowerCase().trim();
    const all = this.allProducts();

    if(!term){
      return all;
    }

    return all.filter(x=>
      x.title.toLowerCase().includes(term)
    );
  });

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.allProducts.set(data);      // was: this.products = data
      },
      error: (err) => {
        console.error('Failed to load products:', err);
      }
    });
  }

  handleAddToCart(product: Product) {
    this.cart.update(current => [...current, product]);
  }

   // Step 2: only updates searchTerm — never touches products directly
  handleSearch(term: string) {
     this.searchTerm.set(term);
    console.log('User searched for:', term);
  }

}
