import { Component } from '@angular/core';
import { PageTitle } from '@shared/components/page-title/page-title';
import { Experience } from '../../sections/experience/experience';
import { TechMarquee } from '../../sections/tech-marquee/tech-marquee';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.html',
  styleUrl: './about-page.css',
  imports: [PageTitle, Experience, TechMarquee, NgOptimizedImage],
})
export class AboutPageComponent {}
