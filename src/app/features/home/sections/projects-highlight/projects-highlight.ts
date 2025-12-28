import { Component } from '@angular/core';
import { MainButton } from '@shared/components/main-button/main-button';
import { Bulb } from '@shared/components/bulb/bulb';

@Component({
  selector: 'app-projects-highlight',
  templateUrl: './projects-highlight.html',
  styleUrl: './projects-highlight.css',
  imports: [MainButton, Bulb],
})
export class ProjectsHighlightComponent {}
