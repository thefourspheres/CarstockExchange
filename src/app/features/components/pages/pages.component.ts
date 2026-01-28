import { Component, inject } from '@angular/core';
import { FilterBarComponent } from '../filter-bar/filter-bar.component';
import { CarCardComponent } from '../car-card/car-card.component';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pages',
  standalone: true,
  imports: [FilterBarComponent, CarCardComponent, NgFor,FormsModule],
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.scss',
})
export class PagesComponent {
  router = inject(Router);
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

  minPrice = 40000;
  maxPrice = 6000000;

  brands = ['Maruti Suzuki', 'Hyundai', 'Honda', 'Toyota', 'Skoda'];
  selectedBrands: string[] = [];

  

  years = [
    '2023 & Above',
    '2022 & Above',
    '2021 & Above',
    '2020 & Above',
    '2019 & Above',
  ];
  selectedYears: string[] = [];

  filteredCars = [...this.cars];

  selectCategory(c: string) {
    this.selectedCategory = c;
  }

  sortCars() {
    console.log('Sort clicked');
  }

  openFuelFilter() {
    console.log('Fuel filter clicked');
  }

  openCallPopup(car: any) {
    console.log('Request call for', car);
    this.router.navigate(['/pages/carsDetails'], { state: { car } });
  }

  toggleBrand(b: string) {
    if (this.selectedBrands.includes(b)) {
      this.selectedBrands = this.selectedBrands.filter((x) => x !== b);
    } else {
      this.selectedBrands.push(b);
    }
    this.filterCars();
  }

  toggleYear(y: string) {
    if (this.selectedYears.includes(y)) {
      this.selectedYears = this.selectedYears.filter((x) => x !== y);
    } else {
      this.selectedYears.push(y);
    }
    this.filterCars();
  }

  filterCars() {
    this.filteredCars = this.cars.filter((car:any) => {
      return (
        car.price >= this.minPrice &&
        car.price <= this.maxPrice &&
        (this.selectedBrands.length === 0 ||
          this.selectedBrands.includes(car.brand)) &&
        (this.selectedYears.length === 0 ||
          this.selectedYears.includes(car.year))
      );
    });
  }
}
