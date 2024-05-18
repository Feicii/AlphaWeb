import { Component, EventEmitter, Output } from '@angular/core';

import {RouterLink} from "@angular/router";

@Component({
  selector: 'frontend-landingpage',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss']
})
export class LandingpageComponent {
  @Output() navigateToLogin = new EventEmitter<void>();

  onLoginClick() {
    this.navigateToLogin.emit();
  }
}
