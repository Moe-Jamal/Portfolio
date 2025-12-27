import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  ElementRef,
  HostListener,
  inject,
  PLATFORM_ID,
  signal,
  ViewChild,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class NavbarComponent {
  @ViewChild('navbar') navbar!: ElementRef;
  isOpen = signal<boolean>(false);
  platFormId = inject(PLATFORM_ID);
  toggleMenu() {
    this.isOpen.update((isOpen) => !isOpen);
  }

  closeMenu() {
    this.isOpen.set(false);
  }
  ngAfterViewInit() {
    if (isPlatformBrowser(this.platFormId) && window.scrollY > 50) {
      this.navbar.nativeElement.classList.add('backdrop-blur-md');
    } else {
      this.navbar.nativeElement.classList.remove('backdrop-blur-md');
    }
  }

  @HostListener('window:scroll', [])
  onScroll() {
    if (window.scrollY > 50) {
      this.navbar.nativeElement.classList.add('backdrop-blur-md');
    } else {
      this.navbar.nativeElement.classList.remove('backdrop-blur-md');
    }
  }
}
