import { Routes } from '@angular/router';

export const LANDING: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home.component').then((m) => m.HomeComponent),
  },
];
