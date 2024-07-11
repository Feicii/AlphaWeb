import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatBottomSheet, MatBottomSheetModule} from "@angular/material/bottom-sheet";
import {RouterLink} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import {AlphawebUiBottomSheetComponent} from "@front-end/alphaweb/ui/bottom-sheet";
import {Product} from "@alphaweb/data/user";
import {JsonPipe, NgForOf} from "@angular/common";
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardTitle
} from "@angular/material/card";


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
  constructor(private bottomSheet:MatBottomSheet) {
  }
  openSheet(){
    this.bottomSheet.open(AlphawebUiBottomSheetComponent);
  }
  onLoginClick() {
    this.navigateToLogin.emit();
  }
}
