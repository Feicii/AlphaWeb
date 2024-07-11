import { Route } from '@angular/router';
import { LoginContainerComponent } from './login/login-container.component';
import { RegisterContainerComponent } from './register/register-container.component';
import {LandingpageContainerComponent} from "./landingpage/landingpage-container.component";
import {ShopContainerComponent} from "./shop/shop-container.component";
import {SupportContainerComponent} from "./support/support-container.component";

// /auth

export const featureAuthRoutes: Route[] = [
  { path: '', pathMatch: 'prefix', redirectTo: '' },

  // static route

  { path: 'login', component: LoginContainerComponent },

  // static route
  { path: 'register', component: RegisterContainerComponent },



  // catch all route
  // { path: '**', redirectTo: 'login' }
];
