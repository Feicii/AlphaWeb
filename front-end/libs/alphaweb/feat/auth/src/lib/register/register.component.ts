import {Component, EventEmitter, inject, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInput} from '@angular/material/input';
import { MatCard, MatCardContent, MatCardTitle} from '@angular/material/card';
import {MatIcon} from '@angular/material/icon';
import {CustomValidators} from '@alphaweb/util';
import {
  RegisterFormData,
  RegisterFormErrorType,
  RegisterFormType,
} from '../model/register-view.model';

@Component({
  selector: 'front-end-register',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInput, ReactiveFormsModule, MatCard, MatCardTitle, MatCardContent, MatIcon],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  @Output() register = new EventEmitter<RegisterFormData>();

  // This is a public property in JavaScript
  // registerForm: FormGroup;
  hide = true;

  // # is a private property in JavaScript
  // Typesafe Error messages for each form control
  #errorMap: RegisterFormErrorType = {
    email: {
      required: 'email is required',
      email: 'email is not valid',
    },
    password: {
      required: 'password is required',
      weak: 'password not strong enough',
    },
    passwordConfirm: {
      required: 'password confirm is required',
      mismatch: 'passwords do not match',
    },
    firstName: {
      required: 'firstName is required',
      minLength: 'firstName should have at least 1 character',
    },
    lastName: {
      required: 'lastName is required',
      minLength: 'lastName should have at least 1 character',
    },
    // wrong: { ... } // does not work, we are typesafe
  };

  // Type Safe Forms from Angular v14 ---------------------
  // registerForm = inject(FormBuilder).nonNullable.group({
  registerForm: FormGroup<RegisterFormType> = inject(FormBuilder).nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, CustomValidators.passwordStrength(3)]],
    passwordConfirm: ['', [Validators.required, CustomValidators.match('password')]],
    firstName: ['', [Validators.required, Validators.minLength(1)]],
    lastName: ['', [Validators.required, Validators.minLength(1)]],
  });
  getControlByName(controlName: keyof RegisterFormData) {
    // return this.registerForm.get(controlName);
    return this.registerForm.controls[controlName];
  }

  // Gets the control error in a typesafe way
  hasControlError(controlName: keyof RegisterFormData): boolean {
    // return !this.registerForm.get(controlName)?.valid ?? false;
    // ?. and ?? not needed, we are typesafe
    return this.getControlByName(controlName).invalid;
  }

  // Gets the control error message in a typesafe way
  getControlErrorMessage(controlName: keyof RegisterFormData): string {
    // Get the control, e.g. password control
    // const control = this.registerForm.get(controlName);
    const control = this.getControlByName(controlName);

    // Get the first error key
    // e.g. password errors: `Object { required: {}, weak: {…} }` -> `required`
    const firstErrorKey = control.errors ? Object.keys(control.errors)[0] : '';

    // Lookup and return the error message, e.g. `password is required`
    return this.#errorMap[controlName][firstErrorKey];
  }


 onRegister() {
  // console.log('form object', this.registerForm);
  this.register.emit(this.registerForm.value as RegisterFormData);
}
}
