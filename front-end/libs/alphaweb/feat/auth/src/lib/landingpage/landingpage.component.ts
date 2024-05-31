import { Component, EventEmitter, Output } from '@angular/core';
import {MatBottomSheet, MatBottomSheetModule} from "@angular/material/bottom-sheet";
import {RouterLink} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import {AlphawebUiBottomSheetComponent} from "@front-end/alphaweb/ui/bottom-sheet";


@Component({
  selector: 'frontend-landingpage',
  standalone: true,
  imports: [RouterLink,
    MatBottomSheetModule, MatButtonModule,],
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss']
})
export class LandingpageComponent {
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
