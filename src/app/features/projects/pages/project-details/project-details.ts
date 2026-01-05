import { Component, inject, computed, OnInit, effect } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { LucideAngularModule, MoveLeft, Github, Monitor, AlertCircle } from 'lucide-angular';
import { ProjectDataService } from 'src/app/core/services/project-data.service';
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import * as Icons from '@shared/components/svgs';
import { LoadingScreen } from '@shared/components/loading-screen/loading-screen';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.html',
  styleUrl: './project-details.css',
  imports: [RouterLink, LucideAngularModule, CommonModule, LoadingScreen],
})
export class ProjectDetailsComponent {
  private route = inject(ActivatedRoute);
  private projectService = inject(ProjectDataService);

  readonly MoveLeft = MoveLeft;
  readonly Github = Github;
  readonly Monitor = Monitor;
  readonly AlertCircle = AlertCircle;

  slug = toSignal(this.route.params.pipe(map((p) => p['slug'])));
  project = this.projectService.getCurrentProject();
  isLoading = this.projectService.isLoading();

  constructor() {
    effect(() => {
      const s = this.slug();
      if (s) {
        this.projectService.loadProject(s);
      }
    });
  }

  getIconComponent(tech: string): any {
    const normalizedTech = tech.replace(/[\s.-]/g, '').toLowerCase();

    const mapping: Record<string, any> = {
      angular: Icons.AngularIcon,
      react: Icons.ReactIcon,
      vue: Icons.VueIcon,
      nuxt: Icons.NuxtIcon,
      next: Icons.NextIcon,
      nextjs: Icons.NextIcon,
      typescript: Icons.TsIcon,
      ts: Icons.TsIcon,
      javascript: Icons.JsIcon,
      js: Icons.JsIcon,
      tailwind: Icons.TailwindIcon,
      tailwindcss: Icons.TailwindIcon,
      bootstrap: Icons.BootstrapIcon,
      sass: Icons.SassIcon,
      css: Icons.CSSIcon,
      html: Icons.HTMLIcon,
      gsap: Icons.GsapIcon,
      jquery: Icons.jQueryIcon,
      github: Icons.GitHubIcon,
    };

    return mapping[normalizedTech] || null;
  }
}
