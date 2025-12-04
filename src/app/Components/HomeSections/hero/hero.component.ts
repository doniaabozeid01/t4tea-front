import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  heroOptions: OwlOptions = {
    loop: true,
    dots: true,
    nav: false,
    // navText: ['‹', '›'],
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    items: 1,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true
  };

  slides = [
    {
      type: 'image',
      src: '../../../../assets/hero/1.jpg',
      alt: 'Tea 1'
    },
    {
      type: 'image',
      src: '../../../../assets/hero/2.jpg',
      alt: 'Tea 2'
    },
    {
      type: 'image',
      src: '../../../../assets/hero/3.jpg',
      alt: 'Hero Video'
    },
    {
      type: 'video',
      src: '../../../../assets/hero/From KlickPin CF Wallpaper Chill Full HD 4k in 2025 _ Relax Beautiful night sky Chinese meditation.mp4',
      alt: 'Tea 3'
    }
  ];
}
