import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent} from './shop.component';
import {LoginComponent} from "../login/login.component";
import {LoginFormData} from "../model/login-view.model";
import {LoginView, UserLoginCommand} from "@alphaweb/data/user";
import {ToolbarComponent} from "@alphaweb/ui/toolbar";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'frontend-shop-container',
  standalone: true,
  imports: [CommonModule, LoginComponent, ToolbarComponent, ShopComponent],
  template: `
  <frontend-shop [products]="loginView.products"></frontend-shop>`,
  styles: [],
})
export class ShopContainerComponent {
  // router = inject(Router);

  loginView!: LoginView;

  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(({ loginView }) => {
      this.loginView = loginView;

      console.log('ProductShop#ctor', this.loginView);
    });
  }
}
