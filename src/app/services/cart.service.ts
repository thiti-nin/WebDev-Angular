import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs'
import { cartUrl } from '../config/api';
import { CartItem } from '../models/cart-item';
import { Product } from '../models/product';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }

  getCartItem(): Observable<CartItem[]> {
    //TODO: Mapping the obtained result to our Cartitem property(pipe() and map())
    return this.http.get<CartItem[]>(cartUrl).pipe(
      map((result:any[]) =>{
        let cartItems: CartItem[] =[];

        for(let item of result){
          let productExists = false

        for(let i in cartItems){
        if(cartItems[i].id === item.product.id){
  
          cartItems[i].qty++
          productExists = true
          break;
        }
      }
  
      if(!productExists){
        cartItems.push(new CartItem(item.id,item.product))
      }
        }

        
        return cartItems; 
      })
    )

  }

  addProductToCart(product: Product): Observable<any>{
    return this.http.post(cartUrl, {product})
  }

  popProductInCart(product: Product, all:boolean): Observable<CartItem[]>{

    return this.http.get<CartItem[]> (cartUrl).pipe(
      map((result:any[]) =>{
        let cartItems: CartItem[] = [];

        for(let item of result){
          if(product.id === item.product.id){
            console.log(cartUrl + `/${item.id}`)
            this.http.delete(cartUrl + `/${item.id}`).subscribe((ok) =>{
              console.log(ok)
            })
            if(!all){
            break;
          }
          }

        }
        return cartItems
      })
    )
    
  }
}
