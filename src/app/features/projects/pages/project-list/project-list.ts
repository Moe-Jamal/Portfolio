import { Component, inject } from '@angular/core';
import { PageTitle } from '@shared/components/page-title/page-title';
import { ProjectDataService } from 'src/app/core/services/project-data.service';
import { ProjectCard } from '@shared/components/project-card/project-card';
import { LoadingScreen } from '@shared/components/loading-screen/loading-screen';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.html',
  styleUrl: './project-list.css',
  imports: [PageTitle, ProjectCard, LoadingScreen],
})
export class ProjectListComponent {
  private readonly projectService = inject(ProjectDataService);
  loading = this.projectService.isLoading();
  projects = this.projectService.getProjects();

  ngOnInit() {
    this.projectService.loadProjects();
  }
}
