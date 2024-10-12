import { Component, signal } from '@angular/core';
import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { TMessagesResponse } from 'src/server/routes/v1/messages';
import { DashboardNav } from '../../components/dashboardNav';

@Component({
  selector: 'dashboard-messages',
  standalone: true,
  template: `
    <dashboard-nav />
    <div class="container mx-auto">
      <article class="prose lg:prose-xl mx-auto mt-16">
        <h1 class="text-center">Messages</h1>
        <div *ngFor="let message of messages()">
          <div class="flex gap-4 items-center">
            <div
              class="bg-primary rounded-full min-w-12 w-12 h-12 flex flex-col justify-center items-center font-bold"
            >
              <div>ND</div>
            </div>
            <p>{{ message }}</p>
          </div>
        </div>
      </article>
    </div>
  `,
  imports: [CommonModule, DashboardNav],
})
export default class MessagesComponent {
  http = inject(HttpClient);
  messages = signal<string[]>([]);

  ngOnInit() {
    this.getMessages().subscribe((response) => {
      this.messages.set(response.data.map((data) => data.attributes.content));
    });
  }

  getMessages() {
    return this.http.get<TMessagesResponse>('/api/v1/messages');
  }
}
