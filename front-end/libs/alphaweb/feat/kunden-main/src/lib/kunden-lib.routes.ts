import { Route } from '@angular/router';
import {KundenMainShellComponent} from "./kunden-main-shell.component";

import {ProfileContainerComponent} from "../../../profile/src/lib/profile-container.component";


// /auth

export const featureMainRoutes: Route[] = [
  { path: '', component: KundenMainShellComponent, children: [



      {path:'profile', component: ProfileContainerComponent},
      {path:'**',redirectTo:'timeline'}
    ] },




  // catch all route
  // { path: '**', redirectTo: 'login' }
];
