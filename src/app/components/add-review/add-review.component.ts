import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/product';
import { Review } from './../../product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css'],
})
export class AddReviewComponent implements OnInit {
  @Input() products: Product[] = [];
  review: Review = {
    userName: '',
    email: '',
    rating: 5,
    comment: '',
  };
  reviews: Review[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService
      .getProducts()
      .subscribe((product) => (this.products = product));
  }

  addReviewToProduct(product: Product, review: Review) {
    const newReview: Review = {
      id: 0,
      userId: 0,
      userName: review.userName,
      userImage: '',
      date: new Date().toISOString(),
      rating: review.rating,
      comment: review.comment,
      email: review.email,
    };
    product.reviews.push(newReview);
    this.productService.updateProduct(product, newReview).subscribe(() => {
      console.log('Product updated successfully!');
      // Clear the input fields and refresh the reviews
      this.review = {
        userName: '',
        email: '',
        rating: 5,
        comment: '',
      };
      this.productService.getProducts().subscribe((products) => (this.products = products));
    });
  }

}