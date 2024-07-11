import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatList, MatListItem, MatListSubheaderCssMatStyler } from '@angular/material/list';
import { MatDivider } from '@angular/material/divider';
import { MatLine } from '@angular/material/core';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'lib-product-list',
  standalone: true,
  imports: [
    CommonModule,
    MatListSubheaderCssMatStyler,
    RouterLink,
    MatListItem,
    MatList,
    MatDivider,
    MatLine,
    MatButton
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  @Input() name!: string;

}
