import { Route } from '@angular/router';
import {MainShellComponent} from "./main-shell.component";

import {ProfileContainerComponent} from "../../../profile/src/lib/profile-container.component";
import {
    ProductListContainerComponent
} from "../../../product-list/src/lib/product-list/product-list-container.component";

import {
    BuyProductContainerComponent
} from "../../../buy-product/src/lib/buy-product/buy-product-container.component";
import {
    ProductViewContainerComponent
} from "../../../product-view/src/lib/product-view/product-view-container.component";
import {LandingpageContainerComponent, ShopContainerComponent, SupportContainerComponent} from "../../../auth/src";
import {ProductResolver} from "./resolver/product-resolver";
import {mShopComponent} from "../../../timeline/src";


// /auth

export const featureMainRoutes: Route[] = [
  { path: '', component: MainShellComponent, children: [

      {path:'landingpage', component: LandingpageContainerComponent,
      resolve:  {loginView: ProductResolver}},
      {path:'shop', component: ShopContainerComponent,
        resolve:  {loginView: ProductResolver}},
      {path:'support', component: SupportContainerComponent,
        resolve:  {loginView: ProductResolver}},
      {path:'products', component: ProductListContainerComponent,
        resolve:  {loginView: ProductResolver}
      },
      {path:'products/buy/:id', component: BuyProductContainerComponent,
      resolve:  {loginView: ProductResolver}
      },


      {path:'**',redirectTo:'landingpage'}
    ] },




  // catch all route
  // { path: '**', redirectTo: 'login' }
];
