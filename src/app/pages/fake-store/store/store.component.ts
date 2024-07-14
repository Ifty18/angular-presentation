import { Component, OnInit } from '@angular/core';
import { filter, Observable, Observer } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from './services/products.service';

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

  filterProducts(): void {
    console.log("not implemented yet ¯\\_(ツ)_/¯")

    // const customFilterObservable = new Observable((observer:Observer<Product>) => {
    //   // write your code here
    // })

    // this might be useful if you decide on sending the products one by one
    // let auxProducts:Product[] = [];

    //use the structure below to filter the products
    // customFilterObservable
    //   .pipe(filter( () => {
       
    //   }))
    //   .subscribe({
       
    //   });
  }
}
