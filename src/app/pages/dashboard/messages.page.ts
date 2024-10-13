import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardNav } from '../../components/dashboardNav';
import { MessagesService } from '../../services/message.service';
import { MessageItem } from '../../components/dashboard/messageItem';

@Component({
  selector: 'dashboard-messages',
  standalone: true,
  template: `
    <dashboard-nav />
    <div class="container mx-auto">
      <article class="prose lg:prose-xl mx-auto mt-16">
        <h1 class="text-center">Messages</h1>
        @for (message of messages(); track message.id) {
          <message-item
            initials="ND"
            [message]="message.content"
            [date]="message.createdAt"
          />
        }
      </article>
    </div>
  `,
  imports: [CommonModule, DashboardNav, MessageItem],
})
export default class MessagesComponent {
  messagesService = inject(MessagesService);
  messages = signal<{ id: string; content: string; createdAt: string }[]>([]);

  ngOnInit() {
    this.messagesService.getMessages().subscribe((response) => {
      this.messages.set(
        response.data.map((data) => ({
          id: data.id,
          content: data.attributes.content,
          createdAt: new Date(data.attributes.inserted_at).toLocaleDateString(),
        })),
      );
    });
  }
}
