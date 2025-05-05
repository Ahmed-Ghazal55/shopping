import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Card } from '../product';
import { Product } from '../product';
import { Review } from '../product';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  // Update the API URLs to point to the local JSON files in the assets folder
  private apiUrl = 'assets/products.json';
  private apiUrlCard = 'assets/productscards.json';

  constructor(private http: HttpClient) {}

  getProductCards(): Observable<Card[]> {
    return this.http.get<Card[]>(this.apiUrlCard);
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  // The updateProduct method will need to be adjusted as we are no longer
  // persisting changes to a backend. For a static JSON file, updates are not
  // typically possible in this manner. You might need a different strategy
  // for handling reviews if they need to be persistent across sessions.
  // For now, we will keep the method signature but note that it won't
  // actually update a backend store.
  updateProduct(product: Product, review: Review): Observable<any> {
    // Since we are using static JSON files, we cannot persist the review
    // to a backend. We can add the review to the local product object
    // for immediate display, but it won't be saved.
    product.reviews.push(review);
    // Return an observable of the updated product (locally)
    return of(product);
  }
}
