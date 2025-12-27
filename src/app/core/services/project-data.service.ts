import { Injectable, signal } from '@angular/core';
import { IProject } from '../../models/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectDataService {
  private projects = signal<IProject[]>([]);

  // Placeholder methods
  getProjects() {
    return this.projects.asReadonly();
  }
}
