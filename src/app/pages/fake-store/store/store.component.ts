import { Component, OnInit } from '@angular/core';
import { Products } from './models/product.model';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
})
export class StoreComponent implements OnInit {
  products: Products = [];

  constructor(private readonly _productsService: ProductsService) {}

  ngOnInit(): void {
    this.products = this._productsService.getLocalProducts();
  }
}
