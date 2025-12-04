import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

interface TeaProduct {
  name: string;
  price: number;
  image: string;
  hoverImage: string;
}

interface TeaCategory {
  id: string;
  title: string;
  products: TeaProduct[];
}

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {

  categories: TeaCategory[] = [
    {
      id: 'green',
      title: 'GREEN TEA',
      products: [
        {
          name: 'First Blush',
          price: 374.31,
          image: 'assets/categories/First blush Tea 1.png',
          hoverImage: 'assets/categories/hover.png'
        },
        {
          name: 'Another Green Blend',
          price: 350,
          image: 'assets/categories/First blush Tea 1.png',
          hoverImage: 'assets/categories/hover.png'
        },
        {
          name: 'Emerald Dew',
          price: 390,
          image: 'assets/categories/First blush Tea 1.png',
          hoverImage: 'assets/categories/hover.png'
        },
        {
          name: 'Emerald Dew',
          price: 390,
          image: 'assets/categories/First blush Tea 1.png',
          hoverImage: 'assets/categories/hover.png'
        }
      ]
    },
    {
      id: 'black',
      title: 'BLACK TEA',
      products: [
        {
          name: 'Black Sunrise',
          price: 399.99,
          image: 'assets/categories/First blush Tea 1.png',
          hoverImage: 'assets/categories/hover.png'
        },
        {
          name: 'Smoky Black',
          price: 420,
          image: 'assets/categories/First blush Tea 1.png',
          hoverImage: 'assets/categories/hover.png'
        },
        {
          name: 'Forest Ember',
          price: 410,
          image: 'assets/categories/First blush Tea 1.png',
          hoverImage: 'assets/categories/hover.png'
        }
      ]
    },
    {
      id: 'specialty',
      title: 'SPECIALTY TEA',
      products: [
        {
          name: 'Golden Blossom',
          price: 450,
          image: 'assets/categories/First blush Tea 1.png',
          hoverImage: 'assets/categories/hover.png'
        },
        {
          name: 'Ruby Mist',
          price: 480,
          image: 'assets/categories/First blush Tea 1.png',
          hoverImage: 'assets/categories/hover.png'
        },
        {
          name: 'Jasmine Grove',
          price: 280,
          image: 'assets/categories/First blush Tea 1.png',
          hoverImage: 'assets/categories/hover.png'
        }
      ]
    }
  ];

  selectedCategory: TeaCategory = this.categories[0];

  // إعدادات الـ Owl Carousel للمنتجات
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

  selectCategory(cat: TeaCategory) {
    this.selectedCategory = cat;
  }
  
}
