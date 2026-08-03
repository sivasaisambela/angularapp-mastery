import { CommonModule } from '@angular/common';
import { Product } from './../../models/product.model';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-product-list',
  imports: [CommonModule,FormsModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductList {

  @Input() products: Product[]=[];

  @Output() addToCart = new EventEmitter<Product>();

  onAddToCart(product:Product){
    this.addToCart.emit(product);
  }

  trackByProductId(index:number,product:Product):number{
    return product.id;
  }

}
