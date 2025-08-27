import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard/home' },

  {
    path: 'home',
    loadChildren: () =>
      import('./modules/pulse/pulse.module').then((m) => m.PulseModule),
  },
  {
    path: 'what-we-do',
    loadChildren: () =>
      import('./modules/what-we-do/what-we-do.module').then(
        (m) => m.WhatWeDoModule
      ),
  },
  // Add more routes as needed
  {
    path: '**',
    redirectTo: 'home',
  },
];
