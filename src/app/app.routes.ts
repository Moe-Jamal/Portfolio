import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/pages/home-page/home-page').then((m) => m.HomePageComponent),
  },
  {
    path: 'about',
    loadComponent: () => import('./features/about/about-page').then((m) => m.AboutPageComponent),
  },
  {
    path: 'projects',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/projects/pages/project-list/project-list').then(
            (m) => m.ProjectListComponent
          ),
      },
      {
        path: ':id',
        loadComponent: () =>
          import('./features/projects/pages/project-details/project-details').then(
            (m) => m.ProjectDetailsComponent
          ),
      },
    ],
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./features/contact/pages/contact-page/contact-page').then(
        (m) => m.ContactPageComponent
      ),
  },
  {
    path: '404',
    loadComponent: () =>
      import('./features/not-found/not-found-page').then((m) => m.NotFoundPageComponent),
  },
  {
    path: '**',
    redirectTo: '404',
  },
];
