import { Component } from '@angular/core';
import { HeroComponent } from '../../sections/hero/hero';
import { AboutPreviewComponent } from '../../sections/about-preview/about-preview';
import { ProjectsHighlightComponent } from '../../sections/projects-highlight/projects-highlight';

@Component({
  selector: 'app-home-page',
  imports: [HeroComponent, AboutPreviewComponent, ProjectsHighlightComponent],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePageComponent {}
