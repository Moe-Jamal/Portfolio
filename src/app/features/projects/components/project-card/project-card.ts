import { Component, input } from '@angular/core';
import { IProject } from '../../../../models/project.model';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
})
export class ProjectCardComponent {
  project = input.required<IProject>();
}
