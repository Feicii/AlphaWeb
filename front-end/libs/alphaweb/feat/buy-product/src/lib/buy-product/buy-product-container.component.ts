import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';



import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import {ProductViewComponent} from '@alphaweb/feat/product-view';
import {Product, UserHttpService} from '@alphaweb/data/user';


@Component({
  selector: 'buy-product-continer',
  standalone: true,
  imports: [CommonModule, ProductViewComponent],
  template: `
    <lib-product-view
      *ngIf="product"

    ></lib-product-view>`,
  styles: [],
})
export class BuyProductContainerComponent {

  product: Product | null = null;

  route = inject(ActivatedRoute);
  router = inject(Router);
  productService = inject(UserHttpService);

  // constructor() {
  //   this.route.params.subscribe(params => {
  //     const productId = params['id'];
  //
  //     this.productService.buyProduct(productId).pipe(
  //       catchError(error => {
  //         console.error('Product not found', error);
  //         this.router.navigate(['/']);
  //         return of(null);
  //       })
  //     ).subscribe(product => {
  //       if (product) {
  //         this.product = product;
  //       } else {
  //         this.router.navigate(['/']);
  //       }
  //     });
  //   });
  // }
}
