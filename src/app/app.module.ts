import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { CategoriesComponent } from './Components/HomeSections/categories/categories.component';
import { StoryComponent } from './Components/HomeSections/story/story.component';
import { ProcessComponent } from './Components/HomeSections/process/process.component';
import { TeawareComponent } from './Components/HomeSections/teaware/teaware.component';
import { HeroComponent } from './Components/HomeSections/hero/hero.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { PendingComponent } from './Components/pending/pending.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BestSellerComponent } from './Components/HomeSections/best-seller/best-seller.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShopComponent } from './Components/shop/shop.component'; // ✅ مهم
import { CommonModule } from '@angular/common';
import { GiftsComponent } from './Components/gifts/gifts.component';
import { TeawarePageComponent } from './Components/teaware-page/teaware-page.component';
import { AboutComponent } from './Components/about/about.component';
import { DetailsComponent } from './Components/details/details.component';
import { LoginComponent } from './Components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoriesComponent,
    StoryComponent,
    ProcessComponent,
    TeawareComponent,
    HeroComponent,
    NavbarComponent,
    FooterComponent,
    PendingComponent,
    BestSellerComponent,
    ShopComponent,
    GiftsComponent,
    TeawarePageComponent,
    AboutComponent,
    DetailsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
