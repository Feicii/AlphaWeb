import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatStepperModule} from '@angular/material/stepper';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import {BuyFormData, BuyFormType} from '../../../../../feat/auth/src/lib/model/stepper-view.model';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'ui-stepper',
  standalone: true,
  imports: [CommonModule,MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,],
  templateUrl: './alphaweb-ui-stepper.component.html',
  styleUrl: './alphaweb-ui-stepper.component.css',
})
export class AlphawebUiStepperComponent implements OnInit {
  @Output() formCompleted = new EventEmitter<BuyFormData>();

  buyForm!: FormGroup<BuyFormType>;

  constructor(private _formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.buyForm = this._formBuilder.nonNullable.group({
      message: ['', [Validators.required]],
      address: ['', [Validators.required]],
      billingAddress: ['', [Validators.required]]
    });
  }

  getControlByName(controlName: keyof BuyFormType) {
    return this.buyForm.controls[controlName];
  }

  completeForm() {
    console.log('Form Completed:', this.buyForm.value)
    if (this.buyForm.valid) {
      this.formCompleted.emit(this.buyForm.value as BuyFormData);
    }
  }


}
