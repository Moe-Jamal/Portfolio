import { Injectable } from '@angular/core';
import { IContact } from '../models/contact.model';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  sendMessage(message: IContact) {
    console.log('Sending message:', message);
    // Logic to send message
  }
}
