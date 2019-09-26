import { Routes } from '@angular/router';

import { ListComponent } from './list/list.component';

export const EnrolmentsRoutes: Routes = [
    {
        path    : '',
        children: [
            {
                path     : '',
                component: ListComponent,
                data     : {
                    title: 'Meus cursos'
                }
            }
        ]
    }
];
