import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatBottomSheet, MatBottomSheetModule} from "@angular/material/bottom-sheet";
import {RouterLink} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import {AlphawebUiBottomSheetComponent} from "@front-end/alphaweb/ui/bottom-sheet";
import {Product, UserHttpService} from "@alphaweb/data/user";
import {JsonPipe, NgForOf} from "@angular/common";
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardTitle
} from "@angular/material/card";
import {AlphawebUiStepperComponent} from "@front-end/alphaweb/ui/stepper";
import {BuyFormData} from "../model/stepper-view.model";


@Component({
  selector: 'frontend-shop',
  standalone: true,
  imports: [RouterLink, MatBottomSheetModule, MatButtonModule, NgForOf, JsonPipe, MatCardHeader, MatCard, MatCardContent, MatCardActions, MatCardImage, MatCardTitle],
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent {
  @Input() products!: Product[];
  @Output() navigateToLogin = new EventEmitter<void>();
  constructor(private bottomSheet:MatBottomSheet, private userHttpService: UserHttpService) {
  }
  openSheet(productId: string){
    // this.bottomSheet.open(AlphawebUiBottomSheetComponent);
    const ref = this.bottomSheet.open(AlphawebUiStepperComponent);
    console.log('Product ID:', productId);
    ref.instance.formCompleted.subscribe((formData: BuyFormData) => {
      console.log('Form Data Received:', formData);
      this.userHttpService.buyProduct({ productId, ...formData});
    });
  }
  // onLoginClick() {
  //   this.navigateToLogin.emit();
  // }
}
