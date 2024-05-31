import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingpageComponent } from './landingpage.component';
import {LoginComponent} from "../login/login.component";
import {LoginFormData} from "../model/login-view.model";
import {UserLoginCommand} from "@alphaweb/data/user";
import {ToolbarComponent} from "@alphaweb/ui/toolbar";


@Component({
  selector: 'frontend-landingpage-container',
  standalone: true,
  imports: [CommonModule, LandingpageComponent, LoginComponent, ToolbarComponent],
  template: ` <ui-toolbar></ui-toolbar>
  <frontend-landingpage></frontend-landingpage>`,
  styles: [],
})
export class LandingpageContainerComponent {
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
