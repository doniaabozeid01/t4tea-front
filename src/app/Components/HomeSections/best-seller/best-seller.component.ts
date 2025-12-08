import { Component } from '@angular/core';

interface BestSellerProduct {
  name: string;
  price: number;
  packImage: string;
  looseImage: string;
  hoverImage: string;
}

@Component({
  selector: 'app-best-seller',
  templateUrl: './best-seller.component.html',
  styleUrls: ['./best-seller.component.scss'],
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
      price: 399,
      packImage: '../../../../assets/bestSeller/6 (2) 2.png',
      looseImage: '../../../../assets/bestSeller/First blush Tea 1.png',
      hoverImage: '../../../../assets/bestSeller/hover.png'
    }
  ];

  carouselOptions = {
    loop: true,
    margin: 40,
    dots: true,
    nav: false,
    // navText: ['‹','›'],
    items: 1,
    autoplay: false
  };
}
