import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  products: Product[] = [] ;
  public reviews = [];

  tabs = ['Reviews', 'About', 'Details', 'Materials', 'Shipping'];
  selectedTab = 'Reviews';

  constructor (private renderer: Renderer2, private el: ElementRef, 
    private productService: ProductService) {
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => (this.products = products))
  }
  

  openPage(pageName: string) {
    const tabcontent = this.el.nativeElement.querySelectorAll('.tab-content');
    for (let i = 0; i < tabcontent.length; i++) {
      this.renderer.setStyle(tabcontent[i], 'display', 'none');
    }
    const page = this.el.nativeElement.querySelector(`#${pageName}`);
    this.renderer.setStyle(page, 'display', 'flex');
    this.selectedTab = pageName;
  }
}
