import { Routes } from '@angular/router';

import { LoginRoutes } from './login/index';
import { SignupRoutes } from './signup/index';
import { DashboardRoutes } from './dashboard/index';

import { LoginComponent } from './login/index';
import { SignupComponent } from './signup/index';

export const routes: Routes = [
	...LoginRoutes,
	...SignupRoutes,
    ...DashboardRoutes,
	{ path: '**', component: SignupComponent }
];
