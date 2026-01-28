import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [NgClass,NgFor, NgIf],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FAQComponent {
  openedIndex: number | null = 0;

faq = [
  {
    question: "How do I sell my car on Carstockxchange?",
    answer: "Start by entering your car details to get a valuation. Book a free inspection, confirm the price, and receive payment. We also handle all paperwork, including RC transfer."
  },
  {
    question: "Can I exchange my car instead of selling it?",
    answer: "Yes, you can exchange your car and get the best value instantly."
  },
  {
    question: "How is my car’s price calculated?",
    answer: "It is based on condition, market demand, age, make, model, and inspection score."
  },
  {
    question: "Who handles the RC transfer?",
    answer: "We take care of all RC transfer paperwork for you."
  },
  {
    question: "Is the payment secure?",
    answer: "Yes, payment is 100% secure and instant."
  },
];
  
toggle(i: number) {
  this.openedIndex = this.openedIndex === i ? null : i;
}
}
