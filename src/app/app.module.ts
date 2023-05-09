import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { SlickCarouselModule } from 'ngx-slick-carousel';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OurProductsComponent } from './components/our-products/our-products.component';
import { AddReviewComponent } from './components/add-review/add-review.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { ProductSectionComponent } from './components/product-section/product-section.component';
import { RateComponent } from './components/rate/rate.component';
import { SliderSectionComponent } from './components/slider-section/slider-section.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { LearnMoreIconsComponent } from './components/learn-more-icons/learn-more-icons.component';


@NgModule({
  declarations: [
    AppComponent,
    OurProductsComponent,
    AddReviewComponent,
    FooterComponent,
    HeaderComponent,
    MainComponent,
    ProductSectionComponent,
    RateComponent,
    SliderSectionComponent,
    TabsComponent,
    LearnMoreIconsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
