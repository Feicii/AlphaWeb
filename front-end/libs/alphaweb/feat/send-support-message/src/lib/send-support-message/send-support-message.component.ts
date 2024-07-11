import {Component, EventEmitter, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'front-end-alphaweb-feat-send-support-message',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './send-support-message.component.html',
  styleUrl: './send-support-message.component.css',
})
export class SendSupportMessageComponent {
  subject: string = '';
  orderNumber?: string;
  message: string = '';

  @Output() sendMessage = new EventEmitter<{ subject: string, orderNumber?: string, message: string }>();

  onSubmit() {
    if (this.subject && this.message) {
      this.sendMessage.emit({
        subject: this.subject,
        orderNumber: this.orderNumber,
        message: this.message
      });
    }
  }
}
