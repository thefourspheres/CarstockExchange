import { NgClass, NgIf } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass ,NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  showScrollTop = false;
  lastScrollTop = 0;
  isHidden = false;

  isMenuOpen = false;
  // router = inject(Router);

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

     // ⭐ Scroll-To-Top Button Show Logic
  this.showScrollTop = current > 120; // 120px scroll ke baad button show

  this.lastScrollTop = current <= 0 ? 0 : current;

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

  navigateToLogin() {
    // this.router.navigate(['/auth/login']);
  }
}
