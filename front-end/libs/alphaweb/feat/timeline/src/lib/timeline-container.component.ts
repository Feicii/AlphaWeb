import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ToolbarComponent} from "../../../../ui/toolbar/src";
import {mShopComponent} from "./m-shop.component";

@Component({
  selector: 'front-end-timeline-container',
  standalone: true,
  imports: [CommonModule, ToolbarComponent, mShopComponent,],
  template: `<ui-toolbar></ui-toolbar>
  <m-shop></m-shop>`,
  styles: ``,
})
export class TimelineContainerComponent {}
