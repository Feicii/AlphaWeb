import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { ActivatedRoute } from '@angular/router';
import { LoginView } from '@alphaweb/data/user';

@Component({
  selector: 'lib-product-list-container',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  template: `
<!--    <lib-project-list-->
<!--      [name]="loginView.authUser.firstName"-->
<!--    ></lib-project-list>-->
  `,
  styles: ``,
})
export class ProductListContainerComponent {

  // loginView: LoginView;
  //
  // route = inject(ActivatedRoute);
  //
  // constructor() {
  //   this.route.data.subscribe(({ loginView }) => {
  //     this.loginView = loginView;
  //
  //     console.log('ProductListContainer#ctor', this.loginView);
  //   });
  // }
}
