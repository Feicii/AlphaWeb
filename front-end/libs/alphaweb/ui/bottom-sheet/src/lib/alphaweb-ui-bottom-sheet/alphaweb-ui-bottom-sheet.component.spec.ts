import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlphawebUiBottomSheetComponent } from './alphaweb-ui-bottom-sheet.component';

describe('AlphawebUiBottomSheetComponent', () => {
  let component: AlphawebUiBottomSheetComponent;
  let fixture: ComponentFixture<AlphawebUiBottomSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlphawebUiBottomSheetComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AlphawebUiBottomSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
