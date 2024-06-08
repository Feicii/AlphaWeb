import { Route } from '@angular/router';
import {featureAuthRoutes, LoginContainerComponent, RegisterContainerComponent} from '@alphaweb/feat/auth';
import {AuthGuard} from '@alphaweb/data/auth';

export const appRoutes: Route[] = [
  {path: '', pathMatch: 'full', redirectTo:'timeline',},


  {path: 'auth',children: featureAuthRoutes},
  {path:'', loadChildren: () =>
      import('@alphaweb/feat/kunden-main').then(m => m.AlphawebFeatKundenMainModule),
    canActivate: [AuthGuard]
  },

  {path: '**', redirectTo: 'auth/login'}
];
