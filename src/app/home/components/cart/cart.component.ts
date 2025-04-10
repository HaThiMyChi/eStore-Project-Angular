import { Component } from '@angular/core';
import { CartStoreItem } from '../../services/cart/cart.storeItem';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { CartItem } from '../../types/cart.type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  faTrash = faTrash;
  constructor(public cartStore: CartStoreItem, private router: Router) {}

  navigateToHome(): void{
    this.router.navigate(['home/products'])
  }

  updateQuantity($event: any, cartItem: CartItem): void {
  }

  removeItem(cartItem: CartItem) : void {
    
  }

}
