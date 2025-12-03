import { Component } from '@angular/core';


interface TeaProduct {
  name: string;
  price: number;
  image: string;
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
          image: 'assets/categories/First blush Tea 1.png'
        },
        {
          name: 'Another Green Blend',
          price: 350,
          image: 'assets/categories/First blush Tea 3.png'
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
          image: 'assets/categories/First blush Tea 3.png'
        },
        {
          name: 'Smoky Black',
          price: 420,
          image: 'assets/categories/First blush Tea 1.png'
        },
        {
          name: 'Smoky Black',
          price: 420,
          image: 'assets/categories/First blush Tea 1.png'
        }
      ]
    },
    {
      id: 'specialty',
      title: 'SPECIALTY TEA',
      products: [
        {
          name: 'Special Blend 1',
          price: 450,
          image: 'assets/categories/First blush Tea 1.png'
        },
        {
          name: 'Special Blend 2',
          price: 480,
          image: 'assets/categories/First blush Tea 3.png'
        },
                {
          name: 'Special Blend 3',
          price: 280,
          image: 'assets/categories/First blush Tea 3.png'
        }
      ]
    }
  ];

  selectedCategory: TeaCategory = this.categories[0];

  selectCategory(cat: TeaCategory) {
    this.selectedCategory = cat;
  }


}
