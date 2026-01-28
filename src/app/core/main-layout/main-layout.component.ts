import { Component, inject } from '@angular/core';
import { HeaderComponent } from "../../features/landing-pages/header/header.component";
import { FooterComponent } from "../../features/landing-pages/footer/footer.component";
import { CardBannerComponent } from "../../features/components/card-banner/card-banner.component";
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CardBannerComponent,RouterOutlet],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {
    router = inject(Router);
  constructor() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }
}
