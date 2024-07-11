import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingpageComponent } from './landingpage.component';
import {LoginComponent} from "../login/login.component";
import {LoginFormData} from "../model/login-view.model";
import {LoginView, UserLoginCommand} from "@alphaweb/data/user";
import {ToolbarComponent} from "@alphaweb/ui/toolbar";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'frontend-landingpage-container',
  standalone: true,
  imports: [CommonModule, LandingpageComponent, LoginComponent, ToolbarComponent],
  template: `
  <frontend-landingpage></frontend-landingpage>`,
  styles: [],
})
export class LandingpageContainerComponent {
  // router = inject(Router);

  loginView!: LoginView;

  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(({ loginView }) => {
      this.loginView = loginView;

      console.log('ProductListContainer#ctor', this.loginView);
    });
  }
  onLogin(formData: LoginFormData) {
    const command: UserLoginCommand = formData;



  }
}
