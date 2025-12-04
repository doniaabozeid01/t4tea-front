import { Component } from '@angular/core';

interface BestSellerProduct {
  name: string;
  price: number;
  packImage: string;   // صورة العلبة
  looseImage: string;  // صورة الشاي نفسه
  hoverImage: string;
}

@Component({
  selector: 'app-best-seller',
  templateUrl: './best-seller.component.html',
  styleUrls: ['./best-seller.component.scss']
})
export class BestSellerComponent {
  products: BestSellerProduct[] = [
    {
      name: 'First Blush',
      price: 374.31,
      packImage: '../../../../assets/bestSeller/6 (2) 2.png',
      looseImage: '../../../../assets/bestSeller/First blush Tea 1.png',
      hoverImage: '../../../../assets/bestSeller/hover.png'
    },
    {
      name: 'Emerald Dew',
      price: 399.0,
      packImage: '../../../../assets/bestSeller/6 (2) 2.png',
      looseImage: '../../../../assets/bestSeller/First blush Tea 1.png',
      hoverImage: '../../../../assets/bestSeller/hover.png'
    },
  ];

  currentIndex = 0;
  isPackHovered = false;

  get currentProduct(): BestSellerProduct {
    return this.products[this.currentIndex];
  }

  prevProduct() {
    this.currentIndex =
      (this.currentIndex - 1 + this.products.length) % this.products.length;
    this.isPackHovered = false; // عشان كل سلايد يبدأ من غير هوفر
  }

  nextProduct() {
    this.currentIndex =
      (this.currentIndex + 1) % this.products.length;
    this.isPackHovered = false;
  }
}
