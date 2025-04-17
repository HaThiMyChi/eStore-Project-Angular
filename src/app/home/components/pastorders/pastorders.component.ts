import { Component, OnInit, OnDestroy } from '@angular/core';
import { Order, PastOrder, PastOrderProduct } from '../../types/order.type';
import { OrderService } from '../../services/order/order.service';
import { UserService } from '../../services/users/user-service.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-pastorders',
  templateUrl: './pastorders.component.html',
  styleUrls: ['./pastorders.component.scss']
})
export class PastordersComponent implements OnInit, OnDestroy {
  pastOrderProducts: PastOrderProduct[] = [];
  pastOrder: PastOrder;
  pastOrders: PastOrder[] = [];
  subscriptions: Subscription = new Subscription();

  // pastOrderProducts: PastOrderProduct[] = [
  //   {
  //     amount: 100,
  //     price: 50,
  //     productId: 1,
  //     productImage: 'shop-1.jpg',
  //     productName: 'Jacket',
  //     qty: 2,
  //   }
  // ];

  // pastOrder: PastOrder = {
  //   address: 'Address goes here',
  //   city: 'New Jersey',
  //   orderDate: '03/01/21',
  //   pin: '12345',
  //   state: 'NY',
  //   total: 100,
  //   userName: 'Thomas Brown'
  // };

  constructor(private orderService: OrderService, private userService: UserService) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.orderService.getOrders(this.userService.loggedInUser.email).subscribe(
        (pastOrders) => {
          this.pastOrders = pastOrders;
        }
      )
    )
  }

  selectOrder(event: any): void {
    if (Number.parseInt(event.target.value) > 0) {
      this.pastOrder = this.pastOrders.filter(
        (order) => order.orderId === Number.parseInt(event.target.value)
      )[0];
    } else {
      this.pastOrder = <any>undefined;
      this.pastOrderProducts = [];
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
