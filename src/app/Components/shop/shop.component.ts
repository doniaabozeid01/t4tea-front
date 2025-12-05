import { Component } from '@angular/core';


interface TeaProduct {
  name: string;
  price: number;
  image: string;      // الصورة العادية
  hoverImage: string; // صورة الهوفر
}

interface TeaSection {
  id: string;
  title: string;
  products: TeaProduct[];
}


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent {

  sections: TeaSection[] = [
    {
      id: 'green',
      title: 'GREEN TEA',
      products: [
        {
          name: 'First Blush',
          price: 374.31,
          image: '../../../assets/hero/1.jpg',
          hoverImage: '../../../assets/categories/First blush Tea 3.png'
        },
        {
          name: 'First Blush',
          price: 374.31,
          image: '../../../assets/hero/1.jpg',
          hoverImage: '../../../assets/categories/First blush Tea 3.png'
        },
        {
          name: 'First Blush',
          price: 374.31,
          image: '../../../assets/hero/1.jpg',
          hoverImage: '../../../assets/categories/First blush Tea 3.png'
        },
        // كمّلي 9 برودكت أو اللي انتي عايزاه
      ]
    },
    {
      id: 'green-2',
      title: 'GREEN TEA',
      products: [
        {
          name: 'First Blush',
          price: 374.31,
          image: '../../../assets/hero/1.jpg',
          hoverImage: '../../../assets/categories/First blush Tea 3.png'
        },
        {
          name: 'First Blush',
          price: 374.31,
          image: '../../../assets/hero/1.jpg',
          hoverImage: '../../../assets/categories/First blush Tea 3.png'
        },
        {
          name: 'First Blush',
          price: 374.31,
          image: '../../../assets/hero/1.jpg',
          hoverImage: '../../../assets/categories/First blush Tea 3.png'
        },]
    },
    {
      id: 'green-3',
      title: 'GREEN TEA',
      products: [
        {
          name: 'First Blush',
          price: 374.31,
          image: '../../../assets/hero/1.jpg',
          hoverImage: '../../../assets/categories/First blush Tea 3.png'
        },
        {
          name: 'First Blush',
          price: 374.31,
          image: '../../../assets/hero/1.jpg',
          hoverImage: '../../../assets/categories/First blush Tea 3.png'
        },
        {
          name: 'First Blush',
          price: 374.31,
          image: '../../../assets/hero/1.jpg',
          hoverImage: '../../../assets/categories/First blush Tea 3.png'
        },]
    }
  ];
}
