import { Component, OnInit, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { MessengerService } from 'src/app/services/messenger.service';
import { CartComponent } from '../cart.component';



@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit{

  @Input() cartItem: any


  constructor(private msg: MessengerService, private cartService:CartService, private cartComp: CartComponent){ }

  ngOnInit(): void {
    
  }

  handleAddtoCart(){
    this.cartService.addProductToCart(this.cartItem).subscribe(() =>{
      this.msg.sendMsg(this.cartItem)
    })
  }

  handlePopCart(){
    this.cartService.popProductInCart(this.cartItem,false).subscribe(() => {
      this.msg.sendMsg(this.cartItem)
    })
  }

  DeleteThis(){
    this.cartService.popProductInCart(this.cartItem, true).subscribe(() => {
      this.msg.sendMsg(this.cartItem)
      this.cartComp.loadCartItems();
    })
  }

}
