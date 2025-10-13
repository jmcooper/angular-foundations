import { Component } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';

interface IProduct {
  id: number;
  description: string;
  name: string;
  imageName: string;
  category: string;
  price: number;
  discount: number;
}

@Component({
  selector: 'bot-product-details',
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent {
  product: IProduct;
  cart: number[] = [];
  inCart = false;

  constructor() {
    this.product = {
      id: 2,
      description:
        'A friendly robot head with two eyes and a smile -- great for domestic use.',
      name: 'Friendly Bot',
      imageName: 'head-friendly.png',
      category: 'Heads',
      price: 945.0,
      discount: 0.2,
    };
  }

  getImageUrl(product: IProduct): string {
    return `/images/robot-parts/${product.imageName}`;
  }

  addToCart(product: IProduct): void {
    this.cart.push(product.id);
    this.inCart = true;
    console.log(`Added ${this.product.name} to cart`);
  }
}
