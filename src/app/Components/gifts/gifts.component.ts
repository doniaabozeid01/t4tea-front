import { Component } from '@angular/core';
interface TeaProduct {
  name: string;
  price: number;
  image: string;
}

@Component({
  selector: 'app-gifts',
  templateUrl: './gifts.component.html',
  styleUrls: ['./gifts.component.scss']
})
export class GiftsComponent {
  teaware: TeaProduct[] = [
    {
      name: 'Teaware | Tea Strainer with Handle',
      price: 374.31,
      image: '../../../assets/teaware/2 2.png'
    },
    {
      name: 'Teaware | TEA BASKET STRAINER',
      price: 29.43,
      image: '../../../assets/teaware/1 2.png'
    },
    {
      name: 'Summer Classic Blend',
      price: 44.00,
      image: '../../../assets/teaware/3 2.png'
    },
    {
      name: 'Summer Premium Blend',
      price: 49.94,
      image: '../../../assets/teaware/4 2.png'
    },
    {
      name: 'Black Tea (Ceramic Mug)',
      price: 39.90,
      image: '../../../assets/teaware/5 98.png'
    },
    {
      name: 'Summer Cold Brew Black Tea',
      price: 18.78,
      image: '../../../assets/teaware/6 1.png'
    },
    {
      name: 'Premium Cold Brew Filter Pack',
      price: 18.39,
      image: '../../../assets/teaware/7 1.png'
    }
  ];
}
