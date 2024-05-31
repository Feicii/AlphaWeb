import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent} from './shop.component';
import {LoginComponent} from "../login/login.component";
import {LoginFormData} from "../model/login-view.model";
import {UserLoginCommand} from "@alphaweb/data/user";
import {ToolbarComponent} from "@alphaweb/ui/toolbar";


@Component({
  selector: 'frontend-shop-container',
  standalone: true,
  imports: [CommonModule, LoginComponent, ToolbarComponent, ShopComponent],
  template: ` <ui-toolbar></ui-toolbar>
  <frontend-shop></frontend-shop>`,
  styles: [],
})
export class ShopContainerComponent {
  // router = inject(Router);

  onLogin(formData: LoginFormData) {
    const command: UserLoginCommand = formData;

    // we dispatch an action
    // this.store.dispatch(UserAction.loginUser(command));

    // no !!
    // this.router.navigate(['/']);

    // this.authService
    // 	.login(command)
    // 	// success
    // 	.then(() => {
    // 		this.router.navigate(['/']);
    // 	})
    // 	// failure
    // 	.catch((error) => {
    // 		// TODO Show Angular Material Snackbar
    // 		console.error('Login failed:', error);
    // 	});
  }
}
