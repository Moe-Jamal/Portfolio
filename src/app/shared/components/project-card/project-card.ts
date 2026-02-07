import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IProject } from 'src/app/models/project.model';
import { LucideAngularModule, ArrowUpRight } from 'lucide-angular';
import * as Icons from '../svgs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-project-card',
  imports: [CommonModule, RouterLink, LucideAngularModule],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
})
export class ProjectCard {
  readonly ArrowUpRight = ArrowUpRight;
  readonly project = input<IProject>({} as IProject);

  getIconComponent(tech: string): any {
    const normalizedTech = tech.replace(/[\s.-]/g, '').toLowerCase();

    const mapping: Record<string, any> = {
      angular: Icons.AngularIcon,
      react: Icons.ReactIcon,
      vue: Icons.VueIcon,
      vuejs: Icons.VueIcon,
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
      scss: Icons.SassIcon,
      css: Icons.CSSIcon,
      html: Icons.HTMLIcon,
      gsap: Icons.GsapIcon,
      jquery: Icons.jQueryIcon,
      github: Icons.GitHubIcon,
    };

    return mapping[normalizedTech] || null;
  }
}
