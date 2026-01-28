import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { AboutUsComponent } from '../about-us/about-us.component';
import { FAQComponent } from '../faq/faq.component';
import { TestimonialsComponent } from '../testimonials/testimonials.component';
import { FooterComponent } from '../footer/footer.component';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { HowWorksComponent } from "../how-works/how-works.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroSectionComponent,
    AboutUsComponent,
    TestimonialsComponent,
    FAQComponent,
    FooterComponent,
    HowWorksComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
