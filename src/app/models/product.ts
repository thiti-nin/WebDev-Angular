export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
  qty: number | any;

    constructor(id:number, name:string, description = '', price = 0, imageUrl = 'https://img.freepik.com/free-vector/404-error-web-page-cartoon-illustration_33099-705.jpg?w=740&t=st=1676798523~exp=1676799123~hmac=20f3360bd7a44ddfc6e0615745731eedfec3b8acf111bed26c7cff14e5253d81'){
        this.id = id
        this.name = name
        this.description = description
        this.price = price
        this.imageUrl = imageUrl
    }
}

