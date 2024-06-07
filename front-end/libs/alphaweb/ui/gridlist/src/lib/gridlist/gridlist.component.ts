import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatGridList, MatGridTile} from '@angular/material/grid-list';

@Component({
  selector: 'ui-gridlist',
  standalone: true,
  imports: [CommonModule, MatGridTile, MatGridList],
  templateUrl: './gridlist.component.html',
  styleUrl: './gridlist.component.css',
})
export class GridlistComponent {}
