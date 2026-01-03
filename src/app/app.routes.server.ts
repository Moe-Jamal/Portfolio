import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'api/projects',
    renderMode: RenderMode.Server,
  },
  {
    path: 'api/projects/:slug',
    renderMode: RenderMode.Server,
  },
  {
    path: 'projects/:slug',
    renderMode: RenderMode.Server,
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
