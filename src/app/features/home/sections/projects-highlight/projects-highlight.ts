import { Component, inject, OnInit, computed } from '@angular/core';
import { MainButton } from '@shared/components/main-button/main-button';
import { Bulb } from '@shared/components/bulb/bulb';
import { ProjectCard } from '@shared/components/project-card/project-card';
import { ProjectDataService } from 'src/app/core/services/project-data.service';

@Component({
  selector: 'app-projects-highlight',
  templateUrl: './projects-highlight.html',
  styleUrl: './projects-highlight.css',
  imports: [MainButton, Bulb, ProjectCard],
})
export class ProjectsHighlightComponent implements OnInit {
  private projectService = inject(ProjectDataService);

  loading = this.projectService.isLoading();

  projectsHighlighted = computed(() =>
    this.projectService
      .getProjects()()
      .filter((p) => p.highlight)
  );

  ngOnInit() {
    this.projectService.loadProjects();
  }
}
