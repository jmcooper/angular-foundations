import { Component, signal, input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

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
  imports: [CurrencyPipe],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent {
  product = input.required<IProduct>();
  cart: number[] = [];
  inCart = signal(false);

  getImageUrl(product: IProduct): string {
    return `/images/robot-parts/${product.imageName}`;
  }

  addToCart(product: IProduct, event: MouseEvent): void {
    // Avoid duplicate adds for demo purposes
    if (!this.cart.includes(product.id)) {
      this.cart.push(product.id);
    }
    this.inCart.set(true);
    console.log(`Added ${product.name} to cart`, event);

    // Auto-hide notification after 2 seconds
    setTimeout(() => {
      this.inCart.set(false);
      // this.inCart.update(p => !p);
    }, 2000);
  }
}
