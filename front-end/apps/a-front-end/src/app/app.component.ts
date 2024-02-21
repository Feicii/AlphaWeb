import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import {RegisterComponent} from '@front-end/alphaweb/feat/auth';

@Component({
  standalone: true,
  imports: [RegisterComponent, RouterModule],
  selector: 'front-end-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'a-front-end';
}
