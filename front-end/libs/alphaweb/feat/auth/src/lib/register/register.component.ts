import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInput} from '@angular/material/input';
import { MatCard, MatCardContent, MatCardTitle} from '@angular/material/card';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'front-end-register',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInput, ReactiveFormsModule, MatCard, MatCardTitle, MatCardContent, MatIcon],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {

  registerForm: FormGroup;

  hide=false;



  // getErrorMessage() {
  //   if (this.email.hasError('required')) {
  //     return 'You must enter a value';
  //   }
  //
  //   return this.email.hasError('email') ? 'Not a valid email' : '';
  // }

  constructor() {
    this.registerForm = new FormGroup({
      //firstName: new FormControl(),
      //lastName: new FormControl(),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      passwordConfirm: new FormControl('', [Validators.required]),
    })
  }

  OnRegister() {
    console.log('register button clicked', this.registerForm)
  }
}
