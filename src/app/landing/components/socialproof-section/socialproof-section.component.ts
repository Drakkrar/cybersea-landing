import { AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';


@Component({
  selector: 'landing-socialproof-section',
  standalone: true,
  imports: [],
  templateUrl: './socialproof-section.component.html',
  styleUrl: './socialproof-section.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SocialproofSectionComponent implements AfterViewInit, OnDestroy {
  private swiper: Swiper | undefined;

  testimonials = [
    { text: 'Great product! Highly recommended.', author: 'Jane Doe', position: 'CEO' },
    { text: 'Excellent service and support.', author: 'John Smith', position: 'CTO' },
    { text: 'Transformed our business workflows.', author: 'Alice Johnson', position: 'Director' }
  ];

  ngAfterViewInit(): void {
    this.initSwiper();
  }

  private initSwiper(): void {
    this.swiper = new Swiper('#testimonial-swiper', {
      modules: [Navigation, Pagination, Autoplay],
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.testimonials-button-next',
        prevEl: '.testimonials-button-prev',
      },
    });
  }

  ngOnDestroy(): void {
    if (this.swiper) {
      this.swiper.destroy();
    }
  }
}
