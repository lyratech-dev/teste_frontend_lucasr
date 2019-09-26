import { Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { AppBlankComponent } from './layouts/blank/blank.component';

export const AppRoutes: Routes = [
    {
        path     : '',
        component: FullComponent,
        children : [
            {
                path      : '',
                redirectTo: '/dashboard',
                pathMatch : 'full'
            },
            {
                path        : 'dashboard',
                loadChildren: () => import('./views/dashboards/dashboards.module').then(
                    m => m.DashboardsModule)
            },
            {
                path        : 'inscricoes',
                loadChildren: () => import('./views/enrolments/enrolments.module').then(
                    m => m.EnrolmentsModule)
            }
        ]
    },
    {
        path     : '',
        component: AppBlankComponent,
        children : [
            {
                path        : 'auth',
                loadChildren: () => import('./authentication/authentication.module').then(
                    m => m.AuthenticationModule)
            }
        ]
    },
    {
        path      : '**',
        redirectTo: '/auth/404'
    }
];
