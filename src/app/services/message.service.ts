import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TMessagesResponse } from 'src/server/routes/v1/messages';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  http = inject(HttpClient);

  getMessages() {
    return this.http.get<TMessagesResponse>('/api/v1/messages');
  }
}
