import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import {RegisterFormData} from '../model/register-view.model';
import {UserHttpService} from '@alphaweb/data/user';



@Component({
  selector: 'front-end-register-container',
  standalone: true,
  imports: [CommonModule, RegisterComponent],
  template: '<front-end-register (register)="onRegister($event)"></front-end-register>',
  styles: [],
})
export class RegisterContainerComponent {

  userService: UserHttpService = inject(UserHttpService);
  onRegister(formData: RegisterFormData) {

    const {passwordConfirm, ...command} =formData;

    this.userService.register(command);

  }
}
