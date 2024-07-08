import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private endpoint = 'https://fakestoreapi.com';

  constructor(private readonly httpClient: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    const url = `${this.endpoint}/products`;
    return this.httpClient.get<Product[]>(url);
  }

  addProduct(product: Product): Observable<Product> {
    const url = `${this.endpoint}/products`;
    return this.httpClient.post<Product>(url, product);
  }

  updateProduct(product: Product): Observable<Product> {
    const url = `${this.endpoint}/products/${product.id}`;
    return this.httpClient.put<Product>(url, product);
  }

  deleteProduct(id: number): Observable<Product> {
    const url = `${this.endpoint}/products/${id}`;
    return this.httpClient.delete<Product>(url);
  }
}
