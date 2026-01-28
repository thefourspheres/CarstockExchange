import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  lastScrollTop = 0;
  isHidden = false;
  isMenuOpen = false;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const current = window.scrollY;

    // Scroll Down → Hide
    if (current > this.lastScrollTop && current > 80) {
      this.isHidden = true;
    }
    // Scroll Up → Show
    else {
      this.isHidden = false;
    }

    this.lastScrollTop = current <= 0 ? 0 : current;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    this.isMenuOpen = false;
  }
}
