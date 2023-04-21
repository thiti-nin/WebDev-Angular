import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  
  cartItems:Product[] =[]
  cartTotal = 0

  constructor(private msg: MessengerService, private cartService: CartService){ }

  ngOnInit(): void {
    this.handleSubscription();
    this.loadCartItems();
  }

  handleSubscription(){
    this.msg.getMsg().subscribe((product:Product | any)=>{
      this.loadCartItems()
   
    })
  }

  loadCartItems(){
    this.cartService.getCartItem().subscribe((items: CartItem[] | any) => {
    this.cartItems = items
    this.calcCartTotal();
      // console.log(items)
    })
  }

  // addProductToCart(product: Product){

  //   let productExists = false

  //     for(let i in this.cartItems){
  //     if(this.cartItems[i].id === product.id){

  //       this.cartItems[i].qty++
  //       productExists = true
  //       break;
  //     }
  //   }

  //   if(!productExists){
  //     this.cartItems.push({
  //             id: product.id,
  //             name: product.name,
  //             description: '',
  //             price: product.price,
  //             imageUrl: '',
  //             qty: 1
  //         })
  //   }
  //   this.calcCartTotal();
  // }

  calcCartTotal(){
    this.cartTotal = 0
    this.cartItems.forEach(item =>{
      this.cartTotal += (item.qty * item.price)
    })
  }

}
