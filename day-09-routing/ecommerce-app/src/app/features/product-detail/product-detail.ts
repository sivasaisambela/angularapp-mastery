import { ProductService } from './../../core/productservice';
import { routes } from './../../app.routes';
import { ActivatedRoute } from '@angular/router';
import { Product } from './../../models/product.model';
import { Component,OnInit,signal } from '@angular/core';


@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.scss',
})
export class ProductDetail implements OnInit{

  product = signal<Product | undefined>(undefined);

   constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.productService.getProducts().subscribe({
      next: (data) => {
        const found = data.find(p => p.id === id);
        this.product.set(found);
      },
      error: (err) => {
        console.error('Failed to load product:', err);
      }
    });
  }

}
