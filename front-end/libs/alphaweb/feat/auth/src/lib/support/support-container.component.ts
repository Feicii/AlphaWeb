import {Component} from "@angular/core";
import {CommonModule} from "@angular/common";
import {LoginComponent} from "../login/login.component";
import {ToolbarComponent} from "@alphaweb/ui/toolbar";
import {SupportComponent} from "./support.component";

@Component({
  selector: 'frontend-shop-container',
  standalone: true,
  imports: [CommonModule, ToolbarComponent, SupportComponent],
  template: ` <ui-toolbar></ui-toolbar>
  <frontend-support></frontend-support>`,
  styles: [],
})
export class SupportContainerComponent{}
