import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlphawebUiStepperComponent } from './alphaweb-ui-stepper.component';

describe('AlphawebUiStepperComponent', () => {
  let component: AlphawebUiStepperComponent;
  let fixture: ComponentFixture<AlphawebUiStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlphawebUiStepperComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AlphawebUiStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
