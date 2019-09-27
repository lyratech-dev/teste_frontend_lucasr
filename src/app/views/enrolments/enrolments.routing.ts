import { Routes } from '@angular/router';

import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';

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
            },
            {
                path      : 'meus-cursos',
                redirectTo: '',
                pathMatch : 'full'
            },
            {
                path     : 'nova',
                component: CreateComponent,
                data     : {
                    title: 'Nova Inscrição'
                }
            }
        ]
    }
];
