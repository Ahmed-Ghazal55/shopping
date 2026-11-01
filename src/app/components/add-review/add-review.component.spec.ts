import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { AddReviewComponent } from './add-review.component';
import { ProductService } from '../../services/product.service';
import { Product } from '../../product';

describe('AddReviewComponent', () => {
  let component: AddReviewComponent;
  let fixture: ComponentFixture<AddReviewComponent>;
  let service: jasmine.SpyObj<ProductService>;

  beforeEach(async () => {
    service = jasmine.createSpyObj<ProductService>('ProductService', ['getProducts', 'updateProduct']);
    service.getProducts.and.returnValue(of([]));
    await TestBed.configureTestingModule({
      declarations: [AddReviewComponent],
      imports: [FormsModule],
      providers: [{ provide: ProductService, useValue: service }]
    }).compileComponents();
    fixture = TestBed.createComponent(AddReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create and load products', () => {
    expect(component).toBeTruthy();
    expect(service.getProducts).toHaveBeenCalledTimes(1);
  });

  it('should submit a numeric rating only once and reset inputs', () => {
    const product = { reviews: [] } as unknown as Product;
    service.updateProduct.and.callFake((target, review) => {
      target.reviews.push(review);
      return of(target);
    });
    component.review = {
      userName: 'A7med', email: 'test@example.com', rating: 4, comment: 'Good'
    };
    component.addReviewToProduct(product, component.review);
    expect(service.updateProduct).toHaveBeenCalledTimes(1);
    expect(product.reviews.length).toBe(1);
    expect(product.reviews[0].rating).toBe(4);
    expect(component.review.comment).toBe('');
  });

  it('should reject invalid review data before calling the service', () => {
    const product = { reviews: [] } as unknown as Product;
    component.addReviewToProduct(product, {
      userName: ' ', email: 'invalid', rating: 6, comment: ' '
    });
    expect(service.updateProduct).not.toHaveBeenCalled();
    expect(product.reviews.length).toBe(0);
  });
});
