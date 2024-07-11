import {Component, Input, input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Product} from "../../../../../data/product/src/lib/model/product-domain.model";
import {BuyProductCommand} from "@alphaweb/data/user";

@Component({
  selector: 'buy-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './buy-product.component.html',
  styleUrl: './buy-product.component.css',
})
export class BuyProductComponent {
  @Input() product!: Product;
  ngOnInit():void{

  }
  buyProduct():void{
    const command: BuyProductCommand ={

    };
  }
}
