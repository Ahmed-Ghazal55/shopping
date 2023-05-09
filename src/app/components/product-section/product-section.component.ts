import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-section',
  templateUrl: './product-section.component.html',
  styleUrls: ['./product-section.component.css']
})
export class ProductSectionComponent implements OnInit {

  @Input() "products": Product[] = [];
  

  constructor(private productSerice: ProductService) {}

  ngOnInit(): void {
    this.productSerice.getProducts().subscribe((products) => (this.products = products))
  }

  public tabGallery(event: Event): void {
    const img = event.target as HTMLImageElement;
    const expandImg = document.getElementById("expandedImg") as HTMLImageElement;
    expandImg.src = img.src;
    if (expandImg.parentElement) {
      expandImg.parentElement.style.display = "block";
    }
  }

  

}