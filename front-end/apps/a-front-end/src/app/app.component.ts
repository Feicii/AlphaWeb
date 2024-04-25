import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import {RegisterContainerComponent} from '@alphaweb/feat/auth';

@Component({
  standalone: true,
  imports: [RegisterContainerComponent, RouterModule],
  selector: 'front-end-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
}
