import {
  CanActivate,
  Router,
  UrlTree
} from "@angular/router";
import {inject, Injectable} from "@angular/core";
import {BasicAuthService} from "./basic-auth.service";
@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  private service = inject(BasicAuthService);
  private router = inject(Router);

  canActivate(): boolean | UrlTree {
    // If user is authenticated then route to main shell
    if (this.service.isAuthenticated) {
      return true;
    }

    // Otherwise route to login
    return this.router.parseUrl('/auth/login');
  }
}



