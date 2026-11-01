import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProductService } from './product.service';
import { Product, Review } from '../product';

describe('ProductService', () => {
  let service: ProductService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    service = TestBed.inject(ProductService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => httpMock.verify());

  it('should load products from the static fixture', () => {
    let result: Product[] | undefined;
    service.getProducts().subscribe(products => result = products);
    const request = httpMock.expectOne('assets/products.json');
    expect(request.request.method).toBe('GET');
    request.flush([]);
    expect(result).toEqual([]);
  });

  it('should add exactly one in-memory review, not persist to an API', () => {
    const product = { reviews: [] } as unknown as Product;
    const review: Review = {
      userName: 'Tester',
      email: 'tester@example.com',
      rating: 5,
      comment: 'Works',
    };
    let result: Product | undefined;
    service.updateProduct(product, review).subscribe(updated => result = updated);
    expect(product.reviews.length).toBe(1);
    expect(product.reviews[0]).toBe(review);
    expect(result).toBe(product);
    httpMock.expectNone('assets/products.json');
  });
});
