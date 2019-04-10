import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { SignupComponent } from './signup';
import { RecordListComponent } from './recordList';
import { UserListComponent } from './userList';
import { AuthGuard } from './_guards';

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'records',
        component: RecordListComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'users',
        component: UserListComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'signup',
        component: SignupComponent
    },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);