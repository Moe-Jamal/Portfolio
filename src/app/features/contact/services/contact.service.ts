import { Injectable } from '@angular/core';
import { IContactMessage } from '../models/contact.model';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  sendMessage(message: IContactMessage) {
    console.log('Sending message:', message);
    // Logic to send message
  }
}
