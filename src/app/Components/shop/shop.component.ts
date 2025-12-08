import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';


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
          image: '../../../assets/categories/First blush Tea 1.png',
          hoverImage: '../../../assets/categories/hover.png'
        },
        {
          name: 'First Blush',
          price: 374.31,
          image: '../../../assets/categories/First blush Tea 1.png',
          hoverImage: '../../../assets/categories/hover.png'
        },
        {
          name: 'First Blush',
          price: 374.31,
          image: '../../../assets/categories/First blush Tea 1.png',
          hoverImage: '../../../assets/categories/hover.png'
        },
        // كمّلي 9 برودكت أو اللي انتي عايزاه
      ]
    },
    {
      id: 'green-2',
      title: 'Black TEA',
      products: [
        {
          name: 'First Blush',
          price: 374.31,
          image: '../../../assets/categories/First blush Tea 1.png',
          hoverImage: '../../../assets/categories/hover.png'
        },
        {
          name: 'First Blush',
          price: 374.31,
          image: '../../../assets/categories/First blush Tea 1.png',
          hoverImage: '../../../assets/categories/hover.png'
        },
        {
          name: 'First Blush',
          price: 374.31,
          image: '../../../assets/categories/First blush Tea 1.png',
          hoverImage: '../../../assets/categories/hover.png'
        },]
    },
    {
      id: 'green-3',
      title: 'Harphaghfds TEA',
      products: [
        {
          name: 'First Blush',
          price: 374.31,
          image: '../../../assets/categories/First blush Tea 1.png',
          hoverImage: '../../../assets/categories/hover.png'
        },
        {
          name: 'First Blush',
          price: 374.31,
          image: '../../../assets/categories/First blush Tea 1.png',
          hoverImage: '../../../assets/categories/hover.png'
        },
        {
          name: 'First Blush',
          price: 374.31,
          image: '../../../assets/categories/First blush Tea 1.png',
          hoverImage: '../../../assets/categories/hover.png'
        },]
    }
  ];

  selectedCategory: TeaSection = this.sections[0];



  selectCategory(cat: TeaSection) {
    this.selectedCategory = cat;
  }


  teaCarouselOptions: OwlOptions = {
    loop: true,
    margin: 80,
    nav: false,
    dots: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    // navText: ['‹', '›'],
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      1200: { items: 3 }
    }
  };
}
