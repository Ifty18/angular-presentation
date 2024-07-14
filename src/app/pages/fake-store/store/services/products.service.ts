import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { Products } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products: Products = [];

  private endpoint = 'https://fakestoreapi.com';

  constructor(private readonly httpClient: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    const url = `${this.endpoint}/products`;
    return this.httpClient.get<Product[]>(url);
  }

  getLocalProducts(): Products {
    return this.products;
  }
}
