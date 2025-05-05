import { Component, OnInit, ViewChild } from '@angular/core';
import { Card } from 'src/app/product';
import { ProductService } from 'src/app/services/product.service';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
// Import the component type

@Component({
  selector: 'app-slider-section',
  templateUrl: './slider-section.component.html',
  styleUrls: ['./slider-section.component.css'],
})
export class SliderSectionComponent implements OnInit {
  @ViewChild('slickModal') slickCarousel!: SlickCarouselComponent; // Use SlickCarouselComponent type

  cards: Card[] = [];

  isLoading: boolean = true; // Flag for loading state
  fetchError: boolean = false; // Flag for fetch error state


  slideConfig = {
    dots: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    centerMode: false,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    pauseOnFocus: true,
     // prevArrow: '<button type="button" class="slick-left"><i class="fa fa-angle-left"></i></button>',
    // nextArrow: '<button type="button" class="slick-right"><i class="fa fa-angle-right"></i></button>',
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
  constructor(private cardService: ProductService) {}

  ngOnInit(): void {
    this.isLoading = true; // Start loading
    this.fetchError = false; // Reset error state
    this.cardService.getProductCards().subscribe({
      next: (cards) => {
        this.cards = cards;
      },
      error: (err) => {
        this.fetchError = true; // Set error flag on error
        console.error('Error fetching product cards:', err);
      },
      complete: () => {
        this.isLoading = false; // Stop loading when request completes (success or error)
      },
    });
  }

  nextSlide() {
    if (this.slickCarousel) {
      this.slickCarousel.slickNext();
    }
  }

  prevSlide() {
    if (this.slickCarousel) {
      this.slickCarousel.slickPrev();
    }
  }

  // ngAfterViewInit and ngOnDestroy might not be needed if ngx-slick-carousel handles its lifecycle
  // private initializeSlick method is removed as initialization is handled by ngx-slick-carousel
 // private initializeSlick method is removed as initialization is handled by ngx-slick-carousel
 }
