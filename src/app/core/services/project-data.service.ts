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

  getProjects() {
    return this.projects.asReadonly();
  }

  isLoading() {
    return this.loading.asReadonly();
  }
}
