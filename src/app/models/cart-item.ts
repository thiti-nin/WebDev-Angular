import { Product } from "./product";

export class CartItem {

    id: number;
    name: string;
    qty: number;
    price: number;

    constructor(id: number, product: Product, qty = 1){
        this.id = product.id
        this.name = product.name
        this.price = product.price
        this.qty = qty;
    }

}
