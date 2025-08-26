import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard/home' },

  {
    path: 'home',
    loadChildren: () =>
      import('./modules/pulse/pulse.module').then((m) => m.PulseModule),
  },
  // Add more routes as needed
  {
    path: '**',
    redirectTo: 'home',
  },
];
