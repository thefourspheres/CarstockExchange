import { Routes } from '@angular/router';
import { MainLayoutComponent } from '../../core/main-layout/main-layout.component';

export const COMPONENTROUTE: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/pages.component').then((m) => m.PagesComponent),
      },
      {
        path: 'carsDetails',
        loadComponent: () =>
          import('./car-details/car-details.component').then((m) => m.CarDetailsComponent),
      },
    ],
  },
];
