import { Routes } from '@angular/router';

import { ErrorComponent } from './error/error.component';
import { ForgotComponent } from './forgot/forgot.component';
import { LockscreenComponent } from './lockscreen/lockscreen.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ChooseCertifierComponent } from './choose-certifier/choose-certifier.component';

export const AuthenticationRoutes: Routes = [
    {
        path    : '',
        children: [
            {
                path      : '',
                redirectTo: 'escolha-certificadora',
                pathMatch : 'full'
            },
            {
                path     : '404',
                component: ErrorComponent
            },
            {
                path     : 'recuperar-senha',
                component: ForgotComponent
            },
            {
                path     : 'lockscreen',
                component: LockscreenComponent
            },
            {
                path    : 'login',
                children: [
                    {
                        path      : '',
                        redirectTo: '/auth/escolha-certificadora'
                    },
                    {
                        path     : ':certifier',
                        component: LoginComponent
                    }
                ]
            },
            {
                path     : 'cadastrar',
                component: RegisterComponent
            },
            {
                path     : 'escolha-certificadora',
                component: ChooseCertifierComponent
            }
        ]
    }
];
