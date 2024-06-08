import { Route } from '@angular/router';
import {KundenMainShellComponent} from "./kunden-main-shell.component";
import {TimelineContainerComponent} from '@alphaweb/feat/timeline';
import {ProfileContainerComponent} from "../../../profile/src/lib/profile-container.component";


// /auth

export const featureMainRoutes: Route[] = [
  { path: '', component: KundenMainShellComponent, children: [

      {path:'timeline', component: TimelineContainerComponent},

      {path:'profile', component: ProfileContainerComponent},
      {path:'**',redirectTo:'timeline'}
    ] },




  // catch all route
  // { path: '**', redirectTo: 'login' }
];
