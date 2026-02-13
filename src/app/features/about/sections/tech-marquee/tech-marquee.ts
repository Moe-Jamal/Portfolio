import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-tech-marquee',
  imports: [NgOptimizedImage],
  templateUrl: './tech-marquee.html',
  styleUrl: './tech-marquee.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TechMarquee {
  logos = [
    { name: 'Angular', src: '/images/svgs/angular17.svg' },
    { name: 'Vue.js', src: '/images/svgs/vuejs.svg' },
    { name: 'Nuxt.js', src: '/images/svgs/nuxtjs.svg' },
    { name: 'React', src: '/images/svgs/react.svg' },
    { name: 'Next.js', src: '/images/svgs/nextjs.svg' },
    { name: 'TypeScript', src: '/images/svgs/typescript.svg' },
    { name: 'JavaScript', src: '/images/svgs/js.svg' },
    { name: 'Tailwind CSS', src: '/images/svgs/tailwindcss.svg' },
    { name: 'Sass', src: '/images/svgs/sass.svg' },
    { name: 'GSAP', src: '/images/svgs/gsap.svg' },
    { name: 'GitHub', src: '/images/svgs/github.svg' },
    { name: 'Bootstrap', src: '/images/svgs/bootstrap5.svg' },
    { name: 'HTML5', src: '/images/svgs/html5.svg' },
    { name: 'CSS3', src: '/images/svgs/css3.svg' },
    { name: 'jQuery', src: '/images/svgs/jquery.svg' },
  ];
}
