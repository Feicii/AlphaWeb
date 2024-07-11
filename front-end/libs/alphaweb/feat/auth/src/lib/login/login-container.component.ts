import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as UserAction from '@alphaweb/data/user';
import { UserLoginCommand } from '@alphaweb/data/user';
import { LoginComponent } from './login.component';
import { LoginFormData } from '../model/login-view.model';
import {Router} from "@angular/router";
import {BasicAuthService} from "@alphaweb/data/auth";
// import { Store } from '@ngrx/store';

// Smart Container which connects to a Service or Store.
// -> See also login.component.ts
@Component({
  selector: 'frontend-login-container',
  standalone: true,
  imports: [CommonModule, LoginComponent],
  template: ` <frontend-register (login)="onLogin($event)"></frontend-register>`,
  styles: [],
})
export class LoginContainerComponent {
  authService = inject(BasicAuthService);
  router = inject(Router);
  // private store = inject(Store);

  onLogin(formData: LoginFormData) {
    const command: UserLoginCommand = formData;

    // we dispatch an action
    // this.store.dispatch(UserAction.loginUser(command));

    // no !!
    // this.router.navigate(['/']);

    this.authService
    	.login(command)
    	// success
    	.then(() => {
    		this.router.navigate(['/landingpage']);
    	})
    	// failure
    	.catch((error) => {
    		// TODO Show Angular Material Snackbar
    		console.error('Login failed:', error);
    	});
  }
}
