import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SplitTextDirective } from '@shared/directives/split-text.directive';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  type: string;
  location: string;
  description: string[];
}

@Component({
  selector: 'app-experience',
  imports: [SplitTextDirective],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Experience {
  experiences: ExperienceItem[] = [
    {
      title: 'Frontend Developer',
      company: 'WebStdy',
      period: 'Jun 2025 – Present',
      type: 'Full-time – Onsite',
      location: 'Dokki, Giza',
      description: [
        'Working with Vue.js and Nuxt to build and maintain modern web applications.',
        'Focused on optimizing performance and implementing effective SEO strategies.',
        'Collaborating with cross-functional teams to deliver scalable, maintainable, and user-friendly solutions.',
      ],
    },
    {
      title: 'Frontend Mentor',
      company: 'Route Academy',
      period: 'Apr 2025 – Present',
      type: 'Part-time – Hybrid',
      location: 'Cairo, Egypt',
      description: [
        'Mentoring students in HTML, CSS, JavaScript, and frontend frameworks such as Angular.',
        'Conducting code reviews and providing feedback to improve code quality.',
        'Leading workshops and live coding sessions to enhance students’ problem-solving skills.',
      ],
    },
    {
      title: 'IT Member & Multimedia Vice President',
      company: '4P Student Activity',
      period: '2015 – 2018',
      type: 'Volunteered',
      location: 'Cairo, Egypt',
      description: [
        'IT Member (Years 1-2): Building and developing the team’s website using HTML, CSS, Bootstrap, and JavaScript.',
        'Multimedia Vice President (Year 3): Responsible for training media and IT members to enhance their skills.',
      ],
    },
  ];
}
