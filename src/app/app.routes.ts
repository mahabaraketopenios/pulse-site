import { WhoWeServeModule } from './modules/who-we-serve/who-we-serve.module';
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
  {
    path: 'who-we-serve',
    loadChildren: () =>
      import('./modules/who-we-serve/who-we-serve.module').then(
        (m) => m.WhoWeServeModule
      ),
  },
  {
    path: 'who-are-we',
    loadChildren: () =>
      import('./modules/who-are-we/who-are-we.module').then(
        (m) => m.WhoAreWeModule
      ),
  },
  {
    path: 'client',
    loadChildren: () =>
      import('./modules/client/client.module').then((m) => m.ClientModule),
  },
  // Add more routes as needed
  {
    path: '**',
    redirectTo: 'home',
  },
];
