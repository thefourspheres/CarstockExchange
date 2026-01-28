import { CommonModule, NgClass, NgFor } from '@angular/common';
import { Component, inject, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CarCardComponent } from '../../components/car-card/car-card.component';
import { FilterBarComponent } from '../../components/filter-bar/filter-bar.component';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [
    SlickCarouselModule,
    NgFor,
    NgClass,
    FormsModule,
    CarCardComponent,
    FilterBarComponent,
  ],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
})
export class HeroSectionComponent {
  router = inject(Router);
  selectedMode: 'buy' | 'sell' = 'buy';
  images = [
    'assets/hero/img1.png',
    'assets/hero/img2.png',
    'assets/hero/img3.png',
  ];

  currentIndex = 0;

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    infinite: true,
    fade: true,
    arrows: false,
    speed: 900,
    cssEase: 'ease-in-out',
    pauseOnHover: true,
  };

  // Slick event → every slide update
  onAfterChange(event: any) {
    this.currentIndex = event.currentSlide;
  }

  // Previous image index
  get prevImage() {
    return this.images[
      (this.currentIndex - 1 + this.images.length) % this.images.length
    ];
  }

  // Next image index
  get nextImage() {
    return this.images[(this.currentIndex + 1) % this.images.length];
  }

  brands = [
    { name: 'Maruti Suzuki', logo: 'assets/common/carlogo/MS.svg' },
    { name: 'Mahindra', logo: 'assets/common/carlogo/Mahindra.svg' },
    { name: 'Renault', logo: 'assets/common/carlogo/Renault.svg' },
    { name: 'Skoda', logo: 'assets/common/carlogo/Skoda.svg' },
    { name: 'Hyundai', logo: 'assets/common/carlogo/Toyota.svg' },
    { name: 'Volkswagen', logo: 'assets/common/carlogo/VW.svg' },
    { name: 'Ford', logo: 'assets/common/carlogo/ford.svg' },
    { name: 'Honda', logo: 'assets/common/carlogo/Honda.svg' },
    { name: 'KIA', logo: 'assets/common/carlogo/Kia.svg' },
  ];
  setMode(mode: 'buy' | 'sell') {
    this.selectedMode = mode;
  }

  cars = [
    {
      name: 'Skoda Slavia (2022)',
      price: '₹ 12.99 Lakh',
      owner: '1st Owner',
      fuel: 'Petrol',
      km: '24000',
      image: 'assets/car1.png',
    },
    {
      name: 'Skoda Slavia (2023)',
      price: '₹ 12.99 Lakh',
      owner: '1st Owner',
      fuel: 'Petrol',
      km: '24000',
      image: 'assets/car1.png',
    },
    {
      name: 'Skoda Slavia (2024)',
      price: '₹ 12.99 Lakh',
      owner: '1st Owner',
      fuel: 'Petrol',
      km: '24000',
      image: 'assets/car1.png',
    },
    {
      name: 'Skoda Slavia (2025)',
      price: '₹ 12.99 Lakh',
      owner: '1st Owner',
      fuel: 'Petrol',
      km: '24000',
      image: 'assets/car1.png',
    },
    {
      name: 'Skoda Slavia (2024)',
      price: '₹ 12.99 Lakh',
      owner: '1st Owner',
      fuel: 'Petrol',
      km: '24000',
      image: 'assets/car1.png',
    },
    {
      name: 'Skoda Slavia (2024)',
      price: '₹ 12.99 Lakh',
      owner: '1st Owner',
      fuel: 'Petrol',
      km: '24000',
      image: 'assets/car1.png',
    },
  ];

  categories = ['All', 'SUV', 'Hatchback', 'Sedan', 'MUV'];
  selectedCategory = 'All';
  searchText = '';
  
  selectedBrand: string | null = null;

  selectCategory(c: string) {
    this.selectedCategory = c;
  }

  sortCars() {
    console.log('Sort clicked');
  }

  openFuelFilter() {
    console.log('Fuel filter clicked');
  }

  selectBrand(b: string) {
    this.selectedBrand = b;
  }

  requestCall(car: any) {
    this.router.navigate(['/pages']);
  }
}
