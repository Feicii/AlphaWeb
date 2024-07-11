// This is a model for the view e.g. `login.component.ts`.
// It is not the model for our data e.g. `data/user/model`.

import { FormControl } from '@angular/forms';

export interface BuyFormData {
  message: string;
  address: string;
  billingAddress: string;

}

// type FormKeyType = 'email' | 'password' | 'passwordConfirm';

// Type for the form errors
export type BuyFormErrorType = Record<keyof BuyFormData, Record<string, string>>;

// Type for the form controls
// type RegisterFormType = Record<FormKeyType, FormControl<string>>;
export type BuyFormType = Record<keyof BuyFormData, FormControl<string>>;
