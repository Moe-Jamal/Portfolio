import { Injectable, signal, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProject } from '../../models/project.model';
import { finalize } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectDataService {
  private http = inject(HttpClient);
  private projects = signal<IProject[]>([]);
  private currentProject = signal<IProject | null>(null);
  private loading = signal<boolean>(false);

  loadProjects() {
    this.loading.set(true);
    this.http
      .get<IProject[]>('/api/projects')
      .pipe(finalize(() => this.loading.set(false)))
      .subscribe({
        next: (data) => this.projects.set(data),
        error: (err) => console.error('Failed to load projects', err),
      });
  }

  loadProject(slug: string) {
    this.loading.set(true);
    this.currentProject.set(null);
    this.http
      .get<IProject>(`/api/projects/${slug}`)
      .pipe(finalize(() => this.loading.set(false)))
      .subscribe({
        next: (data) => this.currentProject.set(data),
        error: (err) => {
          console.error(`Failed to load project with slug: ${slug}`, err);
          this.currentProject.set(null);
        },
      });
  }

  getProjects() {
    return this.projects.asReadonly();
  }

  getCurrentProject() {
    return this.currentProject.asReadonly();
  }

  isLoading() {
    return this.loading.asReadonly();
  }
}
