import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import {ProductViewComponent} from "@alphaweb/feat/product-view";
import {producerAccessed} from "@angular/core/primitives/signals";
import {LoginView} from "../../../../../data/user/src/lib/model/user-domain.model";


@Component({
    selector: 'lib-product-create-container',
    standalone: true,
    imports: [CommonModule, ProductViewComponent],
    template: `
<!--    <lib-product-view-->
<!--      [product]="product"-->
<!--    ></lib-product-view>-->`,
    styles: ``,
})
export class ProductViewContainerComponent{

    // product: Product;
    //
    // route = inject(ActivatedRoute);
    // router = inject(Router);
    //
    // constructor() {
    //     this.route.data.subscribe(({ loginView }) => {
    //         const productId = this.route.snapshot.params['id'];
    //
    //         // Attempt to find the project in both created and invited lists
    //         this.product = ((loginView as LoginView).createdProduct.find(product => product.id === projectId);
    //
    //         if (!this.product) {
    //             console.error('Product not found');
    //             this.router.navigate(['/']);
    //         }
    //
    //         console.log('ProductViewContainerComponent', productId, this.product);
    //     });
    // }
    //
    // protected readonly producerAccessed = producerAccessed;
}
