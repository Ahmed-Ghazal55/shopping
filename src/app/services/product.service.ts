import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Card } from '../product';
import { Product } from '../product';
import { Review } from '../product';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = "http://localhost:9000/products";
  private apiUrlCard = "http://localhost:9000/productcards";

  constructor(private http: HttpClient) {}

  getProductCards(): Observable<Card[]> {
    return this.http.get<Card[]>(this.apiUrlCard);
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  updateProduct(product: Product, review: Review): Observable<any> {
    const url = `${this.apiUrl}/${product.id}`;
    product.reviews.push(review);
    return this.http.put<Product>(url, product, httpOptions);
  }
  
}
