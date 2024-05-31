import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatStepperModule} from '@angular/material/stepper';
import {AlphawebUiStepperComponent} from '@front-end/alphaweb/ui/stepper';

@Component({
  selector: 'front-end-alphaweb-ui-bottom-sheet',
  standalone: true,
  imports: [CommonModule, MatStepperModule, AlphawebUiStepperComponent],
  templateUrl: './alphaweb-ui-bottom-sheet.component.html',
  styleUrl: './alphaweb-ui-bottom-sheet.component.css',
})
export class AlphawebUiBottomSheetComponent {}
