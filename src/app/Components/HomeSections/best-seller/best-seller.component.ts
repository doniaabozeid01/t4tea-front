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
      packImage: 'assets/bestSeller/pack1.png',
      looseImage: 'assets/bestSeller/loose1.png',
      hoverImage: 'assets/bestSeller/hover1.png'
    },
    {
      name: 'Emerald Dew',
      price: 399,
      packImage: 'assets/bestSeller/pack2.png',
      looseImage: 'assets/bestSeller/loose1.png',
      hoverImage: 'assets/bestSeller/hover1.png'
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
