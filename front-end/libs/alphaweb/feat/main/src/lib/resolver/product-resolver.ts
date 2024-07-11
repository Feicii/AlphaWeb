import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {UserHttpService} from "../../../../../data/user/src";
import {LoginView} from "../../../../../data/user/src/lib/model/user-domain.model";


@Injectable({ providedIn: 'root' })
export class ProductResolver implements Resolve<LoginView> {

  constructor(private userHttpService: UserHttpService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<LoginView> {
    return this.userHttpService.login().then((view: LoginView) => {
      console.log('ProductResolver#resolve', view);
      return view;
    })
  }
}
