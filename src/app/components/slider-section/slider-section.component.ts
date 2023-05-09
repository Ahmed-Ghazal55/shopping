import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Card } from 'src/app/product';
import { ProductService } from 'src/app/services/product.service';

import * as $ from 'jquery';
import 'slick-carousel';
import 'slick-carousel/slick/slick.js';

@Component({
  selector: 'app-slider-section',
  templateUrl: './slider-section.component.html',
  styleUrls: ['./slider-section.component.css']
})
export class SliderSectionComponent implements OnInit, AfterViewInit {

  @ViewChild('slickCarousel') slickCarousel!: ElementRef;

  cards: Card[] = [];

  slideConfig = {
    dots: false,
    infinite: false,
    speed: 300,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-left"><i class="fa fa-angle-left"></i></button>',
    nextArrow: '<button type="button" class="slick-right"><i class="fa fa-angle-right"></i></button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  constructor(private cardService: ProductService) { };

  ngOnInit(): void {
    this.cardService.getProductCards().subscribe((cards) => (this.cards = cards));
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called');
    $(this.slickCarousel.nativeElement).slick();
  }
}