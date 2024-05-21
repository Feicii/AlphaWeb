import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterOutlet} from "@angular/router";
import {ToolbarComponent} from "../../../../ui/toolbar/src";

@Component({
  selector: 'front-end-main-shell',
  standalone: true,
  template: `<ui-toolbar></ui-toolbar>
  <router-outlet></router-outlet>`,
  imports: [CommonModule, RouterOutlet, ToolbarComponent],

  styles: [],
})
export class MainShellComponent {}
