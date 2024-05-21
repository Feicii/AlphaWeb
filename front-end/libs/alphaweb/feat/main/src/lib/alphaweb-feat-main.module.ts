import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {RouterModule} from "@angular/router";
import {featureMainRoutes} from "./lib.routes";


@NgModule({
  imports: [CommonModule,
    RouterModule.forChild(featureMainRoutes)],


})
export class AlphaWebFeatMainModule {}
