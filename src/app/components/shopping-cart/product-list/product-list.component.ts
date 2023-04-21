import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Product[] = []
  wishlist: number[] = []

  constructor(private productService: ProductService,
    private wishlistService: WishlistService) { }

  ngOnInit() {
    this.loadProducts()
    this.loadWishList();
  }

  loadProducts(){
    this.productService.getProducts().subscribe((products) => {
      this.productList = products
    })
  }

  loadWishList(){
    this.wishlistService.getWishlist().subscribe(productIds =>{
      console.log(productIds)
      this.wishlist = productIds
    })
  }

}
