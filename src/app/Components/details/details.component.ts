import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
interface BrewInfo {
  label: string;
  description: string;
  icon: string; // مسار الأيقونة
}
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {



  quantity = 1;

  product = {
    name: 'First Blush',
    type: 'GREEN TEA',
    weight: '100 g',
    images: [
      'assets/bestSeller/First blush Tea 1.png',
      'assets/bestSeller/hover.png',
      'assets/bestSeller/6 (2) 2.png',
    ],

    ingredientsText: 'Green Tea, Moroccan Mint, Lemon',
    tastingNotes: `
      Picture summer evenings with Moroccan Mint, a hint of lemon zest, and
      delicate green tea leaves gently rolled together. First Blush is a
      refreshing, bright and uplifting blend that wakes your senses without
      overwhelming them.

      Light-bodied and smooth, this tea carries a crisp minty aroma balanced by
      citrus notes and a soft vegetal finish. Ideal for slow mornings, cozy
      afternoons, or as a calming evening ritual.
    `
  };

  // ممكن تستبدلي paths بتاعة الأيقونات
  brewInfo: BrewInfo[] = [
    {
      label: '1 tsp (2.5g)',
      description: 'per person',
      icon: '../../../assets/tahdeer/Group (5).png'
    },
    {
      label: '350ml water',
      description: 'per person',
      icon: '../../../assets/tahdeer/Group (3).png'
    },
    {
      label: '3–5 minutes',
      description: 'Brew time',
      icon: '../../../assets/tahdeer/Group (4).png'
    }
  ];

  increase() {
    this.quantity++;
  }

  decrease() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  addToCart() {
    // هنا هيبقى منطق إضافة المنتج للسلة
    console.log('Add to cart', this.quantity);
  }

  buyNow() {
    // هنا منطق الشراء المباشر
    console.log('Buy now', this.quantity);
  }



  teaDetailsOptions: OwlOptions = {
    loop: true,
    margin: 80,
    nav: false,
    dots: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    items:1
  };


}
