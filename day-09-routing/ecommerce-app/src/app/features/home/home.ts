import { Product } from './../../models/product.model';
import { Component, computed, OnInit, signal } from '@angular/core';
import { SearchBar } from '../../shared/search-bar/search-bar';
import { ProductList } from '../product-list/product-list';
import { ProductService } from '../../core/productservice';

@Component({
  selector: 'app-home',
  imports: [ProductList,SearchBar],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {

  allProducts= signal<Product[]>([]);
  searchTerm= signal<string>('');
  cart = signal<Product[]>([]);
  
  filteredProducts = computed(()=>{
    const term= this.searchTerm().toLowerCase().trim();
    const all= this.allProducts();
    if(!term){
      return all;
    }
    return all.filter(x=>x.title.toLowerCase().includes(term));
  });

  constructor(private productService:ProductService){

  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next:(data)=>{
        this.allProducts.set(data);
      },
      error:(err)=>{
        console.error('Failed to load products:',err);
      }
    });
  }

  handleAddToCart(product:Product){
    this.cart.update(currnet=>[...currnet,product]);
  }

  handleSearch(term:string){
    this.searchTerm.set(term);
  }


}
