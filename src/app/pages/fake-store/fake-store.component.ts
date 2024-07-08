import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-fake-store',
  templateUrl: './fake-store.component.html',
  styleUrls: ['./fake-store.component.scss'],
})
export class FakeStoreComponent implements OnInit {
  addedProduct: Product = {} as Product;

  constructor(private readonly productService: ProductsService) {}
  
  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((products) => {
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
