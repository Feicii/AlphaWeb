import { Route } from '@angular/router';
import {featureAuthRoutes, LoginContainerComponent, RegisterContainerComponent} from '@alphaweb/feat/auth';

export const appRoutes: Route[] = [
{path: '', pathMatch: 'full', redirectTo:'auth/landingpage',},

// {path: 'auth', children: [
//   {path: 'login', component: LoginContainerComponent},
//   {path: 'register', component: RegisterContainerComponent}
// ]},
  {path: 'auth',children: featureAuthRoutes},


{path: '**', redirectTo: ''}
];
