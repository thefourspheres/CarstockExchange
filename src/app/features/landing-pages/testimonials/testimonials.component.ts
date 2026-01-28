import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardBannerComponent } from "../../components/card-banner/card-banner.component";

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule, CardBannerComponent],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {
   testimonials = [
    {
      image: 'assets/testimonials/imageV.jpg',
      review:
        'The valuation was fair and the entire process was hassle-free. Everything was managed professionally.',
      name: 'Amit Kulkarni',
    },
    {
      image: 'assets/testimonials/imageV.jpg',
      review:
        'Very smooth experience. The team explained everything clearly and ensured a transparent transaction.',
      name: 'Rajesh Patil',
    },
    {
      image: 'assets/testimonials/imageV.jpg',
      review:
        'Excellent service! I got the right price for my car and the process was super quick.',
      name: 'Neha Sharma',
    },
    {
      image: 'assets/testimonials/imageV.jpg',
      review:
        'Excellent service! I got the right price for my car and the process was super quick.',
      name: 'Neha Sharma',
    },
    {
      image: 'assets/testimonials/imageV.jpg',
      review:
        'Excellent service! I got the right price for my car and the process was super quick.',
      name: 'Neha Sharma',
    },
    {
      image: 'assets/testimonials/imageV.jpg',
      review:
        'Excellent service! I got the right price for my car and the process was super quick.',
      name: 'Neha Sharma',
    },
    {
      image: 'assets/testimonials/imageV.jpg',
      review:
        'Excellent service! I got the right price for my car and the process was super quick.',
      name: 'Neha Sharma',
    },
    {
      image: 'assets/testimonials/imageV.jpg',
      review:
        'Excellent service! I got the right price for my car and the process was super quick.',
      name: 'Neha Sharma',
    },
    {
      image: 'assets/testimonials/imageV.jpg',
      review:
        'Excellent service! I got the right price for my car and the process was super quick.',
      name: 'Neha Sharma',
    },
    {
      image: 'assets/testimonials/imageV.jpg',
      review:
        'Excellent service! I got the right price for my car and the process was super quick.',
      name: 'Neha Sharma',
    },
    {
      image: 'assets/testimonials/imageV.jpg',
      review:
        'Excellent service! I got the right price for my car and the process was super quick.',
      name: 'Neha Sharma',
    },
    {
      image: 'assets/testimonials/imageV.jpg',
      review:
        'Excellent service! I got the right price for my car and the process was super quick.',
      name: 'Neha Sharma',
    },
    {
      image: 'assets/testimonials/imageV.jpg',
      review:
        'Excellent service! I got the right price for my car and the process was super quick.',
      name: 'Neha Sharma',
    },
  ];
}
