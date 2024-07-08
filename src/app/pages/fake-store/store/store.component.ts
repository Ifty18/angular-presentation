import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
})
export class StoreComponent implements OnInit {
  addedProduct: Product = {} as Product;
  products: Product[] = [];

  constructor(private readonly productService: ProductsService) {}
  
  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((products) => {
      this.products = products;
      console.log(products);
    });
  }

  addNewProduct(): void {
    this.productService
      .addProduct({
        id: 2,
        title: 'T-shirt',
        price: '10',
        description: 'This is a t-shirt',
        category: 'clothing',
        image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
      })
      .subscribe((response) => (this.addedProduct = response));
  }
}
