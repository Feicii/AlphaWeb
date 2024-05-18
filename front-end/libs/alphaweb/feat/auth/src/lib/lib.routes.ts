import { Route } from '@angular/router';
import { LoginContainerComponent } from './login/login-container.component';
import { RegisterContainerComponent } from './register/register-container.component';
import {LandingpageContainerComponent} from "./landingpage/landingpage-container.component";

// /auth

export const featureAuthRoutes: Route[] = [
  { path: '', pathMatch: 'prefix', redirectTo: '' },

  // static route

  { path: 'login', component: LoginContainerComponent },

  // static route
  { path: 'register', component: RegisterContainerComponent },
  { path: 'landingpage', component: LandingpageContainerComponent },


  // catch all route
  // { path: '**', redirectTo: 'login' }
];
