import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { wishlistUrl } from '../config/api';
import { map } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private http: HttpClient) { }

  getWishlist(){
    return this.http.get(wishlistUrl).pipe(
      map((result:any) =>{
        let productIds:any = []

        result.forEach((item: { id: any; }) => productIds.push(item.id))

        return productIds;
      })
    )
  }
  
  addWishlist(productId:any){
    return this.http.post(wishlistUrl, {id: productId})
  }

  removeWishlist(productId:any){
    return this.http.delete(wishlistUrl + '/' + productId)
  }
}
