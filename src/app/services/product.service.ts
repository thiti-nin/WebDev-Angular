import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { productsUrl } from '../config/api';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // products: Product[] = [
  //   new Product(1, 'Lego-man in a pea', 'This is the product 1 description. The product is really cool!', 20, "https://di.lnwfile.com/_/di/_raw/d1/gd/q8.jpg"),//pea
  //   new Product(2, 'Eeyore', 'This is the product 2 description. The product is really cool!', 25, "https://di.lnwfile.com/_/di/_raw/go/d7/1g.jpg"),//eeyore
  //   new Product(3, 'Hermione Granger', 'This is the product 3 description. The product is really cool!', 15, "https://di.lnwfile.com/_/di/_fit/250/250/t2/wr/id.jpg"), //Hermione
  //   new Product(4, 'Ron Weasley', 'This is the product 4 description. The product is really cool!', 22, "https://di.lnwfile.com/_/di/_fit/250/250/p5/aq/wr.jpg"),//Ron
  //   new Product(5, 'Thanos', 'This is the product 5 description. The product is really cool!', 17, "https://di.lnwfile.com/_/di/_raw/2a/dl/eq.jpg"),//Thanos
  //   new Product(6, 'Crayon Girl', 'This is the product 6 description. The product is really cool!', 12, "https://di.lnwfile.com/_/di/_raw/g1/x7/8a.jpg"),//Crayon Girl
  //   new Product(7, 'Anna', 'This is the product 7 description. The product is really cool!', 18, "https://di.lnwfile.com/_/di/_raw/bq/66/d7.jpg"),//Anna 
  //   new Product(8, 'Surprise', 'This is the product 8 description. The product is really cool!', 19),
    
  // ]

  constructor(private http: HttpClient) { }

  //Populate products from API and return an observable
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(productsUrl);
  }
}
