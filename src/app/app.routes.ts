import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./features/landing-pages/landing.routes').then(m => m.LANDING)
    },
    {
        path: 'pages',
        loadChildren: () => import('./features/components/components.routes').then(m => m.COMPONENTROUTE)
    }
];
