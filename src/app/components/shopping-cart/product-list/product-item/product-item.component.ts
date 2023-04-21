import { Component , OnInit, Input} from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';
import { CartService } from 'src/app/services/cart.service';
import { WishlistService } from 'src/app/services/wishlist.service';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent  implements OnInit{

  @Input() productItem: Product | any
  @Input() addedToWishList: boolean | any;

  constructor(
    private msg: MessengerService,
    private cartService: CartService,
    private wishlistService: WishlistService) { }

  ngOnInit(): void {
    
  }

  handleAddtoCart(){
    this.cartService.addProductToCart(this.productItem).subscribe(() =>{
      this.msg.sendMsg(this.productItem)
    })
  }

  handleAddtoWishlist(){
    this.wishlistService.addWishlist(this.productItem.id).subscribe(() =>{
      this.addedToWishList = true;
    })
  }

  handleRemovefromWishlist(){
    this.wishlistService.removeWishlist(this.productItem.id).subscribe(() =>{
      this.addedToWishList = false;
    })

  }

}
