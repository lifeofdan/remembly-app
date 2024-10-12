import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardNav } from '../../components/dashboardNav';
import { MessagesService } from 'src/app/services/message.service';

@Component({
  selector: 'dashboard-messages',
  standalone: true,
  template: `
    <dashboard-nav />
    <div class="container mx-auto">
      <article class="prose lg:prose-xl mx-auto mt-16">
        <h1 class="text-center">Messages</h1>
        @for (message of messages(); track message) {
          <div class="flex gap-4 items-center">
            <div
              class="bg-primary rounded-full min-w-12 w-12 h-12 flex flex-col justify-center items-center font-bold"
            >
              <div>ND</div>
            </div>
            <p>{{ message }}</p>
          </div>
        }
      </article>
    </div>
  `,
  imports: [CommonModule, DashboardNav],
})
export default class MessagesComponent {
  messagesService = inject(MessagesService);
  messages = signal<string[]>([]);

  ngOnInit() {
    this.messagesService.getMessages().subscribe((response) => {
      this.messages.set(response.data.map((data) => data.attributes.content));
    });
  }
}
