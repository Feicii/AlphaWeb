import { Route } from '@angular/router';
import {featureAuthRoutes, LoginContainerComponent, RegisterContainerComponent} from '@alphaweb/feat/auth';
import {AuthGuard} from '@alphaweb/data/auth';

export const appRoutes: Route[] = [
  {path: '', pathMatch: 'full', redirectTo:'timeline',},


  {path: 'auth',children: featureAuthRoutes},
  {path:'', loadChildren: () =>
      import('@alphaweb/feat/main').then(m =>
        m.AlphaWebFeatMainModule),
    canActivate: [AuthGuard]
  },

  {path: '**', redirectTo: 'auth/login'}
];
