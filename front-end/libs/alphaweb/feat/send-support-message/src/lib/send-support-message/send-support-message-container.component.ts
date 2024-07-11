import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupportMessageFormComponent } from './support-message-form.component';
import { SupportService } from '@app/services/support.service'; // Dein Service für HTTP-Anfragen

@Component({
  selector: 'lib-support-message-container',
  standalone: true,
  imports: [CommonModule, SupportMessageFormComponent],
  templateUrl: './support-message-container.component.html',
  styleUrls: ['./support-message-container.component.css']
})
export class SupportMessageContainerComponent {

  supportService = inject(SupportService);

  onSendMessage(message: { subject: string, orderNumber?: string, message: string }) {
    this.supportService.sendSupportMessage(message)
      .then(response => {
        console.log('Message sent successfully', response);
        // Zeige eine Erfolgsmeldung oder führe andere Aktionen durch
      })
      .catch(error => {
        console.error('Error sending message', error);
        // Zeige eine Fehlermeldung an oder führe andere Aktionen durch
      });
  }
}
