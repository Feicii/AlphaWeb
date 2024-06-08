import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SendSupportMessageComponent } from './send-support-message.component';

describe('AlphawebFeatSendSupportMessageComponent', () => {
  let component: SendSupportMessageComponent;
  let fixture: ComponentFixture<SendSupportMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SendSupportMessageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SendSupportMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
