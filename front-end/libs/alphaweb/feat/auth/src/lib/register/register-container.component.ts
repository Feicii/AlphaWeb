import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import {RegisterFormData} from '../model/register-view.model';
import {UserHttpService} from '@alphaweb/data/user';
import {BasicAuthService} from "@alphaweb/data/auth";
import {Router} from "@angular/router";



@Component({
  selector: 'front-end-register-container',
  standalone: true,
  imports: [CommonModule, RegisterComponent],
  template: '<front-end-register (register)="onRegister($event)"></front-end-register>',
  styles: [],
})
export class RegisterContainerComponent {
  authService = inject(BasicAuthService);
  router = inject(Router);
  onRegister(formData: RegisterFormData) {

    const {passwordConfirm, ...command} =formData;

    this.authService
      .register(command)
      // success
      .then(() => {
        this.router.navigate(['/auth/login']);
      })
      // failure
      .catch((error) => {
        // TODO Show Angular Material Snackbar
        console.error('Register failed:', error);
      });

  }
}
