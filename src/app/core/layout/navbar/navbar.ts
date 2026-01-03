import { isPlatformBrowser } from '@angular/common';
import { Component, HostListener, inject, PLATFORM_ID, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class NavbarComponent {
  platFormId = inject(PLATFORM_ID);
  isOpen = signal<boolean>(false);
  isScrolled = signal<boolean>(false);
  toggleMenu() {
    this.isOpen.update((isOpen) => !isOpen);
  }

  closeMenu() {
    this.isOpen.set(false);
  }
  ngAfterViewInit() {
    if (isPlatformBrowser(this.platFormId) && window.scrollY > 50) {
      this.isScrolled.set(true);
    }
  }

  @HostListener('window:scroll', [])
  onScroll() {
    if (window.scrollY > 50) {
      this.isScrolled.set(true);
    } else {
      this.isScrolled.set(false);
    }
  }
}
